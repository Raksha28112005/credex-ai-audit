type AuditInput = {
  tool: string;
  plan: string;
  monthlySpend: string;
  seats: string;
};

export function runAudit(data: AuditInput) {
  const currentSpend = Number(data.monthlySpend);
  const seats = Number(data.seats);

  // Default values
  let recommendedPlan = data.plan;
  let monthlySavings = 0;
  let annualSavings = 0;
  let reason = "Your current setup appears cost-effective.";

  // Alternative tool recommendation (new)
  let alternativeTool = "No better alternative identified";
  let alternativeReason =
    "Your current tool is already competitive for this use case.";

  // Suggested alternative tool logic
  if (data.tool === "Cursor") {
    alternativeTool = "GitHub Copilot Business";
    alternativeReason =
      "Provides similar coding assistance at a lower cost for many teams.";
  } else if (data.tool === "ChatGPT") {
    alternativeTool = "Claude Pro";
    alternativeReason =
      "Comparable writing and research capabilities at a lower monthly cost.";
  } else if (data.tool === "Claude") {
    alternativeTool = "ChatGPT Plus";
    alternativeReason =
      "Offers similar capabilities and may be more cost-effective.";
  } else if (data.tool === "Gemini") {
    alternativeTool = "ChatGPT Plus";
    alternativeReason =
      "Provides broader model support and competitive pricing.";
  } else if (data.tool === "OpenAI API") {
    alternativeTool = "Anthropic API";
    alternativeReason =
      "Depending on usage, Anthropic API may offer lower overall costs.";
  } else if (data.tool === "Anthropic API") {
    alternativeTool = "OpenAI API";
    alternativeReason =
      "Depending on workload, OpenAI API may provide better pricing.";
  }

  // Rule 1: Small teams on Team plan may not need it
  if (
    (data.tool === "ChatGPT" || data.tool === "Claude") &&
    data.plan === "Team" &&
    seats <= 2
  ) {
    const optimizedSpend = 20 * seats;
    monthlySavings = Math.max(0, currentSpend - optimizedSpend);
    annualSavings = monthlySavings * 12;
    recommendedPlan = "Plus";
    reason =
      "Small teams with two or fewer seats can often use individual plans instead of Team.";
  }

  // Return audit result
  return {
    recommendedPlan,
    monthlySavings,
    annualSavings,
    reason,
    alternativeTool,
    alternativeReason,
  };
}