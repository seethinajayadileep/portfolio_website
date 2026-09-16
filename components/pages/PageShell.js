import Head from "next/head";
import Link from "next/link";

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
];

const unlistedLinks = [
  { href: "/admin", label: "Admin" },
  { href: "/leetcode", label: "LeetCode" },
  { href: "/open-source", label: "Open Source" },
  { href: "/github", label: "GitHub profile" },
];

export default function PageShell({
  title,
  description,
  eyebrow,
  heading,
  children,
  unlisted = false,
}) {
  const links = unlisted ? [...publicLinks, ...unlistedLinks] : publicLinks;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        {unlisted ? (
          <meta name="robots" content="noindex,nofollow" />
        ) : null}
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
            {links.map((link) => (
              <Link
                key={link.href}
                className="underline hover:text-[#ddd]"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {children}
        </div>
      </section>
    </>
  );
}
