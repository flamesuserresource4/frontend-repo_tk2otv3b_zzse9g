import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-12">
        <div className="relative z-10 flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <Rocket className="h-4 w-4 text-cyan-400" />
            Available for freelance work
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="max-w-xl text-slate-300">
            I design and build modern, performant web experiences. I love crafting delightful
            UIs, smooth interactions, and robust systems that scale.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-5 py-2.5 font-medium text-slate-900 transition hover:bg-cyan-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 font-medium transition hover:border-white/20"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
        </div>

        <div className="relative h-[55vh] w-full md:h-[70vh]">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
