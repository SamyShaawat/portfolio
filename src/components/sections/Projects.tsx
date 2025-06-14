import { useState } from "react";
import { projects } from "../../data/constants.ts"; // Ensure each project has `category` field

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="flex flex-col items-center z-10 py-24 px-4 md:px-8 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My work experience as a software engineer and working on different
          companies and projects.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition duration-300
              ${
                selectedCategory === category
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-transparent text-gray-300 border-gray-500 hover:bg-gray-700"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#111928d4] border border-white/10 shadow-md rounded-2xl p-4 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-400 text-sm mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm text-white bg-gray-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                GitHub
              </a>
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
