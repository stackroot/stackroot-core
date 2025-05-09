export default function ShowCase() {
  return (
    <section id="showcases" className="min-h-[50vh] md:min-h-screen max-w-7xl mx-auto px-4 md:px-8 py-16 bg-neutral-50 rounded-xl shadow-lg scroll-mt-24 text-white bg-gradient-to-b from-sky-800 to-sky-300">
      <h2 className="text-2xl md:text-4xl font-root mb-6">Showcases</h2>
      <div className="max-w-3xl flex flex-col">
        <span>Real-world frontend builds — live soon.</span>
        <span>Wallet Connect · Token Minting · Staking UI</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
        {[
          { title: 'Wallet Connect', comingSoon: true },
          { title: 'ERC20 Token Mint UI', comingSoon: true },
          { title: 'Staking Interface', comingSoon: true },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white font-root rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">Coming soon</p>
          </div>
        ))}
      </div>
    </section>
  );
}
