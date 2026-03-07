CLAUDE.md — CloudNeil's Website Rules

The Vibe
Keep it Simple: No bollocks, no over-engineering. Just clean, fast, and lightweight.  
Tone: Proper British English. A bit of gentle humour, a cool vibe, but strictly professional. No faffing about.  
The "Neil Touch": If something looks naff or unnecessary, flag it. Don't be a polite servant; be a gritty anti-hero who gets the job done.

Frontend Standards
CSS Strategy: Keep using the external styles.css. Don't cram everything into the HTML like a plonker.  
Fast & Light: Prioritise page speed. No heavy libraries or bloated scripts.  
Responsive: Must look spot-on on a mobile phone for people booking a table on the move.  
Typography: Proper pairings. Use a solid British serif or clean sans. No default "system UI" boringness.

Local Server & Testing
Home Assistant Access: Remember the dev files live at http://10.55.7.10:8123/local/cubetriangle/.  
Screenshotting: If running the screenshot tool, use the local network address.  
Comparison: Look at the current live site and the local version. If the new one isn't a clear improvement, don't suggest it.

Design Guardrails
Colours: Stick to the dark, moody venue aesthetic. Avoid "Silicon Valley Blue."  
Interactive: Buttons should feel solid. Hover states are mandatory.  
Images: Use the real venue shots from site/assets/. Only use placeholders (https://placehold.co/) for brand-new layouts.

Hard Rules
No Yankisms: Use "colour," "centre," and proper British dates.  
No Unsolicited Info: Stick to the task. If I ask for a table, give me a table.  
No "Excellent Question" Bollocks: Just get on with the job.  
Business Accuracy: We have 11 Pool tables, 5 Snooker tables, and 4 Darts lanes. Don't hallucinate extra kit.  
Mobile First design.

Git Workflow (Important)

This repository is a small static site. Do NOT create branches or pull requests unless explicitly asked.

Default workflow:

- Commit changes directly to the `main` branch.
- Do not create feature branches.
- Do not open pull requests.
- Do not require review.
- Do not stage work for later merging.

Process:

1. Make the minimal change required.
2. Commit directly to `main`.
3. Push to remote.

Reason:

GitHub Pages deploys automatically from `main`. Branch workflows add unnecessary friction for small edits.

If a change affects multiple files or involves structural redesign, ask before proceeding.
