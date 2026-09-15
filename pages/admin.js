import PageShell from "../components/pages/PageShell";
import { leetcodeProblems, leetcodeSource } from "../data/leetcodeProblems";
import Link from "next/link";

const pages = [
  {
    href: "/",
    name: "Home",
    role: "Public landing",
    note: "Rotating model, about, skills, featured projects, contact. Extra work stays off this page.",
  },
  {
    href: "/experience",
    name: "Experience",
    role: "Longer story",
    note: "How I build, what I am doing now, and what this site should add next.",
  },
  {
    href: "/leetcode",
    name: "LeetCode",
    role: "Practice log",
    note: `${leetcodeProblems.length} problems mirrored from the Notes/leetcode folder.`,
  },
  {
    href: "/open-source",
    name: "Open Source",
    role: "Upstream work",
    note: "PRs on Selenium, Appium, Awaitility, WireMock, REST Assured, StreamsHub.",
  },
  {
    href: "/github",
    name: "GitHub profile",
    role: "Repo map",
    note: "How a public GitHub profile works, then every public repo and how that repo works.",
  },
  {
    href: "/admin",
    name: "Admin",
    role: "This page",
    note: "Index of site surfaces. Nothing here is posted onto the home page.",
  },
];

export default function AdminPage() {
  return (
    <PageShell
      title="Admin | Seethina Jaya Dileep"
      eyebrow="ADMIN"
      heading="Site admin"
      description="Control board for this portfolio. The rotating model stays on Home. Everything else has its own route."
    >
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <div className="border border-white/30 rounded-md p-4 bg-black/60">
          <p className="font-home text-sm">Routes</p>
          <p className="text-3xl font-bold">{pages.length}</p>
        </div>
        <div className="border border-white/30 rounded-md p-4 bg-black/60">
          <p className="font-home text-sm">LeetCode files</p>
          <p className="text-3xl font-bold">{leetcodeProblems.length}</p>
        </div>
        <div className="border border-white/30 rounded-md p-4 bg-black/60">
          <p className="font-home text-sm">Public GitHub</p>
          <p className="text-3xl font-bold">36 repos</p>
        </div>
      </div>

      <h2 className="font-home text-2xl font-bold mb-4">Pages</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="font-home text-sm border-b border-white/40">
              <th className="py-2 pr-4">Page</th>
              <th className="py-2 pr-4">Role</th>
              <th className="py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.href} className="border-b border-white/10">
                <td className="py-3 pr-4">
                  <Link className="underline font-semibold" href={page.href}>
                    {page.name}
                  </Link>
                </td>
                <td className="py-3 pr-4 whitespace-nowrap">{page.role}</td>
                <td className="py-3 text-[#ddd]">{page.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-home text-2xl font-bold mb-4">Source of truth</h2>
      <ul className="list-disc pl-6 space-y-2 font-semibold text-[#ddd]">
        <li>
          LeetCode C++ files:{" "}
          <a className="underline" href={leetcodeSource} target="_blank" rel="noreferrer">
            Notes/leetcode
          </a>
        </li>
        <li>
          Profile README:{" "}
          <a
            className="underline"
            href="https://github.com/seethinajayadileep/seethinajayadileep"
            target="_blank"
            rel="noreferrer"
          >
            seethinajayadileep/seethinajayadileep
          </a>
        </li>
        <li>
          This website:{" "}
          <a
            className="underline"
            href="https://github.com/seethinajayadileep/portfolio_website"
            target="_blank"
            rel="noreferrer"
          >
            portfolio_website
          </a>
        </li>
      </ul>
    </PageShell>
  );
}
