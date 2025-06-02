import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[50vh] mb-6 flex flex-col justify-center items-start gap-4 max-w-7xl mx-auto px-4 md:px-8 py-16 scroll-mt-24">
      <h1 className="text-4xl md:text-5xl font-root text-sky-700 font-semibold">Modular. Visual. Yours.</h1>
      <div className="text-sm md:text-base text-pink-600 flex flex-col gap-2">
        <span className="font-root text-xl mb-2">Frontend engineering for Web2 & Web3, modular, fast, and made to fit.</span>
        <span className="text-neutral-600">
          Senior Frontend Developer with a passion for modular Web3 interfaces.<br />
          With StackRoot, I showcase how I build, from wallet integrations to staking UIs, from Web2 dashboards to onchain tools.
          Clean code, thoughtful design, and a calm, professional mindset.
        </span>
      </div>
      <div className=" w-full flex items-center justify-between mt-6">

        <Link href="#showcases" className="btn">
          Explore showcases
        </Link>
        <div className="flex items-center justify-end space-x-4">
          <Link href="https://github.com/stackroot" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/logo-github.svg"
              alt="GitHub logo"
              width={24}
              height={24}
              className="inline-block mx-1"
            />
          </Link>
          <Link href="https://x.com/stackroot" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/x-root.svg"
              alt="X"
              width={18}
              height={18}
              className="inline-block mx-1"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}
