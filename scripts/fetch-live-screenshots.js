const https = require("https");
const fs = require("fs");
const path = require("path");

const targets = [
  {
    name: "hunza-grand-motel.png",
    url: "https://hunza-grand-motel.vercel.app/",
  },
  {
    name: "rubab-tuner.png",
    url: "https://barcha-rubab-tuner.vercel.app/",
  },
  {
    name: "johnsons-junk-removal.png",
    url: "https://johnsons-junk-removal-w3dc.vercel.app/",
  },
  {
    name: "rinse-shine-crew.png",
    url: "https://rinseshinecrew.vercel.app/",
  },
];

const destDir = path.join(__dirname, "..", "public", "images", "projects");

async function downloadScreenshot(target) {
  // WordPress mshots service produces high quality full-page / viewport captures
  const mshotUrl = `https://s0.wp.com/mshots/v1/${encodeURIComponent(target.url)}?w=1280`;
  const destPath = path.join(destDir, target.name);

  return new Promise((resolve) => {
    https.get(mshotUrl, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          const fileStream = fs.createWriteStream(destPath);
          redirectRes.pipe(fileStream);
          fileStream.on("finish", () => {
            fileStream.close();
            console.log(`Downloaded screenshot for ${target.name} (size: ${fs.statSync(destPath).size} bytes)`);
            resolve(true);
          });
        }).on("error", (e) => {
          console.error(`Error on redirect for ${target.name}:`, e.message);
          resolve(false);
        });
      } else {
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on("finish", () => {
          fileStream.close();
          console.log(`Downloaded screenshot for ${target.name} (size: ${fs.statSync(destPath).size} bytes)`);
          resolve(true);
        });
      }
    }).on("error", (e) => {
      console.error(`Error downloading ${target.name}:`, e.message);
      resolve(false);
    });
  });
}

async function main() {
  for (const target of targets) {
    console.log(`Fetching screenshot for ${target.url}...`);
    await downloadScreenshot(target);
  }
}

main();
