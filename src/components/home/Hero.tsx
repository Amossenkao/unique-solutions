"use client";

import { useCallback, useEffect, useRef, useState, type ElementType } from "react";
import Image from "next/image";
import {
	ArrowRight,
	ArrowUpRight,
	Building2,
	ChevronLeft,
	ChevronRight,
	Code2,
	GraduationCap,
	PackageCheck,
	Pause,
	Play,
	Shield,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { usePartnerDialog } from "@/components/partner/PartnerDialogProvider";
import { BRAND } from "@/lib/site";
import { cn } from "@/lib/cn";

interface Slide {
	id: string;
	image: string;
	wash: string;
	badge: string;
	headline: string;
	accent: string;
	subtext: string;
	ctaLabel: string;
	ctaHref: string;
	secondaryLabel: string;
	secondaryHref: string;
	opensDialog?: boolean;
	icon: ElementType;
	panelTitle: string;
	panelItems: string[];
	metric: string;
	metricLabel: string;
}

const SLIDES: Slide[] = [
	{
		id: "education",
		image: "/images/hero/education.jpg",
		wash: "from-accent-900/90 via-accent-700/40 to-ink-950/95",
		badge: "Computer Lab as a Service",
		headline: "Labs that power digital learning",
		accent: "Labs",
		subtext:
			"NComputing thin-client labs, trained instructors, curriculum, solar readiness, and support for one predictable student fee.",
		ctaLabel: "Learn About CaaS",
		ctaHref: "/services#computer-lab",
		secondaryLabel: "Request a Lab",
		secondaryHref: "/contact",
		opensDialog: true,
		icon: GraduationCap,
		panelTitle: "Lab operating model",
		panelItems: [
			"Site assessment & hardware sizing",
			"Instructor-led digital literacy",
			"Maintenance and replacement plan",
		],
		metric: "$20",
		metricLabel: "Per student / semester",
	},
	{
		id: "equipment",
		image: "/images/stock3.jpg",
		wash: "from-brand-950/90 via-brand-800/45 to-ink-950/95",
		badge: "ICT Equipment Supply",
		headline: "ICT gear, deployment-ready",
		accent: "ICT gear",
		subtext:
			"Desktops, servers, routers, switches, firewalls, thin clients, licenses and complete lab bundles — configured, tested and supported.",
		ctaLabel: "Explore Equipment Supply",
		ctaHref: "/services#ict-equipment",
		secondaryLabel: "Request a Quote",
		secondaryHref: "/contact",
		opensDialog: true,
		icon: PackageCheck,
		panelTitle: "Supply workflow",
		panelItems: [
			"Procure trusted hardware",
			"Configure and test devices",
			"Deliver, install and support",
		],
		metric: "Dell · HP · Cisco",
		metricLabel: "Procurement partners",
	},
	{
		id: "enterprise",
		image: "/images/hero/enterprise.jpg",
		wash: "from-brand-950/90 via-brand-700/45 to-ink-950/95",
		badge: "Enterprise ICT Solutions",
		headline: "Infrastructure built to scale",
		accent: "Infrastructure",
		subtext:
			`From LAN/WAN networks to servers and support, we build the technology backbone behind ${BRAND.country}'s leading organizations.`,
		ctaLabel: "Explore Enterprise Services",
		ctaHref: "/services#network-infrastructure",
		secondaryLabel: "Partner With Us",
		secondaryHref: "/contact",
		opensDialog: true,
		icon: Building2,
		panelTitle: "Infrastructure stack",
		panelItems: [
			"Structured cabling & switching",
			"Servers, firewalls & licensing",
			"Monitoring, maintenance & advisory",
		],
		metric: "400+",
		metricLabel: "Network points delivered",
	},
	{
		id: "web",
		image: "/images/stock5.jpg",
		wash: "from-[#0b1e46]/90 via-brand-700/40 to-ink-950/95",
		badge: "Web, API & Product Engineering",
		headline: "Web platforms that perform",
		accent: "Web platforms",
		subtext:
			`Fast, secure websites, portals, APIs and internal systems that help ${BRAND.country}n institutions operate with confidence.`,
		ctaLabel: "Plan a Web Project",
		ctaHref: "/services#software-development",
		secondaryLabel: "View Capabilities",
		secondaryHref: "/services",
		icon: Code2,
		panelTitle: "Deployment pipeline",
		panelItems: [
			"Discovery & UX mapping",
			"Next.js / API architecture",
			"Security, hosting & support",
		],
		metric: "Full-stack",
		metricLabel: "Design, build, deploy",
	},
	{
		id: "security",
		image: "/images/stock2.jpg",
		wash: "from-ink-900/90 via-brand-800/45 to-accent-900/80",
		badge: "Cybersecurity & Managed Support",
		headline: "Security you can count on",
		accent: "Security",
		subtext:
			"Endpoint protection, SOPHOS and ESET licensing, firewall deployments, backups and advisory for institutions that cannot afford downtime.",
		ctaLabel: "Secure My Systems",
		ctaHref: "/services#cybersecurity",
		secondaryLabel: "Talk to an Expert",
		secondaryHref: "/contact",
		opensDialog: true,
		icon: Shield,
		panelTitle: "Protection loop",
		panelItems: ["Assess exposure", "Deploy controls", "Monitor, patch, improve"],
		metric: "24h",
		metricLabel: "Inquiry response target",
	},
];

const AUTOPLAY_MS = 7000;

const PROOF_POINTS: [string, string][] = [
	[String(BRAND.foundedYear), `Founded in ${BRAND.country}`],
	["12+", "Institutional partners"],
	["Web + ICT", "Integrated delivery"],
];

export default function Hero() {
	const { open: openPartnerDialog } = usePartnerDialog();
	const [current, setCurrent] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [reducedMotion, setReducedMotion] = useState(false);
	const regionRef = useRef<HTMLElement>(null);

	const slide = SLIDES[current];
	const Icon = slide.icon;

	const next = useCallback(() => setCurrent((v) => (v + 1) % SLIDES.length), []);
	const prev = useCallback(
		() => setCurrent((v) => (v - 1 + SLIDES.length) % SLIDES.length),
		[],
	);

	useEffect(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReducedMotion(query.matches);
		sync();
		query.addEventListener("change", sync);
		return () => query.removeEventListener("change", sync);
	}, []);

	// Autoplay. Skipped entirely for reduced-motion users, and suspended while
	// the tab is in the background so hidden tabs cost nothing.
	useEffect(() => {
		if (isPaused || reducedMotion) return;

		let timer = window.setInterval(next, AUTOPLAY_MS);

		const onVisibility = () => {
			window.clearInterval(timer);
			if (!document.hidden) timer = window.setInterval(next, AUTOPLAY_MS);
		};

		document.addEventListener("visibilitychange", onVisibility);
		return () => {
			window.clearInterval(timer);
			document.removeEventListener("visibilitychange", onVisibility);
		};
	}, [isPaused, reducedMotion, next]);

	/* Arrow keys are handled on the carousel itself rather than on `window`,
	   so they keep working normally inside form fields elsewhere on the page. */
	const onKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "ArrowRight") {
			event.preventDefault();
			next();
		} else if (event.key === "ArrowLeft") {
			event.preventDefault();
			prev();
		}
	};

	return (
		<section
			ref={regionRef}
			onKeyDown={onKeyDown}
			role="region"
			aria-roledescription="carousel"
			aria-label="What UNIQUE delivers"
			className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pb-28 pt-[calc(var(--header-h)+2.5rem)] text-white sm:pb-24"
		>
			{/* Backdrops. All slides stay mounted and cross-fade — swapping `src`
			    would re-trigger a network fetch on every rotation. */}
			{SLIDES.map((item, index) => (
				<div
					key={item.id}
					aria-hidden={index !== current}
					className={cn(
						"absolute inset-0 -z-20 transition-opacity duration-700 ease-(--ease-in-out-soft)",
						index === current ? "opacity-100" : "opacity-0",
					)}
				>
					<Image
						src={item.image}
						alt=""
						fill
						priority={index === 0}
						loading={index === 0 ? undefined : "lazy"}
						sizes="100vw"
						className="object-cover"
						style={
							index === current && !reducedMotion
								? { animation: "slow-zoom 14s ease-out forwards" }
								: undefined
						}
					/>
					<div className={cn("absolute inset-0 bg-linear-to-br", item.wash)} />
					<div className="absolute inset-0 bg-[linear-gradient(100deg,rgb(6_12_24/0.94)_0%,rgb(6_12_24/0.72)_45%,rgb(6_12_24/0.25)_100%)]" />
				</div>
			))}

			<div aria-hidden="true" className="absolute inset-0 -z-10 grid-overlay" />

			<div className="container-page">
				<div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
					{/* ── Copy ── */}
					<div key={slide.id} className="max-w-2xl animate-rise-in">
						<p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/80 ring-1 ring-white/15 backdrop-blur-sm">
							<Icon size={14} className="text-accent-400" aria-hidden="true" />
							{slide.badge}
						</p>

						<h1 className="mt-5 text-display-xl font-extrabold text-white">
							{splitOnAccent(slide.headline, slide.accent)}
						</h1>

						<p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
							{slide.subtext}
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							<Button href={slide.ctaHref} variant="inverse" size="lg" className="group">
								{slide.ctaLabel}
								<ArrowRight
									size={17}
									aria-hidden="true"
									className="transition-transform group-hover:translate-x-1"
								/>
							</Button>

							{slide.opensDialog ? (
								<Button
									type="button"
									onClick={openPartnerDialog}
									variant="inverse-outline"
									size="lg"
									className="group"
								>
									{slide.secondaryLabel}
									<ArrowUpRight
										size={17}
										aria-hidden="true"
										className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</Button>
							) : (
								<Button
									href={slide.secondaryHref}
									variant="inverse-outline"
									size="lg"
									className="group"
								>
									{slide.secondaryLabel}
									<ArrowUpRight
										size={17}
										aria-hidden="true"
										className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</Button>
							)}
						</div>

						<dl className="mt-9 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/12 sm:grid-cols-3">
							{PROOF_POINTS.map(([value, label]) => (
								<div key={label} className="bg-ink-950/40 p-4 backdrop-blur-sm">
									<dt className="sr-only">{label}</dt>
									<dd>
										<span className="block font-display text-lg font-extrabold text-white">
											{value}
										</span>
										<span className="mt-1 block text-[0.6875rem] font-medium uppercase tracking-wide text-white/50">
											{label}
										</span>
									</dd>
								</div>
							))}
						</dl>
					</div>

					{/* ── Capability panel ── */}
					<div key={`panel-${slide.id}`} className="hidden animate-rise-in lg:block">
						<div className="ml-auto max-w-[28rem] rounded-2xl bg-ink-950/55 p-5 shadow-xl ring-1 ring-white/12 backdrop-blur-xl">
							<div className="flex items-center justify-between border-b border-white/10 pb-3">
								<span className="flex gap-1.5" aria-hidden="true">
									<span className="size-2.5 rounded-full bg-red-400/80" />
									<span className="size-2.5 rounded-full bg-amber-300/80" />
									<span className="size-2.5 rounded-full bg-accent-400" />
								</span>
								<span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-white/35">
									unique.ops
								</span>
							</div>

							<p className="mt-5 text-xs font-medium uppercase tracking-wide text-white/45">
								Current capability
							</p>
							<p className="mt-1.5 font-display text-display-xs font-bold text-white">
								{slide.panelTitle}
							</p>

							<ol className="mt-5 space-y-3">
								{slide.panelItems.map((item, index) => (
									<li key={item} className="flex items-center gap-3 text-sm text-white/75">
										<span className="font-mono text-xs text-accent-400">
											{String(index + 1).padStart(2, "0")}
										</span>
										<span aria-hidden="true" className="h-px flex-1 bg-white/10" />
										<span className="max-w-[14rem] text-right">{item}</span>
									</li>
								))}
							</ol>

							<div className="mt-6 rounded-xl bg-white/6 p-4 ring-1 ring-white/10">
								<p className="font-display text-display-sm font-extrabold text-accent-400">
									{slide.metric}
								</p>
								<p className="mt-1 text-xs uppercase tracking-wide text-white/45">
									{slide.metricLabel}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ── Controls ── */}
			<div className="absolute inset-x-0 bottom-6 z-20">
				<div className="container-page flex items-center justify-between gap-4">
					<div className="flex items-center gap-1.5" role="tablist" aria-label="Choose slide">
						{SLIDES.map((item, index) => (
							<button
								key={item.id}
								type="button"
								role="tab"
								aria-selected={index === current}
								aria-label={item.badge}
								onClick={() => setCurrent(index)}
								className="group flex h-11 w-6 cursor-pointer items-center justify-center sm:w-7"
							>
								<span
									className={cn(
										"h-1 rounded-full transition-all duration-(--duration-base) ease-(--ease-out-soft)",
										index === current
											? "w-6 bg-accent-400 sm:w-7"
											: "w-3 bg-white/35 group-hover:bg-white/60",
									)}
								/>
							</button>
						))}
					</div>

					<p className="hidden items-center gap-2 font-mono text-xs tabular-nums text-white/50 sm:flex">
						<span className="text-white/80">{String(current + 1).padStart(2, "0")}</span>
						<span aria-hidden="true">/</span>
						<span>{String(SLIDES.length).padStart(2, "0")}</span>
					</p>

					<div className="flex items-center gap-1.5">
						{!reducedMotion && (
							<ControlButton
								onClick={() => setIsPaused((v) => !v)}
								label={isPaused ? "Resume carousel" : "Pause carousel"}
							>
								{isPaused ? <Play size={16} /> : <Pause size={16} />}
							</ControlButton>
						)}
						<ControlButton onClick={prev} label="Previous slide">
							<ChevronLeft size={18} />
						</ControlButton>
						<ControlButton onClick={next} label="Next slide">
							<ChevronRight size={18} />
						</ControlButton>
					</div>
				</div>
			</div>
		</section>
	);
}

function ControlButton({
	onClick,
	label,
	children,
}: {
	onClick: () => void;
	label: string;
	children: React.ReactNode;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-label={label}
			className="flex size-11 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-white/20 hover:ring-white/40"
		>
			{children}
		</button>
	);
}

/** Highlights the accent phrase inside a headline without dangerouslySetInnerHTML. */
function splitOnAccent(headline: string, accent: string) {
	const at = headline.indexOf(accent);
	if (at === -1) return headline;

	return (
		<>
			{headline.slice(0, at)}
			<span className="text-accent-400">{accent}</span>
			{headline.slice(at + accent.length)}
		</>
	);
}
