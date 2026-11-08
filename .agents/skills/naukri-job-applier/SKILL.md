---
name: naukri-job-applier
description: >-
  Automates job discovery, filtering, and application on Naukri.com using Chrome DevTools MCP.
  Targets React.js, React Developer, Redux, Front End Developer, and Senior Software Engineer roles
  with 5+ years experience and immediate joiner preference. Reads candidate details from candidate_profile.json
  to autofill screening questionnaires and track applied jobs.
---

# Naukri Job Application Automation Skill

This skill provides step-by-step procedures for the agent to discover, filter, and apply for relevant engineering roles on [Naukri.com](https://www.naukri.com) using the `chrome-devtools` MCP server and candidate profile data.

## References & Data Assets

* **Candidate Profile Data**: [candidate_profile.json](./references/candidate_profile.json) (All resume details, skills, experience, and questionnaire answers).
* **Detailed Execution Specification**: [job_application_spec.md](./references/job_application_spec.md) (Full spec kit rules, safety gates, and flow charts).
* **Applied Jobs Database**: `applied_jobs.json` in the workspace root.

---

## Target Criteria & Search Queries

* **Mandatory Core Skill Focus (STRICT)**:
  * **ELIGIBLE ROLES**:
    * Frontend: `React`, `React.js`, `Next.js`, `JavaScript`, `TypeScript`.
    * Backend / Fullstack: `Node.js`, `Express`, `.NET` / `C#` / `.NET Core` / `ASP.NET` (combined with React / TS / JS).
  * **STRICT EXCLUSIONS (CRITICAL - DO NOT APPLY)**:
    * **NO JAVA ROLES**: Strictly DO NOT apply to any Java roles, Java Full Stack, Spring, or Spring Boot positions, even if React is listed alongside.
    * Skip pure backend Python without React, pure Salesforce, QA / Manual Testing, or non-aligned roles.
* **Primary Search List**:
  1. `React Developer`
  2. `Frontend Developer`
  3. `Senior React Developer`
  4. `Senior Software Engineer` (React / TypeScript / JavaScript / Node / .NET focus)
  5. `Node.js React Full Stack Developer`
  6. `.NET React Developer`
* **Resume Alignment**: React.js, Next.js, Redux (Toolkit/Thunk), TypeScript, JavaScript, Micro Frontends (MFE), Node.js, Express.js, C#/.NET Core, Azure, AWS
* **Experience Filter**: `5+ Years` (Total Experience: 5.2 Years)
* **Candidate Location**: Bengaluru (Target Locations: Bengaluru, Hyderabad, Pune, Noida, Gurugram, Remote, Hybrid)
* **Current CTC / Package**: `27 LPA`
* **Expected CTC / Package**: Based on job budget (`27`, `28`, `29`, `30+` LPA; default `30 LPA`)
* **Face-to-Face / In-Person Interview**: `Yes` / `Available` (Available in Bengaluru)
* **Joiner Status**: **Immediate Joiner** (Serving notice / 0-15 days / 0 days)
* **Strict Freshness**: **Strictly within 1 week or sooner (0–7 days max / 1 week only)**. Discard any post older than 7 days.
* **Execution Goal**: **Autonomous Continuous Loop until reaching 100 successful applications**
  * Continuously iterates across Recommended Jobs tabs (Handpicked, Preferences, Applies, You Might Like) and Search Streams across target locations (Bengaluru, Hyderabad, Pune, Noida, Gurugram).
  * Automatically records each application in `applied_jobs.json` until the counter reaches 100.

---

## Step-by-Step Procedure

### Step 1: Pre-flight Verification
1. Ensure the `chrome-devtools` MCP server is active.
2. Ensure Chrome is running with remote debugging enabled (`chrome://inspect/#remote-debugging` or `--remote-debugging-port=9222`).
3. Verify the user is already authenticated on Naukri.com. If not authenticated, prompt the user to log in before proceeding.

### Step 2: Open Recommended Jobs or Search Query
1. Use `chrome-devtools` MCP to open or navigate to:
   * Recommended Jobs Stream: `https://www.naukri.com/mnjuser/recommendedjobs`
   * Or Search Stream: `https://www.naukri.com/react-js-jobs-in-bengaluru-bangalore?experience=5`
2. Wait for job list elements (`.srp-jobtuple-wrapper` or `.tuple` or recommended cards) to render.

### Step 3: Scan and Filter Eligible Jobs
1. Inspect available job cards on the page.
2. For each job card:
   * **Mandatory Skill Check**: Must feature `React` / `React.js`, `TypeScript`, or `JavaScript`. Permitted backend additions: `Node.js`, `Express`, `.NET` / `C#`.
   * **Mandatory Java Exclusion**: Reject and skip ANY job mentioning `Java`, `Spring`, `Spring Boot`, or `Java Full Stack` in title, description, or tags.
   * **Mandatory Freshness Check**: Must be posted within 1 week (0–7 days max). Discard anything older than 7 days.
   * Verify title matches target keywords (`React`, `Redux`, `Front End`, `Frontend`, `Senior Software Engineer`).
   * Verify experience requirement matches candidate profile (minimum 5 years).
   * Check if already applied (status badge or existing entry in `applied_jobs.json`).
3. Collect candidate jobs for the current batch.

### Step 4: Execute Application & Questionnaire Autofill
For each candidate job:
1. Trigger the **Apply** button.
2. Monitor for screening questions / chatbot modal (DO NOT SKIP ANY QUESTIONS):
   * When prompted for **Notice Period**: Fill or select `Immediate` / `0 days` / `Serving Notice Period`.
   * When prompted for **Total Experience**: Enter `5` (or `5.2`).
   * When prompted for **React / React.js Experience**: Enter `5`.
   * When prompted for **JavaScript Experience**: Enter `5`.
   * When prompted for **TypeScript Experience**: Enter `5`.
   * When prompted for **Other Technologies / Tools**: Enter `3` (or `2` if junior requirement).
   * When prompted for **Current Location / Relocation**: Select `Bengaluru` / `Yes`.
   * When prompted for **Face to Face / In-Person Interview**: Select `Yes` / `Available`.
   * When prompted for **Current CTC**: Enter `27 LPA` (or numeric `27`).
   * When prompted for **Expected CTC**: Match job budget (`27`, `28`, `29`, `30+` LPA; default `30 LPA` or `30`).
   * When prompted for **Current Company / Role**: Enter `{{CURRENT_COMPANY}}` / `Senior Software Engineer`.
3. Submit the application and confirm the success notification.

### Step 5: Log & Report
1. Append the newly applied job entry into `applied_jobs.json`:
   ```json
   {
     "id": "<job_id>",
     "title": "<job_title>",
     "company": "<company_name>",
     "location": "<job_location (Bengaluru / Hyderabad / Pune / Noida / Gurugram / Remote)>",
     "appliedAt": "<timestamp>",
     "status": "APPLIED"
   }
   ```
2. Present a clean summary to the user with applied roles and any questions that required user review.

