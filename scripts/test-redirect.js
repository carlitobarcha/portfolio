const https = require("https");
const fs = require("fs");
const path = require("path");

function getWithRedirect(url, headers, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error("Too many redirects"));

    https.get(url, { headers }, (res) => {
      console.log(`GET ${url.substring(0, 60)} -> Status ${res.statusCode}`);
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log(`Following redirect to ${res.headers.location}`);
        return resolve(getWithRedirect(res.headers.location, headers, maxRedirects - 1));
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
  "Accept": "image/avif,image/webp,image/apng,image/jpeg,image/*,*/*;q=0.8"
};

async function run() {
  const mshotUrl = "https://s0.wp.com/mshots/v1/" + encodeURIComponent("https://hunza-grand-motel.vercel.app/") + "?w=1280";
  const result = await getWithRedirect(mshotUrl, headers);
  console.log("Result status:", result.statusCode, "Type:", result.contentType, "Bytes:", result.data.length);
  if (result.data.length > 1000) {
    fs.writeFileSync(path.join(__dirname, "..", "public", "images", "projects", "hunza-grand-motel.jpg"), result.data);
    console.log("Saved real screenshot of Hunza Grand Motel!");
  }
}

run();
