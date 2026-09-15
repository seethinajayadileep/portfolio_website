import Head from "next/head";
import Link from "next/link";

export default function PageShell({
  title,
  description,
  eyebrow,
  heading,
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
      <section className="flex justify-center w-full pt-28 pb-16 min-h-screen">
        <div className="max-w-7xl w-full px-4 sm:px-8 text-white z-[9999]">
          <p className="font-home text-sm tracking-widest text-[#ddd] mb-3">
            {eyebrow}
          </p>
          <h1 className="font-home text-4xl sm:text-6xl font-bold mb-4">
            {heading}
          </h1>
          <p className="max-w-3xl font-semibold text-[#ddd] mb-8">{description}</p>
          <nav className="flex flex-wrap gap-3 text-sm font-home font-semibold mb-10">
            <Link className="underline hover:text-[#ddd]" href="/">
              Home
            </Link>
            <Link className="underline hover:text-[#ddd]" href="/admin">
              Admin
            </Link>
            <Link className="underline hover:text-[#ddd]" href="/leetcode">
              LeetCode
            </Link>
            <Link className="underline hover:text-[#ddd]" href="/open-source">
              Open Source
            </Link>
            <Link className="underline hover:text-[#ddd]" href="/github">
              GitHub profile
            </Link>
          </nav>
          {children}
        </div>
      </section>
    </>
  );
}
