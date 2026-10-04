const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const publicDir = path.join(__dirname, "..", "public");
const appDir = path.join(__dirname, "..", "src", "app");

// Clean, high-impact KB Monogram SVG
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5DC9E"/>
      <stop offset="45%" stop-color="#DFBA73"/>
      <stop offset="70%" stop-color="#C9A86A"/>
      <stop offset="100%" stop-color="#9C7736"/>
    </linearGradient>
    <linearGradient id="darkBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#222226"/>
      <stop offset="50%" stop-color="#18181B"/>
      <stop offset="100%" stop-color="#121213"/>
    </linearGradient>
    <linearGradient id="innerGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#DFBA73" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#C9A86A" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Deep Obsidian Slate Background -->
  <rect width="512" height="512" rx="100" fill="url(#darkBg)"/>

  <!-- Subtle Inner Gradient Fill -->
  <rect x="24" y="24" width="464" height="464" rx="80" fill="url(#innerGlow)"/>

  <!-- Outer Luxury Gold Border -->
  <rect x="20" y="20" width="472" height="472" rx="84" fill="none" stroke="url(#gold)" stroke-width="14" stroke-opacity="0.95"/>

  <!-- Inner Hairline Border -->
  <rect x="36" y="36" width="440" height="440" rx="70" fill="none" stroke="#C9A86A" stroke-width="2.5" stroke-opacity="0.4"/>

  <!-- Monogram Letter K -->
  <!-- Vertical stem -->
  <path d="M 125 145 L 165 145 L 165 365 L 125 365 Z" fill="url(#gold)"/>
  <!-- Top diagonal arm -->
  <path d="M 160 260 L 235 145 L 278 145 L 195 272 Z" fill="url(#gold)"/>
  <!-- Bottom diagonal leg -->
  <path d="M 185 255 L 285 365 L 238 365 L 155 275 Z" fill="url(#gold)"/>
  <!-- Decorative serif accents on K -->
  <path d="M 115 145 L 175 145 L 175 153 L 115 153 Z" fill="url(#gold)"/>
  <path d="M 115 357 L 175 357 L 175 365 L 115 365 Z" fill="url(#gold)"/>
  <path d="M 230 145 L 283 145 L 283 153 L 230 153 Z" fill="url(#gold)"/>
  <path d="M 232 357 L 292 357 L 292 365 L 232 365 Z" fill="url(#gold)"/>

  <!-- Monogram Letter B -->
  <!-- Vertical stem -->
  <path d="M 300 145 L 340 145 L 340 365 L 300 365 Z" fill="url(#gold)"/>
  <!-- Top loop of B -->
  <path d="M 335 145 L 385 145 C 418 145 435 162 435 195 C 435 225 415 245 375 250 L 335 250 Z" fill="url(#gold)"/>
  <path d="M 340 162 L 380 162 C 402 162 415 174 415 195 C 415 216 402 233 380 233 L 340 233 Z" fill="#18181B"/>
  <!-- Bottom loop of B -->
  <path d="M 335 245 L 390 245 C 428 245 445 268 445 305 C 445 345 422 365 380 365 L 335 365 Z" fill="url(#gold)"/>
  <path d="M 340 262 L 382 262 C 408 262 425 278 425 305 C 425 330 408 348 382 348 L 340 348 Z" fill="#18181B"/>
  <!-- Decorative serif accents on B -->
  <path d="M 290 145 L 345 145 L 345 153 L 290 153 Z" fill="url(#gold)"/>
  <path d="M 290 357 L 345 357 L 345 365 L 290 365 Z" fill="url(#gold)"/>

  <!-- Aesthetic Mountain / Acoustic Diamond Milestone at bottom center -->
  <polygon points="256,410 265,423 256,436 247,423" fill="url(#gold)"/>
</svg>`;

async function generate() {
  console.log("Generating favicon and icon suite...");

  // Write SVG files
  fs.writeFileSync(path.join(publicDir, "icon.svg"), svgContent);
  fs.writeFileSync(path.join(appDir, "icon.svg"), svgContent);
  console.log("Wrote icon.svg to public and app dirs");

  const svgBuffer = Buffer.from(svgContent);

  // Generate PNG sizes
  const sizes = [
    { size: 48, name: "icon-48.png" },
    { size: 96, name: "icon-96.png" },
    { size: 144, name: "icon-144.png" },
    { size: 180, name: "apple-touch-icon.png" },
    { size: 192, name: "icon-192.png" },
    { size: 512, name: "icon-512.png" },
  ];

  for (const s of sizes) {
    const outPath = path.join(publicDir, s.name);
    await sharp(svgBuffer)
      .resize(s.size, s.size)
      .png()
      .toFile(outPath);
    console.log(`Generated ${s.name} (${s.size}x${s.size})`);
  }

  // Also copy apple-touch-icon to app dir for Next.js automatic routing
  fs.copyFileSync(
    path.join(publicDir, "apple-touch-icon.png"),
    path.join(appDir, "apple-icon.png")
  );

  // Generate 48x48 PNG buffer for ICO
  const png48Buf = await sharp(svgBuffer).resize(48, 48).png().toBuffer();

  // Construct valid modern PNG-in-ICO file
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // 1 = icon
  icoHeader.writeUInt16LE(1, 4); // 1 image

  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(48, 0); // width
  dirEntry.writeUInt8(48, 1); // height
  dirEntry.writeUInt8(0, 2); // color count
  dirEntry.writeUInt8(0, 3); // reserved
  dirEntry.writeUInt16LE(1, 4); // color planes
  dirEntry.writeUInt16LE(32, 6); // bits per pixel
  dirEntry.writeUInt32LE(png48Buf.length, 8); // size of image data
  dirEntry.writeUInt32LE(22, 12); // offset of image data (6 + 16 = 22)

  const icoBuf = Buffer.concat([icoHeader, dirEntry, png48Buf]);

  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuf);
  console.log("Generated favicon.ico in public and app dirs");
  console.log("All icons created successfully!");
}

generate().catch(console.error);
