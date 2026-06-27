const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "TypeScript",
  "Redux",
  "Node.js",
  "MongoDB",
  "Git",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
      min-h-screen
      bg-slate-100/80
      py-20
      px-6
      dark:bg-slate-900/80
      "
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p
            className="
            text-sm
            uppercase
            tracking-[0.4em]
            text-sky-500
            "
          >
            Skills & Tools
          </p>

          <h1
            className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            text-slate-950
            dark:text-white
            "
          >
            Technologies I Use
          </h1>
        </div>

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-5
          gap-6
          "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              text-center
              shadow-lg
              transition
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              hover:bg-slate-50
              dark:border-slate-700
              dark:bg-slate-950
              dark:hover:bg-slate-800
              "
            >
              <h3
                className="
                text-xl
                font-semibold
                text-slate-900
                dark:text-white
                "
              >
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
