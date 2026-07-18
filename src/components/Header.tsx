"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  GraduationCap,
  Info,
  Mail,
  Menu,
  Network,
  PackageCheck,
  X,
} from "lucide-react";

interface HeaderProps {
  onOpenModal: () => void;
}

const NAV_LINKS = [
  { label: "About Us", href: "#about", icon: Info },
  { label: "Services", href: "#services", icon: Network },
  { label: "Digital Literacy", href: "#digital-literacy", icon: GraduationCap },
  // { label: "ICT Equipment", href: "#ict-equipment", icon: PackageCheck },
  // { label: "Enterprise ICT", href: "#enterprise-ict", icon: Building2 },
  { label: "Track Record", href: "#track-record", icon: BriefcaseBusiness },
  { label: "Contact Us", href: "#contact", icon: Mail },
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
                  UNIQUE
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
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
                    isScrolled
                      ? "text-slate-600 hover:text-brand-blue hover:bg-brand-blue-light"
                      : "text-white/72 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={15} />
                  {link.label}
                </button>
                );
              })}
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
              className={`md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
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
        className={`fixed right-0 top-0 z-[60] h-dvh w-[min(88vw,360px)] md:hidden bg-white shadow-2xl transition-all duration-300 ${
          mobileOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg border border-slate-100 shadow-sm flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="UTECHS Logo"
                  width={38}
                  height={38}
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <p className="font-display text-base font-bold text-brand-blue-dark">
                  UNIQUE
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                  Technology Solutions
                </p>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

        <nav className="flex flex-1 flex-col gap-2 px-5 py-6">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center justify-between border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-brand-blue/30 hover:bg-brand-blue-light hover:text-brand-blue text-left"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center bg-slate-50 text-brand-blue">
                  <Icon size={17} />
                </span>
                {link.label}
              </span>
              <ChevronRight size={15} className="text-slate-400" />
            </button>
            );
          })}
          <div className="mt-auto border-t border-slate-100 pt-5">
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
      </div>
    </>
  );
}
