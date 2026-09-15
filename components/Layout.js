import { useRouter } from "next/router";
import ThreeD from "./layout/ThreeD";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

export default function Layout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      <Nav />
      <div className="min-h-screen w-full">
        {isHome ? <ThreeD /> : null}
        <main
          className={
            isHome
              ? "absolute w-full bg-black"
              : "relative w-full bg-black min-h-screen"
          }
        >
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
