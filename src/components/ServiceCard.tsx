"use client";

import { motion } from "framer-motion";
import { ServiceItem } from "@/data/services";
import { Globe, Smartphone, Database, Terminal } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "web-dev": <Globe className="w-5 h-5 text-neutral-300" />,
  "systems-dev": <Database className="w-5 h-5 text-neutral-300" />,
  "prototyping": <Smartphone className="w-5 h-5 text-neutral-300" />,
  "tech-support": <Terminal className="w-5 h-5 text-neutral-300" />,
};

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: ServiceItem;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
      className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
            {iconMap[service.id] || <Globe className="w-5 h-5 text-neutral-300" />}
          </div>
          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
            {service.tag}
          </span>
        </div>

        <h3 className="text-base font-medium text-white mb-2">
          {service.title}
        </h3>
        <p className="text-xs text-neutral-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500">
        <span>Tailored Delivery</span>
        <span className="text-neutral-400">High Fidelity</span>
      </div>
    </motion.div>
  );
}
