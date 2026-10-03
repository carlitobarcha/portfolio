const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

const dirs = [
  path.join(publicDir, "images"),
  path.join(publicDir, "images", "certificates"),
  path.join(publicDir, "images", "companies"),
  path.join(publicDir, "images", "projects"),
  path.join(publicDir, "images", "rubab"),
  path.join(publicDir, "images", "gallery"),
  path.join(publicDir, "resume"),
];

dirs.forEach((d) => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
    console.log("Created directory:", d);
  }
});

// Copy authentic user photos, certificates and resume if they exist
const copies = [
  {
    src: "C:/Users/Carlito/Pictures/DP.jpg",
    dest: path.join(publicDir, "images", "profile.jpg"),
  },
  {
    src: "C:/Users/Carlito/Pictures/rubab.jpg.jpeg",
    dest: path.join(publicDir, "images", "rubab", "rubab-performance.jpg"),
  },
  {
    src: "C:/Users/Carlito/Pictures/rubab.jpg.jpeg",
    dest: path.join(publicDir, "images", "rubab", "rubab-hero.jpg"),
  },
  {
    src: "C:/Users/Carlito/Pictures/1672607260898.jpg",
    dest: path.join(publicDir, "images", "gallery", "khalid-mountains.jpg"),
  },
  {
    src: "C:/Users/Carlito/Pictures/Myrubab.jpeg.jpg",
    dest: path.join(publicDir, "images", "rubab", "myrubab-gold.jpg"),
  },
  {
    src: "C:/Users/Carlito/Documents/documents/CADM internship from Systems limited.png",
    dest: path.join(publicDir, "images", "certificates", "systems-limited.png"),
  },
  {
    src: "C:/Users/Carlito/Documents/documents/MERN stack Dev course from Web Loop.png",
    dest: path.join(publicDir, "images", "certificates", "webloop.png"),
  },
  {
    src: "C:/Users/Carlito/Documents/documents/Front-end Developmetfrom uconnect.jpeg",
    dest: path.join(publicDir, "images", "certificates", "uconnect.jpg"),
  },
  {
    src: "C:/Users/Carlito/Documents/Mr. Khalid Abbas.pdf",
    dest: path.join(publicDir, "resume", "Khalid-Abbas-Resume.pdf"),
  },
];

copies.forEach(({ src, dest }) => {
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${path.basename(src)} -> ${path.relative(publicDir, dest)}`);
    } else {
      console.warn(`Source not found: ${src}`);
    }
  } catch (err) {
    console.error(`Error copying ${src}:`, err.message);
  }
});

// SVG definitions
const svgs = {
  // Company logos
  "images/companies/systems-limited.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
    <rect width="200" height="60" rx="8" fill="#181819"/>
    <rect x="1" y="1" width="198" height="58" rx="7" stroke="#252528"/>
    <path d="M24 38L34 22H42L32 38H24Z" fill="#C9A86A"/>
    <path d="M35 38L45 22H53L43 38H35Z" fill="#DFBA73"/>
    <text x="64" y="32" fill="#F4F4F5" font-family="system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="1">SYSTEMS</text>
    <text x="64" y="44" fill="#C9A86A" font-family="system-ui, sans-serif" font-weight="500" font-size="9" letter-spacing="2">LIMITED</text>
  </svg>`,

  "images/companies/webloop.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
    <rect width="200" height="60" rx="8" fill="#181819"/>
    <rect x="1" y="1" width="198" height="58" rx="7" stroke="#252528"/>
    <circle cx="34" cy="30" r="14" stroke="#C9A86A" stroke-width="3" stroke-dasharray="60 20"/>
    <circle cx="34" cy="30" r="6" fill="#DFBA73"/>
    <text x="58" y="33" fill="#F4F4F5" font-family="system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="1">WEB LOOP</text>
    <text x="58" y="45" fill="#8E8E93" font-family="system-ui, sans-serif" font-weight="400" font-size="9" letter-spacing="1.5">PVT. LTD.</text>
  </svg>`,

  "images/companies/uconnect.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none">
    <rect width="200" height="60" rx="8" fill="#181819"/>
    <rect x="1" y="1" width="198" height="58" rx="7" stroke="#252528"/>
    <path d="M22 24C22 34 32 38 40 38C48 38 58 34 58 24" stroke="#C9A86A" stroke-width="3" stroke-linecap="round"/>
    <circle cx="40" cy="22" r="4" fill="#DFBA73"/>
    <text x="68" y="32" fill="#F4F4F5" font-family="system-ui, sans-serif" font-weight="700" font-size="13" letter-spacing="0.5">uCONNECT</text>
    <text x="68" y="44" fill="#8E8E93" font-family="system-ui, sans-serif" font-weight="400" font-size="8.5" letter-spacing="1">TECHNOLOGIES</text>
  </svg>`,

  // Rubab graphics
  "images/rubab/rubab-hero.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
    <rect width="400" height="400" fill="#151412"/>
    <circle cx="200" cy="200" r="170" stroke="#C9A86A" stroke-opacity="0.15" stroke-width="1"/>
    <circle cx="200" cy="200" r="140" stroke="#C9A86A" stroke-opacity="0.25" stroke-dasharray="4 8" stroke-width="1"/>
    <!-- Rubab Silhouette -->
    <g transform="translate(200, 200) scale(0.65) translate(-200, -200)">
      <!-- Peghead -->
      <path d="M190 40 H210 V80 H190 Z" fill="#C9A86A"/>
      <circle cx="178" cy="55" r="5" fill="#DFBA73"/>
      <circle cx="222" cy="55" r="5" fill="#DFBA73"/>
      <circle cx="178" cy="70" r="5" fill="#DFBA73"/>
      <circle cx="222" cy="70" r="5" fill="#DFBA73"/>
      <circle cx="178" cy="85" r="5" fill="#DFBA73"/>
      <circle cx="222" cy="85" r="5" fill="#DFBA73"/>
      <!-- Neck -->
      <path d="M192 80 L186 210 H214 L208 80 Z" fill="#C9A86A"/>
      <!-- Sympathetic pegs on side -->
      <circle cx="178" cy="120" r="3.5" fill="#DFBA73"/>
      <circle cx="176" cy="135" r="3.5" fill="#DFBA73"/>
      <circle cx="174" cy="150" r="3.5" fill="#DFBA73"/>
      <circle cx="172" cy="165" r="3.5" fill="#DFBA73"/>
      <circle cx="170" cy="180" r="3.5" fill="#DFBA73"/>
      <circle cx="168" cy="195" r="3.5" fill="#DFBA73"/>
      <!-- Body / Waist & Chamber -->
      <path d="M186 210 C160 220 145 250 155 275 C165 295 185 298 185 305 C185 315 150 330 160 365 C170 395 230 395 240 365 C250 330 215 315 215 305 C215 298 235 295 245 275 C255 250 240 220 214 210 Z" fill="#C9A86A" fill-opacity="0.95"/>
      <!-- Soundboard skin outline -->
      <path d="M172 320 C165 340 175 375 200 375 C225 375 235 340 228 320 C220 310 180 310 172 320 Z" fill="#181819" stroke="#DFBA73" stroke-width="1.5"/>
      <!-- Strings -->
      <line x1="197" y1="50" x2="197" y2="365" stroke="#DFBA73" stroke-width="1.5"/>
      <line x1="200" y1="50" x2="200" y2="365" stroke="#DFBA73" stroke-width="1.5"/>
      <line x1="203" y1="50" x2="203" y2="365" stroke="#DFBA73" stroke-width="1.5"/>
    </g>
    <text x="200" y="360" text-anchor="middle" fill="#C9A86A" font-family="Georgia, serif" font-style="italic" font-size="12" letter-spacing="2">THE LION OF INSTRUMENTS</text>
  </svg>`,

  "images/rubab/rubabjon-mark.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" fill="none">
    <rect width="300" height="300" fill="#121213"/>
    <circle cx="150" cy="150" r="135" stroke="#C9A86A" stroke-width="2"/>
    <circle cx="150" cy="150" r="125" stroke="#C9A86A" stroke-opacity="0.3" stroke-width="1"/>
    <!-- Central stylized Rubab silhouette -->
    <g transform="translate(150, 150) scale(0.65) translate(-150, -150)">
      <path d="M142 30 H158 V65 H142 Z" fill="#C9A86A"/>
      <circle cx="132" cy="45" r="4" fill="#DFBA73"/>
      <circle cx="168" cy="45" r="4" fill="#DFBA73"/>
      <circle cx="132" cy="58" r="4" fill="#DFBA73"/>
      <circle cx="168" cy="58" r="4" fill="#DFBA73"/>
      <path d="M144 65 L138 160 H162 L156 65 Z" fill="#DFBA73"/>
      <path d="M138 160 C115 170 100 195 110 215 C118 230 135 235 135 240 C135 250 105 265 115 290 C125 315 175 315 185 290 C195 265 165 250 165 240 C165 235 182 230 190 215 C200 195 185 170 162 160 Z" fill="#C9A86A"/>
      <line x1="148" y1="35" x2="148" y2="280" stroke="#121213" stroke-width="1.5"/>
      <line x1="150" y1="35" x2="150" y2="280" stroke="#121213" stroke-width="1.5"/>
      <line x1="152" y1="35" x2="152" y2="280" stroke="#121213" stroke-width="1.5"/>
    </g>
    <text x="150" y="270" text-anchor="middle" fill="#DFBA73" font-family="Georgia, serif" font-weight="700" font-size="14" letter-spacing="4">@RUBABJON</text>
  </svg>`,

  "images/rubab/rubab-tuning-diagram.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" fill="none">
    <rect width="600" height="350" fill="#181819" rx="10"/>
    <rect x="1" y="1" width="598" height="348" stroke="#252528" rx="9"/>
    <text x="40" y="50" fill="#DFBA73" font-family="Georgia, serif" font-size="18" font-weight="700">Modal Tuning & Sympathetic Harmonics</text>
    <text x="40" y="75" fill="#8E8E93" font-family="system-ui, sans-serif" font-size="12">Traditional Afghan Bilawal / Khamaj Configuration</text>

    <!-- 4 String Lanes -->
    <g transform="translate(40, 110)">
      <!-- String 1 -->
      <line x1="0" y1="20" x2="520" y2="20" stroke="#C9A86A" stroke-width="4"/>
      <circle cx="30" cy="20" r="14" fill="#252528" stroke="#C9A86A" stroke-width="2"/>
      <text x="30" y="24" text-anchor="middle" fill="#DFBA73" font-family="monospace" font-size="11" font-weight="bold">C3</text>
      <text x="70" y="24" fill="#D2D2D4" font-family="system-ui, sans-serif" font-size="12">130.81 Hz · Sa (Root Drone)</text>
      <text x="450" y="24" text-anchor="end" fill="#8E8E93" font-family="monospace" font-size="11">Heavy Wound Gut</text>

      <!-- String 2 -->
      <line x1="0" y1="70" x2="520" y2="70" stroke="#C9A86A" stroke-width="3"/>
      <circle cx="30" cy="70" r="14" fill="#252528" stroke="#C9A86A" stroke-width="2"/>
      <text x="30" y="74" text-anchor="middle" fill="#DFBA73" font-family="monospace" font-size="11" font-weight="bold">F3</text>
      <text x="70" y="74" fill="#D2D2D4" font-family="system-ui, sans-serif" font-size="12">174.61 Hz · Ma (Fourth)</text>
      <text x="450" y="74" text-anchor="end" fill="#8E8E93" font-family="monospace" font-size="11">Mid Plain Nylon</text>

      <!-- String 3 -->
      <line x1="0" y1="120" x2="520" y2="120" stroke="#C9A86A" stroke-width="2"/>
      <circle cx="30" cy="120" r="14" fill="#252528" stroke="#C9A86A" stroke-width="2"/>
      <text x="30" y="124" text-anchor="middle" fill="#DFBA73" font-family="monospace" font-size="11" font-weight="bold">C4</text>
      <text x="70" y="124" fill="#D2D2D4" font-family="system-ui, sans-serif" font-size="12">261.63 Hz · Sa (Middle Octave Melody)</text>
      <text x="450" y="124" text-anchor="end" fill="#8E8E93" font-family="monospace" font-size="11">High Plain Steel</text>

      <!-- String 4 -->
      <line x1="0" y1="170" x2="520" y2="170" stroke="#DFBA73" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="30" cy="170" r="14" fill="#252528" stroke="#DFBA73" stroke-width="2"/>
      <text x="30" y="174" text-anchor="middle" fill="#DFBA73" font-family="monospace" font-size="11" font-weight="bold">G4</text>
      <text x="70" y="174" fill="#D2D2D4" font-family="system-ui, sans-serif" font-size="12">392.00 Hz · Pa (Fifth Upper Register)</text>
      <text x="450" y="174" text-anchor="end" fill="#8E8E93" font-family="monospace" font-size="11">Sympathetic / Drone</text>
    </g>

    <text x="300" y="325" text-anchor="middle" fill="#C9A86A" font-family="monospace" font-size="11">11–15 Sympathetic Tarab Resonators Tuned to Modal Scale</text>
  </svg>`,

  // Projects SVG illustrations
  "images/projects/construction-assistant.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#161618" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <!-- Top toolbar -->
    <rect x="20" y="20" width="560" height="36" rx="6" fill="#1F1F22"/>
    <circle cx="38" cy="38" r="4" fill="#FF5F56"/>
    <circle cx="52" cy="38" r="4" fill="#FFBD2E"/>
    <circle cx="66" cy="38" r="4" fill="#27C93F"/>
    <text x="90" y="42" fill="#8E8E93" font-family="monospace" font-size="11">construction-ai-portal.app/analytics/risk-matrix</text>
    <rect x="490" y="27" width="75" height="22" rx="4" fill="#C9A86A" fill-opacity="0.15"/>
    <text x="527" y="41" text-anchor="middle" fill="#DFBA73" font-family="sans-serif" font-size="10" font-weight="600">LIVE SYNC</text>

    <!-- Main Chart / Blueprint Simulation -->
    <rect x="20" y="70" width="370" height="285" rx="6" fill="#1C1C1F" stroke="#28282C"/>
    <path d="M40 280 L110 230 L180 250 L250 170 L320 190 L370 120" stroke="#C9A86A" stroke-width="2.5" fill="none"/>
    <path d="M40 280 L110 230 L180 250 L250 170 L320 190 L370 120 V310 H40 Z" fill="url(#grad1)" fill-opacity="0.12"/>
    <circle cx="250" cy="170" r="5" fill="#DFBA73"/>
    <text x="250" y="155" text-anchor="middle" fill="#DFBA73" font-family="monospace" font-size="10">Risk Delta: -34%</text>

    <!-- Side Panel -->
    <rect x="405" y="70" width="175" height="135" rx="6" fill="#1C1C1F" stroke="#28282C"/>
    <text x="420" y="95" fill="#F4F4F5" font-family="sans-serif" font-size="11" font-weight="600">DeepSeek LLM Insights</text>
    <rect x="420" y="110" width="145" height="6" rx="3" fill="#2A2A2E"/>
    <rect x="420" y="125" width="125" height="6" rx="3" fill="#2A2A2E"/>
    <rect x="420" y="140" width="138" height="6" rx="3" fill="#C9A86A" fill-opacity="0.4"/>
    <text x="420" y="180" fill="#DFBA73" font-family="monospace" font-size="9">Compliance: 98.4%</text>

    <rect x="405" y="220" width="175" height="135" rx="6" fill="#1C1C1F" stroke="#28282C"/>
    <text x="420" y="245" fill="#F4F4F5" font-family="sans-serif" font-size="11" font-weight="600">CAD Blueprint Feed</text>
    <rect x="420" y="260" width="145" height="80" rx="4" fill="#141416" stroke="#252528"/>
    <line x1="435" y1="275" x2="540" y2="275" stroke="#C9A86A" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="435" y1="300" x2="510" y2="300" stroke="#C9A86A" stroke-width="1"/>
    <line x1="435" y1="320" x2="550" y2="320" stroke="#C9A86A" stroke-width="1" stroke-dasharray="4 4"/>

    <defs>
      <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C9A86A"/>
        <stop offset="100%" stop-color="#C9A86A" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>`,

  "images/projects/rubab-tuner.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#141415" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <!-- Circular Pitch Dial -->
    <circle cx="300" cy="180" r="110" stroke="#252528" stroke-width="8"/>
    <path d="M 222 258 A 110 110 0 1 1 378 258" stroke="#C9A86A" stroke-width="8" stroke-linecap="round"/>
    <circle cx="300" cy="180" r="85" fill="#1A1A1E" stroke="#333338"/>
    <text x="300" y="170" text-anchor="middle" fill="#DFBA73" font-family="Georgia, serif" font-size="44" font-weight="700">C4</text>
    <text x="300" y="200" text-anchor="middle" fill="#8E8E93" font-family="monospace" font-size="13">261.63 Hz</text>
    <text x="300" y="222" text-anchor="middle" fill="#34D399" font-family="monospace" font-size="11" font-weight="bold">IN TUNE (±0.2 ct)</text>

    <!-- Spectrum bars at bottom -->
    <g transform="translate(60, 310)">
      <rect x="0" y="15" width="8" height="25" rx="2" fill="#C9A86A" fill-opacity="0.3"/>
      <rect x="15" y="5" width="8" height="35" rx="2" fill="#C9A86A" fill-opacity="0.5"/>
      <rect x="30" y="18" width="8" height="22" rx="2" fill="#C9A86A" fill-opacity="0.3"/>
      <rect x="45" y="0" width="8" height="40" rx="2" fill="#DFBA73"/>
      <rect x="60" y="10" width="8" height="30" rx="2" fill="#C9A86A" fill-opacity="0.6"/>
      <rect x="75" y="20" width="8" height="20" rx="2" fill="#C9A86A" fill-opacity="0.4"/>
      <rect x="90" y="14" width="8" height="26" rx="2" fill="#C9A86A" fill-opacity="0.4"/>
      <rect x="105" y="22" width="8" height="18" rx="2" fill="#C9A86A" fill-opacity="0.2"/>
      <text x="240" y="30" fill="#8E8E93" font-family="monospace" font-size="11">2048-BIN FFT SPECTRUM · YIN AUTOCORRELATION</text>
    </g>
    <text x="40" y="45" fill="#D2D2D4" font-family="system-ui, sans-serif" font-weight="600" font-size="13">Acoustic Rubab Real-Time Tuner</text>
  </svg>`,

  "images/projects/hunza-grand-motel.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#151719" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <!-- Hotel Mountain Header -->
    <path d="M0 240 L160 120 L270 200 L420 80 L600 240 V380 H0 Z" fill="#1C2024"/>
    <path d="M420 80 L380 130 L450 140 Z" fill="#E2E8F0" fill-opacity="0.2"/>
    <rect x="40" y="40" width="520" height="120" rx="6" fill="#181A1D" fill-opacity="0.85" stroke="#2B3037"/>
    <text x="65" y="75" fill="#DFBA73" font-family="Georgia, serif" font-size="20" font-weight="bold">Hunza Grand Motel</text>
    <text x="65" y="98" fill="#D2D2D4" font-family="system-ui, sans-serif" font-size="12">Direct Booking & Multi-Room Management Engine</text>
    <rect x="65" y="118" width="110" height="26" rx="4" fill="#C9A86A"/>
    <text x="120" y="135" text-anchor="middle" fill="#121213" font-family="sans-serif" font-size="11" font-weight="bold">Check Suites</text>
    <!-- Booking card -->
    <rect x="40" y="190" width="520" height="150" rx="6" fill="#1E2227" stroke="#2F363F"/>
    <text x="65" y="225" fill="#8E8E93" font-family="monospace" font-size="11">DATE RANGE · GUESTS · MOUNTAIN VIEW SELECTION</text>
    <line x1="65" y1="245" x2="535" y2="245" stroke="#2B3037"/>
    <text x="65" y="280" fill="#F4F4F5" font-family="sans-serif" font-size="14" font-weight="600">Executive Passu Cones Suite</text>
    <text x="535" y="280" text-anchor="end" fill="#C9A86A" font-family="monospace" font-size="14" font-weight="bold">PKR 18,500/night</text>
  </svg>`,

  "images/projects/peak-presence.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#161619" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <text x="40" y="50" fill="#DFBA73" font-family="system-ui, sans-serif" font-size="16" font-weight="bold">Peak Presence Agency</text>
    <text x="40" y="75" fill="#8E8E93" font-family="monospace" font-size="11">FULL-SERVICE DIGITAL PRODUCTION & GROWTH PLATFORM</text>
    <!-- Portfolio Cards Layout -->
    <rect x="40" y="100" width="165" height="230" rx="6" fill="#1C1C20" stroke="#28282C"/>
    <rect x="220" y="100" width="165" height="230" rx="6" fill="#1C1C20" stroke="#28282C"/>
    <rect x="400" y="100" width="160" height="230" rx="6" fill="#1C1C20" stroke="#28282C"/>
    <circle cx="122" cy="160" r="30" fill="#C9A86A" fill-opacity="0.1" stroke="#C9A86A"/>
    <text x="122" y="220" text-anchor="middle" fill="#F4F4F5" font-family="sans-serif" font-size="12" font-weight="600">Web Craft</text>
    <circle cx="302" cy="160" r="30" fill="#DFBA73" fill-opacity="0.1" stroke="#DFBA73"/>
    <text x="302" y="220" text-anchor="middle" fill="#F4F4F5" font-family="sans-serif" font-size="12" font-weight="600">SEO Matrix</text>
    <circle cx="480" cy="160" r="30" fill="#C9A86A" fill-opacity="0.1" stroke="#C9A86A"/>
    <text x="480" y="220" text-anchor="middle" fill="#F4F4F5" font-family="sans-serif" font-size="12" font-weight="600">Brand Vision</text>
  </svg>`,

  "images/projects/houston-car-wash.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#161719" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <text x="40" y="50" fill="#DFBA73" font-family="system-ui, sans-serif" font-size="16" font-weight="bold">Houston Auto Spa & Detail</text>
    <text x="40" y="75" fill="#8E8E93" font-family="monospace" font-size="11">REAL-TIME BAY SCHEDULING & TIER SELECTION</text>
    <!-- Booking step cards -->
    <rect x="40" y="105" width="520" height="65" rx="6" fill="#1C1E22" stroke="#282B30"/>
    <text x="65" y="135" fill="#F4F4F5" font-family="sans-serif" font-size="13" font-weight="600">Tier 1: Ceramic Hydro Coat</text>
    <text x="65" y="152" fill="#8E8E93" font-family="sans-serif" font-size="11">Interior Steam Decon · Exterior Foam Cannon · 9H Curing</text>
    <text x="535" y="142" text-anchor="end" fill="#C9A86A" font-family="monospace" font-size="14" font-weight="bold">$189.00</text>
    <!-- Calendar simulation -->
    <rect x="40" y="185" width="520" height="150" rx="6" fill="#1C1E22" stroke="#282B30"/>
    <text x="65" y="215" fill="#C9A86A" font-family="sans-serif" font-size="12" font-weight="600">Available Bay Slots — Today</text>
    <rect x="65" y="235" width="85" height="36" rx="4" fill="#282B30"/>
    <text x="107" y="258" text-anchor="middle" fill="#F4F4F5" font-family="monospace" font-size="11">09:00 AM</text>
    <rect x="160" y="235" width="85" height="36" rx="4" fill="#C9A86A"/>
    <text x="202" y="258" text-anchor="middle" fill="#121213" font-family="monospace" font-size="11" font-weight="bold">11:30 AM</text>
    <rect x="255" y="235" width="85" height="36" rx="4" fill="#282B30"/>
    <text x="297" y="258" text-anchor="middle" fill="#F4F4F5" font-family="monospace" font-size="11">02:00 PM</text>
  </svg>`,

  "images/projects/lerco-electric.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#151717" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <text x="40" y="50" fill="#DFBA73" font-family="system-ui, sans-serif" font-size="16" font-weight="bold">LERCO Electric Commercial</text>
    <text x="40" y="75" fill="#8E8E93" font-family="monospace" font-size="11">INDUSTRIAL POWER & COMMERCIAL INFRASTRUCTURE PORTAL</text>
    <rect x="40" y="105" width="250" height="225" rx="6" fill="#1C1E20" stroke="#2A2C30"/>
    <text x="65" y="140" fill="#F4F4F5" font-family="sans-serif" font-size="13" font-weight="600">Substation Grid Spec</text>
    <line x1="65" y1="170" x2="265" y2="170" stroke="#C9A86A" stroke-width="2"/>
    <circle cx="115" cy="170" r="4" fill="#DFBA73"/>
    <circle cx="215" cy="170" r="4" fill="#DFBA73"/>
    <text x="65" y="210" fill="#8E8E93" font-family="sans-serif" font-size="11">High-Voltage Distribution</text>
    <text x="65" y="235" fill="#8E8E93" font-family="sans-serif" font-size="11">Transformer Load Analysis</text>
    <text x="65" y="260" fill="#C9A86A" font-family="monospace" font-size="11">ISO 9001 Compliant</text>

    <rect x="310" y="105" width="250" height="225" rx="6" fill="#1C1E20" stroke="#2A2C30"/>
    <text x="335" y="140" fill="#F4F4F5" font-family="sans-serif" font-size="13" font-weight="600">Project Dispatch</text>
    <rect x="335" y="165" width="200" height="40" rx="4" fill="#25272B"/>
    <text x="350" y="190" fill="#D2D2D4" font-family="monospace" font-size="11">RFQ: Commercial Depot</text>
    <rect x="335" y="215" width="200" height="40" rx="4" fill="#25272B"/>
    <text x="350" y="240" fill="#D2D2D4" font-family="monospace" font-size="11">RFQ: Hospital Backup 2MW</text>
  </svg>`,

  "images/projects/badia-ebike.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#151716" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <text x="40" y="50" fill="#DFBA73" font-family="system-ui, sans-serif" font-size="16" font-weight="bold">Badia Electric Mobility</text>
    <text x="40" y="75" fill="#8E8E93" font-family="monospace" font-size="11">DIRECT-TO-CONSUMER E-BIKE SHOWCASE & BATTERY TELEMETRY</text>
    <circle cx="160" cy="220" r="55" stroke="#C9A86A" stroke-width="4"/>
    <circle cx="440" cy="220" r="55" stroke="#C9A86A" stroke-width="4"/>
    <path d="M160 220 L270 220 L330 160 L240 160 Z" stroke="#DFBA73" stroke-width="4" fill="none"/>
    <path d="M270 220 L330 160 L440 220" stroke="#DFBA73" stroke-width="4"/>
    <line x1="330" y1="160" x2="350" y2="120" stroke="#DFBA73" stroke-width="4"/>
    <text x="300" y="320" text-anchor="middle" fill="#8E8E93" font-family="monospace" font-size="11">750W BAFANG MOTOR · 48V 17.5AH LG CELLS · 65 MILE RANGE</text>
  </svg>`,

  "images/gallery/code-architecture.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#151517" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <text x="40" y="50" fill="#DFBA73" font-family="Georgia, serif" font-size="16" font-weight="bold">System Architecture Matrix</text>
    <text x="40" y="72" fill="#8E8E93" font-family="monospace" font-size="11">CLEAN ARCHITECTURE · DOMAIN DRIVEN DESIGN · ABP.IO</text>

    <rect x="40" y="100" width="160" height="220" rx="6" fill="#1B1B1E" stroke="#28282C"/>
    <text x="60" y="130" fill="#DFBA73" font-family="sans-serif" font-size="12" font-weight="bold">Domain Core</text>
    <text x="60" y="160" fill="#8E8E93" font-family="monospace" font-size="10">Entities</text>
    <text x="60" y="185" fill="#8E8E93" font-family="monospace" font-size="10">Value Objects</text>
    <text x="60" y="210" fill="#8E8E93" font-family="monospace" font-size="10">Domain Events</text>
    <text x="60" y="235" fill="#8E8E93" font-family="monospace" font-size="10">Repository Spec</text>

    <rect x="220" y="100" width="160" height="220" rx="6" fill="#1B1B1E" stroke="#28282C"/>
    <text x="240" y="130" fill="#DFBA73" font-family="sans-serif" font-size="12" font-weight="bold">Application</text>
    <text x="240" y="160" fill="#8E8E93" font-family="monospace" font-size="10">App Services</text>
    <text x="240" y="185" fill="#8E8E93" font-family="monospace" font-size="10">DTO Mapping</text>
    <text x="240" y="210" fill="#8E8E93" font-family="monospace" font-size="10">CQRS Handlers</text>
    <text x="240" y="235" fill="#8E8E93" font-family="monospace" font-size="10">Auth Guards</text>

    <rect x="400" y="100" width="160" height="220" rx="6" fill="#1B1B1E" stroke="#28282C"/>
    <text x="420" y="130" fill="#DFBA73" font-family="sans-serif" font-size="12" font-weight="bold">Infrastructure</text>
    <text x="420" y="160" fill="#8E8E93" font-family="monospace" font-size="10">EF Core / MSSQL</text>
    <text x="420" y="185" fill="#8E8E93" font-family="monospace" font-size="10">DeepSeek AI Client</text>
    <text x="420" y="210" fill="#8E8E93" font-family="monospace" font-size="10">RabbitMQ Bus</text>
    <text x="420" y="235" fill="#8E8E93" font-family="monospace" font-size="10">Redis Cache</text>
  </svg>`,
};

for (const [relPath, content] of Object.entries(svgs)) {
  const fullPath = path.join(publicDir, relPath);
  fs.writeFileSync(fullPath, content.trim(), "utf8");
  console.log("Wrote SVG:", relPath);
}

console.log("Asset setup completed successfully!");
