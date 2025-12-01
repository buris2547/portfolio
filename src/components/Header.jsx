"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaBriefcase, FaBook, FaImages, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { href: "/", icon: FaHome, label: "Home" },
  { href: "/about", icon: FaUser, label: "About" },
  { href: "/projects", icon: FaBriefcase, label: "Projects" },
  { href: "/contact", icon: FaEnvelope, label: "Contact" },
  // { href: "/blog", icon: FaBook, label: "Blog" },
  // { href: "/gallery", icon: FaImages, label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed bottom-100 sm:top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg rounded-full border border-black/5 dark:border-white/10 px-3 py-2">
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            const Icon = link.icon;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}