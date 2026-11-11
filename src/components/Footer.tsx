"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-white pt-12 sm:pt-16 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--border-subtle)]">
          {/* Brand & Mission Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/brand/iki-mark.png"
                  alt="iki mark"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight leading-none text-[var(--text-primary)]">
                  iki
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-muted)] mt-0.5">
                  Design &amp; Code
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-sm leading-relaxed">
              Custom UI/UX design and fast, reliable web development for companies, studios, and growing businesses.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-wider text-[var(--text-faint)] font-semibold block mb-3">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              <li>
                <a href="#work" className="hover:text-[var(--text-primary)] transition-colors py-1 block">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[var(--text-primary)] transition-colors py-1 block">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--text-primary)] transition-colors py-1 block">
                  About
                </a>
              </li>
              <li>
                <a href="#whatsapp" className="hover:text-[var(--text-primary)] transition-colors py-1 block">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels Column */}
          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-wider text-[var(--text-faint)] font-semibold block mb-3">
              Direct Contact
            </span>
            <ul className="space-y-2 text-xs font-semibold text-[var(--text-muted)]">
              <li>
                <a
                  href="#whatsapp"
                  className="inline-flex items-center gap-1.5 text-[#25D366] hover:underline py-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li>
                <span className="text-[var(--text-muted)] font-normal block py-1">
                  08167052497
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[var(--text-faint)] font-mono gap-4">
          <div>
            &copy; 2026 iki design agency. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors min-h-[36px] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}