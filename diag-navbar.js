const fs = require("fs");
const path = "src/components/Navbar.jsx";
const out = { exists: fs.existsSync(path) };
if (out.exists) {
  const raw = fs.readFileSync(path);
  out.size = raw.length;
  out.text = raw.toString("utf8").slice(0, 500);
  out.bytes = Array.from(raw.slice(0, 80));
}
fs.writeFileSync("diag-navbar-output.json", JSON.stringify(out, null, 2));
console.log("wrote diag-navbar-output.json");
