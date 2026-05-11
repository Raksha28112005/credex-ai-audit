import { supabase } from "@/lib/supabase";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const { data } = await supabase
    .from("shared_audits")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    return {
      title: "Shared Audit Report",
      description: "AI Spend Audit Report",
    };
  }

  const title = `${data.tool} Audit Report`;
  const description = `Potential savings: $${Number(
    data.monthly_savings
  ).toFixed(2)}/month and $${Number(
    data.annual_savings
  ).toFixed(2)}/year.`;

  const url = `https://credex-ai-audit-snowy.vercel.app/share/${id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function SharePage({ params }: Props) {
  const { id } = await params;

  const { data } = await supabase
    .from("shared_audits")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Audit not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-8 space-y-4">
        <h1 className="text-5xl font-bold mb-8">
          Shared Audit Report
        </h1>

        <p>
          <strong>Tool:</strong> {data.tool}
        </p>

        <p>
          <strong>Current Plan:</strong> {data.plan}
        </p>

        <p>
          <strong>Recommended Plan:</strong>{" "}
          {data.recommended_plan}
        </p>

        <p>
          <strong>Alternative Tool:</strong>{" "}
          {data.alternative_tool}
        </p>


        <p>
            <strong>Referral Code:</strong> {data.referral_code}
        </p>

        <h2 className="text-3xl font-bold">
          Monthly Savings: $
          {Number(data.monthly_savings).toFixed(2)}
        </h2>

        <h3 className="text-2xl text-green-400">
          Annual Savings: $
          {Number(data.annual_savings).toFixed(2)}
        </h3>

        <p className="text-gray-300">{data.reason}</p>

        <div className="mt-6 bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
          <h3 className="text-xl font-semibold mb-3">
            Personalized AI Summary
          </h3>

          <p className="text-gray-300 leading-7">
            {data.summary}
          </p>
        </div>
      </div>
    </main>
  );
}