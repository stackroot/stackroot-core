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
          Stackroot is a modular frontend foundation for Web3 products — crafted with clarity, scalability, and quiet precision.
          From wallet connections to staking dashboards, each component is designed to stand alone or plug seamlessly into your ecosystem.
        </div>
      </div>

    </div>

  );
}
