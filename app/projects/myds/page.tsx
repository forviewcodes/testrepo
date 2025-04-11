import { Button } from "@/components/Button";
import { mydsPortfolio } from "@/data/ProjectInfo";
import { ArrowLeftIcon, BroadcastIcon, GitHubIcon, MailIcon } from "@/Icons";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function Directory() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Link href="/projects">
        <Button className="flex gap-4">
          <ArrowLeftIcon />
          All Projects
        </Button>
      </Link>

      <div className="relative w-full aspect-[325/202] mt-4">
        <Image
          src={mydsPortfolio.projectImage}
          alt={mydsPortfolio.projectName}
          width={3000}
          height={2000}
          quality={100}
        />
      </div>

      <h1 className="font-bold text-5xl">{mydsPortfolio.projectName}</h1>
      <p className="text-lg text-gray-600">{mydsPortfolio.overview}</p>

      <div className="flex gap-4 pt-6">
        <Link
          href="https://design.digital.gov.my/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex gap-2">
            <BroadcastIcon />
            <div>View Live</div>
          </Button>
        </Link>
        <Link
          href="https://github.com/govtechmy/myds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex gap-2">
            <GitHubIcon />
            <div>View Code - GitHub</div>
          </Button>
        </Link>
      </div>

      <h2 className="font-semibold text-2xl pt-6">
        Tech Stack (FE and DevOps){" "}
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <div className="grid grid-cols-2 gap-4">
          {mydsPortfolio.techstack.main.map((tool) => (
            <li
              key={tool.name}
              className="bg-gray-400 rounded-lg flex items-center"
            >
              <div className="p-4">
                <Image
                  src={tool.path}
                  alt={tool.name}
                  width={60}
                  height={60}
                  quality={100}
                  className="rounded-lg"
                />
              </div>
              {tool.name}
            </li>
          ))}
        </div>
      </ul>

      <h2 className="font-semibold text-2xl pt-6">Frontend Contributions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mydsPortfolio.sections.FrontendDevelopment.items.map((item, index) => (
          <div
            key={index}
            className="flex  flex-col gap-4 bg-gray-400  rounded-lg p-4"
          >
            <div>
              <h3 className="text-xl font-semibold pb-4">{item.heading}</h3>
              <ul className="list-disc list-inside text-black">
                {item.details.map((detail, i) => (
                  <li key={i} className="pb-2 leading-tight">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <>{children}</>,
                        strong: ({ children }) => (
                          <strong className="font-bold text-orange-400">
                            {children}
                          </strong>
                        ),
                      }}
                    >
                      {detail}
                    </ReactMarkdown>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
