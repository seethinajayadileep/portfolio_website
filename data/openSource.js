export const openSourceContributions = [
  {
    project: "Selenium",
    org: "SeleniumHQ",
    url: "https://github.com/SeleniumHQ/selenium",
    prs: "https://github.com/SeleniumHQ/selenium/pulls?q=is%3Apr+author%3Aseethinajayadileep",
    status: "6 merged, 1 open",
    language: "Java",
    summary:
      "Official browser automation framework. Contributions land in the Java bindings that millions of QA suites import.",
    howItWorks:
      "Selenium talks to Chrome, Firefox, Edge, and Safari through the W3C WebDriver protocol. Tests send commands (click, type, screenshot) over HTTP to a driver process, which drives the real browser. The Java client turns those commands into typed APIs such as Keys, Platform, and screenshot helpers.",
    whatIChanged:
      "Java bindings work: Keys handling, a Platform NPE, screenshot error paths, JSON number overflow, ScriptKey, and InstanceCoercer. These are the kinds of edge cases that only show up in large test grids.",
  },
  {
    project: "Appium Java Client",
    org: "appium",
    url: "https://github.com/appium/java-client",
    prs: "https://github.com/appium/java-client/pull/2441",
    status: "merged",
    language: "Java",
    summary:
      "Java language binding for writing Appium tests against Android and iOS, still on the W3C WebDriver protocol.",
    howItWorks:
      "Appium sits in front of UIAutomator2 / XCUITest. The Java client sends the same WebDriver commands Selenium uses, plus mobile extras (gestures, context switching). ElementOption.withElement is how a test points at a specific RemoteWebElement for a gesture or tap.",
    whatIChanged:
      "Validated RemoteWebElement in ElementOption.withElement so a bad element cannot silently travel into a mobile gesture call.",
  },
  {
    project: "StreamsHub Console",
    org: "streamshub",
    url: "https://github.com/streamshub/console",
    prs: "https://github.com/streamshub/console/pull/2867",
    status: "merged",
    language: "Java / Quarkus",
    summary: "Web console for Kafka clusters, including schema registry integration.",
    howItWorks:
      "The console is a Quarkus app. It talks to Kafka and to Apicurio for schemas. Quarkus ARC (the DI container) scans packages at build time. Split packages — the same Java package living in more than one jar — make ARC fail unless they are ignored.",
    whatIChanged:
      "Told Quarkus ARC to ignore Apicurio 3 split packages so the Kafka console still builds against the newer registry jars.",
  },
  {
    project: "Awaitility",
    org: "awaitility",
    url: "https://github.com/awaitility/awaitility",
    prs: "https://github.com/awaitility/awaitility/pull/313",
    status: "open",
    language: "Java",
    summary:
      "Small Java DSL for waiting until an asynchronous condition becomes true. Used heavily in Selenium and Spring tests.",
    howItWorks:
      "You write await().until(callable, predicate). Awaitility polls the callable on a timer and feeds each result into the predicate until it passes or the timeout hits. If the callable returns null, the predicate still has to be applied, or null results are never tested.",
    whatIChanged:
      "Fix so a Predicate is still evaluated when the Callable returns null, instead of skipping the assertion.",
  },
  {
    project: "WireMock",
    org: "wiremock",
    url: "https://github.com/wiremock/wiremock",
    prs: "https://github.com/wiremock/wiremock/pull/3576",
    status: "open",
    language: "Java",
    summary: "HTTP mock server used to stub APIs in integration tests.",
    howItWorks:
      "WireMock listens on a port, matches incoming requests against stubs, and returns canned responses. The Admin API lets you inspect journaled requests. The since query parameter filters that journal by time.",
    whatIChanged:
      "Accept YYYY-MM-DD for the Admin API since query parameter, not only a full timestamp.",
  },
  {
    project: "REST Assured",
    org: "rest-assured",
    url: "https://github.com/rest-assured/rest-assured",
    prs: "https://github.com/rest-assured/rest-assured/pulls?q=is%3Apr+author%3Aseethinajayadileep",
    status: "open",
    language: "Java",
    summary: "Java DSL for testing REST APIs: given / when / then over HTTP.",
    howItWorks:
      "REST Assured builds an HTTP request (headers, query, body, multipart), sends it, then matches the response with Hamcrest-style assertions. MultiPartSpecBuilder attaches files. ResponseSpecBuilder stores reusable expectations, including matchers that can see the live response.",
    whatIChanged:
      "Two PRs: reject charset on byte[] / InputStream in MultiPartSpecBuilder (binary parts must stay binary), and add ResponseAwareMatcher support for headers in ResponseSpecBuilder.",
  },
];

export const openSourcePracticeForks = [
  {
    name: "playwright",
    upstream: "https://github.com/microsoft/playwright",
    mine: "https://github.com/seethinajayadileep/playwright",
    why: "Browser automation with one API for Chromium, Firefox, and WebKit. Public fork for reading the runner, locators, and tracing.",
  },
  {
    name: "playwright-java",
    upstream: "https://github.com/microsoft/playwright-java",
    mine: "https://github.com/seethinajayadileep/playwright-java",
    why: "Java bindings for the same Playwright protocol used in PlayForge and Notes Playwright practice.",
  },
  {
    name: "selenium",
    upstream: "https://github.com/SeleniumHQ/selenium",
    mine: "https://github.com/seethinajayadileep/selenium",
    why: "Local clone of the project I send PRs to, so Java binding changes can be built and tested before upstream review.",
  },
  {
    name: "java-client",
    upstream: "https://github.com/appium/java-client",
    mine: "https://github.com/seethinajayadileep/java-client",
    why: "Appium Java client fork used while landing the RemoteWebElement validation.",
  },
  {
    name: "awaitility",
    upstream: "https://github.com/awaitility/awaitility",
    mine: "https://github.com/seethinajayadileep/awaitility",
    why: "Working copy for the null-Callable predicate fix.",
  },
  {
    name: "wiremock",
    upstream: "https://github.com/wiremock/wiremock",
    mine: "https://github.com/seethinajayadileep/wiremock",
    why: "Working copy for Admin API date parsing.",
  },
  {
    name: "rest-assured",
    upstream: "https://github.com/rest-assured/rest-assured",
    mine: "https://github.com/seethinajayadileep/rest-assured",
    why: "Working copy for multipart charset and header matcher PRs.",
  },
  {
    name: "JavaHamcrest",
    upstream: "https://github.com/hamcrest/JavaHamcrest",
    mine: "https://github.com/seethinajayadileep/JavaHamcrest",
    why: "Matcher library that REST Assured and JUnit tests sit on.",
  },
  {
    name: "click",
    upstream: "https://github.com/pallets/click",
    mine: "https://github.com/seethinajayadileep/click",
    why: "Python CLI toolkit. Useful when wrapping tools like golivecheck and Cursor-Pocket.",
  },
  {
    name: "aider",
    upstream: "https://github.com/Aider-AI/aider",
    mine: "https://github.com/seethinajayadileep/aider",
    why: "Terminal AI pair-programmer. Reference for how coding agents edit a git repo.",
  },
  {
    name: "smolagents",
    upstream: "https://github.com/huggingface/smolagents",
    mine: "https://github.com/seethinajayadileep/smolagents",
    why: "Small Hugging Face agents library that thinks in code, related to EquityLens-style agent graphs.",
  },
  {
    name: "langchain",
    upstream: "https://github.com/langchain-ai/langchain",
    mine: "https://github.com/seethinajayadileep/langchain",
    why: "Agent engineering platform. LangGraph (used in EquityLens AI) lives in this ecosystem.",
  },
  {
    name: "continue",
    upstream: "https://github.com/continuedev/continue",
    mine: "https://github.com/seethinajayadileep/continue",
    why: "Open-source coding agent / IDE extension. Nearby to how Pocket talks to a coding agent UI.",
  },
  {
    name: "ollama-js",
    upstream: "https://github.com/ollama/ollama-js",
    mine: "https://github.com/seethinajayadileep/ollama-js",
    why: "JavaScript client for local Ollama models, same stack QA Blast uses.",
  },
  {
    name: "ollama-python",
    upstream: "https://github.com/ollama/ollama-python",
    mine: "https://github.com/seethinajayadileep/ollama-python",
    why: "Python client for the same local LLM runtime.",
  },
  {
    name: "morgan",
    upstream: "https://github.com/expressjs/morgan",
    mine: "https://github.com/seethinajayadileep/morgan",
    why: "HTTP request logger middleware for Express, used across the Node APIs in this profile.",
  },
  {
    name: "qs",
    upstream: "https://github.com/ljharb/qs",
    mine: "https://github.com/seethinajayadileep/qs",
    why: "Query-string parser with nesting. Express and REST clients depend on it.",
  },
];
