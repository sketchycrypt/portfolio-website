'use client'
import Image from "next/image";
import Link from "next/link";
import background from "./images/bg.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function Home() {
  const hoverEffect =
    "opacity-25 hover:opacity-100 hover:transition ease-in-out duration-150";

  return (
    <main>
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <div
          id="bg-container"
          className="fixed inset-0 z-0 w-120 bgWidth -ml-8 bg-no-repeat bg-cover opacity-45 blur-sm"
        >
          <MouseParallaxChild factorX={0.3} factorY={0.3}>
          <Image id="bg-image" src={background} alt="bg"></Image>
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="hover:cursor-pointer hover:scale-110 transition ease-in-out duration-150 z-10 p-8 on">
          <Link href="https://twitter.com/sketchygfx__">
            <Image
              src="https://cdn.discordapp.com/avatars/639485103000518701/bd393353b97a76a0823b3aa00b59473b.png?size=1024"
              alt="Profile Picture"
              className="rounded-full border-solid border-4 border-sky-500"
              width={128}
              height={128}
            />
          </Link>
          <h1 className="font-bold font-inter text-4xl text-center">skxtch</h1>
        </div>
        <div className="flex flex-col items-center justify-center hover:transition ease-in-out duration-150 z-20">
          <div className="font-inter font-medium text-4xl text-center">
            <h1 className={hoverEffect}>
              i am a 17 year old from morocco
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
    </main>
  );
}
