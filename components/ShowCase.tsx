"use client"

export default function ShowCase() {
  return (
    <section id="showcases" className="min-h-[50vh] max-w-7xl mx-auto px-4 md:px-8 py-16 bg-neutral-50 rounded-xl shadow-lg scroll-mt-24 text-white bg-gradient-to-b from-sky-800 to-sky-300 mb-24">
      <h2 className="text-2xl md:text-4xl font-root mb-6">Showcases</h2>
      <div className="max-w-3xl flex flex-col">
        <span>Real-world frontend builds — live soon.</span>
        <span>Wallet Connect · Token Minting · Staking UI</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
        {[
          { title: 'Wallet Connect', comingSoon: false, url: '/wallet' },
          { title: 'ERC20 Token Mint UI', comingSoon: true, url: '/mint' },
          { title: 'Staking Interface', comingSoon: true, url: '/staking' },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white font-root rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 mb-4">
              {item.comingSoon
                ? 'This feature is coming soon.'
                : 'This feature is available now.'}
            </p>
            <p className="text-gray-500 mb-4">
              {item.comingSoon
                ? 'Stay tuned for updates!'
                : 'Explore the features and functionalities.'}
            </p>
            <a
              href={item.url}
              className={`inline-block px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-lg shadow hover:bg-sky-700 transition ${
                item.comingSoon ? 'cursor-not-allowed opacity-50' : ''
              }`}
              
              onClick={(e) => {
                if (item.comingSoon) {
                  e.preventDefault();
                  alert('This feature is coming soon!');
                }
              }}
            >
              {item.comingSoon ? 'Coming Soon' : 'Explore Now'} 
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
