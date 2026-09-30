import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-12 px-6 sm:px-12 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400">

        {/* Availability Badge */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-300">Available for select projects & contracts</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-xs text-neutral-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-0.5"
          >
            Facebook <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-0.5"
          >
            Discord <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-0.5"
          >
            GitHub <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Joven Sanchez. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
