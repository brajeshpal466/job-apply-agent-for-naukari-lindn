# Naukri Job Application Automation Specification (Spec Kit)

## 1. Specification Overview

* **Target URL**: [https://www.naukri.com/mnjuser/recommendedjobs](https://www.naukri.com/mnjuser/recommendedjobs)
* **Strict Core Skill Requirement (MANDATORY)**:
  * **ELIGIBLE ROLES**:
    * Frontend: `React` (or `React.js`), `Next.js`, `TypeScript`, `JavaScript`.
    * Backend / Fullstack: `Node.js`, `Express`, `.NET` / `C#` / `.NET Core` / `ASP.NET` (combined with React / TS / JS).
  * **STRICT JAVA EXCLUSION (CRITICAL - DO NOT APPLY)**:
    * Strictly DO NOT apply to any Java roles, Java Full Stack, Spring, or Spring Boot positions, even if React is listed alongside.
    * Skip pure backend Python without React, pure Salesforce, QA, or non-aligned roles.
* **Search / Target Roles**:
  * `React Developer`
  * `Frontend Developer`
  * `Senior React Developer`
  * `Senior Software Engineer` (React / TypeScript / JavaScript / Node / .NET focus)
  * `Node.js React Full Stack Developer`
  * `.NET React Developer`
* **Resume Alignment**: React.js, Next.js, Redux (Toolkit/Thunk), TypeScript, JavaScript, Micro Frontends (MFE), C#/.NET Core, Azure, AWS (5+ years experience)
* **Experience Filter**: `5+ Years` (Total Experience: 5.2 Years)
* **Candidate Location**: Bengaluru, India (Target Locations: Bengaluru, Hyderabad, Pune, Noida, Gurugram, Remote, Hybrid)
* **Availability / Preference**: **Immediate Joiner** (0 days notice / serving notice period)
* **Strict Freshness Constraint**: **STRICTLY within 1 week or sooner (0–7 days / 1 week max)**. Discard any post older than 7 days.
* **Target Application Target**: **Autonomous Continuous Loop until reaching 100 successful applications** (iterating through multi-apply batches across Recommended Jobs & Search Streams until counter in `applied_jobs.json` >= 100)
* **Execution Engine**: Chrome DevTools MCP (`chrome-devtools` server with `--autoConnect` flag)
* **Candidate Source of Truth**: [candidate_profile.json](./candidate_profile.json)
* **Audit / Tracking Log**: `applied_jobs.json`

---

## 2. Candidate Quick Reference Data

| Field | Sample Value (See [candidate_profile.sample.md](./candidate_profile.sample.md)) |
| :--- | :--- |
| **Full Name** | `{{YOUR_FULL_NAME}}` |
| **Email** | `{{YOUR_EMAIL}}` |
| **Phone** | `+91-{{YOUR_PHONE}}` |
| **Current Location** | Bengaluru, India |
| **Current Role** | Senior Software Engineer |
| **Total Experience** | 5.2 Years (5+ Years) |
| **Current CTC / Package** | 27 LPA |
| **Expected CTC / Package** | 27–30+ LPA (dynamically matched to employer budget; default 30 LPA) |
| **Face-to-Face Interview** | Yes / Available (In-person rounds in Bengaluru) |
| **Notice Period** | Immediate Joiner / 0 Days |
| **Highest Education** | B.Tech Computer Science |
| **Core Skills** | React.js, Next.js, Redux, Redux Toolkit, TypeScript, JavaScript, Micro Frontends (MFE), Node.js, Express.js |

---

## 3. Chrome DevTools MCP Integration & Connectivity

The automation leverages the `chrome-devtools` MCP server configured in `~/.gemini/config/mcp_config.json`:

1. **Chrome Pre-Requisite**:
   * Open Google Chrome with remote debugging enabled:
     * Option A: Launch Chrome with flag `--remote-debugging-port=9222`
     * Option B: Navigate to `chrome://inspect/#remote-debugging` and ensure the remote debugging server is running.
   * Make sure you are already logged into your account on [Naukri.com](https://www.naukri.com).
2. **MCP DevTools Operations**:
   * Inspect current tabs & active pages.
   * Navigate tab to target URLs.
   * Evaluate DOM elements (selectors for job cards, apply buttons, modal forms).
   * Simulate user clicks and input entry for application forms.

---

## 4. Multi-Phase Execution Workflow

### Phase 1: Pre-flight & Session Verification
1. MCP checks connection to Chrome via `chrome-devtools`.
2. Inspect active tabs or navigate to `https://www.naukri.com/mnjuser/recommendedjobs`.
3. Verify if user is authenticated:
   * If logged in: Page displays user recommendations or profile header.
   * If not logged in: Prompt the user to log in manually via Chrome, then proceed.

### Phase 2: Search & Filter Application
1. **Direct Recommendation Stream**:
   * Process `https://www.naukri.com/mnjuser/recommendedjobs`.
2. **Targeted Search Queries**:
   * Query URLs:
     * `https://www.naukri.com/react-js-jobs-in-bengaluru-bangalore?experience=5`
     * `https://www.naukri.com/react-developer-jobs-in-bengaluru-bangalore?experience=5`
     * `https://www.naukri.com/frontend-developer-jobs-in-bengaluru-bangalore?experience=5`
     * `https://www.naukri.com/senior-software-engineer-react-jobs-in-bengaluru-bangalore?experience=5`
3. **Filter Presets**:
   * **Experience**: 5 years / 5-7 years range
   * **Location**: Bengaluru, Hyderabad, Pune, Noida, Gurugram, Remote, Hybrid
   * **Freshness / Posted Date**: Last 1–7 days (prioritize newest)

### Phase 3: Job Card Parsing & Eligibility Scoring
For each job card detected on the page:
1. Extract:
   * Job Title
   * Company Name
   * Experience requirement range (e.g., 4-8 years, 5-10 years)
   * Posted Date / Freshness (e.g. "Just now", "Today", "1 Day Ago" ... "7 Days Ago")
   * Key Skills / Tech Stack
   * Job ID / Job URL
   * Status (`Applied`, `Already Applied`, `Apply`, `Apply on Company Site`)
2. Verification Rules (MANDATORY FILTER):
   * **Skill Check**: MUST contain `React` (or `React.js`), `TypeScript`, or `JavaScript`. Permitted backend/fullstack complements: `Node.js`, `Express`, `.NET` / `C#` / `.NET Core`.
   * **STRICT JAVA EXCLUSION**: Absolutely DO NOT apply to any Java roles, Java Full Stack, Spring, or Spring Boot positions, even if React is listed alongside. Skip all roles where Java is a primary backend requirement.
   * **Freshness Check**: MUST be posted **within 1 week (0–7 days max)**. Skip anything posted > 7 days ago.
   * **Deduplication**: Check against `applied_jobs.json` — skip if already applied.
   * **Portal Apply**: Skip external redirect jobs if user requests in-portal applies only.

### Phase 4: Application & Questionnaire Autofill
1. **Multi-Job Selection Rule (Max 5 Jobs per Batch - UI Selection Limit Only)**:
   * **No Overall Application Cap**: We have no limit on total applications; apply continuously across available opportunities.
   * **Portal Selection Limit**: The 5-job cap is purely a Naukri UI multi-select restriction (`"You can select upto 5 jobs to apply"`).
   * **Batch Cycling**: The agent selects up to 5 eligible matching jobs per batch, applies, logs them, and continues to the next batch of 5 jobs.
2. **Simple 1-Click Apply**:
   * If the application completes immediately with resume on file: Record as `SUCCESS`.
3. **Chatbot / Modal Questionnaire (NEVER SKIP ANY QUESTION)**:
   * If a modal or chatbot appears with screening questions, match questions against `candidate_profile.json`:
     * **Notice Period**: Select `Immediate` / `0 days` / `Serving Notice Period`.
     * **Total Experience**: Input `5` or `5.2`.
     * **React / React.js Experience**: Input `5`.
     * **JavaScript Experience**: Input `5`.
     * **TypeScript Experience**: Input `5`.
     * **Other Technologies / Tools**: Input `3` (or `2`).
     * **Current Location**: Select/Enter `Bengaluru`.
     * **Are you open to relocate?**: `Yes`.
     * **Face to Face / In-Person Interview**: `Yes` / `Available`.
     * **Current CTC**: `27 LPA` (or `27`).
     * **Expected CTC**: Match job budget (`27`, `28`, `29`, `30+` LPA; default `30 LPA` or `30`).
     * **Current Company**: `{{CURRENT_COMPANY}}`.
     * **Current Title**: `Senior Software Engineer`.
3. Submit the form and verify the confirmation toast/modal ("Successfully applied to...").

### Phase 5: Tracking & Reporting
1. Append applied job entry to `applied_jobs.json`:
   ```json
   {
     "jobId": "...",
     "title": "Senior Frontend Engineer - React.js",
     "company": "...",
     "location": "<job_location (Bengaluru / Hyderabad / Pune / Noida / Gurugram / Remote)>",
     "appliedAt": "2026-11-07T21:45:00Z",
     "status": "APPLIED"
   }
   ```
2. Display a structured summary table to the user with applied jobs and any questionnaire answers filled.

---

## 5. Safety & Control Gates
* **User Confirmation**: The agent asks or provides an execution summary before bulk applying.
* **Daily Rate Limiting**: Limit continuous applications to prevent platform throttling (e.g. 15-25 applications per batch with random human-like pacing).
* **Company Exclusions**: Optional blacklist in config (e.g. current employer if confidential).

