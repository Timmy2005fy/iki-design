"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/projects";
import { ExternalLink, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

export function WorkSection() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState<number>(0);

  const activeProject: Project | undefined = PROJECTS.find(
    (p) => p.id === activeProjectId
  );

  const handleOpenProject = (id: string) => {
    setActiveProjectId(id);
    setSelectedGalleryIdx(0);
    if (typeof window !== "undefined") {
      window.history.pushState({ projectId: id }, "", `#project-${id}`);
    }
  };

  const handleCloseProject = () => {
    if (typeof window !== "undefined" && window.location.hash.startsWith("#project-")) {
      window.history.back();
    } else {
      setActiveProjectId(null);
    }
  };

  const handleDirectInquiry = (project: Project) => {
    const projectName = project.title.split("/")[0].trim();
    const text = encodeURIComponent(
      `Hello iki, I saw your work on ${projectName} and would like to build a similar website for my brand.`
    );
    const targetUrl = `https://wa.me/2348167052497?text=${text}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  // Hardware and browser back button support
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        if (window.location.hash.startsWith("#project-")) {
          const id = window.location.hash.replace("#project-", "");
          setActiveProjectId(id);
        } else {
          setActiveProjectId(null);
        }
      }
    };

    window.addEventListener("popstate", handlePopState);

    if (typeof window !== "undefined" && window.location.hash.startsWith("#project-")) {
      const id = window.location.hash.replace("#project-", "");
      queueMicrotask(() => setActiveProjectId(id));
    }

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!activeProject?.gallery) return;
    setSelectedGalleryIdx((prev) => (prev + 1) % activeProject.gallery!.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!activeProject?.gallery) return;
    setSelectedGalleryIdx((prev) =>
      prev === 0 ? activeProject.gallery!.length - 1 : prev - 1
    );
  };

  // Lock background scroll when dedicated project view is open
  useEffect(() => {
    if (activeProject) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
      };
    }
  }, [activeProject]);

  // Keyboard navigation for cycling images and Escape to return
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;

      if (e.key === "Escape") {
        handleCloseProject();
        return;
      }

      if (activeProject.gallery && activeProject.gallery.length > 1) {
        const total = activeProject.gallery.length;
        if (e.key === "ArrowRight") {
          setSelectedGalleryIdx((prev) => (prev + 1) % total);
        } else if (e.key === "ArrowLeft") {
          setSelectedGalleryIdx((prev) => (prev === 0 ? total - 1 : prev - 1));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <section id="work" className="w-full border-t border-[var(--border-subtle)] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="pb-6 border-b border-[var(--border-subtle)]">
          <h2 className="font-display text-2xl sm:text-4xl text-[var(--text-primary)] font-bold tracking-tight">
            Selected Work
          </h2>
        </div>

        {/* Work Grid */}
        <div className="space-y-6 sm:space-y-8">
          {/* Item 1: Jan's Hair Store (Flagship Widescreen) */}
          {PROJECTS[0] && (
            <div
              key={PROJECTS[0].id}
              onClick={() => handleOpenProject(PROJECTS[0].id)}
              className="group cursor-pointer border border-[var(--border-subtle)] bg-[#0d0e11] overflow-hidden hover:border-[var(--text-primary)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col rounded-[8px]"
            >
              <div className="relative aspect-[16/10] sm:aspect-[2.1/1] w-full overflow-hidden flex items-center justify-center">
                <Image
                  src={PROJECTS[0].image}
                  alt={PROJECTS[0].title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1150px"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />

                <div className="absolute bottom-0 inset-x-0 bg-white border-t border-[var(--border-subtle)] px-4 sm:px-6 py-3 flex items-center justify-between text-[var(--text-primary)]">
                  <div className="flex items-center gap-3 truncate pr-2">
                    <span className="text-xs font-semibold truncate tracking-tight text-[var(--text-primary)]">
                      Jan&apos;s Hair Store
                    </span>
                    <span className="hidden sm:inline text-xs text-[var(--text-muted)]">
                      / E-Commerce &middot; Live at janshair.store
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {PROJECTS[0].liveUrl && (
                      <a
                        href={PROJECTS[0].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-2.5 py-1 rounded-[8px] border border-[var(--border-subtle)] hover:border-[var(--text-primary)] transition-colors bg-white"
                        title="Open website directly in new tab"
                      >
                        <span>Live site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid for all other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {PROJECTS.slice(1).map((project) => (
              <div
                key={project.id}
                onClick={() => handleOpenProject(project.id)}
                className="group cursor-pointer border border-[var(--border-subtle)] bg-[#0d0e11] overflow-hidden hover:border-[var(--text-primary)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col rounded-[8px]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  />

                  <div className="absolute bottom-0 inset-x-0 bg-white border-t border-[var(--border-subtle)] px-4 py-3 flex items-center justify-between text-[var(--text-primary)]">
                    <div className="flex items-center gap-2 truncate pr-2">
                      <span className="text-xs font-semibold truncate tracking-tight text-[var(--text-primary)]">
                        {project.title.split("/")[0].trim()}
                      </span>
                      {project.title.split("/")[1] && (
                        <span className="hidden sm:inline text-xs text-[var(--text-muted)] truncate">
                          / {project.title.split("/")[1].trim()}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {(project.liveUrl || project.demoUrl) && (
                        <a
                          href={project.liveUrl || project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-2.5 py-1 rounded-[8px] border border-[var(--border-subtle)] hover:border-[var(--text-primary)] transition-colors bg-white"
                          title="Open website directly in new tab"
                        >
                          <span>Live site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DEDICATED PROJECT VIEW: ISOLATED TAKEOVER */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto overscroll-contain animate-in fade-in duration-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6 pb-16">
            {/* Sticky Top Bar for effortless mobile navigation */}
            <div className="sticky top-0 bg-white z-20 flex items-center justify-between pt-4 sm:pt-6 pb-4 border-b border-[var(--border-subtle)]">
              <span className="font-display font-bold text-xl text-[var(--text-primary)] tracking-tight">
                iki
              </span>

              <button
                type="button"
                onClick={handleCloseProject}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors py-2 px-3.5 rounded-[8px] border border-[var(--border-subtle)] bg-white cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to projects</span>
              </button>
            </div>

            <div className="space-y-6">
              {/* HIGH-RES IMAGE / SHOWCASE (Zero iframe trap) */}
              <div className="group relative aspect-[16/10] sm:aspect-[1.95/1] w-full overflow-hidden border border-[var(--border-subtle)] bg-[#0d0e11] flex items-center justify-center rounded-[8px]">
                <Image
                  src={
                    activeProject.gallery && activeProject.gallery.length > 0
                      ? activeProject.gallery[selectedGalleryIdx].src
                      : activeProject.image
                  }
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1150px"
                  className="object-contain"
                  priority
                />

                {activeProject.gallery && activeProject.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] bg-black/70 hover:bg-black text-white border border-white/10 flex items-center justify-center transition-all shadow-md z-10 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] bg-black/70 hover:bg-black text-white border border-white/10 flex items-center justify-center transition-all shadow-md z-10 cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none z-10">
                      <span className="bg-black/85 text-white text-xs font-semibold px-2.5 py-1 rounded-[8px] border border-white/10 pointer-events-auto">
                        {activeProject.gallery[selectedGalleryIdx].title}
                      </span>
                      <span className="bg-black/85 text-white text-xs font-semibold px-2.5 py-1 rounded-[8px] border border-white/10">
                        {selectedGalleryIdx + 1} / {activeProject.gallery.length}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {activeProject.gallery && activeProject.gallery.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeProject.gallery.map((screen, sIdx) => (
                    <button
                      key={screen.src}
                      type="button"
                      onClick={() => setSelectedGalleryIdx(sIdx)}
                      className={`relative aspect-[16/9] overflow-hidden border-2 bg-[#0d0e11] transition-all text-left cursor-pointer rounded-[8px] ${
                        selectedGalleryIdx === sIdx
                          ? "border-[var(--text-primary)] opacity-100"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={screen.src}
                        alt={screen.title}
                        fill
                        sizes="260px"
                        className="object-contain"
                      />
                      <span className="absolute bottom-1.5 left-1.5 bg-black/85 text-white text-[10px] font-semibold px-2 py-0.5 rounded-[8px]">
                        {screen.title}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Project Meta Details */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pt-4 border-t border-[var(--border-subtle)]">
                <div className="space-y-4 max-w-2xl">
                  <div className="space-y-1.5">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {activeProject.description}
                    </p>
                    <span className="text-xs text-[var(--text-muted)] block">
                      {activeProject.service} &middot; {activeProject.year}
                    </span>
                  </div>

                  {/* Deliverables List */}
                  {activeProject.deliverables && activeProject.deliverables.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                        Deliverables
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.deliverables.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-2.5 py-1 bg-[#f7f7f8] text-[var(--text-secondary)] border border-[var(--border-subtle)] rounded-[8px]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2 lg:pt-0">
                  <button
                    type="button"
                    onClick={() => handleDirectInquiry(activeProject)}
                    className="inline-flex items-center gap-1.5 bg-[#111215] text-white text-xs font-semibold px-4 py-2.5 rounded-[8px] hover:bg-[var(--accent)] transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire About This</span>
                  </button>

                  {(activeProject.liveUrl || activeProject.demoUrl) && (
                    <a
                      href={activeProject.liveUrl || activeProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-semibold px-4 py-2.5 rounded-[8px] hover:border-[var(--text-primary)] bg-white transition-colors"
                    >
                      <span>Visit live site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}