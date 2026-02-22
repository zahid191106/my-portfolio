// ============================
// COMPLETE TRANSLATION SYSTEM (FULL PAGE + DIGITS)
// Works with your current index.html without adding data-i18n everywhere.
// ============================

const translationsExact = {
  // ----------------------------
  // NAV / HEADER
  // ----------------------------
  "Home": "الرئيسية",
  "About": "من أنا",
  "Resume": "السيرة الذاتية",
  "Portfolio": "أعمالي",
  "Contact": "اتصل بي",
  "Hire Me": "وظفني",
  "Download CV": "تحميل السيرة الذاتية",
  "Let’s Talk": "لنتحدث",
  "Lets Talk": "لنتحدث",

  // ----------------------------
  // HERO
  // ----------------------------
  "Hi! I’m": "مرحباً! أنا",
  "Full-stack": "مطوّر متكامل",
  "Web Developer": "مطوّر ويب",
  "Full Stack Developer": "مطوّر متكامل (Full Stack)",
  "with hands-on experience in": "بخبرة عملية في",
  ", backed by\n                strong exposure to": "، مع خبرة قوية في",
  "software development, testing, and research":
    "تطوير البرمجيات والاختبار والبحث",
  ". Proven ability to develop, debug, test,\n                and maintain scalable web applications while collaborating effectively with cross-functional teams.":
    "قدرة مثبتة على تطوير التطبيقات وتصحيح الأخطاء واختبارها وصيانتها مع الحفاظ على قابلية التوسع، والتعاون بفعالية مع فرق متعددة التخصصات.",
  "Experienced in manual quality assurance, research assistance in AI and Web3, and modern\n                development practices":
    "خبرة في ضمان الجودة اليدوي، والمساعدة البحثية في الذكاء الاصطناعي وWeb3، وممارسات التطوير الحديثة",
  ". Seeking a challenging role in Saudi Arabia to contribute to innovative projects\n                and grow professionally.":
    "أسعى إلى دور مليء بالتحديات في المملكة العربية السعودية للمساهمة في مشاريع مبتكرة والتطور مهنياً.",
  "Results-driven": "مدفوع بالنتائج",

  // ----------------------------
  // STATS / COUNTERS / LABELS
  // ----------------------------
  "Years": "سنوات",
  "Experience": "خبرة",
  "Years Of Experience": "سنوات الخبرة",
  "Projects": "مشاريع",
  "Projects Done Successfully": "مشاريع مُنجزة بنجاح",

  "10 Projects": "10 مشاريع",
  "5 Projects": "5 مشاريع",
  "4 Projects": "4 مشاريع",

  "85%": "85٪",
  "90%": "90٪",
  "95%": "95٪",
  "97%": "97٪",

  // ----------------------------
  // ABOUT SECTION
  // ----------------------------
  "About Me": "نبذة عني",
  "Me": "أنا",
  "In summary": "باختصار",
  "current location": "الموقع الحالي",
  "Education": "التعليم",
  "email": "البريد الإلكتروني",
  "Riyadh, Saudi Arabia": "الرياض، المملكة العربية السعودية",
  "BS Software Engineering": "بكالوريوس هندسة البرمجيات",

  // (long about paragraph)
  "Detail-oriented and motivated Full Stack Developer with strong experience in Ruby on Rails and React.js, along with a solid foundation in software testing and research. \n                Proven ability to design, develop, test, and maintain scalable web applications. Experienced in collaborating with cross-functional teams and delivering high-quality solutions.":
    "مطوّر متكامل دقيق ومتحمس، يمتلك خبرة قوية في Ruby on Rails وReact.js، مع أساس متين في اختبار البرمجيات والبحث. قدرة مثبتة على التصميم والتطوير والاختبار والصيانة لتطبيقات ويب قابلة للتوسع، مع خبرة في التعاون مع فرق متعددة التخصصات وتقديم حلول عالية الجودة.",

  // ----------------------------
  // SERVICES / SKILLS / RESUME
  // ----------------------------
  "Skills": "المهارات",
  "Slills": "المهارات", // (typo exists in HTML)
  "Proficient in": "متقن",
  "modern web": "الويب الحديثة",
  "technologies and": "التقنيات و",
  "best practices": "أفضل الممارسات",
  "Education & Experience": "التعليم والخبرة",

  "Full Stack": "تطوير متكامل",
  "Front-end": "تطوير الواجهات",
  "Web architecture": "هندسة الويب",

  "Database | PostgreSQL": "قواعد البيانات | PostgreSQL",
  "REST APIs | Microservices | Cloud Deployment":
    "واجهات REST | خدمات مصغّرة | نشر سحابي",
  "JavaScript | HTML5 | CSS3": "JavaScript | HTML5 | CSS3",
  "React.js | JavaScript | HTML5, CSS3 | Tailwind CSS, Bootstrap":
    "React.js | JavaScript | HTML5, CSS3 | Tailwind CSS, Bootstrap",
  "SEO Optimization | Manual Testing": "تحسين SEO | اختبار يدوي",
  "Microsoft Office | Documentation & Reporting":
    "Microsoft Office | توثيق وتقارير",

  // Experience titles
  "Quality Assurance (07/2023 - 09/2023)":
    "ضمان الجودة (07/2023 - 09/2023)",
  "Research Assistant (02/2023 - 08/2023)":
    "مساعد باحث (02/2023 - 08/2023)",
  "Full Stack Developer (2023 - 2025)":
    "مطوّر متكامل (2023 - 2025)",
  "BS Software Engineering (2019 - 2023)":
    "بكالوريوس هندسة البرمجيات (2019 - 2023)",

  // Places / org lines (keep names but translate structure where safe)
  "Islamia College Peshawar, Pakistan": "Islamia College Peshawar, باكستان",
  "Islamia College, Peshawar – Department of Computer Science":
    "Islamia College, Peshawar – قسم علوم الحاسوب",
  "ITShifts Technologies (UK)": "ITShifts Technologies (UK)",
  "Workbox Pvt. Ltd": "Workbox Pvt. Ltd",

  // ----------------------------
  // PORTFOLIO / PROJECTS
  // ----------------------------
  "My latest": "أحدث",
  "Recent Projects": "المشاريع الأخيرة",

  "Tech:": "التقنيات:",

  "ChoreHustler": "ChoreHustler",
  "RiskTrack": "RiskTrack",
  "ShiftTrack": "ShiftTrack",
  "EasyBids": "EasyBids",

  "ChoreHustler Website and App, Ireland":
    "موقع وتطبيق ChoreHustler، أيرلندا",
  "RiskTrack App & Website, Nigeria & Ireland":
    "تطبيق وموقع RiskTrack، نيجيريا وأيرلندا",
  "ShiftTrack Shifts Managment and Tracking Software, UK":
    "برنامج ShiftTrack لإدارة وتتبع الشِفتات، المملكة المتحدة",
  "EasyBids App & Website – USA":
    "تطبيق وموقع EasyBids – الولايات المتحدة",

  "Protected Shops provides legal compliance service for online shop owners":
    "Protected Shops يقدم خدمة الامتثال القانوني لأصحاب المتاجر الإلكترونية",

  "Auxilium Services Ltd Website – UK & Ireland":
    "موقع Auxilium Services Ltd – المملكة المتحدة وأيرلندا",
  "Travolyo Security Website, Dubai":
    "موقع Travolyo Security، دبي",
  "West Way RealEstate Website, Dubai":
    "موقع West Way RealEstate، دبي",
  "Travel Booking Platform": "منصة حجز سفر",
  "Scarlet Roofing & Gutters Website – Canada / USA":
    "موقع Scarlet Roofing & Gutters – كندا / الولايات المتحدة",

  "Ruby on Rails": "Ruby on Rails",
  "ReactJS": "ReactJS",
  "Ruby on Rails and ReactJS": "Ruby on Rails وReactJS",
  "Ruby on Rails | PostgreSQL": "Ruby on Rails | PostgreSQL",
  "Ruby on Rails, HTML, CSS, Bootstrap, JavaScript":
    "Ruby on Rails, HTML, CSS, Bootstrap, JavaScript",
  "Ruby on Rails, HTML, CSS, JavaScript, Stimulus, Sidekiq, Stripe":
    "Ruby on Rails, HTML, CSS, JavaScript, Stimulus, Sidekiq, Stripe",
  "Ruby on Rails, HTML, CSS, JavaScript, Stimulus.js, Sidekiq, Stripe, Paystack":
    "Ruby on Rails, HTML, CSS, JavaScript, Stimulus.js, Sidekiq, Stripe, Paystack",
  "Ruby on Rails, PostgreSQL, Sidekiq, Stimulus, Tailwind css":
    "Ruby on Rails, PostgreSQL, Sidekiq, Stimulus, Tailwind css",
  "Ruby on Rails, Sidekiq, Stimulus, Frontend Integration":
    "Ruby on Rails, Sidekiq, Stimulus, Frontend Integration",
  "HTML, CSS, JavaScript": "HTML, CSS, JavaScript",
  "HTML, CSS, JavaScript, SEO": "HTML, CSS, JavaScript, SEO",
  "HTML, Tailwind CSS, JavaScript": "HTML, Tailwind CSS, JavaScript",
  "HTML, Tailwind CSS, JavaScript, SEO Optimization":
    "HTML, Tailwind CSS, JavaScript, SEO Optimization",

  // ----------------------------
  // CONTACT / FORM / FOOTER
  // ----------------------------
  "Contact Us": "اتصل بنا",
  "I'm always open to": "أنا دائماً منفتح على",
  "discussing produuct": "مناقشة المنتجات", // (typo exists in HTML)
  "Call US": "اتصل بنا",
  "Email US": "راسلنا",
  "Address": "العنوان",
  "Direct email": "البريد المباشر",
  "Send An Email": "إرسال بريد إلكتروني",
  "Check Address": "عرض العنوان",
  "Got a project in mind? Fill in the form or send us.":
    "هل لديك مشروع في ذهنك؟ املأ النموذج أو أرسل لنا.",

  "First name": "الاسم الأول",
  "Last name": "اسم العائلة",
  "Email": "البريد الإلكتروني",
  "Select your budget": "اختر ميزانيتك",
  "Your message": "رسالتك",
  "Send Message": "إرسال الرسالة",

  "Quick Links": "روابط سريعة",
  "Certificates": "الشهادات",

  ". All rights reserved": ". جميع الحقوق محفوظة",

  // Footer line
  "I’m Muhammad Zahid — a full‑stack developer crafting clean, accessible web experiences that help businesses scale.":
    "أنا Muhammad Zahid — مطوّر متكامل أصنع تجارب ويب نظيفة وسهلة الوصول تساعد الأعمال على التوسع.",

  // ----------------------------
  // SEO/Title (optional)
  // ----------------------------
  "Muhammad Zaid - Portfolio": "Muhammad Zaid - Portfolio"
};

// Accessibility attributes
const attrTranslations = {
  alt: {
    "Logo": "شعار",
    "heroImg": "صورة شخصية",
    "Icon": "أيقونة",
    "skill and education": "المهارات والتعليم",
    "blog_img": "صورة"
  },
  "aria-label": {
    "facebook": "فيسبوك",
    "twitter": "تويتر",
    "linkedin": "لينكدإن",
    "github": "جيت هاب"
  },
  placeholder: {
    "First name": "الاسم الأول",
    "Last name": "اسم العائلة",
    "Email": "البريد الإلكتروني",
    "Select your budget": "اختر ميزانيتك",
    "Your message": "رسالتك"
  }
};

// ----------------------------
// DIGIT CONVERTER
// ----------------------------
function convertDigits(text, lang) {
  if (!text) return text;

  if (lang === "ar") {
    const map = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
    return text.replace(/\d/g, d => map[Number(d)]);
  } else {
    const map = { "٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9" };
    return text.replace(/[٠-٩]/g, d => map[d]);
  }
}

function preserveEdgeWhitespace(original, replaced) {
  const m = original.match(/^(\s*)(.*?)(\s*)$/s);
  if (!m) return replaced;
  return `${m[1]}${replaced}${m[3]}`;
}

function translateTextValue(raw, lang) {
  if (raw == null) return raw;

  const original = String(raw);
  const trimmed = original.trim();

  // Don't touch empty
  if (!trimmed) return original;

  // Avoid translating emails
  if (trimmed.includes("@")) return original;

  // Avoid translating pure technical tokens (optional safety)
  // (We already map many tech strings to themselves)
  // If you WANT to translate even these, remove this block.
  // if (/^(ReactJS|Ruby on Rails|PostgreSQL|HTML|CSS|JavaScript|Tailwind)/i.test(trimmed)) return original;

  let out = trimmed;

  if (lang === "ar") {
    if (translationsExact[trimmed]) out = translationsExact[trimmed];
  } else {
    // reverse lookup: Arabic -> English
    // build reverse on demand
    if (!translateTextValue._rev) {
      const rev = {};
      Object.keys(translationsExact).forEach(en => {
        rev[translationsExact[en]] = en;
      });
      translateTextValue._rev = rev;
    }
    if (translateTextValue._rev[trimmed]) out = translateTextValue._rev[trimmed];
  }

  out = convertDigits(out, lang);
  return preserveEdgeWhitespace(original, out);
}

function translateAttributes(lang) {
  // placeholder
  document.querySelectorAll("[placeholder]").forEach(el => {
    const v = el.getAttribute("placeholder");
    const map = attrTranslations.placeholder || {};
    if (lang === "ar" && map[v]) el.setAttribute("placeholder", convertDigits(map[v], lang));
    if (lang === "en") {
      // reverse to original English placeholder if possible
      const rev = {};
      Object.keys(map).forEach(en => (rev[map[en]] = en));
      if (rev[v]) el.setAttribute("placeholder", convertDigits(rev[v], lang));
    }
  });

  // alt
  document.querySelectorAll("img[alt]").forEach(img => {
    const v = img.getAttribute("alt");
    const map = attrTranslations.alt || {};
    if (lang === "ar" && map[v]) img.setAttribute("alt", map[v]);
    if (lang === "en") {
      const rev = {};
      Object.keys(map).forEach(en => (rev[map[en]] = en));
      if (rev[v]) img.setAttribute("alt", rev[v]);
    }
  });

  // aria-label
  document.querySelectorAll("[aria-label]").forEach(el => {
    const v = el.getAttribute("aria-label");
    const map = attrTranslations["aria-label"] || {};
    if (lang === "ar" && map[v]) el.setAttribute("aria-label", map[v]);
    if (lang === "en") {
      const rev = {};
      Object.keys(map).forEach(en => (rev[map[en]] = en));
      if (rev[v]) el.setAttribute("aria-label", rev[v]);
    }
  });
}

function translateAllTextNodes(lang) {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node || !node.parentElement) return NodeFilter.FILTER_REJECT;

        const tag = node.parentElement.tagName?.toLowerCase();
        if (["script","style","noscript"].includes(tag)) return NodeFilter.FILTER_REJECT;

        // Don't translate inside textarea (user input)
        if (tag === "textarea") return NodeFilter.FILTER_REJECT;

        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(n => {
    n.nodeValue = translateTextValue(n.nodeValue, lang);
  });
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
//   document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  // Optional: add a class hook for CSS tweaks
  document.body.classList.toggle("lang-ar", lang === "ar");

  // Translate everything
  translateAttributes(lang);
  translateAllTextNodes(lang);

  // Odometer fix (numbers)
  // setTimeout(() => {
  //   document.querySelectorAll(".odometer").forEach(el => {
  //     el.innerHTML = convertDigits(el.innerHTML, lang);
  //   });
  // }, 300);

  // Button label (keep your existing behavior)
  const btn = document.getElementById("lang-switch");
  if (btn) btn.innerHTML = (lang === "en") ? "العربية" : "English";

  // Optional: document title
  if (document.title) {
    document.title = translateTextValue(document.title, lang).trim();
  }
}

// ============================
// SWITCH BUTTON
// ============================
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");

  const btn = document.getElementById("lang-switch");
  if (btn) {
    btn.addEventListener("click", function () {
      const current = document.documentElement.lang || "en";
      setLanguage(current === "en" ? "ar" : "en");
    });
  }
});
