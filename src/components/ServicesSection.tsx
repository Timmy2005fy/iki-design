"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  const disciplines = [
    {
      num: "01",
      title: "UI/UX Design",
      formValue: "UI/UX Design" as const,
      description: "Mobile and web interfaces with clean layout hierarchy and clickable prototypes.",
      tags: ["UI/UX", "Wireframes", "Prototypes"],
    },
    {
      num: "02",
      title: "Web Engineering",
      formValue: "Web Development" as const,
      description: "Fast, responsive websites built with clean, modern code. Tested across all screens and devices.",
      tags: ["Frontend", "Performance", "Responsive"],
    },
    {
      num: "03",
      title: "Design & Code",
      formValue: "Both (Design & Code)" as const,
      description: "Turnkey delivery from blank canvas to live domain. One person handles both design and development.",
      tags: ["Full Build", "Launch Ready"],
    },
  ];

  const handleSelectQuote = (serviceVal: "UI/UX Design" | "Web Development" | "Both (Design & Code)") => {
    window.dispatchEvent(new CustomEvent("select-service", { detail: serviceVal }));
    const target = document.getElementById("whatsapp");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="w-full border-t border-[var(--border-subtle)] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="pb-6 border-b border-[var(--border-subtle)]">
          <h2 className="font-display text-2xl sm:text-4xl text-[var(--text-primary)] font-bold tracking-tight">
            Services
          </h2>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {disciplines.map((item) => (
            <div
              key={item.num}
              className="border border-[var(--border-subtle)] bg-[var(--surface-subtle)] p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--text-primary)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group rounded-[8px]"
            >
              <div className="space-y-3">
                <span className="text-xs text-[var(--accent)] font-semibold font-mono block">
                  {item.num}
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[var(--text-primary)] bg-white border border-[var(--border-subtle)] px-2 py-0.5 rounded-[8px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => handleSelectQuote(item.formValue)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors cursor-pointer"
                >
                  <span className="uppercase tracking-wider">Book {item.title}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}