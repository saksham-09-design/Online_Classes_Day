/**
 * Application Controller for Online Education Day Badge Website
 * Author: Saksham Loona
 */

// Application State
const appState = {
  studentName: "",
  selectedCourseKey: "", // 'ai', 'excel', 'both'
  selectedCourseTitle: "",
  activeQuestions: [],
  currentQuestionIndex: 0,
  userAnswers: [], // { question, selectedOption, isCorrect }
  score: 0,
  passingScore: 0,
  totalQuestions: 0,
  generatedCanvases: {
    ai: null,
    excel: null
  },
  soundEnabled: true
};
window.appState = appState;


// Course Key Mappings matching user prompt
const COURSE_MAP = {
  "Ultimate AI Course Toolkit - Master 20+ AI Tools with Free Prompt Book": "ai",
  "MS Excel Course with AI - Excel the MS Excel with AI": "excel",
  "Both Courses": "both"
};

// Web Audio API Synthesizer for lightweight feedback without external audio files
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playCorrect() {
    if (!appState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
    osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  }

  playWrong() {
    if (!appState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(190, now + 0.25);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  }

  playFanfare() {
    if (!appState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.12;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    });
  }
}

const sfx = new SoundEffects();

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  // Navigation elements
  const enrollmentSection = document.getElementById("enrollment-section");
  const quizSection = document.getElementById("quiz-section");
  const resultsSection = document.getElementById("results-section");

  // Form inputs
  const enrollmentForm = document.getElementById("enrollment-form");
  const studentNameInput = document.getElementById("student-name");
  const courseSelect = document.getElementById("course-select");
  const startQuizBtn = document.getElementById("start-quiz-btn");

  // Quiz DOM
  const questionNumberEl = document.getElementById("question-number");
  const questionTopicBadge = document.getElementById("question-topic-badge");
  const questionTextEl = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const quizProgressBar = document.getElementById("quiz-progress-bar");
  const nextQuestionBtn = document.getElementById("next-question-btn");
  const questionFeedbackEl = document.getElementById("question-feedback");

  // Results DOM
  const resultsScoreEl = document.getElementById("results-score");
  const resultsPercentEl = document.getElementById("results-percent");
  const resultsMessageEl = document.getElementById("results-message");
  const retakeQuizBtn = document.getElementById("retake-quiz-btn");
  const reviewQuestionsBtn = document.getElementById("review-questions-btn");
  const reviewContainer = document.getElementById("review-container");
  const badgeShowcaseArea = document.getElementById("badge-showcase-area");
  const downloadAllBtn = document.getElementById("download-all-btn");



  // Sound toggle
  const soundToggleBtn = document.getElementById("sound-toggle-btn");
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      appState.soundEnabled = !appState.soundEnabled;
      soundToggleBtn.innerHTML = appState.soundEnabled 
        ? '<i class="fas fa-volume-up"></i>' 
        : '<i class="fas fa-volume-mute"></i>';
      showToast(appState.soundEnabled ? "Sound Enabled" : "Sound Muted");
    });
  }

  // 1. START QUIZ FLOW
  enrollmentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = studentNameInput.value.trim();
    const selectedCourseValue = courseSelect.value;

    if (!name) {
      studentNameInput.focus();
      showToast("Please enter your name to proceed!", "warning");
      return;
    }

    if (!selectedCourseValue) {
      courseSelect.focus();
      showToast("Please choose your enrolled course!", "warning");
      return;
    }

    const courseKey = COURSE_MAP[selectedCourseValue] || "ai";
    appState.studentName = name;
    appState.selectedCourseKey = courseKey;
    appState.selectedCourseTitle = selectedCourseValue;

    initializeQuiz();
  });

  // Initialize Quiz Questions
  function initializeQuiz() {
    appState.userAnswers = [];
    appState.currentQuestionIndex = 0;
    appState.score = 0;

    if (appState.selectedCourseKey === "ai") {
      // Single course: 5 questions
      appState.activeQuestions = getRandomQuestions(QUESTION_BANK.ai, 5);
      appState.totalQuestions = 5;
      appState.passingScore = 3; // 60%
    } else if (appState.selectedCourseKey === "excel") {
      // Single course: 5 questions
      appState.activeQuestions = getRandomQuestions(QUESTION_BANK.excel, 5);
      appState.totalQuestions = 5;
      appState.passingScore = 3; // 60%
    } else if (appState.selectedCourseKey === "both") {
      // Both courses: 8 questions (4 from AI + 4 from Excel)
      const aiSubset = getRandomQuestions(QUESTION_BANK.ai, 4);
      const excelSubset = getRandomQuestions(QUESTION_BANK.excel, 4);
      // Interleave or shuffle the 8 questions
      appState.activeQuestions = [...aiSubset, ...excelSubset].sort(() => 0.5 - Math.random());
      appState.totalQuestions = 8;
      appState.passingScore = 5; // ~62%
    }

    // Switch view
    enrollmentSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    renderCurrentQuestion();
  }

  // Render Current Question Card
  function renderCurrentQuestion() {
    const qIndex = appState.currentQuestionIndex;
    const currentQ = appState.activeQuestions[qIndex];

    // Update progress bar
    const progressPercent = ((qIndex) / appState.totalQuestions) * 100;
    quizProgressBar.style.width = `${progressPercent}%`;

    // Update header
    questionNumberEl.textContent = `Question ${qIndex + 1} of ${appState.totalQuestions}`;
    
    // Update Topic Badge
    if (currentQ.topic === "ai") {
      questionTopicBadge.className = "topic-badge topic-ai";
      questionTopicBadge.innerHTML = '<i class="fas fa-brain"></i> Ultimate AI Toolkit';
    } else {
      questionTopicBadge.className = "topic-badge topic-excel";
      questionTopicBadge.innerHTML = '<i class="fas fa-file-excel"></i> MS Excel with AI';
    }

    // Question Text
    questionTextEl.textContent = currentQ.question;

    // Reset feedback & next button
    questionFeedbackEl.className = "question-feedback hidden";
    questionFeedbackEl.innerHTML = "";
    nextQuestionBtn.classList.add("hidden");

    // Render Options
    optionsContainer.innerHTML = "";
    currentQ.options.forEach((optText, optIdx) => {
      const optBtn = document.createElement("button");
      optBtn.type = "button";
      optBtn.className = "option-card";
      optBtn.innerHTML = `
        <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
        <span class="option-text">${optText}</span>
        <span class="option-status-icon"></span>
      `;
      optBtn.addEventListener("click", () => handleOptionSelect(optIdx, currentQ));
      optionsContainer.appendChild(optBtn);
    });
  }

  // Handle Option Click
  function handleOptionSelect(selectedIndex, question) {
    // Disable all options once an answer is chosen
    const optionCards = optionsContainer.querySelectorAll(".option-card");
    optionCards.forEach(card => card.classList.add("disabled"));

    const isCorrect = selectedIndex === question.answer;
    if (isCorrect) {
      appState.score++;
      sfx.playCorrect();
    } else {
      sfx.playWrong();
    }

    appState.userAnswers.push({
      question: question,
      selectedOption: selectedIndex,
      isCorrect: isCorrect
    });

    // Visual styles on options
    optionCards.forEach((card, idx) => {
      if (idx === question.answer) {
        card.classList.add("correct");
        card.querySelector(".option-status-icon").innerHTML = '<i class="fas fa-check-circle"></i>';
      } else if (idx === selectedIndex && !isCorrect) {
        card.classList.add("wrong");
        card.querySelector(".option-status-icon").innerHTML = '<i class="fas fa-times-circle"></i>';
      }
    });

    // Show educational explanation
    questionFeedbackEl.className = `question-feedback ${isCorrect ? "feedback-correct" : "feedback-wrong"}`;
    questionFeedbackEl.innerHTML = `
      <div class="feedback-title">
        <i class="fas ${isCorrect ? "fa-circle-check" : "fa-circle-info"}"></i>
        ${isCorrect ? "Correct! Excellent work!" : "Not quite! Keep learning:"}
      </div>
      <p class="feedback-text">${question.explanation}</p>
    `;
    questionFeedbackEl.classList.remove("hidden");

    // Show Next or View Results button
    const isLastQuestion = appState.currentQuestionIndex === appState.totalQuestions - 1;
    nextQuestionBtn.innerHTML = isLastQuestion 
      ? 'View Results & Claim Badge <i class="fas fa-award"></i>' 
      : 'Next Question <i class="fas fa-arrow-right"></i>';
    nextQuestionBtn.classList.remove("hidden");
  }

  // Next Question Button Click
  nextQuestionBtn.addEventListener("click", () => {
    if (appState.currentQuestionIndex < appState.totalQuestions - 1) {
      appState.currentQuestionIndex++;
      renderCurrentQuestion();
    } else {
      // Quiz completed!
      showResults();
    }
  });

  // 2. RESULTS & BADGE SHOWCASE FLOW
  async function showResults() {
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const score = appState.score;
    const total = appState.totalQuestions;
    const percentage = Math.round((score / total) * 100);
    const passed = score >= appState.passingScore;

    resultsScoreEl.textContent = `${score}/${total}`;
    resultsPercentEl.textContent = `${percentage}%`;

    // Confetti & Celebration on passing
    if (passed) {
      sfx.playFanfare();
      triggerConfetti();
      resultsMessageEl.className = "results-message passed";
      resultsMessageEl.innerHTML = `
        <div class="result-badge-icon"><i class="fas fa-trophy"></i></div>
        <h3>Congratulations, ${appState.studentName}!</h3>
        <p>You have demonstrated outstanding knowledge and earned your official <strong>Online Education Day 2026</strong> digital badge${appState.selectedCourseKey === 'both' ? 's' : ''}!</p>
      `;
    } else {
      resultsMessageEl.className = "results-message retry";
      resultsMessageEl.innerHTML = `
        <div class="result-badge-icon"><i class="fas fa-rotate-right"></i></div>
        <h3>Good Effort, ${appState.studentName}!</h3>
        <p>You scored ${score} out of ${total}. A minimum score of ${appState.passingScore}/${total} (${Math.round((appState.passingScore/total)*100)}%) is required to unlock your commemorative badge. Feel free to review the explanations and try again!</p>
      `;
    }

    // Render Badge(s)
    await renderBadgesForResults(passed);
  }

  // Render Badge Cards and Canvas
  async function renderBadgesForResults(passed) {
    badgeShowcaseArea.innerHTML = "";
    appState.generatedCanvases = { ai: null, excel: null };

    // Determine which badges to show
    let badgesToRender = [];
    if (appState.selectedCourseKey === "ai") {
      badgesToRender = ["ai"];
    } else if (appState.selectedCourseKey === "excel") {
      badgesToRender = ["excel"];
    } else if (appState.selectedCourseKey === "both") {
      badgesToRender = ["ai", "excel"];
    }

    if (downloadAllBtn) {
      if (appState.selectedCourseKey === "both" && passed) {
        downloadAllBtn.classList.remove("hidden");
      } else {
        downloadAllBtn.classList.add("hidden");
      }
    }

    for (const badgeType of badgesToRender) {
      const config = BADGE_CONFIGS[badgeType];

      // Create card wrapper
      const card = document.createElement("div");
      card.className = "badge-preview-card";
      card.id = `badge-card-${badgeType}`;

      const headerTitle = badgeType === "ai" 
        ? "Ultimate AI Course Toolkit Badge" 
        : "MS Excel Course with AI Badge";

      card.innerHTML = `
        <div class="badge-card-header">
          <span class="badge-type-pill ${badgeType}">
            <i class="fas ${badgeType === 'ai' ? 'fa-brain' : 'fa-file-excel'}"></i>
            ${config.category}
          </span>
          <h4 class="badge-card-title">${headerTitle}</h4>
        </div>
        <div class="badge-canvas-wrapper" id="canvas-wrapper-${badgeType}">
          <div class="badge-loading-spinner">
            <i class="fas fa-spinner fa-spin"></i> Generating Unique Badge...
          </div>
        </div>
        <div class="badge-card-actions">
          ${
            passed
              ? `<button type="button" class="btn btn-primary download-single-badge-btn" data-type="${badgeType}">
                  <i class="fas fa-download"></i> Download ${badgeType === 'ai' ? 'AI' : 'Excel'} Badge (PNG)
                 </button>`
              : `<button type="button" class="btn btn-secondary disabled" disabled>
                  <i class="fas fa-lock"></i> Pass Quiz to Unlock Badge
                 </button>`
          }
        </div>
      `;

      badgeShowcaseArea.appendChild(card);

      // Render onto canvas
      const canvasWrapper = card.querySelector(`#canvas-wrapper-${badgeType}`);
      const canvas = document.createElement("canvas");
      canvas.className = "badge-canvas";

      await badgeGenerator.renderBadge({
        canvas: canvas,
        type: badgeType,
        studentName: appState.studentName
      });

      appState.generatedCanvases[badgeType] = canvas;
      canvasWrapper.innerHTML = "";
      canvasWrapper.appendChild(canvas);

      // Add 3D Tilt interactive effect
      enableBadgeTilt(card, canvas);

      // Bind download button
      const dlBtn = card.querySelector(".download-single-badge-btn");
      if (dlBtn) {
        dlBtn.addEventListener("click", () => {
          const safeName = appState.studentName.replace(/[^a-zA-Z0-9]/g, "_");
          const fileName = `${config.fileNamePrefix}_${safeName}_Saksham_Loona.png`;
          badgeGenerator.downloadBadge(canvas, fileName);
          showToast(`Downloaded ${config.title} Badge!`, "success");
        });
      }
    }
  }

  // Batch Download Both Badges
  if (downloadAllBtn) {
    downloadAllBtn.addEventListener("click", () => {
      const safeName = appState.studentName.replace(/[^a-zA-Z0-9]/g, "_");
      if (appState.generatedCanvases.ai) {
        badgeGenerator.downloadBadge(
          appState.generatedCanvases.ai,
          `Ultimate_AI_Toolkit_Badge_${safeName}_Saksham_Loona.png`
        );
      }
      setTimeout(() => {
        if (appState.generatedCanvases.excel) {
          badgeGenerator.downloadBadge(
            appState.generatedCanvases.excel,
            `MS_Excel_AI_Badge_${safeName}_Saksham_Loona.png`
          );
        }
        showToast("Both badges downloaded successfully!", "success");
      }, 500);
    });
  }

  // 3. RETAKE & REVIEW HANDLERS
  retakeQuizBtn.addEventListener("click", () => {
    // Reset review section
    reviewContainer.classList.add("hidden");
    initializeQuiz();
  });

  reviewQuestionsBtn.addEventListener("click", () => {
    reviewContainer.classList.toggle("hidden");
    if (!reviewContainer.classList.contains("hidden")) {
      renderReviewCards();
      reviewContainer.scrollIntoView({ behavior: "smooth" });
    }
  });

  function renderReviewCards() {
    reviewContainer.innerHTML = '<h3 class="review-heading"><i class="fas fa-clipboard-check"></i> Answer Review & Learning Explanations</h3>';
    appState.userAnswers.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = `review-item-card ${item.isCorrect ? "correct" : "wrong"}`;
      
      const q = item.question;
      const chosenText = q.options[item.selectedOption] || "None";
      const correctText = q.options[q.answer];

      card.innerHTML = `
        <div class="review-header">
          <span class="review-q-num">Q${index + 1}</span>
          <span class="review-topic-tag">${q.topic === "ai" ? "AI Toolkit" : "Excel with AI"}</span>
          <span class="review-result-tag ${item.isCorrect ? 'pass' : 'fail'}">
            <i class="fas ${item.isCorrect ? 'fa-check' : 'fa-times'}"></i> ${item.isCorrect ? 'Correct' : 'Incorrect'}
          </span>
        </div>
        <p class="review-question-text">${q.question}</p>
        <div class="review-answers-box">
          <div class="review-ans-row ${item.isCorrect ? 'ans-right' : 'ans-wrong'}">
            <strong>Your Answer:</strong> ${chosenText}
          </div>
          ${!item.isCorrect ? `
            <div class="review-ans-row ans-right">
              <strong>Correct Answer:</strong> ${correctText}
            </div>
          ` : ''}
        </div>
        <div class="review-explanation">
          <strong><i class="fas fa-lightbulb"></i> Explanation:</strong> ${q.explanation}
        </div>
      `;
      reviewContainer.appendChild(card);
    });
  }



  // 5. INTERACTIVE 3D TILT EFFECT ON BADGE CARDS
  function enableBadgeTilt(card, canvas) {
    let bounds;

    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      canvas.style.transform = `
        scale3d(1.03, 1.03, 1.03)
        rotate3d(
          ${-center.y / 100},
          ${center.x / 100},
          0,
          ${Math.log(distance) * 2.2}deg
        )
      `;
    }

    card.addEventListener("mouseenter", () => {
      bounds = card.getBoundingClientRect();
      document.addEventListener("mousemove", rotateToMouse);
    });

    card.addEventListener("mouseleave", () => {
      document.removeEventListener("mousemove", rotateToMouse);
      canvas.style.transform = "scale3d(1, 1, 1) rotate3d(0, 0, 0, 0deg)";
    });
  }

  // Confetti Particle Explosion
  function triggerConfetti() {
    if (typeof confetti === "function") {
      // First burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      // Second burst with gold and cyan
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#fbbf24", "#38bdf8", "#ec4899", "#10b981"]
        });
      }, 200);
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#fbbf24", "#38bdf8", "#ec4899", "#10b981"]
        });
      }, 400);
    }
  }

  // Toast Notification
  function showToast(message, type = "info") {
    let toast = document.getElementById("app-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "app-toast";
      document.body.appendChild(toast);
    }

    toast.className = `toast toast-${type} show`;
    toast.innerHTML = `<i class="fas fa-info-circle"></i> <span>${message}</span>`;

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }
});
