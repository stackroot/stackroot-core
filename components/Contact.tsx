// components/Contact.tsx
export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[50vh] md:min-h-screen px-6 md:px-8 py-16 bg-neutral-100 rounded-xl shadow-t shadow-lg scroll-mt-24"
    >
      <h2 className="text-3xl font-space mb-6">Let’s connect</h2>
      <p className="mb-4 text-neutral-700 max-w-xl">
        Interested in working together?
      </p>
      <a
        href="mailto:stackroot@proton.me"
        className="text-zinc-600 hover:underline font-space"
      >
        stackroot@proton.me
      </a>
    </section>
  );
}
