import React from "react";
import Image from "next/image";

interface GitHubProject {
  name: string;
  url: string;
  icon?: string;
}

const projects: GitHubProject[] = [
  {
    name: "new tab",
    url: "https://github.com/sketchycrypt/new-tab",
    icon: "/icons/tailwindcss.svg",
  },
  {
    name: "othello",
    url: "https://github.com/sketchycrypt/Othello",
    icon: "/icons/javascript.svg",
  },
  {
    name: "crocrun",
    url: "https://github.com/sketchycrypt/crocrun",
    icon: "/icons/typescript.svg",
  },
  {
    name: "portfolio",
    url: "https://github.com/sketchycrypt/portfolio-website",
    icon: "/icons/nextdotjs.svg",
  },
];

// TODO : find a way to implement the icons

const GitHubProjectsGrid: React.FC = () => {
  return (
    <div className="scale-125 md:scale-100 text-center grid grid-cols-2 gap-4 mx-auto my-16">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-black opacity-75 p-4 rounded-lg hover:opacity-100 -highlight transition ease-in-out duration-150">
          <div className="flex items-center justify-start">
            <Image src={project.icon || ""} alt={project.name} width={48} height={48} />
            <a
              href={project.url}
              className="text-center text-xl font-bold ml-4">
              {project.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubProjectsGrid;
