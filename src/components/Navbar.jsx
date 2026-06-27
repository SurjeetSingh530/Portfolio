import {
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    href: "#about",
    label: "About",
    Icon: AiOutlineUser,
    color: "text-teal-500",
  },
  {
    href: "#skills",
    label: "Skills",
    Icon: AiOutlineFundProjectionScreen,
    color: "text-indigo-500",
  },
  {
    href: "#projects",
    label: "Projects",
    Icon: AiOutlineProject,
    color: "text-orange-500",
  },
  {
    href: "#contact",
    label: "Contact",
    Icon: AiOutlineMail,
    color: "text-amber-500",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-sm shadow-slate-900/5 transition-colors duration-500 dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20">
            <span className="text-2xl font-bold">S</span>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Portfolio
            </p>
            <h1 className="text-lg font-bold text-slate-950 dark:text-white">
              Surjeet Singh
            </h1>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map(({ href, label, Icon, color }) => (
            <a
              key={label}
              href={href}
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              <Icon
                className={`${color} h-5 w-5 transition group-hover:scale-110`}
              />
              <span>{label}</span>
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
