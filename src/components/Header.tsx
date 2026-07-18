"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

interface HeaderProps {
  onOpenModal: () => void;
}

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Digital Literacy", href: "#digital-literacy" },
  { label: "Track Record", href: "#track-record" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) {
        const offset = 72;
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/92 backdrop-blur-xl shadow-sm border-b border-slate-100"
            : "bg-slate-950/20 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[72px]">
            {/* Brand block */}
            <a
              href="#"
              className="flex items-center gap-3 group"
              aria-label="UTECHS Home"
            >
              <div className="bg-white p-1 rounded-lg border border-slate-100 shadow-sm flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="UTECHS Logo"
                  width={44}
                  height={44}
                  className="object-cover rounded-md"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-display text-lg font-bold tracking-tight ${
                  isScrolled ? "text-brand-blue-dark" : "text-white"
                }`}>
                  UTECHS
                </span>
                <span className={`text-[10px] font-medium tracking-wide uppercase ${
                  isScrolled ? "text-slate-500" : "text-white/58"
                }`}>
                  Technology Solutions
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
                    isScrolled
                      ? "text-slate-600 hover:text-brand-blue hover:bg-brand-blue-light"
                      : "text-white/72 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenModal}
                className={isScrolled ? "btn-primary" : "inline-flex items-center gap-2 bg-white text-brand-blue-dark font-bold px-4 py-2.5 rounded-lg text-sm hover:bg-brand-green hover:text-white transition-all"}
                aria-label="Partner with UTECHS"
              >
                Partner With Us
                <ChevronRight size={15} />
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 modal-backdrop" />
        </div>
      )}

      {/* Mobile drawer panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        className={`fixed top-[72px] left-0 right-0 z-40 md:hidden bg-white border-b border-slate-100 shadow-lg transition-all duration-300 ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="section-container py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 hover:text-brand-blue hover:bg-brand-blue-light rounded-lg transition-colors text-left"
            >
              {link.label}
              <ChevronRight size={15} className="text-slate-400" />
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 mt-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenModal();
              }}
              className="w-full btn-primary justify-center"
            >
              Partner With Us
              <ChevronRight size={15} />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
