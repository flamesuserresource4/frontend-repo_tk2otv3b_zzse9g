import React from 'react';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-cyan-400" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-white/80">
            I’m a full‑stack developer focused on building delightful user experiences and
            performant systems. My toolkit includes React, Tailwind, FastAPI, and MongoDB.
            I’m passionate about design systems, accessibility, and smooth interactions.
          </p>
          <ul className="grid grid-cols-2 gap-3 text-sm text-white/70">
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">React & Vite</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Tailwind CSS</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">FastAPI</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">MongoDB</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Framer Motion</li>
            <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Spline 3D</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
