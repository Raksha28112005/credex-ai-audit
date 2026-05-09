"use client";

import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("audit-form");

    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  if (!data) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>No audit data found.</p>
      </main>
    );
  }

  const monthlySavings = Number(data.monthlySpend) * 0.3;
  const annualSavings = monthlySavings * 12;

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Audit Results</h1>

        <div className="bg-zinc-900 rounded-3xl p-8 space-y-4">
          <p><strong>Tool:</strong> {data.tool}</p>
          <p><strong>Plan:</strong> {data.plan || "Not specified"}</p>
          <p><strong>Monthly Spend:</strong> ${data.monthlySpend}</p>
          <p><strong>Seats:</strong> {data.seats}</p>
          <p><strong>Team Size:</strong> {data.teamSize}</p>
          <p><strong>Use Case:</strong> {data.useCase}</p>

          <hr className="border-zinc-700 my-6" />

          <h2 className="text-3xl font-bold">
            Estimated Monthly Savings: ${monthlySavings.toFixed(2)}
          </h2>

          <h3 className="text-2xl text-green-400">
            Estimated Annual Savings: ${annualSavings.toFixed(2)}
          </h3>

          <p className="text-gray-300">
            Based on your current setup, we estimate you may be able to reduce
            AI spending by approximately 30% through plan optimization and
            vendor credits.
          </p>
        </div>
      </div>
    </main>
  );
}