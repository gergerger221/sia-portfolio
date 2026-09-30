import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import MotionFadeIn from "@/components/MotionFadeIn";

export const metadata = {
  title: "Thank You — Joven Sanchez",
  description: "Message confirmation",
};

export default function ThankYouPage() {
  return (
    <div className="max-w-xl mx-auto px-6 pt-16 sm:pt-24 text-center">
      <MotionFadeIn>
        <div className="glass-card rounded-3xl p-8 sm:p-12 flex flex-col items-center gap-6 border border-white/10 shadow-2xl">
          <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Thank you for reaching out!
            </h1>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mx-auto">
              Your message has been safely received. I&apos;ll review the details
              and get back to you within 24–48 hours.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors shadow-lg mt-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </MotionFadeIn>
    </div>
  );
}
