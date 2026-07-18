'use client';

import { useCallback, useEffect, useMemo, useState, type ElementType } from 'react';
import Image from 'next/image';
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
	ServerCog,
	Shield,
	Sparkles,
} from 'lucide-react';

interface HeroProps {
	onOpenModal: () => void;
}

interface Slide {
	id: string;
	image: string;
	tint: string;
	badge: string;
	headline: string;
	accent: string;
	subtext: string;
	ctaLabel: string;
	ctaHref: string;
	secondaryCtaLabel: string;
	secondaryCtaAction: 'modal' | 'scroll';
	icon: ElementType;
	consoleTitle: string;
	consoleItems: string[];
	metric: string;
	metricLabel: string;
}

const SLIDES: Slide[] = [
	{
		id: 'education',
		image: '/images/hero/education.jpg',
		tint: 'from-[#062416] via-[#4C8317]/60 to-[#07111f]',
		badge: 'Computer Lab as a Service',
		headline: 'Labs that power digital learning',
		accent: 'Labs',
		subtext:
			'NComputing thin-client labs, trained instructors, curriculum, solar readiness, and support for one predictable student fee.',
		ctaLabel: 'Learn About CaaS',
		ctaHref: '#digital-literacy',
		secondaryCtaLabel: 'Request a Lab',
		secondaryCtaAction: 'scroll',
		icon: GraduationCap,
		consoleTitle: 'Lab operating model',
		consoleItems: ['Site assessment & hardware sizing', 'Instructor-led digital literacy', 'Maintenance and replacement plan'],
		metric: '$20',
		metricLabel: 'Per student / semester',
	},
	{
		id: 'equipment',
		image: '/images/stock3.jpg',
		tint: 'from-[#102036] via-[#0A4B93]/55 to-[#07111f]',
		badge: 'ICT Equipment Sales',
		headline: 'ICT gear, deployment-ready',
		accent: 'ICT gear',
		subtext:
			'UTECHS supplies desktops, servers, routers, switches, firewalls, thin clients, licenses, accessories, and complete lab bundles with configuration and support.',
		ctaLabel: 'Explore Equipment Sales',
		ctaHref: '#ict-equipment',
		secondaryCtaLabel: 'Request a Quote',
		secondaryCtaAction: 'scroll',
		icon: PackageCheck,
		consoleTitle: 'Supply workflow',
		consoleItems: ['Procure trusted hardware', 'Configure and test devices', 'Deliver, install and support'],
		metric: 'Dell / HP / Cisco',
		metricLabel: 'Procurement brands',
	},
	{
		id: 'enterprise',
		image: '/images/hero/enterprise.jpg',
		tint: 'from-[#061B3A] via-[#0A4B93]/90 to-[#07111f]',
		badge: 'Enterprise ICT Solutions',
		headline: 'Infrastructure built to scale',
		accent: 'Infrastructure',
		subtext:
			"From LAN/WAN networks to servers and support, we build the technology backbone behind Liberia's leading organizations.",
		ctaLabel: 'Explore Enterprise Services',
		ctaHref: '#enterprise-ict',
		secondaryCtaLabel: 'Partner With Us',
		secondaryCtaAction: 'modal',
		icon: Building2,
		consoleTitle: 'Infrastructure stack',
		consoleItems: ['Structured cabling & switching', 'Servers, firewalls & licensing', 'Monitoring, maintenance & advisory'],
		metric: '400+',
		metricLabel: 'Network points delivered',
	},
	{
		id: 'web',
		image: '/images/stock5.jpg',
		tint: 'from-[#06152d] via-[#083f7d]/90 to-[#07111f]',
		badge: 'Web, API & Product Engineering',
		headline: 'Web platforms that perform',
		accent: 'Web platforms',
		subtext:
			'UTECHS designs fast, secure websites, portals, APIs, and internal systems that help Liberian institutions operate with confidence.',
		ctaLabel: 'Plan a Web Project',
		ctaHref: '#contact-form',
		secondaryCtaLabel: 'View Capabilities',
		secondaryCtaAction: 'scroll',
		icon: Code2,
		consoleTitle: 'Deployment pipeline',
		consoleItems: ['Discovery & UX mapping', 'Next.js / API architecture', 'Security, hosting & support'],
		metric: 'Full-stack',
		metricLabel: 'Design, build, deploy',
	},
	{
		id: 'security',
		image: '/images/stock2.jpg',
		tint: 'from-[#101827] via-[#0A4B93]/85 to-[#17370c]',
		badge: 'Cybersecurity & Managed Support',
		headline: 'Security you can count on',
		accent: 'Security',
		subtext:
			'Endpoint protection, SOPHOS and ESET licensing, firewall deployments, backups, and advisory for institutions that cannot afford downtime.',
		ctaLabel: 'Secure My Systems',
		ctaHref: '#services',
		secondaryCtaLabel: 'Talk to an Expert',
		secondaryCtaAction: 'scroll',
		icon: Shield,
		consoleTitle: 'Protection loop',
		consoleItems: ['Assess exposure', 'Deploy controls', 'Monitor, patch, improve'],
		metric: '24h',
		metricLabel: 'Inquiry response target',
	},
];

const AUTOPLAY_INTERVAL = 6500;

export default function Hero({ onOpenModal }: HeroProps) {
	const [current, setCurrent] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const slide = SLIDES[current];

	const goTo = useCallback((index: number) => {
		setCurrent(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);
	}, []);

	const next = useCallback(() => {
		setCurrent((value) => (value + 1) % SLIDES.length);
	}, []);

	const prev = useCallback(() => {
		setCurrent((value) => (value - 1 + SLIDES.length) % SLIDES.length);
	}, []);

	useEffect(() => {
		if (isPaused) return;
		const timer = window.setInterval(next, AUTOPLAY_INTERVAL);
		return () => window.clearInterval(timer);
	}, [isPaused, next]);

	useEffect(() => {
		const handler = (event: KeyboardEvent) => {
			if (event.key === 'ArrowRight') next();
			if (event.key === 'ArrowLeft') prev();
		};

		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [next, prev]);

	const progressStyle = useMemo(
		() => ({
			animationDuration: `${AUTOPLAY_INTERVAL}ms`,
			animationPlayState: isPaused ? 'paused' : 'running',
		}),
		[isPaused],
	);

	const scrollTo = (href: string) => {
		const el = document.querySelector(href);
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.pageYOffset - 88;
		window.scrollTo({ top, behavior: 'smooth' });
	};

	const handleSecondaryClick = (targetSlide: Slide) => {
		if (targetSlide.secondaryCtaAction === 'modal') {
			onOpenModal();
			return;
		}

		scrollTo(targetSlide.ctaHref);
	};

	const Icon = slide.icon;

	return (
		<section
			id="hero"
			className="relative mt-[72px] h-[calc(100svh-72px)] overflow-hidden text-white"
			aria-label="UTECHS hero carousel"
		>
			{SLIDES.map((item, index) => (
				<div
					key={item.id}
					className={`absolute inset-0 transition-opacity duration-700 ease-out ${
						index === current ? 'opacity-100' : 'opacity-0'
					}`}
					aria-hidden={index !== current}
				>
					<Image
						src={item.image}
						alt=""
						fill
						className="object-cover"
						priority={index === 0}
						sizes="100vw"
						style={index === current ? { animation: 'heroKenBurns 12s ease-out forwards' } : undefined}
					/>
					<div className={`absolute inset-0 bg-gradient-to-br ${item.tint}`} />
					<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.92)_0%,rgba(3,7,18,0.68)_46%,rgba(3,7,18,0.18)_100%)]" />
				</div>
			))}

			<div className="absolute inset-0 dark-tech-grid opacity-30" />
			<div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />

			<div className="relative z-10 section-container flex h-full items-center pb-24 pt-8 lg:pb-28 lg:pt-10">
				<div className="grid w-full items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
					<div key={`copy-${slide.id}`} className="max-w-3xl reveal-up">
						<div className="mb-4 inline-flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
							<Icon size={15} className="text-brand-green" />
							{slide.badge}
						</div>

						<h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
							{slide.headline.split(slide.accent)[0]}
							<span className="text-brand-green">{slide.accent}</span>
							{slide.headline.split(slide.accent)[1]}
						</h1>

						<p className="mt-4 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
							{slide.subtext}
						</p>

						<div className="mt-7 flex flex-col gap-3 sm:flex-row">
							<button
								type="button"
								onClick={() => scrollTo(slide.ctaHref)}
								className="group inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-brand-blue-dark shadow-2xl shadow-black/25 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-green hover:text-white"
							>
								{slide.ctaLabel}
								<ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
							</button>
							<button
								type="button"
								onClick={() => handleSecondaryClick(slide)}
								className="group inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 bg-white/[0.08] px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.16]"
							>
								{slide.secondaryCtaLabel}
								<ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</button>
						</div>

						<div className="mt-7 grid max-w-2xl grid-cols-3 border border-white/12 bg-white/[0.07] backdrop-blur-md">
							{[
								['2014', 'Founded in Liberia'],
								['12+', 'Institutional partners'],
								['Web + ICT', 'Integrated delivery'],
							].map(([value, label]) => (
								<div key={label} className="border-r border-white/10 p-4 last:border-r-0">
									<div className="font-display text-lg font-extrabold text-white">{value}</div>
									<div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/48">{label}</div>
								</div>
							))}
						</div>
					</div>

					<div key={`panel-${slide.id}`} className="hidden xl:block reveal-up">
						<div className="ml-auto max-w-[470px] border border-white/15 bg-slate-950/55 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
							<div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
								<div className="flex items-center gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-red-400" />
									<span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
									<span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
								</div>
								<span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/38">utechs.ops</span>
							</div>

							<div className="command-line bg-black/35 p-4 font-mono">
								<div className="mb-4 flex items-center gap-3">
									<div className="flex h-11 w-11 items-center justify-center bg-brand-green text-slate-950">
										<ServerCog size={22} />
									</div>
									<div>
										<p className="text-xs text-white/45">Current capability</p>
										<h2 className="font-display text-xl font-bold text-white">{slide.consoleTitle}</h2>
									</div>
								</div>

								<div className="space-y-3">
									{slide.consoleItems.map((item, index) => (
										<div key={item} className="flex items-center gap-3 text-sm text-white/78">
											<span className="text-brand-green">0{index + 1}</span>
											<span className="h-px flex-1 bg-white/10" />
											<span className="w-56 text-right">{item}</span>
										</div>
									))}
								</div>

								<div className="mt-5 grid grid-cols-[0.9fr_1.1fr] gap-3">
									<div className="border border-white/10 bg-white/[0.06] p-4">
										<p className="font-display text-3xl font-extrabold text-brand-green">{slide.metric}</p>
										<p className="mt-1 text-[11px] uppercase tracking-wide text-white/42">{slide.metricLabel}</p>
									</div>
									<div className="border border-white/10 bg-white/[0.06] p-4">
										<div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white/55">
											<Sparkles size={14} className="text-brand-green" />
											Production mindset
										</div>
										<p className="text-xs leading-5 text-white/50">
											Practical design, resilient systems, clear handoff, and long-term support after launch.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-5 left-1/2 z-20 flex w-[calc(100%-2rem)] max-w-[82rem] -translate-x-1/2 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-2">
					{SLIDES.map((item, index) => (
						<button
							key={item.id}
							type="button"
							onClick={() => goTo(index)}
							className={`group h-11 min-w-11 border backdrop-blur-md transition duration-200 ${
								index === current
									? 'border-white bg-white text-brand-blue-dark'
									: 'border-white/20 bg-white/10 text-white hover:border-white/45 hover:bg-white/18'
							}`}
							aria-label={`Go to ${item.badge}`}
							aria-current={index === current ? 'true' : undefined}
						>
							<span className="sr-only">{item.badge}</span>
							<span className="mx-auto block h-2 w-2 rounded-full bg-current" />
						</button>
					))}
				</div>

				<div className="hidden min-w-48 flex-1 items-center gap-3 sm:flex">
					<span className="text-xs font-bold tabular-nums text-white/55">{String(current + 1).padStart(2, '0')}</span>
					<div className="h-px flex-1 overflow-hidden bg-white/18">
						<div
							key={slide.id}
							className="h-full origin-left bg-brand-green"
							style={{
								...progressStyle,
								animationName: 'progressBar',
							}}
						/>
					</div>
					<span className="text-xs font-bold tabular-nums text-white/35">{String(SLIDES.length).padStart(2, '0')}</span>
				</div>

				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={() => setIsPaused((value) => !value)}
						className="flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:border-white/45 hover:bg-white/18"
						aria-label={isPaused ? 'Resume carousel' : 'Pause carousel'}
					>
						{isPaused ? <Play size={17} /> : <Pause size={17} />}
					</button>
					<button
						type="button"
						onClick={prev}
						className="flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:border-white/45 hover:bg-white/18"
						aria-label="Previous slide"
					>
						<ChevronLeft size={20} />
					</button>
					<button
						type="button"
						onClick={next}
						className="flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:border-white/45 hover:bg-white/18"
						aria-label="Next slide"
					>
						<ChevronRight size={20} />
					</button>
				</div>
			</div>
		</section>
	);
}
