import { Button } from "@/components/Button";
import { ArrowLeftIcon, BroadcastIcon, GitHubIcon } from "@/Icons";
import Link from "next/link";

export default function TerraformAws() {
  return (
    <div>
      <Link href="/projects">
        <Button className="flex gap-4">
          <ArrowLeftIcon />
          All Projects
        </Button>
      </Link>
      <div className="w-[660px] h-[430px] bg-green-800"></div>
      <h1 className="font-bold text-5xl">Terraform Aws</h1>
      <p>Malaysia Government Design System</p>
      <div>
        <div className="pt-10"> MYDS is ==============================</div>
        <div> MYDS is ==============================</div>
        <div> MYDS is ==============================</div>
        <div> MYDS is ==============================</div>
        <div className="pb-10"> MYDS is ==============================</div>
      </div>

      <div className="flex gap-4">
        <Link href="https://www.google.com">
          <Button className="flex gap-2">
            <BroadcastIcon />
            <div>View Live </div>
          </Button>
        </Link>
        <Link href="https://www.google.com">
          <Button className="flex gap-2">
            <GitHubIcon />
            <div>View Code - Github</div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
