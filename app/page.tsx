import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto my-6 p-4">
      <div className="flex items-center">
        <Image
          src={'/logo.svg'}
          width={64}
          height={64}
          alt="stackroot"
        />
        <div className="flex flex-col">
          <h1 className="font-space text-2xl">stackroot.dev</h1>
          <span className="font-sans text-base text-zinc-500 -my-2">build from the ground up</span>
        </div>
      </div>

      <div className="p-4 my-6">
        <h2 className="font-space ">Build from the ground up.</h2>
        <div className="font-sans text-sm my-2">
          I'm a senior Web3 frontend developer building modular tools with long-term focus and quiet precision.<br />
          Stackroot is my personal framework — a growing suite of white-label components designed for performance, clarity and flexibility.
          <br />
          <br />
          Whether you need a wallet integration, a custom staking UI, or a full launch stack, I build from the ground up — with intention.
        </div>
      </div>

    </div>

  );
}
