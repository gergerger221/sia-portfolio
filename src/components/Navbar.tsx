"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs for measuring each link's position inside the nav container
  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Pill position state — only left and width (never Y)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [pillVisible, setPillVisible] = useState(false);

  // Find active index
  const activeIndex = navLinks.findIndex((link) =>
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  );

  // Measure the active link and update pill position
  const updatePill = useCallback(() => {
    if (activeIndex === -1 || !navContainerRef.current) {
      setPillVisible(false);
      return;
    }

    const linkEl = linkRefs.current[activeIndex];
    const containerEl = navContainerRef.current;

    if (!linkEl || !containerEl) {
      setPillVisible(false);
      return;
    }

    const containerRect = containerEl.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    setPillStyle({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
    });
    setPillVisible(true);
  }, [activeIndex]);

  // Re-measure on pathname change and on mount
  useEffect(() => {
    updatePill();
  }, [updatePill]);

  // Re-measure on window resize
  useEffect(() => {
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [updatePill]);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop Floating Pill Navbar */}
      <nav className="glass-pill rounded-full px-3 py-2 flex items-center gap-1 shadow-2xl shadow-black/80 max-w-fit">
        <Link
          href="/"
          className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:text-neutral-300"
        >
          Joven Sanchez
        </Link>

        <div className="h-3 w-px bg-white/10 mx-1 hidden sm:block" />

        {/* Desktop nav links with measured pill */}
        <div ref={navContainerRef} className="hidden sm:flex items-center gap-1 relative">
          {/* The sliding pill indicator — positioned absolutely, animates only horizontally */}
          {pillVisible && (
            <motion.div
              className="absolute top-0 bottom-0 bg-white/10 rounded-full border border-white/15 pointer-events-none"
              animate={{
                left: pillStyle.left,
                width: pillStyle.width,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35,
                mass: 0.8,
              }}
              // Ensure zero vertical movement at all times
              style={{ top: 0, bottom: 0 }}
            />
          )}

          {navLinks.map((link, i) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => { linkRefs.current[i] = el; }}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full z-10 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Let's Talk CTA button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-1 text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-colors px-3 py-1.5 rounded-full ml-2"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-1.5 text-neutral-300 hover:text-white rounded-full transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden absolute top-16 left-4 right-4 glass-pill rounded-2xl p-4 shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/10 text-white font-semibold"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-white text-black py-2.5 rounded-xl text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
