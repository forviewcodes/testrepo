import { HomeIcon } from "@/Icons";
import Link from "next/link";

export default function ExperiencesPage() {
  return (
    <div>
      <h1 className="text-6xl font-bold pb-8">
        <span className="bg-gradient-to-br from-[rgb(249,115,22)] to-[#EAB308] bg-clip-text text-transparent">
          Experiences
        </span>
      </h1>
      <div className="gap-4 flex flex-col">
        <Link href="/experiences/govtech">
          <div className="bg-gray-300 w-[650px] h-auto rounded-2xl flex justify-between p-6">
            <div>
              <div className="text-4xl font-semibold">GovTech</div>
              <div className="py-4 text-lg">
                Led the design team in creating user-centric mobile and web
                applications, improving the user experience and increasing user
                engagement.
              </div>
              <div>Jan 2020 - Present</div>
            </div>
            <HomeIcon className="shrink-0"></HomeIcon>
          </div>
        </Link>
        <Link href="/experiences/bateriku">
          <div className="bg-gray-300 w-[650px] h-auto rounded-2xl flex justify-between p-6">
            <div>
              <div className="text-4xl font-semibold">Bateriku</div>
              <div className="py-4 text-lg">
                Led the design team in creating user-centric mobile and web
                applications, improving the user experience and increasing user
                engagement.
              </div>
              <div>Jan 2020 - Present</div>
            </div>
            <HomeIcon className="shrink-0"></HomeIcon>
          </div>
        </Link>
        <Link href="/experiences/chemiz">
          <div className="bg-gray-300 w-[650px] h-auto rounded-2xl flex justify-between p-6">
            <div>
              <div className="text-4xl font-semibold">Chemiz</div>
              <div className="py-4 text-lg">
                Led the design team in creating user-centric mobile and web
                applications, improving the user experience and increasing user
                engagement.
              </div>
              <div>Jan 2020 - Present</div>
            </div>
            <HomeIcon className="shrink-0"></HomeIcon>
          </div>
        </Link>
      </div>
    </div>
  );
}
