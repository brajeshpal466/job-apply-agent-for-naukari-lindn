/**
 * DOM extraction and autofill helper for Naukri job applications
 * Can be evaluated directly in the browser via Chrome DevTools MCP
 */

const TARGET_ROLES = [
  "react.js",
  "react developer",
  "redux",
  "front end developer",
  "frontend developer",
  "senior software engineer",
  "senior frontend developer"
];

const CANDIDATE_PROFILE = {
  name: "{{YOUR_FULL_NAME}}",
  email: "{{YOUR_EMAIL}}",
  phone: "{{YOUR_PHONE}}",
  totalExperience: "5",
  noticePeriod: "Immediate",
  currentLocation: "Bengaluru",
  preferredLocations: ["Bengaluru", "Hyderabad", "Pune", "Noida", "Gurugram", "Remote", "Hybrid"],
  skills: {
    react: "5",
    redux: "5",
    typescript: "4",
    javascript: "5",
    frontend: "5"
  }
};

function extractJobCards() {
  const cards = document.querySelectorAll('.srp-jobtuple-wrapper, .cust-job-tuple, .recommended-job-card');
  const results = [];

  cards.forEach(card => {
    const titleEl = card.querySelector('a.title, .title, .job-title');
    const compEl = card.querySelector('a.comp-name, .comp-name, .company-name');
    const expEl = card.querySelector('.exp-wrap, .experience, .exp');
    const locEl = card.querySelector('.loc-wrap, .location, .loc');
    const applyBtn = card.querySelector('button.apply-button, .apply-btn, .tuple-apply-btn');

    if (titleEl) {
      const title = titleEl.textContent.trim().toLowerCase();
      const isMatch = TARGET_ROLES.some(role => title.includes(role));
      results.push({
        title: titleEl.textContent.trim(),
        company: compEl ? compEl.textContent.trim() : 'Unknown',
        experience: expEl ? expEl.textContent.trim() : 'Not specified',
        location: locEl ? locEl.textContent.trim() : 'Bengaluru',
        isTargetMatch: isMatch,
        url: titleEl.href || null,
        hasApplyBtn: Boolean(applyBtn)
      });
    }
  });

  return results;
}

if (typeof module !== 'undefined') {
  module.exports = { TARGET_ROLES, CANDIDATE_PROFILE, extractJobCards };
}

