const fs = require("fs");
const p = "src/components/Navbar.jsx";
const out = {
  exists: fs.existsSync(p),
  size: fs.existsSync(p) ? fs.statSync(p).size : null,
  content: fs.existsSync(p) ? fs.readFileSync(p, "utf8").slice(0, 10000) : null,
};
fs.writeFileSync(
  "debug-read-navbar-output.json",
  JSON.stringify(out, null, 2),
  "utf8",
);
console.log("written");
