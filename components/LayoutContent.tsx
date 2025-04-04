"use client";

import { usePathname } from "next/navigation";
import Avatar from "./Avatar";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/home";

  return (
    <div className="flex justify-center flex-col text-center items-center">
      {isHome && <Avatar className="" />}
      <div>{children}</div>
      {!isHome && <Avatar className="mt-8" />}
    </div>
  );
}
