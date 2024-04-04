"use client";
import Image from "next/image";
import Link from "next/link";
import background from "./images/bg.png";
import avatarUrl from "./avatar";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import React, {useState, useEffect } from "react";

export default function Home() {
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    avatarUrl().then(url => setAvatar(url));
  }, []);
  const hoverEffect =
    "opacity-25 hover:opacity-100 hover:transition ease-in-out duration-150";

  return (
    <main>
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <div
          id="bg-container"
          className="fixed inset-0 z-0 w-full scale-150 bg-no-repeat bg-cover opacity-45 blur-sm sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6"
        >
          <MouseParallaxChild factorX={0.3} factorY={0.3}>
            <Image id="bg-image" src={background} alt="bg" priority={true}></Image>
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="hover:cursor-pointer hover:scale-110 transition ease-in-out duration-150 z-10 p-8 on">
          <Link href="https://twitter.com/sketchygfx__">
          {avatar ? (
              <Image
                src={avatar}
                alt="Profile Picture"
                className="rounded-full border-solid border-4 border-white"
                width={128}
                height={128}
              />
            ) : (
              <p></p>
            )}
          </Link>
          <h1 className="font-bold font-inter text-4xl text-center">skxtch</h1>
        </div>
        <div className="flex flex-col items-center justify-center hover:transition ease-in-out duration-150 z-20">
          <div className="font-inter font-medium text-4xl text-center">
            <h1 className={hoverEffect}>
              I am a 17 year old from Morocco
              <br />
              who likes developing things for fun
              <br />
            </h1>
          </div>
        </div>
      </div>
      <Link href="https://google.com">
        <div className="fixed bottom-0 right-0 m-4 text-sm text-gray-600 text-right font-inter dark:text-white animate-pulse">
          made by skxtch with nextjs + tailwindcss
          <br />
          &lt;3
        </div>
      </Link>
      <Link href="https://github.com/sketchycrypt/">
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-8 text-2xl font-inter font-bold text-gray-300 text-center hover:scale-110 transition ease-in-out duration-150">
          github
        </div>
      </Link>
    </main>
  );
}
