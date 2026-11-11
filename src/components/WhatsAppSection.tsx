"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const DEFAULT_WHATSAPP_NUMBER: string = "08167052497";
const WEB3FORMS_ACCESS_KEY: string = "d89f373e-dce2-4bdc-bfba-0c4189d46c07";

function getWhatsAppInternationalNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) {
    return `234${digits.slice(1)}`;
  }
  return digits;
}

export function WhatsAppSection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState<"UI/UX Design" | "Web Development" | "Both (Design & Code)">("UI/UX Design");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-select service when triggered from Services Section quote buttons
  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<"UI/UX Design" | "Web Development" | "Both (Design & Code)">;
      if (customEvent.detail) {
        setService(customEvent.detail);
      }
    };
    window.addEventListener("select-service", handleServiceSelect);
    return () => window.removeEventListener("select-service", handleServiceSelect);
  }, []);

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent("Hello! I saw your work at iki and would like to discuss a project.");
    const targetUrl = `https://wa.me/${getWhatsAppInternationalNumber(DEFAULT_WHATSAPP_NUMBER)}?text=${text}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;

    setIsSubmitting(true);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Inquiry from ${name} (${service})`,
          from_name: name,
          contact: contact,
          service: service,
          message: message || "No additional note provided.",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="whatsapp" className="w-full border-t border-[var(--border-subtle)] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="pb-6 border-b border-[var(--border-subtle)]">
          <h2 className="font-display text-2xl sm:text-4xl text-[var(--text-primary)] font-bold tracking-tight">
            Start a Project
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Message on WhatsApp or send a project note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct WhatsApp */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="text-sm font-bold text-[var(--text-primary)] block">
                WhatsApp
              </span>
              <p className="text-xs text-[var(--text-muted)]">
                Direct chat with the designer and developer.
              </p>
            </div>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2.5 rounded-[8px] hover:bg-[#20ba59] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>

            <span className="text-xs text-[var(--text-muted)] block font-mono">
              08167052497
            </span>
          </div>

          {/* Right Column: Clean Project Note Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="py-10 text-center space-y-3 border border-[var(--border-subtle)] bg-[var(--surface-subtle)] p-6 rounded-[8px] animate-in fade-in duration-200">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-[#25D366]/10 text-[#25D366] rounded-[8px]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                  Message Sent
                </h3>
                <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto">
                  Thank you, {name}. We will review your note for {service} and reply within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setContact("");
                      setMessage("");
                    }}
                    className="text-xs text-[var(--text-faint)] hover:text-[var(--text-primary)] underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Service Selection Chips */}
                <div>
                  <span className="block text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wider">
                    Service
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(["UI/UX Design", "Web Development", "Both (Design & Code)"] as const).map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setService(item)}
                        className={`text-xs font-semibold py-2 px-3 rounded-[8px] border text-center transition-all cursor-pointer ${
                          service === item
                            ? "bg-[#111215] text-white border-[#111215]"
                            : "bg-white text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[#111215] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-[var(--surface-subtle)] border border-[var(--border-subtle)] px-3 py-2 text-xs sm:text-sm text-[var(--text-primary)] rounded-[8px] focus:outline-none focus:border-[#111215] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-contact" className="block text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wider">
                      Email or WhatsApp *
                    </label>
                    <input
                      id="inquiry-contact"
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Email or phone"
                      className="w-full bg-[var(--surface-subtle)] border border-[var(--border-subtle)] px-3 py-2 text-xs sm:text-sm text-[var(--text-primary)] rounded-[8px] focus:outline-none focus:border-[#111215] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wider">
                    Note
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Brief description of your project."
                    className="w-full bg-[var(--surface-subtle)] border border-[var(--border-subtle)] px-3 py-2 text-xs sm:text-sm text-[var(--text-primary)] rounded-[8px] focus:outline-none focus:border-[#111215] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-[#111215] text-white text-xs font-semibold px-5 py-2.5 rounded-[8px] hover:bg-[var(--accent)] transition-colors disabled:opacity-50 cursor-pointer min-h-[40px]"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Note"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}