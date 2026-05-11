# Metrics

## North Star Metric

The North Star metric for AI Spend Audit is **Qualified Consultations Booked per Month**. This metric directly measures the business value of the product because the purpose of the tool is not to maximize repeat usage, but to generate high-intent leads for Credex. A completed audit is useful only if it results in a meaningful conversation with a company that is actively interested in optimizing costs and potentially purchasing financial products. Qualified consultations capture both user engagement and commercial relevance.

## Input Metrics

### 1. Audit Completion Rate

This measures the percentage of visitors who complete the audit after landing on the homepage. It indicates whether the value proposition and form experience are compelling.

### 2. Email Capture Rate

This measures the percentage of completed audits that result in a submitted email address. It reflects the user's willingness to exchange contact information for the audit report.

### 3. Consultation Booking Rate

This measures the percentage of captured leads that schedule a Credex consultation. It indicates whether the audit creates sufficient urgency and trust to prompt a sales conversation.

## What I’d Instrument First

The first events I would track are:
- Landing page visit
- Audit started
- Audit completed
- Email submitted
- PDF downloaded
- Share link created
- Consultation booked

These events provide visibility into the full funnel from acquisition to revenue-generating action.

## Pivot Trigger

I would consider a pivot if, after 500 completed audits, fewer than 5 qualified consultations are booked. That represents a consultation booking rate below 1%. At that level, the tool may be generating curiosity but not attracting users with real purchasing intent, indicating that the target audience, messaging, or product positioning needs to change.