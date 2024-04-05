// src/app/projects/GitHubProjectsGrid.tsx

import React from 'react';
import Link from 'next/link';

interface GitHubProject {
 name: string;
 url: string;
}

const projects: GitHubProject[] = [
 { name: 'new tab', url: 'https://github.com/sketchycrypt/new-tab' },
 { name: 'othello', url: 'https://github.com/sketchycrypt/Othello' },
 { name: 'crocrun', url: 'https://github.com/sketchycrypt/crocrun' },
 { name: 'portfolio', url: 'https://github.com/sketchycrypt/portfolio-website' },
];

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