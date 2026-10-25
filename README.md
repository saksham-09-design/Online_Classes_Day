# 🎉 Claim Your Online Education Day Badge

A modern, responsive, animated web application built for **Online Education Day 2026** where students can take an interactive quiz, demonstrate their skills, and download custom, high-resolution shaped digital badges.

Mentored by **Saksham Loona** — Educator for these courses (*4x Claude, 3x Google, 2x SAP & 2x Open AI Certified*).

---

## 🌟 Key Features & Updates

1. **Clean & Focused Layout**:
   - Navigation header renamed to: **"Claim Your Online Education Day Badge"**.
   - Sound toggle options and cluttered hero banners removed.
   - Page leads directly to the **Student Verification** card with a smooth stepper.

2. **Course Selection & Registration**:
   - Exact dropdown options matching your curriculum:
     - `Ultimate AI Course Toolkit - Master 20+ AI Tools with Free Prompt Book`
     - `MS Excel Course with AI - Excel the MS Excel with AI`
     - `Both Courses`
   - Student enters their full name (rendered in elegant serif lettering on the badge).

3. **MCQ Knowledge Quiz**:
   - **Single Course selected**: 5 randomly selected MCQs.
   - **Both Courses selected**: 8 randomly selected MCQs (4 AI questions + 4 MS Excel questions).
   - **50 Total Questions (25 AI + 25 Excel)** in `js/questions.js`.
   - **Multiple Attempts Allowed**: Students can retake the quiz anytime. A fresh set of random questions is selected each time.
   - **Immediate Learning Feedback**: Each option shows instant visual confirmation and a helpful educational explanation.

4. **Simplified & Elegant Badge Design**:
   - **Shaped Crest Silhouette**: Clean, uncluttered, and dignified modern shield with metallic gold bevels and ribbon tails.
   - **Verification ID Removed**: Simplified as requested for a cleaner, more prestigious look.
   - **Transparent PNG Export**: The canvas background outside the badge shape is 100% transparent (`.png`), preserving the shaped medallion silhouette when downloaded or posted on social media.
   - **Includes All Required Elements**:
     - Course emblem icon (`Ultimate AI Course Toolkit.png` or `MS Excel Course with AI Badge.png`)
     - Celebratory plaque: `🎉 HAPPY ONLINE EDUCATION DAY 🎉`
     - Student's full name in gold display typography
     - Course title & subtitle
     - Educator details: `Saksham Loona`, `Educator for these courses`, `4x Claude, 3x Google, 2x SAP & 2x Open AI Certified`
     - Authentic signature image rendered cleanly on a white plaque
     - Five gold stars `★ ★ ★ ★ ★`
   - **Both Badges Download**: When "Both Courses" is selected, students can download **BOTH** badges individually or batch download both with one click!

5. **100% Reliable Local (`file:///`) & Web Canvas Downloads**:
   - Both course emblems and instructor signature are embedded as optimized Base64 data (`js/badge-icons-data.js` and `js/sign-data.js`).
   - Completely eliminates browser canvas-tainting security restrictions (`SecurityError: Tainted canvases may not be exported`).
   - Single and batch PNG downloads work instantaneously across all browsers (Chrome, Edge, Firefox, Safari) both offline (`file:///`) and hosted online.

6. **Dedicated Three-Course Showcase**:
   - **MS Excel Course with AI**:
     - Link 1: **FMSM with Om App**
     - Link 2: **Udemy**
   - **Ultimate AI Course Toolkit**:
     - Link 1: **FMSM with Om App**
     - Link 2: **Udemy**
   - **Both Courses Combo**:
     - Link 1: **FMSM with Om App** (Only FMSM as requested)

---

## 🚀 How to Host on GitHub Pages (Free & Instant)

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com) and create a new repository (e.g. `online-education-day-badges`).
2. **Push the Files**:
   - Push all files in this folder (`index.html`, `css/`, `js/`, `assets/`, etc.) to the `main` branch:
     ```powershell
     git init
     git add .
     git commit -m "Claim Your Online Education Day Badge"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<your-repo-name>.git
     git push -u origin main
     ```
3. **Enable GitHub Pages**:
   - On GitHub, go to your repository **Settings** -> **Pages** (under Code and automation).
   - Under **Build and deployment**:
     - Source: `Deploy from a branch`
     - Branch: `main` / folder: `/ (root)`
   - Click **Save**.
4. **Live in 1 minute!**
   - GitHub will give you a public URL like: `https://<your-username>.github.io/<your-repo-name>/`.

---

## 🔗 Modifying Course Links

In [index.html](file:///D:/codes/Online_Classes_Day/index.html), search for the comments to update the links:
- `<!-- Modify FMSM with Om App link for Excel Course here -->`
- `<!-- Modify Udemy link for Excel Course here -->`
- `<!-- Modify FMSM with Om App link for AI Course here -->`
- `<!-- Modify Udemy link for AI Course here -->`
- `<!-- Modify FMSM with Om App link for Both Courses Combo here -->`

---

*Happy Online Education Day 2026! 🎓*
