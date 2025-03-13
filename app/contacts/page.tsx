import { GitHubIcon, LinkedInIcon } from "@/Icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-5xl font-extrabold pb-6">
        <span className="bg-gradient-to-br from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Let’s Connect and Collaborate!
        </span>
      </h1>
      <p className="text-lg">
        I’m open to new opportunities and always eager to engage in meaningful
        conversations. Whether you have a project in mind, a question, or simply
        want to connect, feel free to reach out. I look forward to hearing from
        you.
      </p>
      <div className="flex gap-6 mt-6">
        <Link
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <GitHubIcon className="w-8 h-8" />
        </Link>
        <Link
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <LinkedInIcon className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}
