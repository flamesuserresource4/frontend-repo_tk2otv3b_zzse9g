import React from 'react';
import { User, FolderGit2, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
          <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
            My Portfolio
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#about" className="text-white/70 transition hover:text-white">About</a>
          <a href="#projects" className="text-white/70 transition hover:text-white">Projects</a>
          <a href="#contact" className="text-white/70 transition hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white transition hover:border-white/20"
          >
            <FolderGit2 className="h-4 w-4" /> Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-3 py-2 text-xs font-medium text-slate-900 transition hover:bg-cyan-400"
          >
            <Mail className="h-4 w-4" /> Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
