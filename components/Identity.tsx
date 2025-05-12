export default function Identity() {
  return (
    <section className="relative h-[100px] sm:h-[250px] md:h-[300px] bg-white overflow-hidden font-root mb-16 md:mb-24">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-6xl sm:text-8xl lg:text-[10rem] font-semibold text-sky-300 opacity-15 select-none pointer-events-none leading-none">
          StackRoot
        </h2>
        <h3 className="font-root text-2xl sm:text-4xl lg:text-6xl text-pink-200 opacity-30">build from the ground up</h3>
      </div>
    </section>

  );
}
