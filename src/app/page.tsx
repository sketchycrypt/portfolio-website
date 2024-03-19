import Image from "next/image";

export default function Home() {
  return (
    <main>
      <body>
      <div className="flex items-center justify-center h-screen">
        <div className="hover:scale-125 transition ease-in-out duration-150">
          <img src="https://cdn.discordapp.com/avatars/639485103000518701/bd393353b97a76a0823b3aa00b59473b.png?size=1024" className="rounded-full w-32 h-32 border-dashed border-2"alt="" />
          <h1 className="font-bold font-inter text-4xl text-center">skxtch</h1>
        </div>
      </div>
      </body>
    </main>
  );
}
