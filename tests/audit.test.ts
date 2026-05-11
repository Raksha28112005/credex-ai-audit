import { describe, it, expect } from "vitest";
import { runAudit } from "../lib/audit";

describe("runAudit", () => {
  it("calculates 30% savings by default", () => {
    const result = runAudit({
      tool: "ChatGPT",
      plan: "Plus",
      monthlySpend: "100",
      seats: "5",
      teamSize: "5",
      useCase: "Research",
    });

    expect(result.monthlySavings).toBe(30);
    expect(result.annualSavings).toBe(360);
  });

  it("recommends Plus for small ChatGPT Team accounts", () => {
    const result = runAudit({
      tool: "ChatGPT",
      plan: "Team",
      monthlySpend: "60",
      seats: "2",
      teamSize: "2",
      useCase: "Writing",
    });

    expect(result.recommendedPlan).toBe("Plus");
  });

  it("suggests Claude Pro as alternative for ChatGPT", () => {
    const result = runAudit({
      tool: "ChatGPT",
      plan: "Plus",
      monthlySpend: "100",
      seats: "3",
      teamSize: "3",
      useCase: "Research",
    });

    expect(result.alternativeTool).toBe("Claude Pro");
  });

  it("returns zero savings when monthly spend is zero", () => {
    const result = runAudit({
      tool: "Claude",
      plan: "Pro",
      monthlySpend: "0",
      seats: "1",
      teamSize: "1",
      useCase: "Writing",
    });

    expect(result.monthlySavings).toBe(0);
    expect(result.annualSavings).toBe(0);
  });

  it("annual savings equals monthly savings times 12", () => {
    const result = runAudit({
      tool: "Cursor",
      plan: "Business",
      monthlySpend: "200",
      seats: "10",
      teamSize: "10",
      useCase: "Coding",
    });

    expect(result.annualSavings).toBe(result.monthlySavings * 12);
  });
});