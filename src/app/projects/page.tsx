"use client";
import Image from "next/image";
import Link from "next/link";
import background from "../images/bg.png";
import avatarUrl from "../avatar";
import React, { useState, useEffect } from "react";
import GitHubProjectsGrid from "./githubprojectsgrid";

export default function Home() {
  const [avatar, setAvatar] = useState<string | null>(null);

  const [creditsText, setCreditsText] = useState<string>(
    "made by skxtch with nextjs + tailwindcss"
  );

  useEffect(() => {
    avatarUrl().then((url) => setAvatar(url));
  }, []);
  const hoverEffect =
    "opacity-25 hover:opacity-100 hover:transition ease-in-out duration-150";

  return (
    <main className="overflow-hidden">
      <div
        id="bg-container"
        className="fixed z-0 w-full h-screen bg-no-repeat bg-center bg-cover opacity-45 blur-sm md:h-full">
        <Image
          id="bg-image"
          src={background}
          alt="bg"
          priority={true}
          layout="fill"
          objectFit="cover"></Image>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="hover:transition ease-in-out duration-150 z-10">
          <div className="flex flex-col items-start justify-center h-screen scale-110">
            <GitHubProjectsGrid />
          </div>
        </div>
      </div>

      <Link href="https://tailwindcss.com/docs/guides/nextjs">
        <div
          id="credits"
          className="invisible md:visible scale-75 fixed bottom-0 right-0 md:m-2 text-sm text-gray-600 text-right font-inter dark:text-white animate-pulse md:scale-100">
          made by skxtch with nextjs + tailwindcss
          <br />
          &lt;3
        </div>
      </Link>

      <div
        id="navigation-bar"
        className="z-20 md:text-2xl fixed top-0 w-full flex justify-center items-end text-xl font-inter font-bold text-gray-300 text-center">
        <Link href="../">
          <div className="md:m-8 m-4 hover:scale-110 transition ease-in-out duration-150">
            home
          </div>
        </Link>
        <Link legacyBehavior href="https://github.com/sketchycrypt">
          <div className="md:m-8 m-4 hover:scale-110 transition ease-in-out duration-150">
            github
          </div>
        </Link>
        <Link legacyBehavior href="#">
          <div className="md:m-8 m-4 hover:scale-110 transition ease-in-out duration-150">
            projects
          </div>
        </Link>

        <div
          className="md:m-8 m-4 hover:scale-110 transition ease-in-out duration-150"
          onClick={() => alert("Not done yet")}>
          socials
        </div>
      </div>
    </main>
  );
}
