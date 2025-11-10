import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Mail className="h-5 w-5 text-fuchsia-400" />
          <h2 className="text-3xl font-bold">Let’s work together</h2>
        </div>
        <form
          className="grid gap-4 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form).entries());
            const mailto = `mailto:you@example.com?subject=${encodeURIComponent(
              'Project inquiry from ' + (data.name || 'Portfolio')
            )}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
            window.location.href = mailto;
            form.reset();
          }}
        >
          <input
            name="name"
            placeholder="Your name"
            className="rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/20"
          />
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/20"
          />
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={6}
            className="md:col-span-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-white/20"
          />
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-fuchsia-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-fuchsia-400"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
