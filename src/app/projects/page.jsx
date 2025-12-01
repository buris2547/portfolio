import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Project One",
    description:
      "A web application that helps users track their daily tasks and improve productivity. Built with a modern tech stack.",
    image: "/images/new-year-2026.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Prisma"],
    liveUrl: "https://new-year-2026-three.vercel.app/",
    githubUrl: "https://github.com/buris2547/New-Year-2026",
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform with a clean user interface, product management, and a secure checkout process.",
    image: "/images/project-placeholder.png", // TODO: Replace with your project image
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "A personal blog where I write about web development, new technologies, and my personal journey as a developer.",
    image: "/images/project-placeholder.png", // TODO: Replace with your project image
    tags: ["Gatsby", "GraphQL", "Styled Components"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800/50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-black/5 dark:border-white/10">
            <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed h-20">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6 mt-6 text-sm">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2 font-medium">
                  <FaExternalLinkAlt /> <span>Live Demo</span>
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 font-medium">
                  <FaGithub /> <span>Source</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}