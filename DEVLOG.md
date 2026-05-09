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