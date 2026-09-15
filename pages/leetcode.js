import { useMemo, useState } from "react";
import PageShell from "../components/pages/PageShell";
import { leetcodeProblems, leetcodeSource } from "../data/leetcodeProblems";

export default function LeetCodePage() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const topics = useMemo(
    () => ["All", ...Array.from(new Set(leetcodeProblems.map((item) => item.topic))).sort()],
    []
  );
  const difficulties = useMemo(
    () => ["All", ...Array.from(new Set(leetcodeProblems.map((item) => item.difficulty)))],
    []
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return leetcodeProblems.filter((item) => {
      if (topic !== "All" && item.topic !== topic) return false;
      if (difficulty !== "All" && item.difficulty !== difficulty) return false;
      if (!needle) return true;
      return (
        item.title.toLowerCase().includes(needle) ||
        item.slug.includes(needle) ||
        String(item.number || "").includes(needle)
      );
    });
  }, [query, topic, difficulty]);

  return (
    <PageShell
      title="LeetCode | Seethina Jaya Dileep"
      eyebrow="LEETCODE"
      heading="Problems I am solving"
      description="These are the LeetCode slugs from my public Notes repository (C++ under leetcode/). This list is a separate page on purpose — it is not mixed into the home page."
    >
      <p className="mb-6 font-semibold">
        Source folder:{" "}
        <a className="underline" href={leetcodeSource} target="_blank" rel="noreferrer">
          github.com/seethinajayadileep/Notes/tree/main/leetcode
        </a>
      </p>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <label className="flex-1">
          <span className="sr-only">Search problems</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full p-2 rounded-md text-black"
            placeholder="Search title, slug, or number"
            type="search"
          />
        </label>
        <label>
          <span className="sr-only">Topic</span>
          <select
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className="w-full md:w-48 p-2 rounded-md text-black"
          >
            {topics.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          <span className="sr-only">Difficulty</span>
          <select
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
            className="w-full md:w-40 p-2 rounded-md text-black"
          >
            {difficulties.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="mb-4 font-home text-sm">
        Showing {filtered.length} of {leetcodeProblems.length}
      </p>

      <ul className="space-y-3">
        {filtered.map((item) => (
          <li
            key={item.slug}
            className="border border-white/20 rounded-md p-4 bg-black/55 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          >
            <div>
              <p className="font-home text-xs text-[#ddd]">
                {item.number ? `#${item.number}` : "—"} · {item.topic} · {item.difficulty}
              </p>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-sm text-[#ddd]">{item.slug}</p>
            </div>
            <div className="flex gap-3 font-home text-sm font-semibold">
              <a className="underline" href={item.leetcode} target="_blank" rel="noreferrer">
                Problem
              </a>
              <a className="underline" href={item.solution} target="_blank" rel="noreferrer">
                My C++
              </a>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
