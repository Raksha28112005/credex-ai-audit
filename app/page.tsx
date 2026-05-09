"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [seats, setSeats] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("");

  // Load saved form data when page opens
  useEffect(() => {
    const savedData = localStorage.getItem("audit-form");

    if (savedData) {
      const data = JSON.parse(savedData);
      setTool(data.tool || "");
      setPlan(data.plan || "");
      setMonthlySpend(data.monthlySpend || "");
      setSeats(data.seats || "");
      setTeamSize(data.teamSize || "");
      setUseCase(data.useCase || "");
    }
  }, []);

  // Save data and go to results page
  const handleGenerateAudit = () => {
    if (!tool || !monthlySpend || !seats || !teamSize || !useCase) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = {
      tool,
      plan,
      monthlySpend,
      seats,
      teamSize,
      useCase,
    };

    localStorage.setItem("audit-form", JSON.stringify(formData));
    router.push("/results");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Stop Overspending on AI Tools
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Analyze your AI stack, compare plans, and discover hidden savings in
          under 2 minutes.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8">AI Spend Audit</h2>

          <div className="grid gap-5">
            <input
              type="text"
              placeholder="AI Tool Name"
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Current Plan"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              type="number"
              placeholder="Monthly Spend ($)"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(e.target.value)}
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              type="number"
              placeholder="Number of Seats"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              type="number"
              placeholder="Team Size"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <select
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            >
              <option value="">Primary Use Case</option>
              <option value="Coding">Coding</option>
              <option value="Writing">Writing</option>
              <option value="Research">Research</option>
              <option value="Data Analysis">Data Analysis</option>
              <option value="Mixed">Mixed</option>
            </select>

            <button
              onClick={handleGenerateAudit}
              className="bg-white text-black py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Generate Audit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}