# Prompts

## Primary Prompt Used for Personalized Summary

```text
Generate a concise, professional summary for an AI subscription audit.

Inputs:
- Tool: {tool}
- Current Plan: {plan}
- Monthly Spend: {monthlySpend}
- Seats: {seats}
- Team Size: {teamSize}
- Primary Use Case: {useCase}
- Recommended Plan: {recommendedPlan}
- Alternative Tool: {alternativeTool}
- Monthly Savings: {monthlySavings}
- Annual Savings: {annualSavings}
- Reason: {reason}

Requirements:
- Write 2–4 sentences.
- Explain the savings opportunity clearly.
- Use a professional tone suitable for engineering managers and finance teams.
- Mention both monthly and annual savings.
- Highlight the recommended plan and alternative tool.
```

## Why I Wrote the Prompt This Way

I structured the prompt to explicitly list all inputs so the model had complete context. The formatting requirements constrained the output length and tone, which helped ensure the generated summary remained concise, professional, and suitable for business users. Including both monthly and annual savings made the result more actionable.

## What I Tried That Didn't Work

### Attempt 1: Minimal Prompt

```text
Summarize this audit.
```

This produced inconsistent and sometimes vague summaries because the model was not given clear instructions about tone, length, or required content.

### Attempt 2: Unconstrained Prompt

```text
Write a detailed explanation of this audit and all recommendations.
```

This often generated responses that were too long for the UI and repeated information already visible on the page.

### Final Approach

The final prompt used structured inputs and explicit formatting constraints. This produced reliable summaries that fit well within the interface and consistently emphasized the most important recommendations and savings estimates.