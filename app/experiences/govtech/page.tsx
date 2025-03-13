import { Button } from "@/components/Button";
import { ArrowLeftIcon, BroadcastIcon, GitHubIcon } from "@/Icons";
import Link from "next/link";

export default function GovtechPage() {
  return (
    <div>
      <Link href="/experiences">
        <Button className="flex gap-4">
          <ArrowLeftIcon />
          All Experiences
        </Button>
      </Link>

      <h1 className="font-bold text-5xl">GovTech</h1>

      <p>Jan - Feb 2024</p>
      <div>Overview</div>
      <p>Heheheh</p>
      <div>My Role</div>
      <p>Hehehe</p>
      <div>Skills Acquired</div>
      <p>hehehe</p>
      <div>Impact</div>
      <p>hehe</p>

      <div>References</div>
      <p>PIC name</p>
      <p>PIC email</p>
    </div>
  );
}
