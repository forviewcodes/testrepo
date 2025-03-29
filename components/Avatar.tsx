import { GitHubIcon, LinkedInIcon, MailIcon, ResumeIcon } from "@/Icons";
import { Button } from "./Button";
import { IconAnimation } from "./IconAnimation";
import { clx } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { IconInfo } from "./IconInfo";

export default function Avatar() {
  const tabs = [
    { href: "https://www.github.com", label: "Github", icon: <GitHubIcon /> },
    {
      href: "https://www.linkedin.com",
      label: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      href: "mailto:test@gmail.com?subject=Hello&body=How%20are%20you?",
      label: "Mail",
      icon: <MailIcon />,
    },
    { href: "/experiences", label: "Resume", icon: <ResumeIcon /> },
  ];

  return (
    <div className="h-[640px] w-[345px] bg-gray-400 rounded-xl flex flex-col justify-between p-8 sticky top-10">
      <div className="items-center justify-center flex flex-col">
        <div className="h-[280px] w-[240px]  bg-black rounded-lg mb-6 overflow-clip">
          <Image
            src={"/avatar/avatar.png"}
            alt={"avatar"}
            width={240}
            height={280}
          ></Image>
        </div>
        <div className="flex flex-col items-start space-y-1 text-gray-900 dark:text-white">
          <div className="text-center text-black">
            <h1 className="text-4xl font-extrabold">Harris Azmi</h1>
            <h2 className="text-xl font-medium">
              Fullstack Developer & Frontend Specialist
            </h2>
            <p className="text-lg">Shah Alam, Malaysia</p>
          </div>
        </div>

        <div className="space-x-4 py-4 flex">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              target="_blank"
              rel="noopener noreferrer"
              className={clx("p-2 rounded-xl relative group overflow-visible")}
            >
              <div className="relative z-10 flex items-center">{tab.icon}</div>
              <IconAnimation />
              <IconInfo className="border border-black top-11">
                {tab.label}
              </IconInfo>
            </Link>
          ))}
        </div>
      </div>
      <div className="items-center justify-center flex">
        <Button className="px-10 py-2">Let's talk</Button>
      </div>
    </div>
  );
}
