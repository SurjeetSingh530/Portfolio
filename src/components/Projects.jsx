import { motion } from "framer-motion";

const projects = [
  {
    title: "Movix (OTT React Web)",
    image: "/images/Moviex.png",
    desc: "Responsive OTT platform with trending movies, TV shows, trailers and ratings using TMDB API.",
    tech: ["React", "Redux", "Axios", "TMDB API"],
    live: "https://movix-mocha.vercel.app",
    github: "https://github.com/SurjeetSingh530/Movix",
  },

  {
    title: "E-Shop (E-Commerce)",
    image: "/images/E-book.png",
    desc: "Responsive e-commerce website with reusable components and modern UI.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    live: "https://e-commerce-shope-rho.vercel.app/",
    github: "https://github.com/SurjeetSingh530/E-Shop",
  },

  {
    title: "Text Converter",
    image: "/images/TextConvertor.png",
    desc: "Text utility app with case conversion and word counter.",
    tech: ["React", "Bootstrap", "JavaScript"],
    live: "https://text-converter-omega.vercel.app/",
    github: "https://github.com/SurjeetSingh530/Text-Converter",
  },

  {
    title: "Employee Management System",
    image: "/images/employee.png",
    desc: "React dashboard with authentication and employee management.",
    tech: ["React", "JavaScript", "CSS"],
    live: "",
    github: "https://github.com/SurjeetSingh530",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-4 mb-14"
        >
          Some of my featured projects
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
              }}
              className="
              bg-slate-900
              rounded-3xl
              overflow-hidden
              shadow-lg
              "
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="
                w-full
                h-[240px]
                object-cover
                "
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold">{project.title}</h3>

                <p className="mt-4 text-gray-400">{project.desc}</p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                      bg-blue-600
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex gap-4 mt-8 ${
                    !project.live ? "justify-center" : ""
                  }`}
                >
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      bg-green-600
                      hover:bg-green-700
                      hover:scale-105
                      transition
                      duration-300
                      px-5
                      py-3
                      rounded-lg
                      "
                    >
                      🚀 Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    bg-gray-700
                    hover:bg-gray-600
                    hover:scale-105
                    transition
                    duration-300
                    px-5
                    py-3
                    rounded-lg
                    "
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
