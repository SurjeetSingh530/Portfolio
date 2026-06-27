const About = () => {
  return (
    <section
      id="about"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      bg-gradient-to-b
      from-black
      via-slate-950
      to-slate-900
      "
    >
      <div
        className="
        max-w-5xl
        w-full
        rounded-[40px]
        p-10
        md:p-14
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_60px_rgba(255,215,0,0.12)]
        "
      >
        <p
          className="
          uppercase
          tracking-[0.4em]
          text-yellow-400
          text-sm
          "
        >
          About Me
        </p>

        <h1
          className="
          mt-4
          text-5xl
          md:text-7xl
          font-extrabold
          leading-tight
          bg-gradient-to-r
          from-yellow-300
          via-orange-400
          to-yellow-500
          bg-clip-text
          text-transparent
          "
        >
          Surjeet Singh
        </h1>

        <p
          className="
          mt-8
          max-w-3xl
          text-lg
          md:text-xl
          leading-9
          text-slate-300
          "
        >
          Hello, my self <span className="text-yellow-400">Surjeet Singh</span>.
          I am a<span className="text-cyan-400"> React Developer</span>
          passionate about building responsive, modern and user-friendly web
          applications. I enjoy creating beautiful interfaces, solving problems
          and continuously learning new technologies.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <span
            className="
            rounded-full
            bg-yellow-500/10
            border
            border-yellow-400/20
            px-5
            py-3
            text-yellow-300
            "
          >
            React.js
          </span>

          <span
            className="
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-400/20
            px-5
            py-3
            text-cyan-300
            "
          >
            JavaScript
          </span>

          <span
            className="
            rounded-full
            bg-violet-500/10
            border
            border-violet-400/20
            px-5
            py-3
            text-violet-300
            "
          >
            Frontend
          </span>
        </div>

        <a
          href="/Surjeet.pdf"
          download
          className="
          mt-10
          inline-block
          rounded-2xl
          bg-gradient-to-r
          from-yellow-400
          via-orange-400
          to-yellow-500
          px-10
          py-4
          text-lg
          font-bold
          text-black
          transition
          duration-300
          hover:scale-105
          hover:shadow-[0_0_40px_rgba(255,215,0,0.5)]
          "
        >
          Download Resume ↓
        </a>
      </div>
    </section>
  );
};

export default About;
