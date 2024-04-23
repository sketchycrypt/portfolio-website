import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

import tailwindIcon from "../images/icons/tailwindcss.svg";
import javascriptIcon from "../images/icons/javascript.svg";
import typescriptIcon from "../images/icons/typescript.svg";
import nextdotjsIcon from "../images/icons/nextdotjs.svg";

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
    <div className="scale-100 md:scale-150 text-center grid grid-cols-2 gap-4 mx-auto my-16">
      {projects.map((project, index) => {
        console.log(project.icon); // Logs the icon for each project
        return (
          <div
            key={index}
            className="bg-black opacity-75 p-4 rounded-lg hover:opacity-100 -highlight transition ease-in-out duration-150">
            <div className="flex items-center justify-start">
              {project.icon && (
                <Image
                  src={project.icon.src}
                  alt={project.name}
                  width={24}
                  height={24}
                  className="invert"
                />
              )}
              <a
                href={project.url}
                className="text-center text-xl font-bold ml-4">
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
