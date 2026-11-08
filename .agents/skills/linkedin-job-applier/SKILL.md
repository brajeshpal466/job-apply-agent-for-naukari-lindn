---
name: linkedin-job-applier
description: >-
  Automates job discovery, filtering, and Easy Apply on LinkedIn using Chrome DevTools MCP.
  Targets React Developer, Frontend Developer, Senior React Developer, and Senior Software Engineer roles
  with 5+ years experience, immediate joiner preference, and posts within 1 week or sooner.
  Autofills multi-step Easy Apply screening questions without skipping questions, answers 5 for React/JS/TS,
  2-3 for others, and tracks applied jobs up to 100 applications.
---

# LinkedIn Job Application Automation Skill

This skill provides comprehensive instructions for discovering, filtering, and applying to relevant software engineering roles on LinkedIn via Chrome DevTools MCP.

## References & Candidate Data

* **Candidate Profile**: `../naukri-job-applier/references/candidate_profile.json`
* **Sample Profile Template**: `../naukri-job-applier/references/candidate_profile.sample.md`
* **Resume File**: `/Users/brajeshkumar/Documents/projects/job_search/brajesh_resume.pdf`
* **Audit Tracking Database**: `applied_linkedin_jobs.json` and consolidated `applied_jobs.json`

## Target Criteria

* **Mandatory Core Skill Focus (STRICT MATCH)**:
  * **ELIGIBLE ROLES**:
    * Frontend: `React`, `React.js`, `Next.js`, `JavaScript`, `TypeScript`.
    * Backend / Fullstack: `Node.js`, `Express`, `.NET` / `C#` / `.NET Core` / `ASP.NET` (paired with React / TS / JS).
  * **STRICT EXCLUSIONS (CRITICAL - DO NOT APPLY)**:
    * **NO JAVA ROLES**: Strictly DO NOT apply to any Java roles, Java Full Stack, Spring, or Spring Boot positions, even if React is listed alongside.
    * Skip pure backend Python without React, pure Salesforce, QA / Manual Testing, or non-aligned roles.
* **Target Roles**: `React Developer`, `Frontend Developer`, `Senior React Developer`, `Senior Software Engineer` (React / TS / JS / Node / .NET focus), `Node.js React Full Stack`, `.NET React Developer`
* **Locations**: Bengaluru, Hyderabad, Pune, Noida, Gurugram, Remote, Hybrid
* **Experience Filter**: 5+ Years (Candidate has 5.2 Yrs)
* **Strict Date Posted Filter**: **STRICTLY within 1 week or sooner (0–7 days only / Past Week: `f_TPR=r604800` or Past 24 hours: `f_TPR=r86400`)**. Never apply to jobs older than 7 days.
* **Application Mode**: **Easy Apply** (`f_AL=true`)
* **Availability**: Immediate Joiner (0 days notice)

## Questionnaire Autofill Rules (CRITICAL - DO NOT SKIP QUESTIONS)

* **React / React.js Experience**: `5`
* **JavaScript Experience**: `5`
* **TypeScript Experience**: `5`
* **Other Technologies / Tools (e.g. Node.js, C#, AWS, Docker, HTML/CSS, Git)**: `3` (or `2`)
* **Total Years of Experience**: `5`
* **Current Package / CTC**: `27 LPA` (or `27`)
* **Expected Package / CTC**: Based on role budget (`27`, `28`, `29`, `30+` LPA; default `30 LPA` or `30`)
* **Current Location**: `Bengaluru`
* **Face-to-Face / In-Person Interview**: `Yes` (Available in Bengaluru)
* **Notice Period**: `0` or `Immediate`
* **Are you currently serving notice?**: `Yes`
* **Are you comfortable commuting / relocating?**: `Yes`
* **Highest Education Completed**: `Bachelor's Degree` / `B.Tech Computer Science`
* **Mobile Number**: `+91-{{YOUR_PHONE}}`
* **Email**: `{{YOUR_EMAIL}}`

## Step-by-Step Easy Apply Workflow

1. **Navigate to Search Results**:
   * Example URL: `https://www.linkedin.com/jobs/search/?keywords=React%20Developer&location=Bengaluru&f_AL=true&f_TPR=r604800`
   * Target locations in sequence: Bengaluru, Hyderabad, Pune, Noida, Gurugram.
2. **Scan Job Listings**:
   * Inspect job cards on the left rail (`.jobs-search-results-list__list-item` or `li.ember-view[data-occludable-job-id]`).
   * Read Job ID, Title, Company Name, and Location.
   * **Mandatory Filter**: Confirm the role requires `React`, `TypeScript`, or `JavaScript`. Permitted backend additions: `Node.js`, `Express`, `.NET` / `C#`.
   * **Mandatory Java Exclusion**: Reject and skip ANY job mentioning `Java`, `Spring`, `Spring Boot`, or `Java Full Stack` in title, description, or tags.
   * **Freshness Filter**: Verify posted date is **within 1 week (0–7 days max)**. Skip any role older than 7 days.
   * Verify if job has already been applied or recorded in `applied_jobs.json` / `applied_linkedin_jobs.json`.
3. **Open Job & Trigger Easy Apply**:
   * Click on the job card to load details in the right pane.
   * Click the **Easy Apply** button (`button.jobs-apply-button`).
4. **Complete Modal Steps Without Skipping**:
   * **Contact Info Step**: Verify phone `+91-{{YOUR_PHONE}}` and email `{{YOUR_EMAIL}}`. Click "Next".
   * **Resume Step**: Ensure latest resume (`brajesh_resume.pdf`) is selected. Click "Next".
   * **Screening Questions Step**:
     * Iterate over all questions (`input[type="text"]`, `input[type="number"]`, `select`, radio buttons).
     * React / JS / TS -> enter `5`.
     * Other skills -> enter `3` (or `2`).
     * Current CTC -> `27 LPA` (or numeric `27`).
     * Expected CTC -> match job budget (`27`, `28`, `29`, `30+` LPA; default `30 LPA` or `30`).
     * Current Location -> `Bengaluru`.
     * Face-to-Face / In-Person Interview -> `Yes` (Available).
     * Yes/No questions (authorization to work, relocation, immediate joiner) -> `Yes`.
     * Notice period -> `0` or `Immediate`.
     * Never skip or leave empty.
     * Click "Next" or "Review".
   * **Review Step**: Verify answers, uncheck follow company if desired, and click "Submit application".
5. **Record in Applied Database**:
   * Log job ID, title, company, location, and timestamp into `applied_linkedin_jobs.json` and `applied_jobs.json`.
   * Continue loop until 100 total jobs are reached.
