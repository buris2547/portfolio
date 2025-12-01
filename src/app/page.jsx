import Image from "next/image";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import ScrollAnimation from "@/components/ScrollAnimation";

// Centralized data for easier updates
const personalInfo = {
  name: "Buris",
  title: "Full-Stack Developer",
  description:
    "Welcome to my portfolio! I'm passionate about building beautiful and functional web applications. Here you'll find my projects and a bit more about me.",
  image: "/images/buris.jpg",
};

const socialLinks = [
  {
    href: "https://github.com/buris2547",
    label: "GitHub",
    icon: FaGithub,
    hoverClass: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    href: "https://www.instagram.com/burisr.n/",
    label: "Instagram",
    icon: FaInstagram,
    hoverClass: "hover:text-pink-500 dark:hover:text-pink-400",
  },
  {
    href: "https://www.facebook.com/burisy.anusuran/",
    label: "Facebook",
    icon: FaFacebook,
    hoverClass: "hover:text-blue-600 dark:hover:text-blue-500",
  },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-16">
      <ScrollAnimation className="text-center">
        <Image
          src={personalInfo.image}
          alt={personalInfo.name}
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 border-4 border-gray-200 dark:border-gray-700 shadow-lg"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">{personalInfo.name}</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4">
          {personalInfo.title}
        </p>
        <p className="max-w-2xl mx-auto text-base text-gray-700 dark:text-gray-300 mb-8">
          {personalInfo.description}
        </p>
        <div className="flex justify-center gap-6 text-3xl">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`My ${link.label} profile`} className={`group inline-flex items-center gap-2 text-gray-500 ${link.hoverClass} transition-colors`}>
                <Icon />
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-base font-medium opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </ScrollAnimation>
    </section>
  );
}
