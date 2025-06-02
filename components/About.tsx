import Icons from "./Icons";
export default function About() {
  return (
    <section id="about" className="min-h-[70vh] max-w-7xl mx-auto px-4 md:px-8 py-16 scroll-mt-18">
      <h2 className="text-2xl md:text-4xl font-root mb-6 text-sky-700">About StackRoot</h2>
      <p className="text-neutral-700 leading-relaxed mb-8">
        I'm a Senior Frontend Developer with 20+ years of experience crafting scalable, responsive interfaces, from classic Web2 platforms to the evolving frontier of Web3.
        I specialize in building modular, reusable components that are easy to maintain and scale. My focus is on creating user-friendly experiences that are both visually appealing and functionally robust.<br /><br />
        I build with intention: quietly, efficiently and always with purpose.
      </p>
      <p className="text-gray-600 text-md leading-relaxed mb-8">
        With <span className="font-root font-medium text-sky-600">StackRoot</span>, I share modular showcases of
        the tools I love working with, always built from the ground up.
        {/* I'm currently available for work on a project basis. */}
      </p>


      <h3 className="text-xl font-semibold text-sky-700 font-root my-6">Core Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-neutral-600 text-sm mb-6">
        <span>Next.js</span>
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>Tailwind CSS</span>
        <span>ShadCn</span>
        <span>React</span>
        <span>Wagmi</span>
        <span>Viem</span>
        <span>Ethers.js</span>
        <span>Solidity</span>
        <span>Hardhat</span>
        <span>GraphQL</span>
        <span>Vercel</span>
        <span>GitHub</span>
        <span>Figma</span>
      </div>
      
      <div className="my-8 font-root text-pink-600 text-sm">
        {/* Currently open for freelance projects. */}
        Let’s connect and build something that actually works.
      </div>
      <Icons />
    </section>
  );
}
