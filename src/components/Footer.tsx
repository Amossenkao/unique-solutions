import {
  MapPin,
  Phone,
  Mail,
  Network,
  Monitor,
  Shield,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-label="Footer"
    >
      <div className="absolute inset-0 dark-tech-grid opacity-20" />
      {/* CTA strip */}
      <div className="relative border-y border-white/10 bg-white/[0.04]">
        <div className="section-container py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-green mb-2">Ready to get started?</p>
              <h2 className="font-display text-2xl font-extrabold text-white">
                Build the website, wire the network, secure the operation.
              </h2>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="mailto:uniquetechsolutions2022@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-brand-blue-light transition-colors"
              >
                <Mail size={15} />
                Email Us
              </a>
              <a
                href="tel:0555532355"
                className="btn-outline-white text-sm"
              >
                <Phone size={14} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-1 rounded-lg shadow-sm flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="UTECHS Logo"
                  width={36}
                  height={36}
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">
                  UTECHS
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">
                  Technology Solutions
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              A Liberian-owned IT company delivering modern web systems,
              enterprise infrastructure, cybersecurity, and sustainable digital
              literacy programs since 2014.
            </p>
            <div className="flex gap-1">
              <span className="text-[10px] text-slate-400 bg-white/[0.06] px-2 py-1">
                Est. 2014
              </span>
              <span className="text-[10px] text-slate-400 bg-white/[0.06] px-2 py-1">
                Monrovia, LR
              </span>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { icon: Network, label: "LAN/WAN Infrastructure" },
                { icon: Shield, label: "Cybersecurity (ESET, SOPHOS)" },
                { icon: Monitor, label: "NComputing Computer Labs" },
                { icon: Network, label: "Solar & Power Systems" },
                { icon: Monitor, label: "Web & Software Development" },
                { icon: Shield, label: "Managed IT Services" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon size={12} className="text-slate-500 flex-shrink-0" />
                  <span className="text-slate-400 text-xs hover:text-slate-200 transition-colors">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Address column */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
              Location
            </h3>
            <div className="flex items-start gap-3 mb-5">
              <MapPin
                size={15}
                className="text-brand-green flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="text-slate-200 text-sm font-medium">
                  Camp Johnson Road
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Monrovia, Liberia
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Camp+Johnson+Road+Monrovia+Liberia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-brand-green hover:text-brand-green-dark transition-colors font-medium"
            >
              View on Maps
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 font-medium">
                  Phone
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:0555532355"
                    className="flex items-center gap-2 text-slate-200 text-sm hover:text-brand-green transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-brand-green/20 flex items-center justify-center transition-colors">
                      <Phone size={12} className="text-slate-400 group-hover:text-brand-green" />
                    </div>
                    0555532355
                  </a>
                  <a
                    href="tel:0779373928"
                    className="flex items-center gap-2 text-slate-200 text-sm hover:text-brand-green transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-brand-green/20 flex items-center justify-center transition-colors">
                      <Phone size={12} className="text-slate-400 group-hover:text-brand-green" />
                    </div>
                    0779373928
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 font-medium">
                  Email
                </p>
                <a
                  href="mailto:uniquetechsolutions2022@gmail.com"
                  className="flex items-start gap-2 text-brand-blue hover:text-white transition-colors group text-xs break-all"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-brand-blue/20 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <Mail size={12} className="text-slate-400 group-hover:text-brand-blue" />
                  </div>
                  uniquetechsolutions2022@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {year} Unique Technology Solutions (UTECHS). All rights reserved. Monrovia, Liberia.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-xs">Liberian-Owned Business</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-slate-600 text-xs">Est. 2014</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
