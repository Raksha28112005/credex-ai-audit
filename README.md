# AI Spend Audit

AI Spend Audit is a web application that helps companies analyze their AI tool subscriptions and identify opportunities to reduce costs. It is designed for engineering managers, founders, and finance teams who want to optimize spending on tools such as ChatGPT, Claude, Cursor, and GitHub Copilot.

## Live Demo

https://credex-ai-audit-snowy.vercel.app/

## Features

- AI subscription cost analysis
- Monthly and annual savings estimates
- Recommended plans and alternative tools
- Shareable public audit URLs
- PDF export of audit reports
- Benchmark mode
- Referral codes
- Open Graph and Twitter metadata

## Quick Start

### Install Dependencies

```bash
npm install

Run Locally
npm run dev
Open in Browser

http://localhost:3000

Deploy to Vercel

Add the following environment variables:

         NEXT_PUBLIC_SUPABASE_URL
         NEXT_PUBLIC_SUPABASE_ANON_KEY
Decisions

1.Used Next.js App Router for modern routing and server-side rendering.
2.Used Supabase as the database for lead capture and shareable audit URLs.
3.Enabled Row Level Security with public insert and read policies for secure anonymous access.
4.Used jsPDF for client-side PDF generation to avoid server complexity.
5.Implemented benchmark mode using an industry comparison to demonstrate product thinking.


Tech Stack
 .Next.js 16
 .TypeScript
 .Tailwind CSS
 .Supabase
 .jsPDF
 .Vercel
 
 
Repository Files
 .README.md
 .DEVLOG.md
 .GTM.md
 .ARCHITECTURE.md
 .PRICING.md
 .SECURITY.md
 .LAUNCH_POST.md
 .WIDGET.md

Author

Raksha R 