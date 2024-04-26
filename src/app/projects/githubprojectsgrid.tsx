import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

import tailwindIcon from "../images/icons/tailwindcss.svg";
import javascriptIcon from "../images/icons/javascript.svg";
import typescriptIcon from "../images/icons/typescript.svg";
import nextdotjsIcon from "../images/icons/nextdotjs.svg";
import githubIcon from "../images/icons/github.svg";

interface GitHubProject {
  name: string;
  url: string;
  icon?: StaticImageData;
}

const projects: GitHubProject[] = [
  {
    name: "new tab",
    url: "https://github.com/sketchycrypt/new-tab",
    icon: tailwindIcon,
  },
  {
    name: "othello",
    url: "https://github.com/sketchycrypt/Othello",
    icon: javascriptIcon,
  },
  {
    name: "crocrun",
    url: "https://github.com/sketchycrypt/crocrun",
    icon: typescriptIcon,
  },
  {
    name: "portfolio",
    url: "https://github.com/sketchycrypt/portfolio-website",
    icon: nextdotjsIcon,
  },
];

const GitHubProjectsGrid: React.FC = () => {
  return (
    <div className="scale-150 md:scale-150 text-center grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-8">
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="scale-75 md:scale-100 bg-neutral-950 p-4 rounded-lg hover:scale-105 shadow-white/90 -highlight transition ease-in-out duration-150 relative w-full h-auto">
            <div className="flex items-center justify-start">
              {project.icon && (
                <Image
                  src={project.icon.src}
                  alt={project.name}
                  width={11}
                  height={11}
                  className="absolute top-0 right-0 m-2 invert"
                />
              )}
              <Image
                src={githubIcon}
                alt={project.name}
                width={24}
                height={24}
                className="invert"
              />
              <a
                href={project.url}
                className="text-left text-lg font-bold ml-2">
                {project.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GitHubProjectsGrid;
