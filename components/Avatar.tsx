import { GitHubIcon, LinkedInIcon, MailIcon, ResumeIcon } from "@/Icons";
import { Button } from "./Button";

export default function Avatar() {
  return (
    <div className="h-[640px] w-[345px] bg-gray-300 rounded-xl flex flex-col justify-between p-8">
      <div className="items-center justify-center flex flex-col">
        <div className="h-[280px] w-[240px]  bg-black rounded-lg mb-6">
          my image
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

        <div className="space-x-4 py-4">
          <Button
            className="hover:bg-gradient-to-br from-[#F97316] to-[#EAB308]"
            variant={"default-ghost"}
            iconOnly
          >
            <MailIcon></MailIcon>
          </Button>
          <Button
            className="hover:bg-gradient-to-br from-[#F97316] to-[#EAB308]"
            variant={"default-ghost"}
            iconOnly
          >
            <LinkedInIcon></LinkedInIcon>
          </Button>
          <Button
            className="hover:bg-gradient-to-br from-[#F97316] to-[#EAB308]"
            variant={"default-ghost"}
            iconOnly
          >
            <GitHubIcon></GitHubIcon>
          </Button>
          <Button
            className="hover:bg-gradient-to-br from-[#F97316] to-[#EAB308]"
            variant={"default-ghost"}
            iconOnly
          >
            <ResumeIcon></ResumeIcon>
          </Button>
        </div>
      </div>
      <div className="items-center justify-center flex">
        <Button className="px-10 py-2">Let's talk</Button>
      </div>
    </div>
  );
}
