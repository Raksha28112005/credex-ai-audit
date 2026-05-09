"use client";

import { useEffect, useState } from "react";
import { runAudit } from "@/lib/audit";

type AuditData = {
  tool: string;
  plan: string;
  monthlySpend: string;
  seats: string;
  teamSize: string;
  useCase: string;
};

export default function ResultsPage() {
  const [data, setData] = useState<AuditData | null>(null);

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

  const audit = runAudit(data);

  const summary = `Your current ${data.tool} setup on the ${
    data.plan || "current"
  } plan could save $${audit.monthlySavings.toFixed(
    2
  )} per month and $${audit.annualSavings.toFixed(
    2
  )} per year. ${audit.reason}`;

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Audit Results</h1>

        <div className="bg-zinc-900 rounded-3xl p-8 space-y-4">
          <p>
            <strong>Tool:</strong> {data.tool}
          </p>

          <p>
            <strong>Current Plan:</strong> {data.plan || "Not specified"}
          </p>

          <p>
            <strong>Monthly Spend:</strong> ${data.monthlySpend}
          </p>

          <p>
            <strong>Seats:</strong> {data.seats}
          </p>

          <p>
            <strong>Team Size:</strong> {data.teamSize}
          </p>

          <p>
            <strong>Primary Use Case:</strong> {data.useCase}
          </p>

          <hr className="border-zinc-700 my-6" />

          <p>
            <strong>Recommended Plan:</strong> {audit.recommendedPlan}
          </p>

          <h2 className="text-3xl font-bold">
            Estimated Monthly Savings: $
            {audit.monthlySavings.toFixed(2)}
          </h2>

          <h3 className="text-2xl text-green-400">
            Estimated Annual Savings: $
            {audit.annualSavings.toFixed(2)}
          </h3>

          <p className="text-gray-300">{audit.reason}</p>

          <div className="mt-6 bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">
              Personalized AI Summary
            </h3>

            <p className="text-gray-300 leading-7">
              {summary}
            </p>
          </div>

          {audit.monthlySavings > 500 && (
            <div className="mt-6 p-4 bg-green-900/30 border border-green-700 rounded-xl">
              <p className="font-semibold text-green-300">
                You could save significantly. Credex may help you reduce costs
                even further through discounted AI credits.
              </p>
            </div>
          )}

          {audit.monthlySavings === 0 && (
            <div className="mt-6 p-4 bg-blue-900/30 border border-blue-700 rounded-xl">
              <p className="text-blue-300">
                Your current setup appears well optimized.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}