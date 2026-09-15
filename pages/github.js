import PageShell from "../components/pages/PageShell";
import {
  githubProfile,
  githubProfileHowItWorks,
  originalRepos,
} from "../data/githubRepos";
import { openSourcePracticeForks } from "../data/openSource";

export default function GitHubPage() {
  return (
    <PageShell
      title="GitHub profile | Seethina Jaya Dileep"
      eyebrow="GITHUB"
      heading="Public GitHub profile, explained"
      description="How a public GitHub profile is put together, then every public repository under seethinajayadileep and how that project actually runs. Kept off the home page so this map can stay long."
    >
      <div className="border border-white/30 rounded-md p-5 bg-black/60 mb-10">
        <p className="font-home text-sm mb-1">Public user</p>
        <h2 className="text-2xl font-bold">
          <a className="underline" href={githubProfile.url} target="_blank" rel="noreferrer">
            {githubProfile.login}
          </a>
        </h2>
        <p className="mt-2">{githubProfile.bio}</p>
        <p className="mt-2 text-[#ddd] text-sm">
          {githubProfile.publicRepos} public repos · {githubProfile.followers} followers ·{" "}
          {githubProfile.following} following · joined {githubProfile.joined} · {githubProfile.location}
        </p>
      </div>

      <h2 className="font-home text-2xl font-bold mb-4">How the public profile works</h2>
      <div className="space-y-4 mb-12">
        {githubProfileHowItWorks.map((block) => (
          <article key={block.title} className="border border-white/20 rounded-md p-4 bg-black/55">
            <h3 className="font-bold text-lg mb-2">{block.title}</h3>
            <p className="text-[#ddd]">{block.body}</p>
          </article>
        ))}
      </div>

      <h2 className="font-home text-2xl font-bold mb-4">Original public repositories</h2>
      <div className="space-y-5 mb-12">
        {originalRepos.map((repo) => (
          <article key={repo.name} className="border border-white/20 rounded-md p-5 bg-black/55">
            <div className="flex flex-wrap justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold">
                <a className="underline" href={repo.url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </h3>
              <p className="font-home text-sm">
                {repo.kind} · {repo.language}
              </p>
            </div>
            <p className="font-semibold mb-2">{repo.summary}</p>
            <p className="text-[#ddd] mb-3">
              <span className="font-home text-sm text-white">How it works. </span>
              {repo.howItWorks}
            </p>
            {repo.homepage ? (
              <a className="underline font-home text-sm" href={repo.homepage} target="_blank" rel="noreferrer">
                Live site
              </a>
            ) : null}
          </article>
        ))}
      </div>

      <h2 className="font-home text-2xl font-bold mb-4">Public forks</h2>
      <p className="mb-4 text-[#ddd] font-semibold">
        GitHub lists forks next to original repos. Each fork is a copy of an upstream project. Details and why I keep them live on the{" "}
        <a className="underline" href="/open-source">
          open source
        </a>{" "}
        page. Short list:
      </p>
      <ul className="grid sm:grid-cols-2 gap-3">
        {openSourcePracticeForks.map((item) => (
          <li key={item.name} className="border border-white/20 rounded-md p-3 bg-black/55">
            <a className="underline font-bold" href={item.mine} target="_blank" rel="noreferrer">
              {item.name}
            </a>
            <p className="text-sm text-[#ddd] mt-1">{item.why}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
