import SkillsItem from "../main/skills/SkillsItem";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
} from "react-icons/si";

const techs = [
  {
    name: "NEXTJS",
    Icon: SiNextdotjs,
    color: "black",
  },
  {
    name: "TAILWINDCSS",
    Icon: SiTailwindcss,
    color: "black",
  },
  {
    name: "THREEJS",
    Icon: SiThreedotjs,
    color: "black",
  },
  {
    name: "MOTION",
    Icon: SiFramer,
    color: "black",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white w-full">
      <div>
        <div className="flex w-full justify-center border-t-[1px] border-black">
          <p className="p-2 pt-3 text-xs text-bold">
            © Copyright | Seethina Jaya Dileep{" "}
          </p>
        </div>
        <div className="flex w-full justify-center flex-wrap gap-3 pb-3 text-xs font-semibold">
          <a href="/">Home</a>
          <a href="/experience">Experience</a>
          <a href="/leetcode">LeetCode</a>
          <a href="/open-source">Open Source</a>
          <a href="/github">GitHub</a>
          <a href="/admin">Admin</a>
        </div>
      </div>
    </footer>
  );
}
