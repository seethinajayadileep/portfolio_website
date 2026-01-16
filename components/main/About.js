import { useEffect, useRef } from "react";

export default function About() {
  const imgRef = useRef();
  const titleRef = useRef();

  const parallax = (e) => {
    if (imgRef && titleRef) {
      const y = (e.clientY * -1) / 100;
      const x = (e.clientX * -1) / 100;
      imgRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
      titleRef.current.style.transform = `translateX(${-x}px) translateY(${-y}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", parallax, false);
    return () => {
      window.removeEventListener("mousemove", parallax, false);
    };
  }, []);

  return (
    <section
      id="about"
      className="my-16 w-full flex items-center justify-center"
    >
      <div className="max-w-7xl text-white z-[9999]">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start overflow-hidden">
          <img
            alt="my photo"
            ref={imgRef}
            className="order-2 md:order-1"
            width={280}
            src="me.png"
            style={{ borderRadius: "9rem" }}
          />
          <div className="order-1 md:order-2 ">
            <h1
              ref={titleRef}
              className="text-center font-home p-6 md:p-12 pt-0 px-2 text-4xl sm:text-6xl font-bold"
            >
              ABOUT ME
            </h1>
            <p className="px-4 sm:px-16 pb-8 font-bold">
              I’m a Software Developer with experience in Android application
              development and web development. I build functional, user-focused
              applications using Java, Kotlin, Android Studio, and core web
              technologies. I have a strong interest in coding, software
              testing, and application quality, and I focus on writing clean,
              maintainable code. I enjoy learning through hands-on development,
              debugging real problems, and continuously improving my technical
              skills. I’m driven to grow as a developer and contribute to
              software projects that emphasize reliability, performance, and
              good user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
