```md id="reflection_md_final"
# Reflection

## 1. The hardest bug I hit this week, and how I debugged it

The hardest bug I encountered was a Supabase Row Level Security (RLS) error when saving lead information. The application showed the message `new row violates row-level security policy for table "leads"`. At first, I thought the issue was in my React code because the form submission logic seemed correct. I tested whether the field names were wrong and added `console.error(error)` to inspect the full error object. The code `42501` indicated a permissions issue rather than a coding mistake.

I then checked the Supabase dashboard and confirmed that Row Level Security was enabled, but no policy allowed anonymous users to insert rows. I created an insert policy for the `anon` role using `WITH CHECK (true)`. After saving the policy and restarting the application, the form worked immediately.

This bug taught me to separate frontend and backend concerns and to trust the exact error code rather than making assumptions. The most effective step was reading the database error carefully and testing the hypothesis that the problem was configuration, not application logic.

## 2. A decision I reversed mid-week, and what made me reverse it

At the beginning of the week, I planned to implement only the required MVP features. My reasoning was that completing a stable core product was more important than adding optional functionality that might introduce bugs. After finishing the audit flow, Supabase integration, and shareable URLs, I revisited the assignment instructions and realized that the bonus features were an opportunity to demonstrate product thinking and initiative.

I reversed my decision because several bonus features were relatively straightforward. PDF export could be added with jsPDF, Benchmark Mode required only a simple calculation, and the launch post and embeddable widget were easy markdown files. These features significantly improved the professionalism of the project without adding excessive complexity.

This change in approach taught me that once a product is stable, carefully selected enhancements can create disproportionate value and better communicate both technical and entrepreneurial ability.

## 3. What I would build in week 2 if I had it

If I had a second week, I would focus on turning AI Spend Audit into a more realistic SaaS product. My first priority would be adding user authentication so companies could save multiple audits and access them from a dashboard. This would make the tool more useful for repeated analysis rather than one-time use.

I would also improve the recommendation engine by replacing the fixed savings estimate with more sophisticated logic based on company size, industry, and use case. Another important feature would be automatic email delivery of branded PDF reports using a server-side workflow.

On the business side, I would build analytics to measure conversion rates, referral performance, and popular tools. Finally, I would add white-label support so agencies could customize the product for their own clients. These enhancements would move the project from a prototype toward a commercially viable platform.

## 4. How I used AI tools

I used ChatGPT throughout the project for debugging, architecture guidance, and documentation. It helped me understand Supabase Row Level Security, Next.js App Router patterns, PDF export with jsPDF, and the structure of required markdown files. AI was especially useful when I needed step-by-step explanations for unfamiliar technologies.

I did not trust AI to make final decisions without verification. I manually reviewed all generated code, tested each feature locally, and validated SQL scripts before executing them. I was particularly cautious with database policies and React hooks because small mistakes can cause difficult bugs.

One specific time AI was wrong involved a React hooks ordering issue. A suggested code change placed a `useEffect()` after a conditional return, which caused a runtime error. I identified the problem, moved all hooks above the conditional return, and confirmed the fix through testing.

## 5. Self-rating

 . Discipline — 9/10
I worked consistently across all seven days, maintained detailed logs, and completed both required and bonus features.

 . Code Quality — 8/10
The code is modular and typed, though the recommendation logic is still heuristic and could be refined.

. Design Sense — 8/10
The interface is clean and user-friendly, with polished features such as PDF export and shareable links.

 . Problem Solving — 9/10
I systematically resolved issues involving Supabase permissions, React hooks, and deployment.

. Entrepreneurial Thinking — 9/10
I implemented bonus features such as benchmark mode, referral codes, and launch materials to position the project as a credible SaaS product.
```
