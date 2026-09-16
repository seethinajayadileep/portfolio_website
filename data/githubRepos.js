export const githubProfile = {
  login: "seethinajayadileep",
  name: "JAYA DILEEP",
  url: "https://github.com/seethinajayadileep",
  site: "https://www.seethinajayadileep.dev/",
  location: "India",
  bio: "Full Stack Developer (MERN) | AI integration, automation & robust testing with Selenium.",
  publicRepos: 36,
  followers: 47,
  following: 2,
  joined: "September 2022",
};

export const githubProfileHowItWorks = [
  {
    title: "Public vs private",
    body: "A GitHub user account can hold public and private repositories. Everything on this page is public: anyone can clone it, read the code, open issues, and send pull requests. Private repos never appear in the public API or on github.com/seethinajayadileep for anonymous visitors.",
  },
  {
    title: "The profile README",
    body: "If you create a repository named exactly after your login (seethinajayadileep/seethinajayadileep) and put a README.md in it, GitHub renders that file at the top of your profile. That is why the bio, featured table, contribution PRs, and stats images show up on the profile home.",
  },
  {
    title: "Repositories tab",
    body: "The Repositories tab is a live list from the GitHub API. Original work and forks both appear. Forks are copies of someone else's repo so you can read the source or open a pull request back to upstream. They are not claimed as your product.",
  },
  {
    title: "Contribution graph",
    body: "The green squares count public commits, pull requests, and issues tied to your account on GitHub.com. They do not prove code quality. They do show that work landed on public remotes.",
  },
  {
    title: "Stars, watchers, forks",
    body: "A star is a bookmark. Watchers get notifications. A fork is a copy under another account. None of these numbers are required for a repo to be useful; several of the tools here have 0 stars and still ship a live URL.",
  },
  {
    title: "How a visitor uses the profile",
    body: "Open the profile URL, read the README, pin or scan recent repos, then click into a repo for its README (how to run it), Issues, Pull requests, and Actions. The README is the contract. If a repo has no README, you have to read the source tree.",
  },
];

export const originalRepos = [
  {
    name: "seethinajayadileep",
    url: "https://github.com/seethinajayadileep/seethinajayadileep",
    language: "Markdown",
    homepage: null,
    kind: "Profile",
    summary: "Special profile repository. GitHub renders its README on the public user page.",
    howItWorks:
      "There is no app to run. GitHub detects README.md in a repo whose name equals the login and injects it into https://github.com/seethinajayadileep. The file lists featured products, upstream PRs, and live stats images (languages, streak, profile views).",
  },
  {
    name: "portfolio_website",
    url: "https://github.com/seethinajayadileep/portfolio_website",
    language: "JavaScript",
    homepage: "https://www.seethinajayadileep.dev/",
    kind: "Site",
    summary: "This Next.js portfolio: Three.js background, About, Skills, Projects, Contact.",
    howItWorks:
      "Next.js pages router. _app.js wraps every route in Layout (nav, 3D canvas, footer). The home page is a single long scroll. Extra pages (admin, LeetCode, open source, GitHub) are separate routes so the landing page stays a resume, not a dump of every repo.",
  },
  {
    name: "Notes",
    url: "https://github.com/seethinajayadileep/Notes",
    language: "C++",
    homepage: null,
    kind: "Study",
    summary: "Study notes plus a leetcode/ folder of C++ solutions.",
    howItWorks:
      "A documentation repo, not a server. Java/DSA, Kotlin, k6, Nginx, Spring Boot, Git, Azure DevOps, Redis, and Playwright notes live as Markdown. C++ solutions sit one folder per LeetCode slug under leetcode/. The LeetCode page on this site indexes that folder.",
  },
  {
    name: "AI-Exam-Evaluation-System",
    url: "https://github.com/seethinajayadileep/AI-Exam-Evaluation-System",
    language: "JavaScript",
    homepage: "https://ai-exam-evaluation-system.vercel.app",
    kind: "Product",
    summary: "Teachers publish rubrics; students submit long-form answers; AI grades; teachers approve.",
    howItWorks:
      "React frontend on Vercel talks to a Node API. Teachers sign in, write a model answer and rubric, students submit before the due date. An LLM scores criteria with a confidence value. Scores stay hidden until the teacher publishes. JWT + role checks sit on every write. MongoDB stores assignments and audit trails.",
  },
  {
    name: "AgentOps-CRM",
    url: "https://github.com/seethinajayadileep/AgentOps-CRM",
    language: "Java",
    homepage: "https://agent-ops-crm.vercel.app",
    kind: "Product",
    summary: "CRM where agents crawl a site, answer from RAG, capture leads, and can place a voice call.",
    howItWorks:
      "Spring Boot 3 / Java 21 API on Railway, React + Vite on Vercel, Postgres + pgvector. You add a company URL. Firecrawl fetches the site. OpenAI embeddings fill the knowledge base. Chat answers from those chunks. Interested visitors become leads. Apify finds extra prospects. Vapi can dial. Follow-up copy waits in Approvals. JWT cookie session, optional Redis for login throttle.",
  },
  {
    name: "JobScraper",
    url: "https://github.com/seethinajayadileep/JobScraper",
    language: "TypeScript",
    homepage: "https://job-scraper-frontend-brown.vercel.app",
    kind: "Product",
    summary: "Scout: scrape jobs, dedupe, rank with AI, show the best first.",
    howItWorks:
      "Next.js UI calls an Express TypeScript API. Apify pulls listings when a token is set; otherwise demo jobs load. Redis caches, Postgres stores, OpenAI ranks when a key exists, else a heuristic ranker runs. Docker / Railway for the API, Vercel for the UI. A Telegram digest path exists for daily drops.",
  },
  {
    name: "equitylens-ai",
    url: "https://github.com/seethinajayadileep/equitylens-ai",
    language: "JavaScript",
    homepage: "https://equitylens-ai-silk.vercel.app",
    kind: "Product",
    summary: "Multi-agent equity research. Type a ticker, get INVEST or PASS.",
    howItWorks:
      "LangGraph.js runs a DAG: resolve the company name to a US ticker, pull Alpha Vantage + Finnhub data, then five specialist LLMs (financial, market, news, moat, risk) in batches. A Chief Analyst merges them into a verdict. The Node server streams Server-Sent Events so the React UI can show the agents thinking live.",
  },
  {
    name: "PII-Redaction-Tool-Scaler-AI-Labs",
    url: "https://github.com/seethinajayadileep/PII-Redaction-Tool-Scaler-AI-Labs",
    language: "Python",
    homepage: null,
    kind: "Tool",
    summary: "Detect PII in txt / pdf / docx, replace with stable fakes, keep formatting.",
    howItWorks:
      "FastAPI + CLI. Regex and gazetteers find names, emails, phones, addresses, SSNs, cards (Luhn), DOB, IPs, companies. The same original value maps to the same fake inside one document. DOCX keeps tables and runs. Images go through Tesseract; ID photos get a placeholder. Docker / Railway / Vercel for the web path.",
  },
  {
    name: "Washore",
    url: "https://github.com/seethinajayadileep/Washore",
    language: "Jupyter Notebook",
    homepage: null,
    kind: "Research",
    summary: "Beach littering detector from an older AI-for-Youth computer vision project.",
    howItWorks:
      "One Colab notebook. YOLOv4/Darknet finds people in a webcam stream. InceptionV3 frame features plus a GRU classify short clips as littering. A hit can email the frame. Dataset and weights lived on Google Drive, not in git. Archive, not a production service.",
  },
  {
    name: "golivecheck",
    url: "https://github.com/seethinajayadileep/golivecheck",
    language: "TypeScript",
    homepage: null,
    kind: "Tool",
    summary: "Pre-ship checker: user flow, API smoke, accessibility, safe security headers.",
    howItWorks:
      "CLI pointed at a host you own (allow-list). Playwright drives the browser. Jobs write one pass/fail report. Security is read-only (headers, cookies, CORS) — it does not attack. This portfolio repo already carries golivecheck.config.yaml aimed at www.seethinajayadileep.dev.",
  },
  {
    name: "PlayForge",
    url: "https://github.com/seethinajayadileep/PlayForge",
    language: "TypeScript",
    homepage: null,
    kind: "Tool",
    summary: "Playwright Page Object Model starter: typed pages, reporter, GitHub Actions.",
    howItWorks:
      "TypeScript Playwright config, BasePage plus Login/Home objects, specs for load/login, custom console reporter, dotenv for BASE_URL. A workflow runs Chromium in CI. Demo credentials target a public practice login site so the suite runs with no secrets.",
  },
  {
    name: "qa-blast",
    url: "https://github.com/seethinajayadileep/qa-blast",
    language: "JavaScript",
    homepage: null,
    kind: "Tool",
    summary: "Local LLM test-case generator. Feature text in, structured cases out. No cloud API.",
    howItWorks:
      "Vite React UI posts a prompt to a small Express proxy. The proxy calls Ollama running llama3.2 on the same machine. The model returns JSON cases (id, title, steps, expected). Nothing leaves the laptop if Ollama is local.",
  },
  {
    name: "n8n-LinkedIn-automation-workflow",
    url: "https://github.com/seethinajayadileep/n8n-LinkedIn-automation-workflow",
    language: "n8n",
    homepage: null,
    kind: "Automation",
    summary: "Scheduled LinkedIn posts from a Google Sheet, with image, every two days.",
    howItWorks:
      "n8n cron at 18:00 every two days. Read Post Sheet. Python node picks the first row where Posted? is no. HTTP node fetches the image as binary. LinkedIn node publishes text + hashtags + image. Sheet row flips to yes. Stop if the sheet is empty.",
  },
  {
    name: "linkedin_image_to_binary",
    url: "https://github.com/seethinajayadileep/linkedin_image_to_binary",
    language: "JavaScript",
    homepage: "https://linkedin-image-to-binary.vercel.app",
    kind: "Tool",
    summary: "Image Vault: upload images, store in Supabase, download raw binary (not base64).",
    howItWorks:
      "React + Vite UI, Express API, Supabase Storage + Postgres metadata. Drag-and-drop upload writes the file bytes to Storage and a row to SQL. GET returns Content-Type image/* so n8n or LinkedIn can attach a real file. Delete removes both the object and the row.",
  },
  {
    name: "ai_tutor_frontend",
    url: "https://github.com/seethinajayadileep/ai_tutor_frontend",
    language: "JavaScript",
    homepage: "https://ai-tutor-frontend-kappa.vercel.app",
    kind: "Product",
    summary: "Voice tutor UI: record audio, show transcript and the model answer.",
    howItWorks:
      "React on Vercel. The browser records a clip, POSTs it to the backend /uploadFile, then renders the transcript plus the tutor reply. No business logic in the client besides capture and display.",
  },
  {
    name: "ai_tutor_backend",
    url: "https://github.com/seethinajayadileep/ai_tutor_backend",
    language: "JavaScript",
    homepage: "https://ai-tutor-backend-eosin.vercel.app",
    kind: "Product",
    summary: "API that accepts an audio upload, transcribes, and returns a tutor response.",
    howItWorks:
      "Node service (also on Render in some deploys). uploadFile receives multipart audio, runs speech-to-text, sends the text to an LLM, returns transcript + answer JSON for the frontend.",
  },
  {
    name: "Cursor-Pocket",
    url: "https://github.com/seethinajayadileep/Cursor-Pocket",
    language: "Python",
    homepage: null,
    kind: "Tool",
    summary: "Android remote for a Mac coding-agent desktop: type a prompt on the phone, see the reply.",
    howItWorks:
      "python3 -m cursor_pocket starts a small server on the Mac. The phone opens that URL (local Wi-Fi, or Cloudflare/ngrok with --online), enters a PIN, and sends a prompt. The Mac process pastes into the desktop agent and clicks Send (Accessibility permission required). When the run finishes, the phone shows the reply, touched files, and a notification. Tests mock Send on Linux CI.",
  },
  {
    name: "cred-stage1",
    url: "https://github.com/seethinajayadileep/cred-stage1",
    language: "JavaScript",
    homepage: null,
    kind: "Assignment",
    summary: "Stage-1 coding assignment (JavaScript). No README in the default branch.",
    howItWorks:
      "Public source dump of an assignment drop. Open the tree on GitHub to see the stage-1 files; there is no hosted app advertised on the repo.",
  },
  {
    name: "EcommerceAutomation",
    url: "https://github.com/seethinajayadileep/EcommerceAutomation",
    language: "HTML",
    homepage: null,
    kind: "QA",
    summary: "Ecommerce UI automation practice. No README in the default branch.",
    howItWorks:
      "HTML / test assets for driving an ecommerce flow (login, catalog, cart). Treat it as a practice suite: clone, inspect the pages and scripts, point them at a demo shop.",
  },
];
