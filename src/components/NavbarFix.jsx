import ThemeToggle from "./ThemeToggle";

const NavbarFix = () => {
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

export default NavbarFix;
