## Day 1 — 2026-05-07

**Hours worked:** 4

**What I did:**  
Set up the project using Next.js, TypeScript, and Tailwind CSS. Connected the project to GitHub and created the initial landing page and audit form UI for the AI Spend Audit application.

**What I learned:**  
I learned how modern SaaS applications are structured and understood the importance of setting up a clean project architecture before building features.

**Blockers / what I'm stuck on:**  
Still researching the best way to structure pricing comparison logic for multiple AI vendors and plans.

**Plan for tomorrow:**  
Implement dynamic form functionality, add persistent form state, and begin building the audit recommendation logic.


## Day 2 — 2026-05-08

**Hours worked:** 4

**What I did:**  
Converted the landing page into a fully functional controlled form using React state. Added localStorage persistence so form data remains after page refresh. Implemented form validation and created a results page that displays the submitted data and estimated savings.

**What I learned:**  
I learned how to use React state to manage form inputs, persist data in the browser using localStorage, and navigate between pages using the Next.js App Router.

**Blockers / what I'm stuck on:**  
I needed to understand how to structure the audit logic separately from the UI so that recommendations could be generated consistently.

**Plan for tomorrow:**  
Build the rule-based audit engine, connect it to the results page, and replace placeholder savings with actual calculations based on pricing data.

## Day 3 — 2026-05-09

**Hours worked:** 4

**What I did:**  
Implemented the rule-based audit engine and connected it to the results page. Added real savings calculations and documented pricing sources.

**What I learned:**  
I learned how to separate business logic from UI and build deterministic recommendation rules.

**Blockers / what I'm stuck on:**  
Need to improve the visual design and add AI-generated summaries.

**Plan for tomorrow:**  
Integrate an LLM-generated summary and redesign the results page for better presentation.


## Day 4 — 2026-05-10

**Hours worked:** 4

**What I did:**  
Enhanced the audit results page by adding a personalized AI summary section based on the audit calculations. Created PROMPTS.md to document the prompt design and fallback summary strategy.

**What I learned:**  
I learned how to generate dynamic summaries from structured data and present recommendations in a more polished and user-friendly format.

**Blockers / what I'm stuck on:**  
Need to set up a real backend to store leads and collect email addresses after users view their audit.

**Plan for tomorrow:**  
Integrate Supabase, create a lead capture form, and store audit submissions in a database.

## Day 5 — Supabase Lead Capture Integration

**Hours worked:** 6

**What I did:**
- Created a Supabase project
- Created the `leads` table
- Added environment variables to `.env.local`
- Installed `@supabase/supabase-js`
- Created `lib/supabase.ts`
- Built the lead capture form
- Connected the form to Supabase
- Configured Row Level Security (RLS) policies
- Verified that form submissions are saved in the database

**What I learned:**
I learned how to connect a Next.js application to Supabase, insert records into a PostgreSQL database, and configure Row Level Security policies to allow public inserts.

**Blockers / Challenges:**
- Module import errors with `LeadCapture`
- Incorrect file naming (`superbase.ts` vs `supabase.ts`)
- Row Level Security policy blocking inserts

**Outcome:**
Successfully saved lead data (email, company name, role, and team size) into the Supabase `leads` table.

**Plan for Tomorrow:**
Continue testing, polish the UI, and prepare the application for deployment.


## Day 6 — Vercel Deployment

**Hours worked:** 3

**What I did:**
Connected the GitHub repository to Vercel, added Supabase environment variables, deployed the Next.js application, and tested the live website.

**What I learned:**
I learned how to deploy a Next.js application to Vercel and configure environment variables for production.

**Outcome:**
Successfully deployed the AI Spend Audit application and obtained a public URL.