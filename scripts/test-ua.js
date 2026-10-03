const https = require("https");
const fs = require("fs");
const path = require("path");

const testUrl = "https://s0.wp.com/mshots/v1/" + encodeURIComponent("https://hunza-grand-motel.vercel.app/") + "?w=1280";

const options = {
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  }
};

https.get(testUrl, options, (res) => {
  console.log("Status:", res.statusCode, res.headers["content-type"]);
  const chunks = [];
  res.on("data", (c) => chunks.push(c));
  res.on("end", () => {
    const buf = Buffer.concat(chunks);
    console.log("Total bytes:", buf.length);
    fs.writeFileSync(path.join(__dirname, "..", "public", "images", "projects", "test-hunza.jpg"), buf);
  });
});
