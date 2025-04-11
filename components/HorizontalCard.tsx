import { ArrowLeftShortIcon, ArrowRightShortIcon } from "@/Icons";
import Image from "next/image";
import { useRef } from "react";
import { IconButton } from "./Button";
import { HomeInfo } from "@/data/HomeInfo";

interface HorizontalCardProps {
  title?: string;
  children?: React.ReactNode;
}

export default function HorizontalCard({
  title,
  children,
}: HorizontalCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full border-b border-blue-110">
      <div className="justify-between flex">
        <h2 className="tracking-[2px] text-gray-130 text-xs font-medium items-center flex">
          {title}
        </h2>
        <div className="flex space-x-1">
          <IconButton onClick={() => scroll(-300)}>
            <ArrowLeftShortIcon className="size-3" />
          </IconButton>
          <IconButton onClick={() => scroll(300)}>
            <ArrowRightShortIcon className="size-3" />
          </IconButton>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="my-8 flex gap-2 w-full overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {children}
      </div>
    </div>
  );
}
