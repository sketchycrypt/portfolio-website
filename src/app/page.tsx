import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import background from './images/bg.png'

export default function Home() {
  const hoverEffect =
    "opacity-25 hover:opacity-100 hover:transition ease-in-out duration-150";

  return (
    <main>
      <div className="fixed inset-0 z-0 w-full bg-no-repeat bg-cover opacity-25">
      <Image src={background} alt="bg"></Image>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="hover:scale-110 transition ease-in-out duration-150 z-10 p-8 on">
          <Link href="https://twitter.com/sketchygfx__">
            <Image
              src="https://cdn.discordapp.com/avatars/639485103000518701/bd393353b97a76a0823b3aa00b59473b.png?size=1024"
              alt="Profile Picture"
              className="rounded-full border-solid border-2 border-spacing-4 border-sky-300"
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
