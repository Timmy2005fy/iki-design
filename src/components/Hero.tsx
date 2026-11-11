"use client";

import React from "react";
import { MessageCircle, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-14 sm:pb-20 max-w-7xl mx-auto">
      <div className="space-y-6 sm:space-y-8">
        <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block anim-fade-in">
          Studio
        </span>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-[var(--text-primary)] tracking-[-0.035em] leading-[1.02] uppercase anim-slide-up-1">
          We design &amp; build
          <br />
          modern websites
          <br />
          <span className="font-serif italic font-normal normal-case text-[var(--accent)]">
            that perform.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[var(--text-muted)] max-w-xl font-normal leading-relaxed anim-slide-up-2">
          UI/UX design and custom web development for companies, studios, and growing businesses.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 anim-slide-up-3">
          <a
            href="#whatsapp"
            className="inline-flex items-center justify-center gap-2 bg-[#111215] text-white text-xs font-semibold px-6 py-3.5 rounded-[8px] hover:bg-[var(--accent)] active:scale-[0.98] transition-all min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={scrollToWork}
            className="inline-flex items-center justify-center gap-2 border border-[var(--border-subtle)] bg-white text-[var(--text-primary)] text-xs font-semibold px-6 py-3.5 rounded-[8px] hover:border-[var(--text-primary)] active:scale-[0.98] transition-all min-h-[44px] cursor-pointer"
          >
            <span>View Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] anim-slide-up-4">
          <span>
            Featured client:{" "}
            <a
              href="https://www.janshair.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-primary)] font-semibold hover:text-[var(--accent)] underline"
            >
              janshair.store ↗
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}