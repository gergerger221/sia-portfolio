"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Mail, Send, MessageSquare } from "lucide-react";
import MotionFadeIn from "@/components/MotionFadeIn";

const socials = [
  { name: "Facebook", handle: "Joven Sanchez", href: "https://facebook.com" },
  { name: "Discord", handle: "gergerger221", href: "https://discord.com" },
  { name: "GitHub", handle: "jobenjo221", href: "https://github.com" },
];

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate lightweight form submission then route to /thankyou
    setTimeout(() => {
      router.push("/thankyou");
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-12 flex flex-col gap-16">
      {/* Header */}
      <section className="pt-6 sm:pt-10">
        <MotionFadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-400 mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-neutral-300" />
            <span>Contact &amp; Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Drop me a message and we can build something extraordinary as a team!
          </h1>
          <p className="text-sm text-neutral-400 max-w-xl leading-relaxed">
            Have a project in mind, need a web developer, or want to collaborate
            on something? Fill out the form below or reach out directly via email.
          </p>
        </MotionFadeIn>
      </section>

      {/* Grid: Form & Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Contact Form */}
        <div className="md:col-span-3">
          <MotionFadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 text-neutral-300 text-sm focus:outline-none focus:border-white/30 transition-colors">
                  <option value="web-dev">Web Application Development</option>
                  <option value="fullstack-systems">Full-Stack &amp; Systems Integration (SIA)</option>
                  <option value="database">Database Architecture (MySQL / SQL)</option>
                  <option value="ui-ux">UI/UX &amp; Web Prototyping</option>
                  <option value="academic-collab">Academic Collaboration / Project</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or collaboration..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </MotionFadeIn>
        </div>

        {/* Sidebar Info */}
        <div className="md:col-span-2 flex flex-col gap-8">
          <MotionFadeIn delay={0.2}>
            <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                Direct Contact
              </span>
              <a
                href="mailto:jovensanchez1024@gmail.com"
                className="flex items-center gap-2.5 text-sm font-medium text-white hover:text-neutral-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>jovensanchez1024@gmail.com</span>
              </a>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Based in the Philippines (UTC+8). Open for academic collaborations, web development, and internship opportunities.
              </p>
            </div>
          </MotionFadeIn>

          <MotionFadeIn delay={0.3}>
            <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                Other Socials
              </span>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs text-neutral-400 hover:text-white transition-colors group"
                  >
                    <span>{s.name}</span>
                    <span className="flex items-center gap-1 text-neutral-500 group-hover:text-white transition-colors">
                      {s.handle} <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </div>
  );
}
