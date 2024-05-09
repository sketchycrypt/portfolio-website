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

      <div className="font-inter flex flex-col justify-center items-center h-screen place-items-center gap-4 md:gap-8 gap-y-12 md:gap-y-4 px-2 md:px-0">
        <button
          className={`scale-125 md:scale-100 flex items-center justify-center bg-neutral-950 text-white px-6 py-4 text-lg rounded-full ${hoverEffect} z-20 w-48 `}
          onClick={() =>
            (window.location.href = "https://twitter.com/sketchygfx__")
          }>
          <svg
            className="fill-cyan-500 mr-2 w-8 h-8"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <title>Twitter</title>
            <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
          </svg>
          twitter
        </button>
        <button
          className={`scale-125 md:scale-100 flex items-center justify-center bg-neutral-950 text-white px-6 py-4 text-lg rounded-full ${hoverEffect} z-20 w-48`}
          onClick={() =>
            (window.location.href = "https://mastodon.social/@skxtch")
          }>
          <svg
            className="fill-purple-600 mr-2 w-8 h-8"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <title>Mastodon</title>
            <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1_164.675.77 1_012 1_81 1_012 3_12z" />
          </svg>
          mastodon
        </button>
        <button
          className={`scale-125 md:scale-100 flex items-center justify-center bg-neutral-950 text-white px-6 py-4 text-lg rounded-full ${hoverEffect} z-20 w-48`}
          onClick={() =>
            (window.location.href = "https://bsky.app/profile/skxtch.com")
          }>
          <svg
            className="fill-cyan-300 mr-2 w-8 h-8"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <title>Bluesky</title>
            <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
          </svg>
          bluesky
        </button>
        <button
          className={`scale-125 md:scale-100 flex items-center justify-center bg-neutral-950 text-white px-6 py-4 text-lg rounded-full ${hoverEffect} z-20 w-48`}
          onClick={() =>
            (window.location.href = "https://github.com/sketchycrypt")
          }>
          <svg
            className="fill-white mr-2 w-8 h-8"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          github
        </button>
        <button
          className={`scale-125 md:scale-100 flex items-center justify-center bg-neutral-950 text-white px-6 py-4 text-lg rounded-full ${hoverEffect} z-20 w-48`}
          onClick={() =>
            (window.location.href = "https://twitch.tv/sketchygfx")
          }>
          <svg
            className="fill-purple-500 mr-2 w-8 h-8"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <title>Twitch</title>
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
          </svg>
          twitch
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
          <div className="md:m-8 m-4 hover:scale-110 transition ease-in-out duration-150 flex flex-row items-center">
            <svg
              className="fill-white mr-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
            </svg>
            home
          </div>
        </Link>

        <Link legacyBehavior href="../projects">
          <div className="md:m-8 m-4 hover:scale-110 transition ease-in-out duration-150 flex flex-row items-center">
            <svg
              className="fill-white mr-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path d="M15.602.075c2.201 1.174 4.904 3.254 6.398 5.252-1.286-.9-3.011-1.027-5.058-.549.222-1.469-.185-3.535-1.34-4.703zm-.825 6.925s1.522-7-3.335-7h-5.442v20h16v-10.629c0-3.42-4.214-3.116-7.223-2.371zm-10.777 15v-20h-2v22h18v-2h-16z" />
            </svg>
            projects
          </div>
        </Link>

        <Link legacyBehavior href="">
          <div className="md:m-8 m-4 hover:scale-110 transition ease-in-out duration-150 flex flex-row items-center">
            <svg
              className="fill-white mr-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
            </svg>
            links
          </div>
        </Link>
      </div>
    </main>
  );
}
