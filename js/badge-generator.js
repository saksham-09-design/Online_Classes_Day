/**
 * Simplified & Elegant Badge Generator for Online Education Day
 * High-Resolution HTML5 Canvas Vector-Shaped Badge Renderer
 * Educator: Saksham Loona (4x Claude, 3x Google, 2x SAP & 2x Open AI Certified)
 */

// Embedded Base64 signature for 100% reliable local (file://) and online rendering
function getSignatureSrc() {
  if (typeof window !== 'undefined' && window.SAKSHAM_SIGN_DATA) {
    return window.SAKSHAM_SIGN_DATA;
  }
  return 'assets/sign.png';
}

const BADGE_CONFIGS = {
  ai: {
    id: "ai",
    title: "Ultimate AI Course Toolkit",
    subtitle: "Master 20+ AI Tools with Free Prompt Book",
    category: "ARTIFICIAL INTELLIGENCE & PROMPT ENGINEERING",
    getIconSrc: () => (typeof window !== "undefined" && window.AI_BADGE_DATA) ? window.AI_BADGE_DATA : "assets/ai-badge.png",
    fallbackIconSrc: "Ultimate AI Course Toolkit.png",
    primaryGradient: ["#090d1a", "#0f172a", "#1a1744", "#111827"],
    themeGlow: "rgba(99, 102, 241, 0.45)",
    ribbonColor: ["#4338ca", "#312e81"],
    ribbonBorder: "#fbbf24",
    titleColor: "#38bdf8",
    fileNamePrefix: "Ultimate_AI_Toolkit_Badge"
  },
  excel: {
    id: "excel",
    title: "MS Excel Course with AI",
    subtitle: "Excel the MS Excel with AI",
    category: "DATA INTELLIGENCE & SPREADSHEET AUTOMATION",
    getIconSrc: () => (typeof window !== "undefined" && window.EXCEL_BADGE_DATA) ? window.EXCEL_BADGE_DATA : "assets/excel-badge.png",
    fallbackIconSrc: "MS Excel Course with AI Badge.png",
    primaryGradient: ["#022018", "#064e3b", "#065f46", "#042f2e"],
    themeGlow: "rgba(16, 185, 129, 0.45)",
    ribbonColor: ["#047857", "#064e3b"],
    ribbonBorder: "#34d399",
    titleColor: "#34d399",
    fileNamePrefix: "MS_Excel_AI_Course_Badge"
  }
};

class BadgeGenerator {
  constructor() {
    this.width = 1000;
    this.height = 1200;
    this.imageCache = {};
  }

  /**
   * Safe image loader with local file:// compatibility and fallback
   */
  loadImage(src, fallbackSrc = null) {
    if (this.imageCache[src]) {
      return Promise.resolve(this.imageCache[src]);
    }
    return new Promise((resolve) => {
      const img = new Image();
      // Only set crossOrigin if NOT running on file:// protocol to avoid local CORS blocks!
      if (window.location && window.location.protocol !== "file:" && !src.startsWith("data:")) {
        img.crossOrigin = "anonymous";
      }

      img.onload = () => {
        this.imageCache[src] = img;
        resolve(img);
      };

      img.onerror = () => {
        if (fallbackSrc && fallbackSrc !== src) {
          console.warn(`Initial load failed for ${src}, trying fallback ${fallbackSrc}`);
          this.loadImage(fallbackSrc).then(resolve);
        } else {
          console.warn(`Failed to load ${src}; proceeding with placeholder.`);
          const canvas = document.createElement("canvas");
          canvas.width = 100;
          canvas.height = 100;
          const ctx = canvas.getContext("2d");
          ctx.fillStyle = "#1e293b";
          ctx.fillRect(0, 0, 100, 100);
          const dummy = new Image();
          dummy.src = canvas.toDataURL();
          dummy.onload = () => resolve(dummy);
        }
      };

      img.src = src;
    });
  }

  /**
   * Sleek, simplified, and elegant modern heraldic shield/crest
   */
  drawBadgeShapePath(ctx, inset = 0) {
    const w = this.width;
    const h = this.height;

    const pTopY = 40 + inset;
    const pCrownY = 22 + inset;
    const pShoulderY = 95 + inset;
    const pChamferY = 170 + inset;
    const pSideBottomY = 860 - inset;
    const pLowerChamferY = 970 - inset;
    const pBaseTipY = 1140 - inset;

    const pLeftOuter = 60 + inset;
    const pLeftInner = 120 + inset;
    const pRightOuter = w - 60 - inset;
    const pRightInner = w - 120 - inset;
    const pCenterX = w / 2;

    ctx.beginPath();
    ctx.moveTo(pCenterX, pCrownY);
    ctx.bezierCurveTo(pCenterX + 160, pCrownY, w - 240, pTopY, pRightInner, pShoulderY);
    ctx.lineTo(pRightOuter, pChamferY);
    ctx.lineTo(pRightOuter, pSideBottomY);
    ctx.lineTo(pRightInner, pLowerChamferY);
    ctx.lineTo(pCenterX, pBaseTipY);
    ctx.lineTo(pLeftInner, pLowerChamferY);
    ctx.lineTo(pLeftOuter, pSideBottomY);
    ctx.lineTo(pLeftOuter, pChamferY);
    ctx.lineTo(pLeftInner, pShoulderY);
    ctx.bezierCurveTo(240, pTopY, pCenterX - 160, pCrownY, pCenterX, pCrownY);
    ctx.closePath();
  }

  /**
   * Draw ceremonial ribbon tails at the base
   */
  drawRibbonTails(ctx, config) {
    const w = this.width;
    const cx = w / 2;

    ctx.save();

    // Left Ribbon Tail
    const gradL = ctx.createLinearGradient(cx - 240, 1000, cx - 130, 1200);
    gradL.addColorStop(0, config.ribbonColor[0]);
    gradL.addColorStop(0.6, config.ribbonColor[1]);
    gradL.addColorStop(1, "#090d16");

    ctx.fillStyle = gradL;
    ctx.strokeStyle = config.ribbonBorder || "#fbbf24";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(cx - 220, 1010);
    ctx.lineTo(cx - 250, 1190);
    ctx.lineTo(cx - 190, 1150); // V notch
    ctx.lineTo(cx - 130, 1190);
    ctx.lineTo(cx - 150, 1040);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Right Ribbon Tail
    const gradR = ctx.createLinearGradient(cx + 130, 1000, cx + 240, 1200);
    gradR.addColorStop(0, config.ribbonColor[0]);
    gradR.addColorStop(0.6, config.ribbonColor[1]);
    gradR.addColorStop(1, "#090d16");

    ctx.fillStyle = gradR;
    ctx.strokeStyle = config.ribbonBorder || "#fbbf24";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(cx + 150, 1040);
    ctx.lineTo(cx + 130, 1190);
    ctx.lineTo(cx + 190, 1150); // V notch
    ctx.lineTo(cx + 250, 1190);
    ctx.lineTo(cx + 220, 1010);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  /**
   * Main render function - Clean, balanced, elegant design
   */
  async renderBadge({ canvas, type = "ai", studentName = "Learner" }) {
    if (!canvas) {
      canvas = document.createElement("canvas");
    }

    const config = BADGE_CONFIGS[type] || BADGE_CONFIGS.ai;
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext("2d");

    // Ensure fonts are ready
    if (document.fonts && document.fonts.ready) {
      try {
        await document.fonts.ready;
      } catch (e) {
        // Continue if font promise completes
      }
    }

    // Preload icon and signature
    // For signature: use the embedded SAKSHAM_SIGN_DATA directly so it NEVER fails on local or online!
    const iconUrl = typeof config.getIconSrc === 'function' ? config.getIconSrc() : config.iconSrc;
    const [iconImg, signImg] = await Promise.all([
      this.loadImage(iconUrl, config.fallbackIconSrc),
      this.loadImage(getSignatureSrc(), "Sign.png")
    ]);

    const w = this.width;
    const h = this.height;
    const cx = w / 2;

    // 1. Transparent background
    ctx.clearRect(0, 0, w, h);

    // 2. Ribbon tails
    this.drawRibbonTails(ctx, config);

    // 3. Drop Shadow for 3D elevation
    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.75)";
    ctx.shadowBlur = 35;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 15;
    this.drawBadgeShapePath(ctx, 0);
    ctx.fillStyle = "#090d16";
    ctx.fill();
    ctx.restore();

    // 4. Badge Body Gradient
    ctx.save();
    this.drawBadgeShapePath(ctx, 0);
    ctx.clip();

    const bgGrad = ctx.createLinearGradient(cx, 20, cx, 1140);
    bgGrad.addColorStop(0, config.primaryGradient[0]);
    bgGrad.addColorStop(0.35, config.primaryGradient[1]);
    bgGrad.addColorStop(0.7, config.primaryGradient[2]);
    bgGrad.addColorStop(1, config.primaryGradient[3]);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Soft ambient glow
    const radialGlow = ctx.createRadialGradient(cx, 350, 40, cx, 350, 480);
    radialGlow.addColorStop(0, config.themeGlow);
    radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = radialGlow;
    ctx.fillRect(0, 0, w, h);

    ctx.restore(); // end clip

    // 5. Clean Metallic Gold & Accent Borders
    ctx.save();
    // Outer Gold Border
    this.drawBadgeShapePath(ctx, 4);
    const goldGrad = ctx.createLinearGradient(0, 0, w, h);
    goldGrad.addColorStop(0, "#fbbf24");
    goldGrad.addColorStop(0.3, "#fef08a");
    goldGrad.addColorStop(0.6, "#d97706");
    goldGrad.addColorStop(1, "#b45309");
    ctx.strokeStyle = goldGrad;
    ctx.lineWidth = 6;
    ctx.stroke();

    // Inner Accent Border
    this.drawBadgeShapePath(ctx, 14);
    ctx.strokeStyle = type === "ai" ? "rgba(56, 189, 248, 0.6)" : "rgba(52, 211, 153, 0.6)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // 6. TOP HEADER RIBBON: "ONLINE EDUCATION DAY 2026"
    ctx.save();
    const plaqueW = 460;
    const plaqueH = 36;
    const plaqueY = 72;

    ctx.fillStyle = "rgba(251, 191, 36, 0.12)";
    ctx.strokeStyle = "rgba(251, 191, 36, 0.55)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(cx - plaqueW / 2, plaqueY, plaqueW, plaqueH, 18);
    ctx.fill();
    ctx.stroke();

    ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "3px";
    ctx.fillStyle = "#fbbf24";
    ctx.fillText("✦  ONLINE EDUCATION DAY 2026  ✦", cx, plaqueY + 23);
    ctx.restore();

    // 7. CENTERPIECE COURSE ICON EMBLEM
    ctx.save();
    const iconCenterY = 300;
    const iconRadius = 165;

    // Outer Gold Ring
    ctx.beginPath();
    ctx.arc(cx, iconCenterY, iconRadius + 6, 0, Math.PI * 2);
    ctx.strokeStyle = goldGrad;
    ctx.lineWidth = 5;
    ctx.shadowColor = "#f59e0b";
    ctx.shadowBlur = 15;
    ctx.stroke();

    // Clip circular course icon
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, iconCenterY, iconRadius, 0, Math.PI * 2);
    ctx.clip();
    if (iconImg) {
      ctx.drawImage(iconImg, cx - iconRadius, iconCenterY - iconRadius, iconRadius * 2, iconRadius * 2);
    }
    ctx.restore();
    ctx.restore();

    // 8. CELEBRATORY BANNER: "Happy Online Education Day"
    ctx.save();
    const bannerY = 495;
    const bannerW = 600;
    const bannerH = 48;

    const ribbonGrad = ctx.createLinearGradient(cx - bannerW / 2, bannerY, cx + bannerW / 2, bannerY);
    ribbonGrad.addColorStop(0, "rgba(234, 179, 8, 0.2)");
    ribbonGrad.addColorStop(0.2, "rgba(234, 179, 8, 0.95)");
    ribbonGrad.addColorStop(0.5, "rgba(254, 240, 138, 1)");
    ribbonGrad.addColorStop(0.8, "rgba(234, 179, 8, 0.95)");
    ribbonGrad.addColorStop(1, "rgba(234, 179, 8, 0.2)");

    ctx.fillStyle = ribbonGrad;
    ctx.beginPath();
    ctx.roundRect(cx - bannerW / 2, bannerY, bannerW, bannerH, 24);
    ctx.fill();

    ctx.strokeStyle = "#fbbf24";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = "800 20px 'Cinzel', serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "2px";
    ctx.fillStyle = "#0f172a";
    ctx.fillText("🎉 HAPPY ONLINE EDUCATION DAY 🎉", cx, bannerY + 31);
    ctx.restore();

    // 9. STUDENT RECOGNITION
    ctx.save();
    ctx.font = "700 12px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "3px";
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText("PROUDLY PRESENTED TO", cx, 580);

    // Student Name (Dynamic Font Size)
    let fontSize = 38;
    const cleanName = (studentName || "Distinguished Learner").trim();
    if (cleanName.length > 25) fontSize = 28;
    else if (cleanName.length > 18) fontSize = 32;

    ctx.font = `800 ${fontSize}px 'Cinzel', serif`;
    const nameGrad = ctx.createLinearGradient(cx - 260, 620, cx + 260, 620);
    nameGrad.addColorStop(0, "#ffffff");
    nameGrad.addColorStop(0.4, "#fef08a");
    nameGrad.addColorStop(0.6, "#fbbf24");
    nameGrad.addColorStop(1, "#ffffff");
    ctx.fillStyle = nameGrad;
    ctx.shadowColor = "rgba(251, 191, 36, 0.5)";
    ctx.shadowBlur = 14;
    ctx.fillText(cleanName, cx, 624);

    // Decorative underline with center star
    ctx.shadowBlur = 0;
    ctx.strokeStyle = "rgba(251, 191, 36, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx - 220, 642);
    ctx.lineTo(cx - 25, 642);
    ctx.moveTo(cx + 25, 642);
    ctx.lineTo(cx + 220, 642);
    ctx.stroke();

    ctx.fillStyle = "#fbbf24";
    ctx.font = "14px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("★", cx, 647);

    // Course Title
    ctx.font = "800 20px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = config.titleColor;
    ctx.fillText(config.title, cx, 678);

    // Course Subtitle
    ctx.font = "italic 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText(`“${config.subtitle}”`, cx, 700);
    ctx.restore();

    // 10. EDUCATOR SECTION (Saksham Loona & Signature)
    ctx.save();
    // Subtle Divider Line
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 280, 726);
    ctx.lineTo(cx + 280, 726);
    ctx.stroke();

    // Luminous Signature Plaque
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
    ctx.beginPath();
    ctx.roundRect(cx - 125, 740, 250, 56, 10);
    ctx.fill();
    ctx.strokeStyle = "rgba(251, 191, 36, 0.55)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Render Signature cleanly on the plaque
    if (signImg) {
      const signW = 210;
      const signH = 48;
      const signX = cx - signW / 2;
      const signY = 744;
      ctx.drawImage(signImg, signX, signY, signW, signH);
    }

    // Educator Name
    ctx.font = "800 20px 'Cinzel', serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
    ctx.shadowBlur = 6;
    ctx.fillText("Saksham Loona", cx, 826);

    // Educator Role
    ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
    ctx.letterSpacing = "1.5px";
    ctx.fillStyle = "#fbbf24";
    ctx.fillText("Educator for these courses", cx, 848);

    // Educator Certifications
    ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#f1f5f9";
    ctx.fillText("4x Claude, 3x Google, 2x SAP & 2x Open AI Certified", cx, 870);

    // Gold Five Stars at bottom (Verification ID has been removed as requested!)
    ctx.font = "16px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#fbbf24";
    ctx.fillText("★   ★   ★   ★   ★", cx, 915);
    ctx.restore();

    return canvas;
  }

  /**
   * Helper to trigger download of canvas as PNG file
   */
  downloadBadge(canvas, filename = "Online_Education_Day_Badge.png") {
    const triggerDownload = (url) => {
      const link = document.createElement("a");
      link.download = filename;
      link.href = url;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      }, 500);
    };

    try {
      if (canvas.toBlob) {
        try {
          canvas.toBlob((blob) => {
            if (blob) {
              const blobUrl = URL.createObjectURL(blob);
              triggerDownload(blobUrl);
              setTimeout(() => {
                try { URL.revokeObjectURL(blobUrl); } catch (e) {}
              }, 60000);
            } else {
              triggerDownload(canvas.toDataURL("image/png"));
            }
          }, "image/png");
          return;
        } catch (blobErr) {
          console.warn("toBlob failed, falling back to toDataURL:", blobErr);
        }
      }
      triggerDownload(canvas.toDataURL("image/png"));
    } catch (err) {
      console.warn("Blob export failed, trying toDataURL:", err);
      try {
        triggerDownload(canvas.toDataURL("image/png"));
      } catch (err2) {
        console.error("Canvas export failed completely:", err2);
      }
    }
  }
}

// Global instance
const badgeGenerator = new BadgeGenerator();
