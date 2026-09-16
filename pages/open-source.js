import PageShell from "../components/pages/PageShell";
import {
  openSourceContributions,
  openSourcePracticeForks,
} from "../data/openSource";

export default function OpenSourcePage() {
  return (
    <PageShell
      title="Open Source | Seethina Jaya Dileep"
      eyebrow="OPEN SOURCE"
      heading="Open source showcase"
      unlisted
      description="Pull requests on other people's repositories, plus public forks I keep while reading or patching upstream. This is its own page so the home page only shows original product work."
    >
      <h2 className="font-home text-2xl font-bold mb-4">Upstream pull requests</h2>
      <div className="space-y-6 mb-14">
        {openSourceContributions.map((item) => (
          <article
            key={item.project}
            className="border border-white/20 rounded-md p-5 bg-black/55"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-2xl font-bold">
                <a className="underline" href={item.url} target="_blank" rel="noreferrer">
                  {item.org}/{item.project}
                </a>
              </h3>
              <p className="font-home text-sm">
                {item.language} · {item.status}
              </p>
            </div>
            <p className="font-semibold mb-3">{item.summary}</p>
            <p className="text-[#ddd] mb-3">
              <span className="font-home text-sm text-white">How it works. </span>
              {item.howItWorks}
            </p>
            <p className="text-[#ddd] mb-3">
              <span className="font-home text-sm text-white">What I changed. </span>
              {item.whatIChanged}
            </p>
            <a className="underline font-home text-sm" href={item.prs} target="_blank" rel="noreferrer">
              Pull requests
            </a>
          </article>
        ))}
      </div>

      <h2 className="font-home text-2xl font-bold mb-4">Public forks</h2>
      <p className="mb-4 text-[#ddd] font-semibold">
        A fork on GitHub is a full copy under my account. I use these to study libraries I depend on (Playwright, Selenium, Ollama) or to open a PR against upstream. They are not listed as my products on the home page.
      </p>
      <ul className="space-y-3">
        {openSourcePracticeForks.map((item) => (
          <li key={item.name} className="border border-white/20 rounded-md p-4 bg-black/55">
            <h3 className="text-lg font-bold">
              <a className="underline" href={item.mine} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </h3>
            <p className="text-[#ddd] my-2">{item.why}</p>
            <a className="underline font-home text-sm" href={item.upstream} target="_blank" rel="noreferrer">
              Upstream
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
