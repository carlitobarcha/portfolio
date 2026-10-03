const https = require("https");
const fs = require("fs");
const path = require("path");

function getWithRedirect(url, headers, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error("Too many redirects"));

    https.get(url, { headers }, (res) => {
      console.log(`GET ${url.substring(0, 70)}... -> Status ${res.statusCode}`);
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith("http")) {
          redirectUrl = new URL(redirectUrl, url).toString();
        }
        return resolve(getWithRedirect(redirectUrl, headers, maxRedirects - 1));
      }

      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          contentType: res.headers["content-type"],
          data: Buffer.concat(chunks),
        });
      });
    }).on("error", reject);
  });
}

const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept": "image/avif,image/webp,image/apng,image/jpeg,image/*,*/*;q=0.8",
};

const targets = [
  {
    name: "hunza-grand-motel.jpg",
    url: "https://hunza-grand-motel.vercel.app/",
  },
  {
    name: "rubab-tuner.jpg",
    url: "https://barcha-rubab-tuner.vercel.app/",
  },
  {
    name: "johnsons-junk-removal.jpg",
    url: "https://johnsons-junk-removal-w3dc.vercel.app/",
  },
  {
    name: "rinse-shine-crew.jpg",
    url: "https://rinseshinecrew.vercel.app/",
  },
];

const destDir = path.join(__dirname, "..", "public", "images", "projects");

async function main() {
  for (const t of targets) {
    console.log(`Fetching live front-page screenshot for ${t.url}`);
    const mshotUrl = "https://s0.wp.com/mshots/v1/" + encodeURIComponent(t.url) + "?w=1280";
    try {
      const result = await getWithRedirect(mshotUrl, headers);
      if (result.statusCode === 200 && result.data.length > 5000) {
        const destPath = path.join(destDir, t.name);
        fs.writeFileSync(destPath, result.data);
        console.log(`✓ Saved ${t.name} (${result.data.length} bytes)`);
      } else {
        console.warn(`Unexpected response for ${t.name}: status ${result.statusCode}, bytes ${result.data.length}`);
      }
    } catch (e) {
      console.error(`Failed ${t.name}:`, e.message);
    }
  }
  console.log("Finished capturing live front-page screenshots!");
}

main();
