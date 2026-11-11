import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="w-full border-t border-[var(--border-subtle)] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="pb-6 border-b border-[var(--border-subtle)]">
          <h2 className="font-display text-2xl sm:text-4xl text-[var(--text-primary)] font-bold tracking-tight">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-base sm:text-xl text-[var(--text-primary)] font-medium leading-relaxed">
              iki is an independent design and web development studio. We build high-performance websites, web apps, and digital platforms for companies, studios, and growing businesses.
            </p>

            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
              You collaborate directly with one person from first wireframe to final launch.
            </p>

            <div className="pt-4 flex items-center gap-4 text-xs font-semibold">
              <a
                href="#whatsapp"
                className="inline-flex items-center gap-2 bg-[#111215] text-white px-4 py-2.5 rounded-[8px] hover:bg-[var(--accent)] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <span className="text-[var(--text-muted)] font-normal">
                Direct: 08167052497
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center gap-4 p-4 border border-[var(--border-subtle)] bg-[var(--surface-subtle)] rounded-[8px]">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/brand/iki-mark.png"
                alt="iki mark"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-display text-sm font-bold text-[var(--text-primary)] block">
                iki design agency
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                Lagos / Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}