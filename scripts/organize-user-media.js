const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

const dirs = [
  path.join(publicDir, "images"),
  path.join(publicDir, "images", "adventure"),
  path.join(publicDir, "images", "music"),
  path.join(publicDir, "images", "certificates"),
  path.join(publicDir, "images", "companies"),
  path.join(publicDir, "images", "projects"),
  path.join(publicDir, "resume"),
];

dirs.forEach((d) => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
    console.log("Created directory:", d);
  }
});

// 1. Copy Formal DP
const dpSource = "C:/Users/Carlito/Documents/documents/certifications and logos/my dp.png";
const dpDest = path.join(publicDir, "images", "profile.png");
if (fs.existsSync(dpSource)) {
  fs.copyFileSync(dpSource, dpDest);
  console.log("Copied DP -> public/images/profile.png");
}

// 2. Copy Company Logos
const logos = [
  {
    src: "C:/Users/Carlito/Documents/documents/certifications and logos/systems limited logo.png",
    dest: path.join(publicDir, "images", "companies", "systems-limited.png"),
  },
  {
    src: "C:/Users/Carlito/Documents/documents/certifications and logos/uconnect technologies logo.png",
    dest: path.join(publicDir, "images", "companies", "uconnect.png"),
  },
  {
    src: "C:/Users/Carlito/Documents/documents/certifications and logos/webloop logo.png",
    dest: path.join(publicDir, "images", "companies", "webloop.png"),
  },
];

logos.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("Copied logo ->", path.basename(dest));
  }
});

// 3. Copy Certificates
const certs = [
  {
    src: "C:/Users/Carlito/Documents/documents/certifications and logos/CADM internship from Systems limited.png",
    dest: path.join(publicDir, "images", "certificates", "systems-limited.png"),
  },
  {
    src: "C:/Users/Carlito/Documents/documents/certifications and logos/Front-end Developmetfrom uconnect.jpeg",
    dest: path.join(publicDir, "images", "certificates", "uconnect.jpg"),
  },
  {
    src: "C:/Users/Carlito/Documents/documents/certifications and logos/MERN stack Dev course from Web Loop.png",
    dest: path.join(publicDir, "images", "certificates", "webloop.png"),
  },
];

certs.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("Copied certificate ->", path.basename(dest));
  }
});

// 4. Copy Adventure photos from Documents/documents/adventure
const adventureDir = "C:/Users/Carlito/Documents/documents/adventure";
if (fs.existsSync(adventureDir)) {
  const files = fs.readdirSync(adventureDir).filter((f) => f.endsWith(".jpeg") || f.endsWith(".jpg") || f.endsWith(".png"));
  files.forEach((file, index) => {
    const src = path.join(adventureDir, file);
    const dest = path.join(publicDir, "images", "adventure", `adventure-${index + 1}.jpg`);
    fs.copyFileSync(src, dest);
    console.log(`Copied adventure [${index + 1}] -> adventure-${index + 1}.jpg`);
  });
}

// 5. Copy Music photos from Documents/documents/music pictures
const musicDir = "C:/Users/Carlito/Documents/documents/music pictures";
if (fs.existsSync(musicDir)) {
  const files = fs.readdirSync(musicDir).filter((f) => f.endsWith(".jpeg") || f.endsWith(".jpg") || f.endsWith(".png"));
  files.forEach((file, index) => {
    const src = path.join(musicDir, file);
    const dest = path.join(publicDir, "images", "music", `music-${index + 1}.jpg`);
    fs.copyFileSync(src, dest);
    console.log(`Copied music [${index + 1}] -> music-${index + 1}.jpg`);
  });
}

// 6. Also copy the specific newly uploaded studio, stage, and mountain jam photos into well-named slots
const specificUploads = [
  {
    src: "C:/Users/Carlito/.gemini/antigravity/brain/23cb3633-5340-44eb-8ead-a3019f45fa76/.user_uploaded/media_1790371215738.jpg",
    dest: path.join(publicDir, "images", "music", "rubab-stage-solo.jpg"),
  },
  {
    src: "C:/Users/Carlito/.gemini/antigravity/brain/23cb3633-5340-44eb-8ead-a3019f45fa76/.user_uploaded/media_1790371215750.jpg",
    dest: path.join(publicDir, "images", "music", "rubab-live-band.jpg"),
  },
  {
    src: "C:/Users/Carlito/.gemini/antigravity/brain/23cb3633-5340-44eb-8ead-a3019f45fa76/.user_uploaded/media_1790371215770.jpg",
    dest: path.join(publicDir, "images", "music", "rubab-studio-sanctuary.jpg"),
  },
  {
    src: "C:/Users/Carlito/.gemini/antigravity/brain/23cb3633-5340-44eb-8ead-a3019f45fa76/.user_uploaded/media_1790371215779.jpg",
    dest: path.join(publicDir, "images", "music", "rubab-mountain-jam.jpg"),
  },
];

specificUploads.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("Copied specific music photo ->", path.basename(dest));
  }
});

console.log("All media organized successfully!");
