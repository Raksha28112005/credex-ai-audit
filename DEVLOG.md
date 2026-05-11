## Day 1 — 2026-05-05
**Hours worked:** 4

**What I did:** Set up the Next.js project with TypeScript and Tailwind CSS. Created the homepage form to collect AI tool usage details such as tool name, plan, monthly spend, seats, team size, and primary use case.

**What I learned:** Learned how to initialize a Next.js project, organize the App Router structure, and build forms with React state.

**Blockers / what I'm stuck on:** I was initially confused about how to store form data and pass it to the results page.

**Plan for tomorrow:** Implement the audit calculation logic and create the results page.

---

## Day 2 — 2026-05-06
**Hours worked:** 5

**What I did:** Built the `runAudit()` function in `lib/audit.ts` to calculate recommended plans, alternative tools, and estimated monthly and annual savings. Created the results page to display the audit output.

**What I learned:** Learned how to create reusable TypeScript functions and conditionally render calculated results.

**Blockers / what I'm stuck on:** Savings were initially showing as zero because the logic only handled a narrow case.

**Plan for tomorrow:** Integrate Supabase for lead capture and public shareable URLs.

---

## Day 3 — 2026-05-07
**Hours worked:** 6

**What I did:** Connected Supabase to the project. Created the `leads` table and implemented the email capture form. Added Row Level Security policies to allow public inserts.

**What I learned:** Learned how to use Supabase as a backend database and configure Row Level Security policies.

**Blockers / what I'm stuck on:** Encountered a `42501` Row Level Security error that prevented inserts until policies were added.

**Plan for tomorrow:** Build the `shared_audits` table and implement public share URLs.

---

## Day 4 — 2026-05-08
**Hours worked:** 6

**What I did:** Created the `shared_audits` table in Supabase and implemented public share URLs (`/share/[id]`). Added Open Graph and Twitter Card metadata so shared links display rich previews.

**What I learned:** Learned how to create dynamic routes in Next.js and generate metadata for social previews.

**Blockers / what I'm stuck on:** Ran into a React Hooks ordering issue and fixed it by ensuring all hooks are declared before conditional returns.

**Plan for tomorrow:** Add PDF export and benchmark mode.

---

## Day 5 — 2026-05-09
**Hours worked:** 5

**What I did:** Added PDF export using jsPDF. Implemented Benchmark Mode to compare spend per developer with an industry estimate. Added referral code support.

**What I learned:** Learned how to generate PDF files directly in the browser and add additional product-focused features.

**Blockers / what I'm stuck on:** Needed to adjust PDF formatting so long summaries fit correctly.

**Plan for tomorrow:** Create documentation files and launch materials.

---

## Day 6 — 2026-05-10
**Hours worked:** 5

**What I did:** Created README.md, ARCHITECTURE.md, LAUNCH_POST.md, and WIDGET.md. Added deployment instructions and architecture diagrams.

**What I learned:** Learned how to write technical documentation that explains design decisions and system architecture.

**Blockers / what I'm stuck on:** Formatting Mermaid diagrams correctly in Markdown.

**Plan for tomorrow:** Final testing, deployment verification, and submission.

---

## Day 7 — 2026-05-11
**Hours worked:** 6

**What I did:** Tested all features, fixed remaining bugs, updated GitHub, and verified the Vercel deployment. Confirmed that shareable URLs, PDF export, benchmark mode, referral codes, and metadata all work.

**What I learned:** Learned how to debug full-stack applications and deploy production-ready web applications.

**Blockers / what I'm stuck on:** No major blockers after final fixes.

**Plan for tomorrow:** Submit the completed assignment and monitor feedback.