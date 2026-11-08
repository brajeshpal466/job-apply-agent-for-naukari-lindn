# LinkedIn Easy Apply Automation Specification (Spec Kit)

## 1. Specification Overview

* **Primary Application Mode**: LinkedIn Easy Apply (`f_AL=true`)
* **Mandatory Core Skill Focus (STRICT MATCH)**:
  * **ELIGIBLE ROLES**:
    * Frontend: `React`, `React.js`, `Next.js`, `JavaScript`, `TypeScript`.
    * Backend / Fullstack: `Node.js`, `Express`, `.NET` / `C#` / `.NET Core` / `ASP.NET` (combined with React / TS / JS).
  * **STRICT EXCLUSIONS (CRITICAL - DO NOT APPLY)**:
    * **NO JAVA ROLES**: Strictly DO NOT apply to any Java roles, Java Full Stack, Spring, or Spring Boot positions, even if React is listed alongside.
    * Skip pure backend Python without React, pure Salesforce, QA / Manual Testing, or non-aligned roles.
* **Target Roles**:
  * `React Developer`
  * `Frontend Developer`
  * `Senior React Developer`
  * `Senior Software Engineer` (React / TypeScript / JavaScript / Node / .NET focus)
  * `Node.js React Full Stack Developer`
  * `.NET React Developer`
* **Target Locations**:
  * `Bengaluru`, `Hyderabad`, `Pune`, `Noida`, `Gurugram`, plus `Remote` and `Hybrid`.
* **Experience Requirement**: `5+ Years` (Candidate Total: 5.2 Years).
* **Availability / Preference**: **Immediate Joiner** (0 days notice / ready to join immediately).
* **Posting Freshness (STRICT)**: **Strictly within 1 week or sooner (0–7 days max / Past Week: `f_TPR=r604800` or Past 24 hours: `f_TPR=r86400`)**. Never apply to jobs older than 7 days.
* **Target Quota**: Autonomous continuous loop until reaching **100 total applications** across Naukri and LinkedIn.
* **Candidate Source of Truth**: `../../naukri-job-applier/references/candidate_profile.json`
* **Resume File**: `/Users/brajeshkumar/Documents/projects/job_search/brajesh_resume.pdf`
* **Audit Tracking Database**: `applied_jobs.json`

---

## 2. Screening Questionnaire Rules (NEVER SKIP QUESTIONS)

All multi-step Easy Apply screening questions must be answered completely and dynamically:

| Question Pattern | Exact Standard Answer |
| :--- | :--- |
| **React / React.js Experience** | `5` |
| **JavaScript Experience** | `5` |
| **TypeScript Experience** | `5` |
| **Other Technologies / Tools** (Node.js, AWS, Azure, Python, Django, Playwright, etc.) | `2–3` (default `3`) |
| **Total Years of Experience** | `5` (or `5.2`) |
| **Notice Period / Start Date** | `0` or `Immediate` |
| **Are you serving notice? / Can you start immediately?** | `Yes` |
| **Are you comfortable with onsite / hybrid setting?** | `Yes` |
| **Are you comfortable relocating / commuting?** | `Yes` |
| **Are you legally authorized to work?** | `Yes` |
| **Will you require sponsorship?** | `No` |
| **Current CTC / Compensation** | `27 LPA` (or `27`) |
| **Expected CTC / Compensation** | `27`, `28`, `29`, `30+` LPA based on employer budget (default `30 LPA` or `30`) |
| **Current Location** | `Bengaluru` |
| **Face-to-Face / In-Person Interview** | `Yes` / `Available` |
| **Highest Education** | `Bachelor's Degree` / `B.Tech Computer Science` |
| **Current Company** | `{{CURRENT_COMPANY}}` |
| **Current Role / Title** | `Senior Software Engineer` |
| **Mobile Number** | `+91-{{YOUR_PHONE}}` |
| **Email Address** | `{{YOUR_EMAIL}}` |

---

## 3. Step-by-Step Execution Workflow

### Step 1: Query Execution & Navigation
* Navigate to LinkedIn Jobs search with active filters:
  * URL format: `https://www.linkedin.com/jobs/search/?keywords=<Role>&location=<City>&f_AL=true&f_TPR=r604800`
  * Iterate through roles (`React Developer`, `Frontend Developer`, `Senior React Developer`, `Senior Software Engineer`) across target cities (`Bengaluru`, `Hyderabad`, `Pune`, `Noida`, `Gurugram`).

### Step 2: Job Card Parsing & Eligibility Verification
1. Inspect job cards on the results pane.
2. Verify **Mandatory Skill Match**: Job title and description must feature `React`, `TypeScript`, or `JavaScript`. Permitted backend complements: `Node.js`, `Express`, `.NET` / `C#`.
3. Verify **Strict Java Exclusion**: Reject and skip ANY job requiring `Java`, `Spring`, `Spring Boot`, or `Java Full Stack`.
4. Verify **Freshness**: Posted date must be within 7 days.
5. Verify **Deduplication**: Job ID must not already exist in `applied_jobs.json`.

### Step 3: Easy Apply Form Execution
1. Click the job card, then click **Easy Apply** (`button.jobs-apply-button`).
2. **Contact Info**: Verify candidate phone (`+91-{{YOUR_PHONE}}`) and email (`{{YOUR_EMAIL}}`), click Next.
3. **Resume Selection**: Ensure `brajesh_resume.pdf` (or latest uploaded resume) is selected, click Next.
4. **Screening Questions**:
   * Autofill all text, numeric, dropdown, and radio inputs according to the rules in Section 2.
   * Never leave any question blank.
   * Click Next or Review.
5. **Review & Submit**: Verify inputs and click **Submit application**.
6. **Dismiss Modal**: Click "Done" or dismiss confirmation dialog.

### Step 4: Audit Logging
Append each successful application to `applied_jobs.json`:
```json
{
  "id": "<job_id>",
  "jobId": "<job_id>",
  "title": "<job_title>",
  "company": "<company_name>",
  "location": "<job_location>",
  "appliedAt": "<timestamp>",
  "status": "APPLIED"
}
```
