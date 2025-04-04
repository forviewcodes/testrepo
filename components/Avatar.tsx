"use client";
import { Button } from "./Button";
import { IconAnimation } from "./IconAnimation";
import { clx } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { IconInfo } from "./IconInfo";
import { AvatarInfo } from "@/data/AvatarInfo";
import { TypeAnimation } from "react-type-animation";

export default function Avatar({ className }: { className?: string }) {
  return (
    <div
      className={clx(
        "h-[640px]  w-[310px]  bg-gray-400 rounded-xl flex flex-col justify-center p-8 ",
        className
      )}
    >
      <div className="items-center justify-center flex flex-col">
        <div className="h-[280px] w-[240px]  bg-black rounded-lg mb-6 overflow-clip">
          <Image
            src={"/avatar/avatar-light.png"}
            alt={"avatar"}
            width={240}
            height={280}
          ></Image>
          {/* <Image
            className="img-dark"
            src={"/avatar/avatar-dark.png"}
            alt={"avatar"}
            width={240}
            height={280}
          ></Image> */}
        </div>
        <div className="flex flex-col items-start space-y-1 text-gray-900 dark:text-white">
          <div className="text-center text-black">
            <h1 className="text-4xl font-extrabold">Harris Azmi</h1>
            <h2 className="text-xl font-medium">
              <TypeAnimation
                sequence={[
                  "FullStack Web Developer",
                  1000,
                  "Frontend Specialist",
                  1000,
                  "Dev Ops Engineer",
                  1000,
                  "Home Lab Brewer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                  "Self-hosted Infra Engineer",
                  1000,
                  "Chemical Process Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-lg">Shah Alam, Malaysia</p>
          </div>
        </div>

        <div className="space-x-4 py-4 flex">
          {AvatarInfo.map((tab) => (
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
        <Link href={"/contacts"}>
          <Button className="px-10 py-2 hover:cursor-pointer">
            Let's talk
          </Button>
        </Link>
      </div>
    </div>
  );
}
