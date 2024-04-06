import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//cba to find a clever way to import
import tailwindcssIcon from '../images/icons/tailwindcss.svg';
import javascriptIcon from '../images/icons/javascript.svg';
import typescriptIcon from '../images/icons/typescript.svg';
import nextjsIcon from '../images/icons/nextdotjs.svg';
 


interface GitHubProject {
 name: string;
 url: string;
 icon?: string;
}

const projects: GitHubProject[] = [
 { name: 'new tab', url: 'https://github.com/sketchycrypt/new-tab', icon: tailwindcssIcon },
 { name: 'othello', url: 'https://github.com/sketchycrypt/Othello', icon: javascriptIcon },
 { name: 'crocrun', url: 'https://github.com/sketchycrypt/crocrun', icon: typescriptIcon },
 { name: 'portfolio', url: 'https://github.com/sketchycrypt/portfolio-website', icon: nextjsIcon },
];

// TODO : find a way to implement the icons

const GitHubProjectsGrid: React.FC = () => {
 return (
    <div className="scale-125 md:scale-100 text-center grid grid-cols-2 gap-4 mx-auto my-16">
      {projects.map((project, index) => (
        <div key={index} className="bg-black opacity-75 p-4 rounded-lg hover:opacity-100 -highlight transition ease-in-out duration-150">
          <Link legacyBehavior href={project.url}>
            <a className="text-center text-xl font-bold">{project.name}</a>
          </Link>
        </div>
      ))}
    </div>
 );
};

export default GitHubProjectsGrid;