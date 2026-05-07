export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Stop Overspending on AI Tools
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Analyze your AI stack, compare plans, and discover hidden savings in under 2 minutes.
        </p>

        <button className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
          Start Free Audit
        </button>

      </section>

      {/* FORM SECTION */}
      <section className="max-w-4xl mx-auto px-6 pb-24">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            AI Spend Audit
          </h2>

          <div className="grid gap-5">

            <input
              type="text"
              placeholder="AI Tool Name"
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Current Plan"
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              type="number"
              placeholder="Monthly Spend ($)"
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              type="number"
              placeholder="Number of Seats"
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <select className="bg-zinc-800 p-4 rounded-xl outline-none">
              <option>Primary Use Case</option>
              <option>Coding</option>
              <option>Writing</option>
              <option>Research</option>
              <option>Data Analysis</option>
              <option>Mixed</option>
            </select>

            <button className="bg-white text-black py-4 rounded-xl font-semibold hover:scale-105 transition">
              Generate Audit
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}