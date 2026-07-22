'use client';

import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import {
	Building2,
	Globe2,
	Handshake,
	HeartHandshake,
	Lightbulb,
	ShieldCheck,
	Target,
	UsersRound,
	Eye,
	Star,
	ArrowRight,
	Zap,
	CheckCircle2,
	Cpu,
	Lock,
	MapPin,
	X,
	Mail,
	Link2,
	Calendar,
	User,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const VALUES = [
	{
		icon: Target,
		title: 'Mission',
		accent: 'from-brand-blue/10 to-brand-blue/5',
		iconBg: 'bg-brand-blue text-white',
		copy: 'We empower organizations to lead with confidence in the digital era by delivering innovative, secure, and transformative technology solutions that accelerate growth, optimize operations, and create lasting competitive advantage.',
	},
	{
		icon: Eye,
		title: 'Vision',
		accent: 'from-brand-green/10 to-brand-green/5',
		iconBg: 'bg-brand-green text-slate-950',
		copy: "To become one of Liberia's leading providers of innovative, secure, and transformative technology solutions — recognized for delivering excellence, driving digital innovation, and creating lasting value for our clients.",
	},
	{
		icon: Lightbulb,
		title: 'Innovation',
		accent: 'from-amber-500/10 to-amber-500/5',
		iconBg: 'bg-amber-500 text-white',
		copy: 'From thin-client labs to cloud infrastructure, we bring modern, practical technology to organizations that need results, not just products.',
	},
	{
		icon: HeartHandshake,
		title: 'Partnership',
		accent: 'from-purple-500/10 to-purple-500/5',
		iconBg: 'bg-purple-500 text-white',
		copy: 'We build long-term relationships with institutions, schools, and government agencies across Liberia, treating every project as a shared commitment.',
	},
];

const CORE_VALUES = [
	{
		icon: Star,
		title: 'Excellence',
		copy: 'We uphold the highest standards in every engagement, delivering quality solutions that exceed expectations.',
	},
	{
		icon: Lightbulb,
		title: 'Innovation',
		copy: 'We embrace emerging technologies and creative approaches to solve complex challenges.',
	},
	{
		icon: ShieldCheck,
		title: 'Integrity',
		copy: 'We conduct business with transparency, honesty, and ethical responsibility.',
	},
	{
		icon: HeartHandshake,
		title: 'Customer Satisfaction',
		copy: 'Our clients are at the center of everything we do. Their success is our success.',
	},
];

const SERVICES = [
	{ icon: Globe2, label: 'Web & Software Development' },
	{ icon: ShieldCheck, label: 'Cybersecurity Advisory' },
	{ icon: Building2, label: 'Network Infrastructure' },
	{ icon: UsersRound, label: 'Digital Literacy Programs' },
	{ icon: Cpu, label: 'Server & Cloud Virtualization' },
	{ icon: Lock, label: 'Identity & Access Management' },
];

const STATS = [
	{ value: '2021', label: 'Established' },
	{ value: '2014', label: 'Programs since' },
	{ value: '12+', label: 'Institutional partners' },
	{ value: '6', label: 'Service verticals' },
];

const PARTNERS = [
	{ name: 'Cisco', category: 'Networking' },
	{ name: 'Microsoft', category: 'Software & Cloud' },
	{ name: 'VMware', category: 'Virtualization' },
	{ name: 'HP', category: 'Hardware' },
	{ name: 'Lenovo', category: 'Hardware' },
	{ name: 'ESET', category: 'Cybersecurity' },
	{ name: 'Suprema', category: 'Access Control' },
];

type TeamMember = {
	name: string;
	position: string;
	bio: string;
	initials: string;
	experience: string;
	image: string | null;
};

const TEAM: TeamMember[] = [
	{
		name: 'Jarvik S. Tarpeh',
		position: 'Chief Executive Officer',
		bio: 'Over 15 years driving ICT strategy and digital transformation across public and private sectors in West Africa. Emmanuel founded UNIQUE with a vision to bring enterprise-grade technology solutions to Liberian institutions.',
		initials: 'EK',
		experience: '15+ Years',
		image: '/images/Jarvik.png',
	},
	{
		name: 'Dominic DK Tarpeh',
		position: 'IT Support Specialist',
		bio: "Specializes in enterprise systems integration, cloud infrastructure, and cybersecurity architecture. Sarah leads UNIQUE's technical direction and ensures all solutions meet global best-practice standards.",
		initials: 'SB',
		experience: '12 Years',
		image: '/images/Dominic.png',
	},
	{
		name: 'Owen Maluzee Sarpee',
		position: 'Head of Finance',
		bio: 'Cisco-certified network architect with deep expertise in enterprise LAN/WAN design and deployment across Liberia. James has led connectivity projects for government agencies, banks, and educational institutions.',
		initials: 'JP',
		experience: '10 Years',
		image: '/images/Owen.png',
	},
	{
		name: 'Amos Senkao',
		position: 'Web Developer',
		bio: 'Passionate about building lasting institutional relationships and ensuring technology investments deliver real outcomes. Vivian oversees client onboarding, project delivery, and long-term partner engagement.',
		initials: 'VT',
		experience: '8 Years',
		image: "/images/Amos.png",
	},
	{
		name: 'Richard D. Mulbah',
		position: 'Lead Software Engineer',
		bio: "Full-stack developer building scalable web platforms and enterprise management systems for African institutions. Richard leads UNIQUE's in-house software development practice.",
		initials: 'RM',
		experience: '9 Years',
		image: null,
	},
	{
		name: 'Grace O. Cooper',
		position: 'Cybersecurity Advisor',
		bio: 'Leads security assessments, compliance frameworks, and digital risk management for government and banking clients. Grace brings deep expertise in threat analysis and regulatory compliance.',
		initials: 'GC',
		experience: '11 Years',
		image: null,
	},
];

const MILESTONES = [
	{
		year: '2014',
		title: 'Where it began',
		detail:
			'Digital literacy programs launched under an earlier community initiative in Monrovia.',
		side: 'left',
	},
	{
		year: '2018',
		title: 'First lab deployed',
		detail:
			'UNIQUE set up its first school computer laboratory, establishing a model for future partnerships.',
		side: 'right',
	},
	{
		year: '2021',
		title: 'Formally incorporated',
		detail:
			'UNIQUE Technology Solutions officially registered, expanding from education into enterprise ICT.',
		side: 'left',
	},
	{
		year: '2023',
		title: 'Enterprise expansion',
		detail:
			'Grew into networking, cybersecurity, cloud virtualization, and managed IT service verticals.',
		side: 'right',
	},
	{
		year: '2024',
		title: '12+ partners & counting',
		detail:
			'Active partnerships across government, banking, healthcare, and education sectors across Liberia.',
		side: 'left',
	},
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
	return (
		<>
			<ScrollReveal />
			<Header />

			<main>
				{/* ─────────────────── Hero ─────────────────── */}
				<section className="relative mt-[72px] overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
					<div className="absolute inset-0 dark-tech-grid opacity-20" />
					<div className="absolute inset-0 bg-gradient-to-br from-[#061B3A] via-[#0A4B93]/30 to-[#07111f]" />
					<div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />
					<div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
					<div className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-brand-blue/10 blur-[120px]" />

					<div className="relative section-container">
						<div className="mx-auto max-w-3xl text-center">
							<div className="mb-5 inline-flex items-center gap-2 border border-white/10 bg-white/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
								<Building2 size={13} className="text-brand-green" />
								About UNIQUE
							</div>
							<h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
								Built for real-world
								<br />
								<span className="text-brand-green">impact</span>.
							</h1>
							<p className="mt-5 text-base leading-7 text-white/55 sm:text-lg">
								A proudly Liberian-owned ICT consulting and systems integration
								firm delivering innovative, secure, and scalable technology
								solutions across West Africa.
							</p>
							<div className="mt-12 grid grid-cols-2 divide-x divide-white/10 border border-white/10 bg-white/[0.04] backdrop-blur-md sm:grid-cols-4">
								{STATS.map(({ value, label }) => (
									<div key={label} className="py-5">
										<div className="font-display text-2xl font-extrabold text-brand-green">
											{value}
										</div>
										<div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/38">
											{label}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* ─────────────────── Who We Are ─────────────────── */}
				<section className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="grid gap-14 lg:grid-cols-2 lg:items-start">
							{/* Left: prose + value cards */}
							<div className="reveal-up">
								<div className="section-kicker mb-3">Who We Are</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									Pioneering digital transformation in Liberia.
								</h2>
								<div className="mt-6 space-y-4 text-sm leading-7 text-slate-500">
									<p>
										Unique Technology Solutions (UNIQUE) is a proudly
										Liberian-owned ICT consulting and systems integration firm
										specializing in innovative, secure, and scalable technology
										solutions that enable organizations to achieve their
										strategic objectives.
									</p>
									<p>
										Our team brings extensive expertise in Software Development,
										Enterprise Systems Integration, Cybersecurity, Network
										Design, Cloud Infrastructure, Virtualization, Data
										Warehousing, Managed IT Services, and Human Capacity
										Development.
									</p>
								</div>

								{/* Mission / Vision / etc — 2×2 grid */}
								<div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
									{VALUES.map(({ icon: Icon, title, accent, iconBg, copy }) => (
										<article
											key={title}
											className={`group relative overflow-hidden border border-slate-200 bg-gradient-to-br ${accent} p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
										>
											<div
												className={`mb-3 inline-flex h-9 w-9 items-center justify-center ${iconBg}`}
											>
												<Icon size={16} />
											</div>
											<h3 className="font-display text-sm font-extrabold tracking-tight text-brand-neutral-dark">
												{title}
											</h3>
											<p className="mt-1.5 text-xs leading-5 text-slate-500">
												{copy}
											</p>
										</article>
									))}
								</div>
							</div>

							{/* Right: alternating timeline */}
							<div className="reveal-up">
								<div className="mb-6">
									<p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
										Our journey
									</p>
									<h3 className="mt-1 font-display text-xl font-extrabold text-brand-neutral-dark">
										A decade of impact.
									</h3>
								</div>

								<div className="relative">
									{/* Centre spine */}
									<div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-blue/30 via-brand-blue/20 to-transparent" />

									<ol className="space-y-0">
										{MILESTONES.map(({ year, title, detail, side }) => {
											const isLeft = side === 'left';
											return (
												<li key={year} className="relative flex items-center">
													{/* Left slot */}
													<div
														className={`flex w-[calc(50%-20px)] ${isLeft ? 'pr-4' : ''}`}
													>
														{isLeft && (
															<div className="w-full border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-blue/30 hover:shadow-md">
																<span className="font-display text-xs font-extrabold text-brand-blue">
																	{year}
																</span>
																<h4 className="mt-0.5 font-display text-sm font-bold text-brand-neutral-dark">
																	{title}
																</h4>
																<p className="mt-1 text-[11px] leading-4 text-slate-400">
																	{detail}
																</p>
															</div>
														)}
													</div>
													{/* Node */}
													<div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand-blue bg-white shadow-sm shadow-brand-blue/20">
														<div className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
													</div>
													{/* Right slot */}
													<div
														className={`flex w-[calc(50%-20px)] ${!isLeft ? 'pl-4' : ''}`}
													>
														{!isLeft && (
															<div className="w-full border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-blue/30 hover:shadow-md">
																<span className="font-display text-xs font-extrabold text-brand-blue">
																	{year}
																</span>
																<h4 className="mt-0.5 font-display text-sm font-bold text-brand-neutral-dark">
																	{title}
																</h4>
																<p className="mt-1 text-[11px] leading-4 text-slate-400">
																	{detail}
																</p>
															</div>
														)}
													</div>
												</li>
											);
										})}
									</ol>

									<div className="relative z-10 mx-auto mt-4 flex w-fit items-center gap-2 border border-brand-green/30 bg-brand-green/10 px-4 py-2">
										<MapPin size={12} className="text-brand-green" />
										<span className="text-[11px] font-bold text-brand-green">
											Growing — Monrovia, Liberia
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ─────────────────── Core Values ─────────────────── */}
				<section className="section-padding relative overflow-hidden bg-slate-950 text-white">
					<div className="absolute inset-0 dark-tech-grid opacity-20" />
					<div className="pointer-events-none absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-brand-blue/10 blur-[100px]" />
					<div className="relative section-container">
						<div className="mb-12 text-center">
							<div className="section-kicker mb-3 justify-center text-white/50">
								Core Values
							</div>
							<h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
								What drives us.
							</h2>
						</div>
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 reveal-stagger">
							{CORE_VALUES.map(({ icon: Icon, title, copy }, i) => (
								<article
									key={title}
									className="group relative overflow-hidden border border-white/10 bg-white/[0.04] p-6 transition-all duration-200 hover:border-brand-green/40 hover:bg-white/[0.07]"
								>
									<span className="pointer-events-none absolute -right-2 -top-3 select-none font-display text-7xl font-extrabold text-white/[0.04]">
										{String(i + 1).padStart(2, '0')}
									</span>
									<div className="relative mb-4 flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.06] text-brand-green">
										<Icon size={20} />
									</div>
									<h3 className="relative font-display text-sm font-bold text-white">
										{title}
									</h3>
									<p className="relative mt-2 text-xs leading-5 text-white/50">
										{copy}
									</p>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* ─────────────────── School Partnership Program ─────────────────── */}
				<section className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
							<div className="reveal-up">
								<div className="section-kicker mb-3">Flagship Program</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									School Partnership{' '}
									<span className="text-brand-blue">Program.</span>
								</h2>
								<div className="mt-5 space-y-4 text-sm leading-7 text-slate-500">
									<p>
										Through our flagship School Partnership Program, UNIQUE
										provides end-to-end ICT solutions for educational
										institutions — from design and supply through to
										installation, maintenance, and lifecycle management of
										modern computer laboratories.
									</p>
									<p>
										Our track record spans government, financial, educational,
										healthcare, and leading private sector enterprises across
										Liberia.
									</p>
								</div>
								<ul className="mt-6 space-y-2">
									{[
										'End-to-end lab design & installation',
										'Lifecycle management & maintenance',
										'Digital literacy curriculum delivery',
										'Teacher & staff capacity building',
									].map((item) => (
										<li
											key={item}
											className="flex items-center gap-3 text-sm text-slate-600"
										>
											<CheckCircle2
												size={15}
												className="flex-shrink-0 text-brand-green"
											/>
											{item}
										</li>
									))}
								</ul>
							</div>

							<div className="reveal-up">
								<div className="border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300/40">
									<div className="dark-tech-grid -m-6 mb-6 border-b border-white/10 p-6">
										<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/38">
											Core capabilities
										</p>
										<h3 className="mt-2 font-display text-lg font-extrabold">
											Strategy, infrastructure, and code under one roof.
										</h3>
									</div>
									<div className="grid grid-cols-2 gap-2">
										{SERVICES.map(({ icon: Icon, label }) => (
											<div
												key={label}
												className="flex items-center gap-3 border border-white/10 bg-white/[0.06] p-3 transition hover:border-brand-green/30 hover:bg-white/[0.09]"
											>
												<Icon
													size={14}
													className="flex-shrink-0 text-brand-green"
												/>
												<span className="text-[11px] font-bold leading-4 text-white/76">
													{label}
												</span>
											</div>
										))}
									</div>
									<div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
										<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-brand-green text-slate-950">
											<Handshake size={18} />
										</div>
										<div>
											<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/38">
												Technology partners
											</p>
											<p className="mt-1 text-xs font-semibold text-white/68">
												Dell · HP · Cisco · ESET · SOPHOS · Microsoft · VMware ·
												IBM
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ─────────────────── Leadership Team ─────────────────── */}
				<section className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-60" />
					<div className="pointer-events-none absolute right-0 top-0 h-64 w-64 border-b border-l border-brand-blue/10" />

					<div className="relative section-container">
						{/* Header */}
						<div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<div className="section-kicker mb-3">Leadership</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl">
									Meet the team.
								</h2>
								<p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
									A multidisciplinary team united by a shared commitment to
									technology-led growth across Liberia.
								</p>
							</div>
							<div className="flex items-center gap-2 border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-400">
								<UsersRound size={14} className="text-brand-blue" />
								{TEAM.length} team members
							</div>
						</div>

						{/* Grid */}
						<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger">
							{TEAM.map((member) => (
								<article
									key={member.name}
									className="group relative overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-slate-200/70"
								>
									{/* Photo area */}
									<div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200">
										<div className="absolute inset-0 tech-grid opacity-40" />

										{member.image ? (
											<img
												src={member.image}
												alt={member.name}
												fill
												className="object-cover object-top transition-all duration-500 group-hover:scale-105"
											/>
										) : (
											/* Initials circle centred in the photo band */
											<div className="absolute inset-0 flex items-center justify-center">
												<div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-blue/20 bg-brand-blue/10 shadow-sm">
													<span className="font-display text-2xl font-extrabold tracking-tight text-brand-blue/60">
														{member.initials}
													</span>
												</div>
											</div>
										)}

										{/* Subtle bottom fade → white card */}
										<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />

										{/* Experience badge */}
										<div className="absolute right-3 top-3 border border-slate-200 bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 backdrop-blur-sm">
											{member.experience}
										</div>
									</div>

									{/* Card body */}
									<div className="px-5 pb-5 pt-3">
										<h3 className="font-display text-base font-extrabold leading-tight text-brand-neutral-dark">
											{member.name}
										</h3>
										<p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-brand-blue">
											{member.position}
										</p>
										<p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-400">
											{member.bio}
										</p>

										{/* View profile CTA */}
										<div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
											<span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
												View profile
											</span>
											<div className="flex h-7 w-7 items-center justify-center border border-slate-200 bg-slate-50 text-slate-400 transition group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white">
												<ArrowRight size={12} />
											</div>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* ─────────────────── Strategic Global Partnerships ─────────────────── */}
				<section className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="mb-12 text-center">
							<div className="section-kicker mb-3 justify-center">
								Strategic Partnerships
							</div>
							<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
								Global technology partners.
							</h2>
							<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
								Delivering world-class solutions requires collaboration with
								globally recognized industry leaders. We have established
								strategic partnerships with leading technology manufacturers and
								solution providers to bring the best to Liberia.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7 reveal-stagger">
							{PARTNERS.map(({ name, category }) => (
								<article
									key={name}
									className="group border border-slate-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-slate-200/70"
								>
									<div className="font-display text-xl font-extrabold text-brand-neutral-dark">
										{name}
									</div>
									<div className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-400">
										{category}
									</div>
								</article>
							))}
						</div>
						<div className="mt-8 border border-slate-200 bg-slate-50 p-6 text-center">
							<p className="text-sm leading-7 text-slate-500">
								These partnerships enable us to provide genuine,
								enterprise-grade hardware and software solutions backed by
								manufacturer best practices, technical expertise, and
								industry-leading support — delivering cutting-edge networking,
								cybersecurity, virtualization, cloud, and digital infrastructure
								solutions that meet the highest standards of quality and
								performance.
							</p>
						</div>
					</div>
				</section>

				{/* ─────────────────── Trusted By ─────────────────── */}
				<section className="section-padding relative overflow-hidden bg-slate-950 text-white">
					<div className="absolute inset-0 dark-tech-grid opacity-20" />
					<div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-brand-blue/10 blur-[100px]" />
					<div className="relative section-container">
						<div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
							<div>
								<div className="section-kicker mb-3 text-white/50">
									Trusted by
								</div>
								<h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
									Institutions across Liberia.
								</h2>
								<p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
									We work with organizations in healthcare, higher education,
									banking, government, and telecommunications — institutions
									that need technology that actually works.
								</p>
							</div>
							<div className="flex flex-wrap gap-2 lg:justify-end">
								{[
									'Government',
									'Banking',
									'Healthcare',
									'Education',
									'Telecom',
								].map((sector) => (
									<span
										key={sector}
										className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-white/60 transition hover:border-brand-green/30 hover:text-white/80"
									>
										<Zap size={10} className="text-brand-green" />
										{sector}
									</span>
								))}
							</div>
						</div>
						<div className="mt-10 flex flex-col items-center justify-between gap-4 border border-white/10 bg-white/[0.04] p-6 sm:flex-row">
							<p className="text-sm font-semibold text-white/70">
								Ready to bring enterprise technology to your organization?
							</p>
							<a
								href="/contact"
								className="inline-flex items-center gap-2 bg-brand-green px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-slate-950 transition hover:bg-brand-green/90"
							>
								Get in touch
								<ArrowRight size={13} />
							</a>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
