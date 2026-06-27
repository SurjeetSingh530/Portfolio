const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-cyan-100 via-violet-100 to-amber-100 text-slate-900 transition-colors duration-700 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
      <div className="grid max-w-6xl md:grid-cols-2 gap-10 items-center">
        {/* Left */}

        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-900/5 dark:bg-slate-900/80 dark:text-slate-100">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Creative React Developer
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-medium uppercase tracking-[0.35em] text-fuchsia-600 dark:text-fuchsia-400">
              Hello, I'm
            </h3>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Surjeet Singh
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200">
              React Developer
            </h2>
          </div>

          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Building responsive, modern, and user-friendly web applications with
            React and JavaScript.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:scale-[1.01]"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-3xl border border-slate-300 bg-white/90 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100"
            >
              View Work
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-sm text-slate-700 dark:text-slate-300">
            <a
              href="https://github.com/SurjeetSingh530"
              className="hover:text-sky-600 dark:hover:text-sky-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/surjeet-singh-5620a227a"
              className="hover:text-violet-600 dark:hover:text-violet-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:surjeetdyadav@gmail.com"
              className="hover:text-amber-600 dark:hover:text-amber-400"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right */}

        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-4 text-center shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/80">
            <img
              src="/Surjeetimg.jpg"
              alt="profile"
              className="rounded-full w-72 md:w-[360px] shadow-xl shadow-fuchsia-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
