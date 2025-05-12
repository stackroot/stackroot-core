export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[50vh]  max-w-7xl mx-auto px-4 md:px-8 py-16 bg-neutral-100 rounded-xl  text-white bg-gradient-to-b from-sky-800 to-sky-300 scroll-mt-24 mb-24"
    >
      <h2 className="text-2xl md:text-4xl font-root mb-6">Let’s Connect</h2>
      <div className="mb-4 max-w-xl">
        I'm always curious to connect with developers, teams and projects that value thoughtful design, clear frontend architecture, and Web3 innovation. <br />
        {/* I love to work with teams that are passionate about their product and want to build something great.
        If you're building something exciting and believe we could be a good fit — feel free to reach out. */}
      </div>
      {/* <div className="mb-4 max-w-xl">
        I work fast, communicate clearly, and build with a strong focus on usability,
        modularity, and clean code. Let's talk about your project and see if it's a fit.
      </div> */}
      <a
        href="mailto:stackroot@proton.me"
        className="hover:text-zinc-100 hover:underline font-root"
      >
        Send me an email
      </a>
      <p className="mt-6 text-sm text-white">
          Or connect via <a href="https://twitter.com/stackroot" target="_blank" className="underline">X</a> or <a href="https://github.com/stackroot" target="_blank" className="underline">GitHub</a>.
        </p>
    </section>
  );
}
