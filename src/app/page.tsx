"use client";
import Image from "next/image";
import Link from "next/link";
import background from "./images/bg.png";
import avatarUrl from "./avatar";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [avatar, setAvatar] = useState<string | null>(null);

  const [creditsText, setCreditsText] = useState<string>('made by skxtch with nextjs + tailwindcss');

  useEffect(() => {
    avatarUrl().then((url) => setAvatar(url));

    const updateCreditsText = () => {
      if (window.innerWidth <= 768) { // Assuming 768px is the breakpoint for mobile
        setCreditsText('&lt;3');
      } else {
        setCreditsText('made by skxtch with nextjs + tailwindcss');
      }
    };

    updateCreditsText(); // Initial check
    window.addEventListener('resize', updateCreditsText);

    return () => window.removeEventListener('resize', updateCreditsText);

  }, []);
  const hoverEffect =
    "opacity-25 hover:opacity-100 hover:transition ease-in-out duration-150";

  return (
    <main>
      <div
 id="bg-container"
 className="fixed z-0 w-full h-screen bg-no-repeat bg-center bg-cover opacity-45 blur-sm md:h-full"
>
<Image id="bg-image" src={background} alt="bg" priority={true} layout="fill" objectFit="cover"></Image>
</div>

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
          <div className="font-inter font-medium text-2xl text-center md:text-4xl">
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
        <div id="credits" className="invisible sm:visible scale-75 fixed bottom-0 right-0 md:m-2 text-sm text-gray-600 text-right font-inter dark:text-white animate-pulse md:scale-100">
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
