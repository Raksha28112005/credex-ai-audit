"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
        team_size: teamSize ? Number(teamSize) : null,
      },
    ]);

    if (error) {
      setMessage("Something went wrong. Please try again.");
    } else {
      setMessage("Your audit has been saved successfully!");
      setEmail("");
      setCompanyName("");
      setRole("");
      setTeamSize("");
    }

    setLoading(false);
  };

  return (
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
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
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
          <p className="text-gray-300 mt-2">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}