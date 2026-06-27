const fs = require("fs");
const content = `import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full px-10 py-5 flex justify-between bg-white dark:bg-black">
      <h1 className="text-3xl font-bold dark:text-white">Portfolio</h1>
      <div className="flex gap-8 items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
`;
fs.writeFileSync("src/components/Navbar.jsx", content, "utf8");
const raw = fs.readFileSync("src/components/Navbar.jsx", "utf8");
console.log(
  JSON.stringify({
    exists: fs.existsSync("src/components/Navbar.jsx"),
    size: raw.length,
    first100: raw.slice(0, 100),
  }),
);
