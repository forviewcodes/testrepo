import Image from "next/image";
import { ToolsImages } from "@/data/ProjectsData";

export default function TabTools() {
  return (
    <div>
      {categories.map((category) => (
        <ToolsSection
          key={category.type}
          type={category.type}
          label={category.label}
        />
      ))}
    </div>
  );
}

const categories = [
  { type: "languages", label: "Languages" },
  { type: "fullstack", label: "FullStack" },
  { type: "frontend", label: "Frontend" },
  { type: "backend", label: "Backend" },
  { type: "database", label: "Database" },
  { type: "devops", label: "Dev Ops" },
  { type: "management", label: "Management" },
  { type: "others", label: "Others" },
];

interface ToolSectionProps {
  type: string;
  label: string;
}

function ToolsSection({ type, label }: ToolSectionProps) {
  const filteredTools = ToolsImages.filter((tool) => tool.type === type);

  return (
    <div className="p-10 pt-0 pl-0">
      <h1 className="text-6xl font-bold pb-4">
        <span className="bg-gradient-to-br from-[#F97316] to-[#EAB308] bg-clip-text text-transparent">
          {label}
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {filteredTools.map((tool) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
}
