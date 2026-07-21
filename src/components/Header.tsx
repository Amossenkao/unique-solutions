"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	ChevronDown,
	ChevronRight,
	Home,
	Info,
	Menu,
	Network,
	Boxes,
	Mail,
	X,
	Code2,
	Monitor,
	PackageCheck,
	Wifi,
	Shield,
	FileText,
	GraduationCap,
	Fingerprint,
} from "lucide-react";

const SERVICES_DROPDOWN = [
	{ label: "Software Development", href: "/services#software-development", icon: Code2 },
	{ label: "Computer Lab as a Service", href: "/services#computer-lab", icon: Monitor },
	{ label: "ICT Equipment Supply", href: "/services#ict-equipment", icon: PackageCheck },
	{ label: "Network Infrastructure", href: "/services#network-infrastructure", icon: Wifi },
	{ label: "Cybersecurity & Cloud", href: "/services#cybersecurity", icon: Shield },
	{ label: "Policy & Strategy", href: "/services#policy-strategy", icon: FileText },
];

const SOLUTIONS_DROPDOWN = [
	{ label: "Digital Literacy Training", href: "/solutions#digital-literacy-training", icon: GraduationCap },
	{ label: "School Management System", href: "/solutions#school-management", icon: Monitor },
	{ label: "Biometric Access Control", href: "/solutions#biometric-access", icon: Fingerprint },
	{ label: "Enterprise Resource Planning", href: "/solutions#erp", icon: Boxes },
];

interface HeaderProps {
	onOpenModal?: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mobileDropdown, setMobileDropdown] = useState<"services" | "solutions" | null>(null);
	const [desktopDropdown, setDesktopDropdown] = useState<"services" | "solutions" | null>(null);
	const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setMobileOpen(false);
		setDesktopDropdown(null);
	}, [pathname]);

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

	useEffect(() => {
		return () => {
			if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
		};
	}, []);

	const handleDesktopEnter = useCallback((dropdown: "services" | "solutions") => {
		if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
		setDesktopDropdown(dropdown);
	}, []);

	const handleDesktopLeave = useCallback(() => {
		closeTimeoutRef.current = setTimeout(() => setDesktopDropdown(null), 120);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (desktopDropdown && navRef.current && !navRef.current.contains(event.target as Node)) {
				setDesktopDropdown(null);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [desktopDropdown]);

	const isHome = pathname === "/";
	const headerBg = isHome && !isScrolled
		? "bg-slate-950/20 backdrop-blur-md border-b border-white/10"
		: "bg-white/92 backdrop-blur-xl shadow-sm border-b border-slate-100";

	const textColor = isHome && !isScrolled ? "text-white" : "text-brand-blue-dark";
	const mutedColor = isHome && !isScrolled ? "text-white/58" : "text-slate-500";
	const navTextColor = isHome && !isScrolled
		? "text-white/72 hover:text-white hover:bg-white/10"
		: "text-slate-600 hover:text-brand-blue hover:bg-brand-blue-light";
	const navActiveColor = isHome && !isScrolled
		? "text-white bg-white/15"
		: "text-brand-blue bg-brand-blue-light";

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
			>
				<div className="section-container">
					<div className="flex items-center justify-between h-[72px]">
						<Link
							href="/"
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
								<span className={`font-display text-lg font-bold tracking-tight ${textColor}`}>
									UNIQUE
								</span>
								<span className={`text-[10px] font-medium tracking-wide uppercase ${mutedColor}`}>
									Technology Solutions
								</span>
							</div>
						</Link>

						{/* Desktop nav */}
						<nav
							ref={navRef}
							className="hidden md:flex items-center gap-1"
							aria-label="Main navigation"
						>
						<Link
							href="/"
							className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
								pathname === "/" ? navActiveColor : navTextColor
							}`}
						>
							<Home size={15} />
							Home
						</Link>

						<Link
							href="/about"
							className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
								pathname === "/about" ? navActiveColor : navTextColor
							}`}
						>
							<Info size={15} />
							About Us
						</Link>

							{/* Services dropdown */}
							<div
								onMouseEnter={() => handleDesktopEnter("services")}
								onMouseLeave={handleDesktopLeave}
								className="relative"
							>
								<button
									onClick={() => setDesktopDropdown(desktopDropdown === "services" ? null : "services")}
									className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
										pathname.startsWith("/services") ? navActiveColor : navTextColor
									}`}
								>
									<Network size={15} />
									Services
									<ChevronDown size={13} className={`transition-transform duration-200 ${desktopDropdown === "services" ? "rotate-180" : ""}`} />
								</button>
								{desktopDropdown === "services" && (
									<div
										className="absolute left-0 top-full pt-2 z-50"
										onMouseEnter={() => handleDesktopEnter("services")}
										onMouseLeave={handleDesktopLeave}
									>
										<div className="w-72 border border-slate-200 bg-white shadow-2xl shadow-slate-200/80 p-2">
											<div className="px-3 py-2 mb-1">
												<p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Services</p>
											</div>
											{SERVICES_DROPDOWN.map(({ label, href, icon: Icon }) => (
												<Link
													key={href}
													href={href}
													onClick={() => setDesktopDropdown(null)}
													className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
												>
													<span className="flex h-8 w-8 items-center justify-center bg-slate-50 text-brand-blue flex-shrink-0">
														<Icon size={15} />
													</span>
													{label}
												</Link>
											))}
											<div className="border-t border-slate-100 mt-1 pt-1">
												<Link
													href="/services"
													onClick={() => setDesktopDropdown(null)}
													className="flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-brand-blue hover:bg-brand-blue-light transition-colors"
												>
													View all services
													<ChevronRight size={13} />
												</Link>
											</div>
										</div>
									</div>
								)}
							</div>

							{/* Solutions dropdown */}
							<div
								onMouseEnter={() => handleDesktopEnter("solutions")}
								onMouseLeave={handleDesktopLeave}
								className="relative"
							>
								<button
									onClick={() => setDesktopDropdown(desktopDropdown === "solutions" ? null : "solutions")}
									className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
										pathname.startsWith("/solutions") ? navActiveColor : navTextColor
									}`}
								>
									<Boxes size={15} />
									Solutions
									<ChevronDown size={13} className={`transition-transform duration-200 ${desktopDropdown === "solutions" ? "rotate-180" : ""}`} />
								</button>
								{desktopDropdown === "solutions" && (
									<div
										className="absolute left-0 top-full pt-2 z-50"
										onMouseEnter={() => handleDesktopEnter("solutions")}
										onMouseLeave={handleDesktopLeave}
									>
										<div className="w-72 border border-slate-200 bg-white shadow-2xl shadow-slate-200/80 p-2">
											<div className="px-3 py-2 mb-1">
												<p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Technology Solutions</p>
											</div>
											{SOLUTIONS_DROPDOWN.map(({ label, href, icon: Icon }) => (
												<Link
													key={href}
													href={href}
													onClick={() => setDesktopDropdown(null)}
													className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
												>
													<span className="flex h-8 w-8 items-center justify-center bg-slate-50 text-brand-blue flex-shrink-0">
														<Icon size={15} />
													</span>
													{label}
												</Link>
											))}
											<div className="border-t border-slate-100 mt-1 pt-1">
												<Link
													href="/solutions"
													onClick={() => setDesktopDropdown(null)}
													className="flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-brand-blue hover:bg-brand-blue-light transition-colors"
												>
													View all solutions
													<ChevronRight size={13} />
												</Link>
											</div>
										</div>
									</div>
								)}
							</div>

							<Link
								href="/contact"
								className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
									pathname === "/contact" ? navActiveColor : navTextColor
								}`}
							>
								<Mail size={15} />
								Contact
							</Link>
						</nav>

						<div className="hidden md:flex items-center gap-3">
							{onOpenModal ? (
								<button
									onClick={onOpenModal}
									className={isHome && !isScrolled
										? "inline-flex items-center gap-2 bg-white text-brand-blue-dark font-bold px-4 py-2.5 rounded-lg text-sm hover:bg-brand-green hover:text-white transition-all cursor-pointer"
										: "btn-primary cursor-pointer"
									}
								>
									Partner With Us
									<ChevronRight size={15} />
								</button>
							) : (
								<Link
									href="/contact"
									className={isHome && !isScrolled
										? "inline-flex items-center gap-2 bg-white text-brand-blue-dark font-bold px-4 py-2.5 rounded-lg text-sm hover:bg-brand-green hover:text-white transition-all"
										: "btn-primary"
									}
								>
									Partner With Us
									<ChevronRight size={15} />
								</Link>
							)}
						</div>

						{/* Mobile hamburger */}
						<button
							onClick={() => setMobileOpen((v) => !v)}
							className={`md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
								isHome && !isScrolled
									? "text-white hover:bg-white/10"
									: "text-slate-600 hover:bg-slate-100"
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
				className={`fixed right-0 top-0 z-[60] h-dvh w-[min(80vw,320px)] md:hidden bg-white shadow-2xl transition-all duration-300 ${
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

				<nav className="flex flex-1 flex-col gap-2 px-5 py-6 overflow-y-auto">
					{/* Home */}
					<Link
						href="/"
						className={`flex items-center justify-between border bg-white px-4 py-3 text-sm font-bold transition-colors text-left ${
							pathname === "/"
								? "border-brand-blue/30 bg-brand-blue-light text-brand-blue"
								: "border-slate-200 text-slate-700 hover:border-brand-blue/30 hover:bg-brand-blue-light hover:text-brand-blue"
						}`}
					>
						<span className="flex items-center gap-3">
							<span className="flex h-9 w-9 items-center justify-center bg-slate-50 text-brand-blue">
								<Home size={17} />
							</span>
							Home
						</span>
						<ChevronRight size={15} className="text-slate-400" />
					</Link>

					{/* About */}
						<Link
							href="/about"
							className={`flex items-center justify-between border bg-white px-4 py-3 text-sm font-bold transition-colors text-left ${
								pathname === "/about"
									? "border-brand-blue/30 bg-brand-blue-light text-brand-blue"
									: "border-slate-200 text-slate-700 hover:border-brand-blue/30 hover:bg-brand-blue-light hover:text-brand-blue"
							}`}
						>
							<span className="flex items-center gap-3">
								<span className="flex h-9 w-9 items-center justify-center bg-slate-50 text-brand-blue">
									<Info size={17} />
								</span>
								About Us
							</span>
							<ChevronRight size={15} className="text-slate-400" />
						</Link>

						{/* Services accordion */}
						<div className="border border-slate-200 bg-white">
							<button
								onClick={() => setMobileDropdown(mobileDropdown === "services" ? null : "services")}
								className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-slate-700 text-left"
							>
								<span className="flex items-center gap-3">
									<span className="flex h-9 w-9 items-center justify-center bg-slate-50 text-brand-blue">
										<Network size={17} />
									</span>
									Services
								</span>
								<ChevronDown size={15} className={`text-slate-400 transition-transform duration-200 ${mobileDropdown === "services" ? "rotate-180" : ""}`} />
							</button>
							{mobileDropdown === "services" && (
								<div className="border-t border-slate-100 px-4 py-2 space-y-1">
									{SERVICES_DROPDOWN.map(({ label, href, icon: Icon }) => (
										<Link
											key={href}
											href={href}
											className="flex items-center gap-3 px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-brand-blue-light hover:text-brand-blue transition-colors rounded-lg"
										>
											<Icon size={14} className="text-brand-blue flex-shrink-0" />
											{label}
										</Link>
									))}
									<Link
										href="/services"
										className="flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-brand-blue hover:bg-brand-blue-light transition-colors rounded-lg"
									>
										View all services
										<ChevronRight size={12} />
									</Link>
								</div>
							)}
						</div>

						{/* Solutions accordion */}
						<div className="border border-slate-200 bg-white">
							<button
								onClick={() => setMobileDropdown(mobileDropdown === "solutions" ? null : "solutions")}
								className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-slate-700 text-left"
							>
								<span className="flex items-center gap-3">
									<span className="flex h-9 w-9 items-center justify-center bg-slate-50 text-brand-blue">
										<Boxes size={17} />
									</span>
									Solutions
								</span>
								<ChevronDown size={15} className={`text-slate-400 transition-transform duration-200 ${mobileDropdown === "solutions" ? "rotate-180" : ""}`} />
							</button>
							{mobileDropdown === "solutions" && (
								<div className="border-t border-slate-100 px-4 py-2 space-y-1">
									{SOLUTIONS_DROPDOWN.map(({ label, href, icon: Icon }) => (
										<Link
											key={href}
											href={href}
											className="flex items-center gap-3 px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-brand-blue-light hover:text-brand-blue transition-colors rounded-lg"
										>
											<Icon size={14} className="text-brand-blue flex-shrink-0" />
											{label}
										</Link>
									))}
									<Link
										href="/solutions"
										className="flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-brand-blue hover:bg-brand-blue-light transition-colors rounded-lg"
									>
										View all solutions
										<ChevronRight size={12} />
									</Link>
								</div>
							)}
						</div>

						{/* Contact */}
						<Link
							href="/contact"
							className={`flex items-center justify-between border bg-white px-4 py-3 text-sm font-bold transition-colors text-left ${
								pathname === "/contact"
									? "border-brand-blue/30 bg-brand-blue-light text-brand-blue"
									: "border-slate-200 text-slate-700 hover:border-brand-blue/30 hover:bg-brand-blue-light hover:text-brand-blue"
							}`}
						>
							<span className="flex items-center gap-3">
								<span className="flex h-9 w-9 items-center justify-center bg-slate-50 text-brand-blue">
									<Mail size={17} />
								</span>
								Contact
							</span>
							<ChevronRight size={15} className="text-slate-400" />
						</Link>

					<div className="mt-auto border-t border-slate-100 pt-5">
						{onOpenModal ? (
							<button
								onClick={() => {
									setMobileOpen(false);
									onOpenModal();
								}}
								className="w-full btn-primary justify-center cursor-pointer"
							>
								Partner With Us
								<ChevronRight size={15} />
							</button>
						) : (
							<Link
								href="/contact"
								className="w-full btn-primary justify-center"
							>
								Partner With Us
								<ChevronRight size={15} />
							</Link>
						)}
					</div>
					</nav>
				</div>
			</div>
		</>
	);
}
