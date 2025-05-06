// components/Hero.tsx
export default function Hero() {
    return (
      <section id="hero" className="min-h-[70vh] flex flex-col justify-center items-start gap-4 px-6 md:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-title font-semibold">Build from the ground up.</h1>
        <p className="text-lg text-neutral-600 max-w-xl">
          Stackroot is a personal framework for modular Web3 frontends — designed for clarity, reusability, and long-term value.
        </p>
        <a href="#modules" className="mt-6 inline-block px-6 py-2 bg-zinc-600 text-white rounded hover:bg-zinc-700 transition">
          Explore modules
        </a>
      </section>
    );
  }
  