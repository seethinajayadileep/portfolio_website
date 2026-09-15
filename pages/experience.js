import PageShell from "../components/pages/PageShell";

const focus = [
  {
    title: "Product engineering",
    body: "MERN and Java/Spring apps that ship: AgentOps CRM, Scout (JobScraper), AI exam grading, EquityLens, the voice tutor. Live URLs, auth, and a real data store — not only a landing mock.",
  },
  {
    title: "AI that has a job",
    body: "RAG over a crawled site, multi-agent research with a verdict, PII redaction, local Ollama test-case generation. The model is a step in a pipeline, with a person in the loop when it matters (approvals, published grades).",
  },
  {
    title: "Quality and automation",
    body: "Selenium Java bindings contributor. Playwright (PlayForge), k6 notes, REST Assured / WireMock / Awaitility PRs. I treat tests as product work, not an afterthought.",
  },
];

const now = [
  "LeetCode in C++ (Notes/leetcode) — arrays, graphs, SQL 50, linked lists",
  "Upstream Java test tooling — Selenium, Appium, Awaitility, WireMock, REST Assured",
  "Spring Boot, Kafka, Redis, Nginx, Azure DevOps notes in the same Notes repo",
  "Android + a Mac companion app (Cursor-Pocket) for sending prompts from a phone",
];

const nextOnThisSite = [
  {
    name: "Resume PDF",
    why: "One file recruiters can download. Link it from Home and Experience.",
  },
  {
    name: "Work timeline",
    why: "Year / role / stack for internships, freelance, and school projects so the GitHub wall has dates.",
  },
  {
    name: "Case studies",
    why: "One page per flagship app: problem, architecture diagram, what broke, what you would redo.",
  },
  {
    name: "Testing lab",
    why: "Short clips or reports from PlayForge, golivecheck, and Selenium — proof you run suites, not only write them.",
  },
  {
    name: "Talk / writing",
    why: "A short post on a merged Selenium PR or a RAG failure. Shows how you think.",
  },
];

export default function ExperiencePage() {
  return (
    <PageShell
      title="Experience | Seethina Jaya Dileep"
      eyebrow="ABOUT THE WORK"
      heading="What I actually build"
      description="Home stays a short intro plus the rotating model. This page is the longer story: how I work, what I am doing now, and what this site should grow next — not mixed into the landing page."
    >
      <div className="space-y-5 mb-12">
        {focus.map((item) => (
          <article
            key={item.title}
            className="border border-white/20 rounded-md p-5 bg-black/55"
          >
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-[#ddd]">{item.body}</p>
          </article>
        ))}
      </div>

      <h2 className="font-home text-2xl font-bold mb-4">Right now</h2>
      <ul className="list-disc pl-6 mb-12 space-y-2 text-[#ddd] font-semibold">
        {now.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="font-home text-2xl font-bold mb-4">Worth adding next</h2>
      <p className="text-[#ddd] font-semibold mb-4">
        These are the highest-leverage pieces still missing from the public site. None of them belong as extra sections on Home.
      </p>
      <ul className="space-y-3">
        {nextOnThisSite.map((item) => (
          <li
            key={item.name}
            className="border border-white/20 rounded-md p-4 bg-black/55"
          >
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-[#ddd] mt-1">{item.why}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
