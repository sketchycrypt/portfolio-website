"use client";
import Image from "next/image";
import Link from "next/link";
import background from "../images/bg.png";
import avatarUrl from "../avatar";
import React, { useState, useEffect } from "react";

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
    <main>
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
        <div className="flex flex-col items-center justify-center hover:transition ease-in-out duration-150 z-20">
          <div className="font-inter font-medium text-2xl text-center md:text-4xl">
            <h1 className={hoverEffect}>
              here are some of <br/> my projects
              <br />
            </h1>
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
      <div className="fixed top-0 w-full flex justify-center items-end text-2xl font-inter font-bold text-gray-300 text-center">
        <Link href="../">
          <div className="m-8 hover:scale-110 transition ease-in-out duration-150">home</div>
        </Link>
        <Link href="https://github.com/sketchycrypt">
          <div className="m-8 hover:scale-110 transition ease-in-out duration-150">github</div>
        </Link>
        <Link href="/projects">
          <div className="m-8 hover:scale-110 transition ease-in-out duration-150">projects</div>
        </Link>
        <Link href="##">
          <div className="m-8 hover:scale-110 transition ease-in-out duration-150">socials</div>
        </Link>
      </div>
    </main>
  );
}
