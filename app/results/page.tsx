"use client";

import { useEffect, useState } from "react";
import { runAudit } from "@/lib/audit";
import { supabase } from "@/lib/supabase";
import jsPDF from "jspdf";

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

  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [captureTeamSize, setCaptureTeamSize] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [shareId, setShareId] = useState<string | null>(null);

  // Load saved audit data
  useEffect(() => {
    const savedData = localStorage.getItem("audit-form");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  // Compute audit only when data exists
  const audit = data ? runAudit(data) : null;

  // Compute summary only when audit exists
  const summary =
    data && audit
      ? `Your current ${data.tool} setup on the ${
          data.plan || "current"
        } plan could save $${audit.monthlySavings.toFixed(
          2
        )} per month and $${audit.annualSavings.toFixed(
          2
        )} per year. ${audit.reason}`
      : "";

  // Save shared audit once
  useEffect(() => {
    if (!data || !audit || !summary || shareId) return;

    const saveSharedAudit = async () => {
      const { data: sharedData, error } = await supabase
        .from("shared_audits")
        .insert([
          {
            tool: data.tool,
            plan: data.plan,
            recommended_plan: audit.recommendedPlan,
            alternative_tool: audit.alternativeTool,
            monthly_savings: audit.monthlySavings,
            annual_savings: audit.annualSavings,
            reason: audit.reason,
            summary,
            referral_code: "CRED10",
          },
        ])
        .select("id")
        .single();

      if (!error && sharedData) {
        setShareId(sharedData.id);
      }
    };

    saveSharedAudit();
  }, [data, audit, summary, shareId]);

  // Stop rendering until data and audit are ready
  if (!data || !audit) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>No audit data found.</p>
      </main>
    );
  }
  const downloadPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("AI Spend Audit Report", 20, 20);

  doc.setFontSize(12);
  doc.text(`Tool: ${data.tool}`, 20, 40);
  doc.text(`Current Plan: ${data.plan || "Not specified"}`, 20, 50);
  doc.text(`Recommended Plan: ${audit.recommendedPlan}`, 20, 60);
  doc.text(`Alternative Tool: ${audit.alternativeTool}`, 20, 70);

  doc.text(
    `Monthly Savings: $${audit.monthlySavings.toFixed(2)}`,
    20,
    80
  );

  doc.text(
    `Annual Savings: $${audit.annualSavings.toFixed(2)}`,
    20,
    90
  );

  const lines = doc.splitTextToSize(summary, 170);
  doc.text(lines, 20, 110);

  doc.save("ai-spend-audit-report.pdf");
};


  const handleSubmit = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("leads").insert([
      {
        email,
        company_name: companyName,
        role,
        team_size: captureTeamSize ? Number(captureTeamSize) : null,
      },
    ]);

    if (error) {
      console.error(error);
      setMessage(`Database error: ${error.message}`);
    } else {
      setMessage("Your audit has been saved successfully!");
      setEmail("");
      setCompanyName("");
      setRole("");
      setCaptureTeamSize("");
    }

    setLoading(false);
  };

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

          <p>
            <strong>Recommended Alternative:</strong>{" "}
            {audit.alternativeTool}
          </p>

          <p className="text-gray-300">{audit.alternativeReason}</p>

          <h2 className="text-3xl font-bold">
            Estimated Monthly Savings: $
            {audit.monthlySavings.toFixed(2)}
          </h2>

          <h3 className="text-2xl text-green-400">
            Estimated Annual Savings: $
            {audit.annualSavings.toFixed(2)}
          </h3>

          <p className="text-gray-300">{audit.reason}</p>

          <div className="mt-4 bg-zinc-800 rounded-2xl p-4 border border-zinc-700">
  <h3 className="text-lg font-semibold mb-2">
    Benchmark Mode
  </h3>

  <p>
    Your AI spend per developer is $
    {(
      Number(data.monthlySpend) /
      Math.max(Number(data.teamSize), 1)
    ).toFixed(2)}.
  </p>

  <p className="text-gray-300 mt-2">
    Companies your size typically spend around $35 per developer.
  </p>
</div>
          

          <div className="mt-6 bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-xl font-semibold mb-3">
              Personalized AI Summary
            </h3>

            <p className="text-gray-300 leading-7">{summary}</p>

            {shareId && (
              <p className="mt-4 text-sm text-gray-400">
                Share this audit:{" "}
                <a
                  href={`/share/${shareId}`}
                  className="underline text-blue-400"
                >
                  /share/{shareId}
                </a>
              </p>
            )}
            <button
            onClick={downloadPDF}
            className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-medium"
            >
              Download PDF
              </button>

          </div>
        </div>

        <div className="mt-10 bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <h2 className="text-3xl font-bold mb-6">
            Get Your Audit by Email
          </h2>

          <div className="grid gap-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Your Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <input
              type="number"
              placeholder="Team Size"
              value={captureTeamSize}
              onChange={(e) => setCaptureTeamSize(e.target.value)}
              className="bg-zinc-800 p-4 rounded-xl outline-none"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-white text-black py-4 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
            >
              {loading ? "Saving..." : "Email My Audit"}
            </button>

            {message && (
              <p className="text-gray-300 mt-2">{message}</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}