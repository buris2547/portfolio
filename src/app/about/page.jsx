import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import { FaReact, FaNodeJs, FaDatabase, FaCloud } from "react-icons/fa";

const skills = [
  {
    name: "React & Next.js",
    icon: FaReact,
    description: "Building fast, modern, and scalable web applications.",
  },
  {
    name: "Node.js & Express bun-elysia",
    icon: FaNodeJs,
    description: "Creating robust and efficient back-end services and APIs.",
  },
  {
    name: "Databases",
    icon: FaDatabase,
    description:
      "Experience with both SQL (PostgreSQL) and MySQL databases.",
  },
  {
    name: "Cloud & DevOps",
    icon: FaCloud,
    description:
      "Deploying and managing applications on platforms like Vercel and AWS.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      {/* --- Introduction Section --- */}
      <ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-24">
          <div className="md:col-span-1 flex justify-center">
            <Image src="/images/buris.jpg" alt="Buris" width={250} height={250} className="rounded-full object-cover aspect-square border-8 border-white/10 dark:border-gray-800/50 shadow-lg" priority />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Frontend Developer with a knack for creating engaging and user-friendly digital experiences. My journey in web development started with a simple "Hello, World!" and has since grown into a full-fledged passion for building beautiful, functional, and responsive web applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* --- Skills Section --- */}
      <ScrollAnimation delay={0.2}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <ScrollAnimation key={skill.name} delay={0.3 + index * 0.1}>
              <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md border border-black/5 dark:border-white/10 text-center h-full">
                <skill.icon className="text-4xl text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{skill.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}