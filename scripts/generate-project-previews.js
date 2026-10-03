const fs = require("fs");
const path = require("path");

const projectsDir = path.join(__dirname, "..", "public", "images", "projects");

const svgs = {
  "johnsons-junk-removal.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#141518" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <!-- Browser Top Bar -->
    <rect x="20" y="20" width="560" height="34" rx="6" fill="#1C1E22"/>
    <circle cx="38" cy="37" r="4" fill="#FF5F56"/>
    <circle cx="52" cy="37" r="4" fill="#FFBD2E"/>
    <circle cx="66" cy="37" r="4" fill="#27C93F"/>
    <text x="90" y="41" fill="#8E8E93" font-family="monospace" font-size="11">johnsons-junk-removal-w3dc.vercel.app</text>
    <!-- Hero Mockup -->
    <rect x="20" y="70" width="560" height="150" rx="6" fill="#181B20" stroke="#282C34"/>
    <text x="45" y="110" fill="#DFBA73" font-family="Georgia, serif" font-size="22" font-weight="bold">Johnson's Junk Removal</text>
    <text x="45" y="135" fill="#D2D2D4" font-family="system-ui, sans-serif" font-size="13">Reliable Commercial & Residential Property Hauling Services</text>
    <rect x="45" y="155" width="130" height="32" rx="4" fill="#C9A86A"/>
    <text x="110" y="175" text-anchor="middle" fill="#121213" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Book Free Estimate</text>
    <!-- Estimator Cards -->
    <rect x="20" y="235" width="175" height="120" rx="6" fill="#1B1D22" stroke="#282C34"/>
    <text x="35" y="265" fill="#F4F4F5" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Single Item</text>
    <text x="35" y="285" fill="#8E8E93" font-family="system-ui, sans-serif" font-size="11">Curbside Pickup</text>
    <text x="35" y="325" fill="#C9A86A" font-family="monospace" font-size="14" font-weight="bold">$75+</text>
    
    <rect x="210" y="235" width="175" height="120" rx="6" fill="#1B1D22" stroke="#282C34"/>
    <text x="225" y="265" fill="#DFBA73" font-family="system-ui, sans-serif" font-size="13" font-weight="600">1/2 Truck Load</text>
    <text x="225" y="285" fill="#8E8E93" font-family="system-ui, sans-serif" font-size="11">Garage Cleanouts</text>
    <text x="225" y="325" fill="#DFBA73" font-family="monospace" font-size="14" font-weight="bold">$220+</text>

    <rect x="400" y="235" width="180" height="120" rx="6" fill="#1B1D22" stroke="#282C34"/>
    <text x="415" y="265" fill="#F4F4F5" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Full Truck Load</text>
    <text x="415" y="285" fill="#8E8E93" font-family="system-ui, sans-serif" font-size="11">Estate & Remodel</text>
    <text x="415" y="325" fill="#C9A86A" font-family="monospace" font-size="14" font-weight="bold">$450+</text>
  </svg>`,

  "rinse-shine-crew.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#131518" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <!-- Browser Top Bar -->
    <rect x="20" y="20" width="560" height="34" rx="6" fill="#1C1E22"/>
    <circle cx="38" cy="37" r="4" fill="#FF5F56"/>
    <circle cx="52" cy="37" r="4" fill="#FFBD2E"/>
    <circle cx="66" cy="37" r="4" fill="#27C93F"/>
    <text x="90" y="41" fill="#8E8E93" font-family="monospace" font-size="11">rinseshinecrew.vercel.app</text>
    <!-- Hero Mockup -->
    <rect x="20" y="70" width="560" height="150" rx="6" fill="#171A20" stroke="#262B35"/>
    <text x="45" y="108" fill="#DFBA73" font-family="Georgia, serif" font-size="22" font-weight="bold">Rinse &amp; Shine Crew</text>
    <text x="45" y="132" fill="#D2D2D4" font-family="system-ui, sans-serif" font-size="13">Premium Automotive Detailing &amp; Hydrophobic Coating</text>
    <rect x="45" y="152" width="130" height="32" rx="4" fill="#C9A86A"/>
    <text x="110" y="172" text-anchor="middle" fill="#121213" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Reserve Package</text>

    <!-- Services Grid -->
    <rect x="20" y="235" width="270" height="120" rx="6" fill="#1A1D23" stroke="#262B35"/>
    <text x="40" y="265" fill="#F4F4F5" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Interior Deep Steam Restoration</text>
    <text x="40" y="285" fill="#8E8E93" font-family="system-ui, sans-serif" font-size="11">Leather Conditioning · Ozone Treatment · Stain Extraction</text>
    <text x="40" y="325" fill="#C9A86A" font-family="monospace" font-size="13" font-weight="bold">Starts at $149</text>

    <rect x="310" y="235" width="270" height="120" rx="6" fill="#1A1D23" stroke="#262B35"/>
    <text x="330" y="265" fill="#DFBA73" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Ceramic Shield Exterior Curing</text>
    <text x="330" y="285" fill="#8E8E93" font-family="system-ui, sans-serif" font-size="11">Dual-Action Stage 2 Paint Correction · 9H Glass Coat</text>
    <text x="330" y="325" fill="#DFBA73" font-family="monospace" font-size="13" font-weight="bold">Starts at $289</text>
  </svg>`,

  "ai-construction-3d.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" fill="none">
    <rect width="600" height="380" fill="#141517" rx="8"/>
    <rect x="1" y="1" width="598" height="378" stroke="#252528" rx="7"/>
    <!-- Top toolbar -->
    <rect x="20" y="20" width="560" height="36" rx="6" fill="#1D1E22"/>
    <circle cx="38" cy="38" r="4" fill="#FF5F56"/>
    <circle cx="52" cy="38" r="4" fill="#FFBD2E"/>
    <circle cx="66" cy="38" r="4" fill="#27C93F"/>
    <text x="90" y="42" fill="#8E8E93" font-family="monospace" font-size="11">ai-cad-engine // 12 Subsystems // 3D Land &amp; Utilities Topology</text>
    <rect x="475" y="26" width="90" height="24" rx="4" fill="#C9A86A" fill-opacity="0.2"/>
    <text x="520" y="41" text-anchor="middle" fill="#DFBA73" font-family="monospace" font-size="10" font-weight="bold">MODULE 12/12</text>

    <!-- Isometric 3D Ground & Layers -->
    <g transform="translate(40, 80)">
      <!-- Land Surface Wireframe -->
      <polygon points="260,30 480,120 260,220 40,130" fill="#1C1D21" stroke="#3A3D45" stroke-width="1.5"/>
      <line x1="150" y1="80" x2="370" y2="170" stroke="#3A3D45" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="260" y1="30" x2="260" y2="220" stroke="#3A3D45" stroke-width="1" stroke-dasharray="2 2"/>
      
      <!-- Electrical Grid Lines (Champagne Gold) -->
      <path d="M120 110 L230 70 L340 120 L300 160" stroke="#C9A86A" stroke-width="3" fill="none"/>
      <circle cx="120" cy="110" r="5" fill="#DFBA73"/>
      <circle cx="230" cy="70" r="5" fill="#DFBA73"/>
      <circle cx="340" cy="120" r="5" fill="#DFBA73"/>
      <circle cx="300" cy="160" r="5" fill="#DFBA73"/>

      <!-- Sewage & Sanitary Lines (Subsurface Blue-Grey Cyan) -->
      <path d="M160 180 L260 140 L380 190" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="4 3" fill="none"/>
      <circle cx="160" cy="180" r="4" fill="#38BDF8"/>
      <circle cx="260" cy="140" r="4" fill="#38BDF8"/>
      <circle cx="380" cy="190" r="4" fill="#38BDF8"/>

      <!-- 3D Massing Building Extrusion -->
      <polygon points="220,110 280,85 340,110 280,135" fill="#C9A86A" fill-opacity="0.3" stroke="#DFBA73"/>
      <polygon points="220,110 280,135 280,165 220,140" fill="#C9A86A" fill-opacity="0.5" stroke="#DFBA73"/>
      <polygon points="340,110 280,135 280,165 340,140" fill="#C9A86A" fill-opacity="0.4" stroke="#DFBA73"/>
    </g>

    <!-- Legend & Inputs Box -->
    <rect x="40" y="300" width="520" height="55" rx="6" fill="#1A1B1F" stroke="#252528"/>
    <text x="60" y="325" fill="#DFBA73" font-family="monospace" font-size="10">INPUT: Land Area (Sq.Ft / Kanal)</text>
    <text x="60" y="342" fill="#D2D2D4" font-family="system-ui, sans-serif" font-size="11">Automated 3D Massing, Foundation Elevation, and Contour Analysis</text>
    <text x="370" y="325" fill="#C9A86A" font-family="monospace" font-size="10">● Electrical Grid Lines</text>
    <text x="370" y="342" fill="#38BDF8" font-family="monospace" font-size="10">● Sewage &amp; Drainage Lines</text>
  </svg>`,
};

for (const [filename, content] of Object.entries(svgs)) {
  const filePath = path.join(projectsDir, filename);
  fs.writeFileSync(filePath, content.trim(), "utf8");
  console.log("Wrote SVG preview:", filename);
}
console.log("Project SVGs updated!");
