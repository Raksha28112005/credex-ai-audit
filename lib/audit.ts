type AuditInput = {
  tool: string;
  plan: string;
  monthlySpend: string;
  seats: string;
};

export function runAudit(data: AuditInput) {
  const currentSpend = Number(data.monthlySpend);
  const seats = Number(data.seats);

  // Rule 1: Small teams on Team plan may not need it
  if (
    (data.tool === "ChatGPT" || data.tool === "Claude") &&
    data.plan === "Team" &&
    seats <= 2
  ) {
    const optimizedSpend = 20 * seats;
    const monthlySavings = Math.max(0, currentSpend - optimizedSpend);

    return {
      recommendedPlan: "Plus",
      monthlySavings,
      annualSavings: monthlySavings * 12,
      reason:
        "Small teams with two or fewer seats can often use individual plans instead of Team.",
    };
  }

  // No savings case
  return {
    recommendedPlan: data.plan,
    monthlySavings: 0,
    annualSavings: 0,
    reason: "Your current setup appears cost-effective.",
  };
}