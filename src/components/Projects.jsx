import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Dashboard',
    description:
      'A data-rich dashboard with realtime charts and a modular component system.',
    tags: ['React', 'Tailwind', 'API'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
  {
    title: 'E-commerce Microservice',
    description:
      'Scalable service with robust endpoints, authentication, and analytics.',
    tags: ['FastAPI', 'MongoDB', 'Cloud'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
  {
    title: 'Motion Portfolio',
    description:
      'Animated portfolio with smooth page transitions and 3D accents.',
    tags: ['Framer Motion', 'Spline', 'Vite'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Selected Projects</h2>
            <p className="mt-2 max-w-xl text-sm text-white/60">
              A snapshot of things I’ve designed, engineered, and shipped recently.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:border-white/20 md:inline-block"
          >
            Get the full case study →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 transition hover:border-white/20"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="flex items-center gap-2 text-white/70">
                  <a href={p.repo} aria-label="Repo" className="hover:text-white">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={p.link} aria-label="Live" className="hover:text-white">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mb-4 text-sm text-white/70">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
