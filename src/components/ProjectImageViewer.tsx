"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Images } from "lucide-react";
import MotionFadeIn from "@/components/MotionFadeIn";

interface ProjectImageViewerProps {
  title: string;
  coverImage: string;
  images: string[];
  children?: React.ReactNode;
}

export default function ProjectImageViewer({
  title,
  coverImage,
  images,
  children,
}: ProjectImageViewerProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine cover image and gallery images, removing duplicates if coverImage is in images
  const allImages = images && images.length > 0 ? images : [coverImage];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen, closeLightbox, showNext, showPrev]);

  return (
    <>
      {/* 1. Primary Hero Showcase Image */}
      <MotionFadeIn delay={0.1}>
        <div
          onClick={() => openLightbox(0)}
          className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#121212] cursor-pointer group shadow-2xl hover:border-white/20 transition-all duration-300"
        >
          <Image
            src={coverImage}
            alt={`${title} Preview`}
            fill
            priority
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 896px"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white text-xs font-medium shadow-xl">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Click to view screenshot</span>
            </div>
          </div>
        </div>
      </MotionFadeIn>

      {/* 2. Overview & Key Highlights (Kept in its original position directly below primary preview) */}
      {children}

      {/* 3. Gallery Screenshots Section */}
      {allImages.length > 1 && (
        <section className="flex flex-col gap-6 pt-4 border-t border-white/5">
          <MotionFadeIn>
            <div className="flex items-center gap-2 mb-1">
              <Images className="w-4 h-4 text-neutral-400" />
              <h2 className="text-xl font-semibold text-white">Project Screenshots</h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400">
              Click any screenshot to view in full resolution.
            </p>
          </MotionFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allImages.map((imgSrc, idx) => (
              <MotionFadeIn key={imgSrc} delay={idx * 0.06}>
                <div
                  onClick={() => openLightbox(idx)}
                  className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121212] cursor-pointer group shadow-lg hover:border-white/25 transition-all duration-300"
                >
                  <Image
                    src={imgSrc}
                    alt={`${title} Screenshot ${idx + 1}`}
                    fill
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white shadow-xl">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </MotionFadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox Modal (Tightly wraps image with no excess black container bars, preserving border-radius) */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-300">
                {title} • {currentIndex + 1} / {allImages.length}
              </div>

              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Previous Button */}
            {allImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors backdrop-blur-md"
                title="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {allImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors backdrop-blur-md"
                title="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Main Modal Image Container — Exact wrap around image dimensions with border-radius */}
            <div
              className="relative flex items-center justify-center select-none pointer-events-auto max-w-[92vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center bg-black"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={allImages[currentIndex]}
                  alt={`${title} Preview ${currentIndex + 1}`}
                  className="max-w-[90vw] max-h-[82vh] w-auto h-auto object-contain block rounded-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
