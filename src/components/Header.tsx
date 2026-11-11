"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo Lockup */}
        <a
          href="#top"
          className="flex items-center gap-2.5 sm:gap-3 focus:outline-none min-h-[44px]"
          aria-label="iki design agency home"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
            <Image
              src="/brand/iki-mark.png"
              alt="iki mark"
              width={32}
              height={32}
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight leading-none text-[var(--text-primary)]">
              iki
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[var(--text-muted)] mt-0.5">
              Design &amp; Code
            </span>
          </div>
        </a>

        {/* Minimalist Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
          <a
            href="#work"
            className="hover:text-[var(--text-primary)] transition-colors py-2"
          >
            Work
          </a>
          <a
            href="#services"
            className="hover:text-[var(--text-primary)] transition-colors py-2"
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-[var(--text-primary)] transition-colors py-2"
          >
            About
          </a>
          <a
            href="#whatsapp"
            className="inline-flex items-center gap-2 bg-[#111215] text-white text-xs font-semibold px-4 py-2.5 rounded-[8px] hover:bg-[var(--accent)] transition-colors min-h-[44px]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 text-[var(--text-primary)] rounded-[8px] hover:bg-[var(--surface-subtle)] focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[var(--border-subtle)] px-4 py-4 animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-1">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-primary)] font-semibold text-sm py-3 px-2 hover:bg-[var(--surface-subtle)] rounded-[8px] transition-colors"
            >
              Work
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-primary)] font-semibold text-sm py-3 px-2 hover:bg-[var(--surface-subtle)] rounded-[8px] transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-primary)] font-semibold text-sm py-3 px-2 hover:bg-[var(--surface-subtle)] rounded-[8px] transition-colors"
            >
              About
            </a>
            <div className="pt-2">
              <a
                href="#whatsapp"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#111215] text-white text-xs font-semibold py-3 rounded-[8px] hover:bg-[var(--accent)] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}