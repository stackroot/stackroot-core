import { Button } from "@/components/ui/button";
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
        If you're building something exciting and believe we could be a good fit ,  feel free to reach out. */}
      </div>
      {/* <div className="mb-4 max-w-xl">
        I work fast, communicate clearly, and build with a strong focus on usability,
        modularity, and clean code. Let's talk about your project and see if it's a fit.
      </div> */}
      <Button
        asChild
        className="btn"
      >
        <a href="mailto:stackroot@proton.me">
          Send me an email
        </a>
      </Button>
      <p className="mt-6 text-sm text-white">
          Or connect via <a href="https://x.com/stackroot" target="_blank" className="underline">X</a> or <a href="https://github.com/stackroot" target="_blank" className="underline">GitHub</a>.
        </p>
    </section>
  );
}
