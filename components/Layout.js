import ThreeD from "./layout/ThreeD";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="min-h-screen w-full">
        <main className="relative w-full bg-black min-h-screen">
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
