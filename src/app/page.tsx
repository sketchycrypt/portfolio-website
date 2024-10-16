"use client";
import Image from "next/image";
import Link from "next/link";
import background from "./images/bg.png";
import avatarUrl from "./avatar";
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
        <div className="flex flex-col items-center justify-center mb-2 hover:transition ease-in-out duration-150 z-20">
          <div className="mx-2 md:mx-0 font-inter font-medium text-xl sm:text-2xl text-center md:text-4xl">
            <h1 className="opacity-75">
              I am an 18 year old from Morocco
              <br />
              who likes developing things for fun
              <br />
            </h1>
          </div>
          <div className="m-2 font-inter font-medium underline text-2xl text-center md:text-3xl">
            <h1 className="opacity-50">languages and tools</h1>

            <div className="scale-75 md:scale-100 fill-white grid grid-cols-6 justify-center gap-5 my-4">
              <div className={`p-4 ${hoverEffect} hover:scale-110`}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48">
                  <title>CSS3</title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                </svg>
              </div>
              <div className={`p-4 ${hoverEffect} hover:scale-110`}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48">
                  <title>HTML5</title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>
              </div>
              <div className={`p-4 ${hoverEffect} hover:scale-110`}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48">
                  <title>JavaScript</title>
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>
              </div>
              <div className={`p-4 ${hoverEffect} hover:scale-110`}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48">
                  <title>Tailwind CSS</title>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
              </div>
              <div className={`p-4 ${hoverEffect} hover:scale-110`}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48">
                  <title>TypeScript</title>
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
              </div>
              <div className={`p-4 ${hoverEffect} hover:scale-110`}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Arch Linux</title>
                  <path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 01-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 01-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5.034.107a2.26 2.26 0 01.038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091" />
                </svg>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="text-white bg-navyblack hover:bg-navyblack/50 hover:scale-105 transition ease-in-out duration-150 font-medium rounded-full text-2xl px-6 py-3 me-2 mb-2 flex items-center"
                onClick={() =>
                  (window.location.href = "mailto:contact@skxtch.com")
                }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mr-4 fill-white">
                  <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                </svg>
                contact me
              </button>
            </div>
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

      <div className="hover:cursor-pointer md:text-2xl fixed top-0 w-full flex justify-center items-end text-xl font-inter font-bold text-gray-300 text-center">
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
        <Link href="/projects">
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
        <Link legacyBehavior href="/links">
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
