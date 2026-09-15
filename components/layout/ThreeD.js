import { useEffect, useState, useRef } from "react";
import { LoaderContainer } from "./threeD/Loader";
import ShapeLoader from "../../lib/ShapeLoader";
import ModelLoader from "../../lib/ModelLoader";
import * as THREE from "three";

export default function ThreeD() {
  const refContainer = useRef();
  const [mixer, setMixer] = useState();
  const [model, setModel] = useState();
  const [scene] = useState(new THREE.Scene());
  const [camera, setCamera] = useState();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [target] = useState(new THREE.Vector3(0, 1.5, 0));

  const updateModel = (model, t) => {
    model.rotation.y += t / 25;
  };

  const handleWindowResize = () => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const screenW = container.clientWidth;
      const screenH = container.clientHeight;

      renderer.setSize(screenW, screenH);
      camera.aspect = screenW / screenH;
      camera.updateProjectionMatrix();
    }
  };

  const handleWindowScroll = () => {
    const { current: container } = refContainer;
    if (container && camera && model) {
      // Stay in the home hero. Do not fly the model through About / Projects.
      const t = Math.min(window.pageYOffset, 640);
      camera.position.y = -(t * 0.004);
      model.position.z = 0;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    window.addEventListener("scroll", handleWindowScroll, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
      window.removeEventListener("scroll", handleWindowScroll, false);
    };
  }, [renderer, model, handleWindowResize]);

  useEffect(() => {
    let cancelled = false;
    let rafId = 0;
    let localRenderer;

    (async () => {
      const { current: container } = refContainer;
      if (container && !renderer) {
        const screenH = container.clientHeight;
        const screenW = container.clientWidth;

        const nextRenderer = new THREE.WebGLRenderer({
          alpha: true,
        });
        nextRenderer.physicallyCorrectLights = true;
        nextRenderer.outputEncoding = THREE.sRGBEncoding;
        nextRenderer.toneMapping = THREE.ACESFilmicToneMapping;
        nextRenderer.toneMappingExposure = 1;
        nextRenderer.setSize(screenW, screenH);
        nextRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(nextRenderer.domElement);
        localRenderer = nextRenderer;
        if (cancelled) {
          nextRenderer.dispose();
          nextRenderer.domElement.remove();
          return;
        }
        setRenderer(nextRenderer);

        const nextCamera = new THREE.PerspectiveCamera(
          75,
          screenW / screenH,
          0.01,
          100
        );
        setCamera(nextCamera);
        nextCamera.position.set(0, 0, 0);
        scene.add(nextCamera);

        const ambientLight = new THREE.AmbientLight(0xffffff, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
        directionalLight.position.set(10, -5, 7);
        scene.add(directionalLight);

        const starsGeometry = new THREE.OctahedronBufferGeometry(0.1, 0);
        const starsMaterial = new THREE.MeshMatcapMaterial();
        ShapeLoader(
          starsGeometry,
          starsMaterial,
          1000,
          80,
          "/texture/texture.png",
          scene
        );

        const loaded = await ModelLoader(scene, "/astronaut/scene.gltf", {
          castShadow: false,
          receiveShadow: false,
          scalar: 0.3,
          timeScale: 1 / 25,
        });
        if (cancelled) return;
        setMixer(loaded.mixer);
        setModel(loaded.model);

        const clock = new THREE.Clock();
        let previousTime = 0;

        const tick = () => {
          if (cancelled) return;
          const elapsedTime = clock.getElapsedTime();
          const deltaTime = elapsedTime - previousTime;
          previousTime = elapsedTime;

          if (loaded.mixer) loaded.mixer.update(deltaTime * 10);
          if (loaded.model) updateModel(loaded.model, deltaTime * 10);

          nextCamera.lookAt(target);

          nextRenderer.render(scene, nextCamera);
          rafId = requestAnimationFrame(tick);
        };

        tick();
      }
    })();
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      if (localRenderer) {
        localRenderer.dispose();
        if (localRenderer.domElement && localRenderer.domElement.parentNode) {
          localRenderer.domElement.parentNode.removeChild(
            localRenderer.domElement
          );
        }
      }
    };
  }, []);

  useEffect(() => {
    if (mixer) {
      setLoading(false);
    }
  }, [mixer]);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && camera && model) {
      const t = Math.min(window.pageYOffset, 640);
      camera.position.y = -(t * 0.004);
      model.position.z = 0;
    }
  }, [model, camera]);

  return <LoaderContainer loading={loading} ref={refContainer} />;
}
