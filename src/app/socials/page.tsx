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
  const hoverEffect = "hover:scale-105 transition ease-in-out duration-150";

  return (
    <main className="overflow-hidden">
      <div
        id="bg-container"
        className="fixed z-10 w-full h-screen bg-no-repeat bg-center bg-cover opacity-45 blur-sm md:h-full">
        <Image
          id="bg-image"
          src={background}
          alt="bg"
          priority={true}
          layout="fill"
          objectFit="cover"></Image>
      </div>

      <div className="flex justify-center items-center h-screen place-items-center gap-4 md:gap-8 px-2 md:px-0">
        <button
          className={`flex items-center justify-center bg-neutral-950 text-white px-6 py-3 text-lg rounded-full ${hoverEffect} z-20 w-48 `} onClick={() => (window.location.href = "https://twitter.com/sketchygfx__")}>
          <svg
            className="fill-white mr-2 w-8 h-8"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <title>Twitter</title>
            <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
          </svg>
          twitter
        </button>
        <button
          className={`flex items-center justify-center bg-neutral-950 text-white px-6 py-3 text-lg rounded-full ${hoverEffect} z-20 w-48`} onClick={() => (window.location.href = "https://mastodon.social/@skxtch")}>
          <svg
            className="fill-white mr-2 w-8 h-8"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <title>Mastodon</title>
            <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1_164.675.77 1_012 1_81 1_012 3_12z" />
          </svg>
          mastodon
        </button>
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
        className="hover:cursor-pointer z-30 md:text-2xl fixed top-0 w-full flex justify-center items-end text-xl font-inter font-bold text-gray-300 text-center">
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
        <Link legacyBehavior href="../projects">
          <div className="md:m-8 m-4 hover:scale-110 transition ease-in-out duration-150">
            projects
          </div>
        </Link>

        <Link legacyBehavior href="">
          <div className="md:m-8 m-4 hover:scale-110 transition ease-in-out duration-150">
            socials
          </div>
        </Link>
      </div>
    </main>
  );
}
