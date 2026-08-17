import type { Metadata } from "next";
import Image from "next/image";
import {
	Building2,
	CheckCircle2,
	Cpu,
	Eye,
	Globe2,
	Handshake,
	HeartHandshake,
	Lightbulb,
	Lock,
	MapPin,
	ShieldCheck,
	Star,
	Target,
	UsersRound,
	Zap,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaSection from "@/components/site/CtaSection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, IconTile } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { BRAND, SECTORS, TECH_PARTNERS } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
	title: "About",
	description: `${BRAND.legalName} is a ${BRAND.country}n-owned ICT consulting and systems integration firm delivering secure, scalable technology across West Africa.`,
};

const STATS = [
	{ value: String(BRAND.incorporatedYear), label: "Established" },
	{ value: String(BRAND.foundedYear), label: "Programs since" },
	{ value: "12+", label: "Institutional partners" },
	{ value: "6", label: "Service verticals" },
];

const PILLARS = [
	{
		icon: Target,
		title: "Mission",
		copy: "We empower organizations to lead with confidence in the digital era by delivering innovative, secure and transformative technology that accelerates growth and optimizes operations.",
	},
	{
		icon: Eye,
		title: "Vision",
		copy: `To become one of ${BRAND.country}'s leading providers of innovative, secure and transformative technology solutions — recognized for excellence and lasting client value.`,
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		copy: "From thin-client labs to cloud infrastructure, we bring modern, practical technology to organizations that need results, not just products.",
	},
	{
		icon: HeartHandshake,
		title: "Partnership",
		copy: `We build long-term relationships with institutions, schools and government agencies across ${BRAND.country}, treating every project as a shared commitment.`,
	},
];

const CORE_VALUES = [
	{
		icon: Star,
		title: "Excellence",
		copy: "We uphold the highest standards in every engagement, delivering quality solutions that exceed expectations.",
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		copy: "We embrace emerging technologies and creative approaches to solve complex challenges.",
	},
	{
		icon: ShieldCheck,
		title: "Integrity",
		copy: "We conduct business with transparency, honesty and ethical responsibility.",
	},
	{
		icon: HeartHandshake,
		title: "Customer Satisfaction",
		copy: "Our clients are at the center of everything we do. Their success is our success.",
	},
];

const CAPABILITIES = [
	{ icon: Globe2, label: "Web & Software Development" },
	{ icon: ShieldCheck, label: "Cybersecurity Advisory" },
	{ icon: Building2, label: "Network Infrastructure" },
	{ icon: UsersRound, label: "Digital Literacy Programs" },
	{ icon: Cpu, label: "Server & Cloud Virtualization" },
	{ icon: Lock, label: "Identity & Access Management" },
];

const PARTNERS = [
	{ name: "Cisco", category: "Networking" },
	{ name: "Microsoft", category: "Software & Cloud" },
	{ name: "VMware", category: "Virtualization" },
	{ name: "HP", category: "Hardware" },
	{ name: "Lenovo", category: "Hardware" },
	{ name: "ESET", category: "Cybersecurity" },
	{ name: "Suprema", category: "Access Control" },
];

/* NOTE: bios describe the remit of each role. Replace with each person's own
   copy before launch — see the handover notes. */
const TEAM = [
	{
		name: "Jarvik S. Tarpeh",
		position: "Chief Executive Officer",
		initials: "JT",
		bio: `Sets company strategy and leads ${BRAND.name}'s partnerships with institutions across the public and private sectors.`,
		image: "/images/Jarvik.png",
	},
	{
		name: "Dominic DK Tarpeh",
		position: "IT Support Specialist",
		initials: "DT",
		bio: "Handles day-to-day technical support, equipment maintenance and on-site troubleshooting for client deployments.",
		image: "/images/Dominic.png",
	},
	{
		name: "Owen Maluzee Sarpee",
		position: "Head of Finance",
		initials: "OS",
		bio: "Oversees financial planning, procurement and commercial administration across client engagements.",
		image: "/images/Owen.png",
	},
	{
		name: "Amos Senkao",
		position: "Web Developer",
		initials: "AS",
		bio: "Builds and maintains the web platforms, portals and internal systems delivered to clients.",
		image: "/images/Amos.png",
	},
	{
		name: "Richard D. Mulbah",
		position: "Lead Software Engineer",
		initials: "RM",
		bio: `Leads ${BRAND.name}'s in-house software practice, from architecture through delivery of enterprise management systems.`,
		image: null,
	},
	{
		name: "Grace O. Cooper",
		position: "Cybersecurity Advisor",
		initials: "GC",
		bio: "Leads security assessments, compliance frameworks and digital risk management for client organizations.",
		image: null,
	},
];

const MILESTONES = [
	{
		year: "2014",
		title: "Where it began",
		detail:
			"Digital literacy programs launched under an earlier community initiative in Monrovia.",
	},
	{
		year: "2018",
		title: "First lab deployed",
		detail:
			"Our first school computer laboratory was set up, establishing the model for future partnerships.",
	},
	{
		year: "2021",
		title: "Formally incorporated",
		detail: `${BRAND.legalName} officially registered, expanding from education into enterprise ICT.`,
	},
	{
		year: "2023",
		title: "Enterprise expansion",
		detail:
			"Grew into networking, cybersecurity, cloud virtualization and managed IT service verticals.",
	},
	{
		year: "2024",
		title: "12+ partners and counting",
		detail:
			"Active partnerships across government, banking, healthcare and education sectors.",
	},
];

const PROGRAM_POINTS = [
	"End-to-end lab design & installation",
	"Lifecycle management & maintenance",
	"Digital literacy curriculum delivery",
	"Teacher & staff capacity building",
];

export default function AboutPage() {
	return (
		<>
			<PageHero
				eyebrow={`About ${BRAND.name}`}
				icon={Building2}
				wash="indigo"
				title={
					<>
						Built for real-world <span className="text-accent-400">impact</span>.
					</>
				}
				lead={`A proudly ${BRAND.country}n-owned ICT consulting and systems integration firm delivering innovative, secure and scalable technology solutions across West Africa.`}
				stats={STATS}
			/>

			{/* ── Who we are + journey ── */}
			<Section tone="light">
				<div className="grid gap-14 lg:grid-cols-2 lg:items-start">
					<Reveal>
						<SectionHeading
							eyebrow="Who We Are"
							title={`Pioneering digital transformation in ${BRAND.country}.`}
						/>

						<div className="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
							<p>
								{BRAND.legalName} ({BRAND.name}) is a proudly {BRAND.country}n-owned
								ICT consulting and systems integration firm specializing in
								innovative, secure and scalable technology solutions that enable
								organizations to achieve their strategic objectives.
							</p>
							<p>
								Our team brings expertise across software development, enterprise
								systems integration, cybersecurity, network design, cloud
								infrastructure, virtualization, data warehousing, managed IT
								services and human capacity development.
							</p>
						</div>

						<RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
							{PILLARS.map(({ icon, title, copy }) => (
								<Card key={title} interactive className="p-5">
									<IconTile icon={icon} size="sm" />
									<h3 className="mt-3.5 text-sm font-bold text-ink-900">{title}</h3>
									<p className="mt-1.5 text-xs leading-relaxed text-ink-500">{copy}</p>
								</Card>
							))}
						</RevealGroup>
					</Reveal>

					{/* Single-rail timeline: identical structure at every width, so it
					    cannot break the way an alternating layout does. */}
					<Reveal>
						<p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-400">
							Our journey
						</p>
						<h3 className="mt-2 text-display-sm font-extrabold text-ink-900">
							A decade of impact.
						</h3>

						<ol className="relative mt-8 space-y-6 before:absolute before:bottom-2 before:left-[0.9375rem] before:top-2 before:w-px before:bg-linear-to-b before:from-brand-200 before:via-brand-200 before:to-transparent">
							{MILESTONES.map(({ year, title, detail }) => (
								<li key={year} className="relative flex gap-5">
									<span
										aria-hidden="true"
										className="relative z-10 mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-brand-200"
									>
										<span className="size-2.5 rounded-full bg-brand-600" />
									</span>
									<div className="min-w-0 flex-1 rounded-xl bg-white p-4 ring-1 ring-ink-200/80 transition-shadow hover:shadow-md">
										<p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-600">
											{year}
										</p>
										<h4 className="mt-1 text-sm font-bold text-ink-900">{title}</h4>
										<p className="mt-1.5 text-xs leading-relaxed text-ink-500">
											{detail}
										</p>
									</div>
								</li>
							))}
						</ol>

						<p className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-50 px-3.5 py-2 ring-1 ring-accent-200">
							<MapPin size={13} className="text-accent-600" aria-hidden="true" />
							<span className="text-xs font-bold text-accent-700">
								Growing — {BRAND.locality}, {BRAND.country}
							</span>
						</p>
					</Reveal>
				</div>
			</Section>

			{/* ── Core values ── */}
			<Section tone="dark">
				<Reveal>
					<SectionHeading
						align="center"
						tone="dark"
						eyebrow="Core Values"
						title="What drives us."
					/>
				</Reveal>

				<RevealGroup className="auto-grid [--col:16rem] mt-12">
					{CORE_VALUES.map(({ icon, title, copy }, index) => (
						<Card key={title} tone="dark" interactive className="relative overflow-hidden">
							<span
								aria-hidden="true"
								className="pointer-events-none absolute -right-1 -top-4 select-none font-display text-7xl font-extrabold text-white/4"
							>
								{String(index + 1).padStart(2, "0")}
							</span>
							<IconTile icon={icon} tone="dark" />
							<h3 className="mt-4 text-sm font-bold text-white">{title}</h3>
							<p className="mt-2 text-xs leading-relaxed text-white/55">{copy}</p>
						</Card>
					))}
				</RevealGroup>
			</Section>

			{/* ── Flagship program ── */}
			<Section tone="light">
				<div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
					<Reveal>
						<SectionHeading
							eyebrow="Flagship Program"
							title={
								<>
									School Partnership <span className="text-brand-600">Program.</span>
								</>
							}
						/>

						<div className="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
							<p>
								Through our flagship School Partnership Program we provide
								end-to-end ICT solutions for educational institutions — from design
								and supply through to installation, maintenance and lifecycle
								management of modern computer laboratories.
							</p>
							<p>
								Our track record spans government, financial, educational,
								healthcare and private sector enterprises across {BRAND.country}.
							</p>
						</div>

						<ul className="mt-7 space-y-2.5">
							{PROGRAM_POINTS.map((item) => (
								<li key={item} className="flex items-center gap-3 text-sm text-ink-600">
									<CheckCircle2
										size={16}
										className="shrink-0 text-accent-500"
										aria-hidden="true"
									/>
									{item}
								</li>
							))}
						</ul>
					</Reveal>

					<Reveal>
						<div className="relative isolate overflow-hidden rounded-xl bg-ink-950 p-6 text-white shadow-lg">
							<div aria-hidden="true" className="absolute inset-0 -z-10 grid-overlay" />

							<p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
								Core capabilities
							</p>
							<h3 className="mt-2 text-display-xs font-extrabold">
								Strategy, infrastructure and code under one roof.
							</h3>

							<ul className="mt-6 grid gap-2 sm:grid-cols-2">
								{CAPABILITIES.map(({ icon: Icon, label }) => (
									<li
										key={label}
										className="flex items-center gap-2.5 rounded-lg bg-white/6 p-3 ring-1 ring-white/10 transition-colors hover:bg-white/9"
									>
										<Icon
											size={15}
											className="shrink-0 text-accent-400"
											aria-hidden="true"
										/>
										<span className="text-xs font-semibold leading-snug text-white/80">
											{label}
										</span>
									</li>
								))}
							</ul>

							<div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-5">
								<IconTile icon={Handshake} tone="accent" size="sm" />
								<div>
									<p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/40">
										Technology partners
									</p>
									<p className="mt-1.5 text-xs font-medium leading-relaxed text-white/70">
										{TECH_PARTNERS.join(" · ")}
									</p>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</Section>

			{/* ── Leadership ── */}
			<Section tone="sunken">
				<Reveal>
					<SectionHeading
						eyebrow="Leadership"
						title="Meet the team."
						lead={`A multidisciplinary team united by a shared commitment to technology-led growth across ${BRAND.country}.`}
						action={
							<span className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-xs font-bold text-ink-500 ring-1 ring-ink-200">
								<UsersRound size={14} className="text-brand-600" aria-hidden="true" />
								{TEAM.length} team members
							</span>
						}
					/>
				</Reveal>

				<RevealGroup className="auto-grid [--col:18rem] mt-12">
					{TEAM.map(({ name, position, initials, bio, image }) => (
						<article
							key={name}
							className="group overflow-hidden rounded-xl bg-white ring-1 ring-ink-200/80 transition-all duration-(--duration-base) ease-(--ease-out-soft) hover:-translate-y-1 hover:shadow-lg hover:ring-brand-300/70"
						>
							<div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-ink-100 to-ink-200">
								{image ? (
									<Image
										src={image}
										alt={`Portrait of ${name}`}
										fill
										loading="lazy"
										sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
										className="object-cover object-top transition-transform duration-(--duration-slow) group-hover:scale-105"
									/>
								) : (
									<span className="absolute inset-0 flex items-center justify-center">
										<span className="flex size-20 items-center justify-center rounded-full bg-brand-100 ring-1 ring-brand-200">
											<span className="font-display text-2xl font-extrabold text-brand-500">
												{initials}
											</span>
										</span>
									</span>
								)}
								<span
									aria-hidden="true"
									className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white to-transparent"
								/>
							</div>

							<div className="px-5 pb-5 pt-3">
								<h3 className="text-display-xs font-extrabold leading-tight text-ink-900">
									{name}
								</h3>
								<p className="mt-1 text-[0.6875rem] font-bold uppercase tracking-wider text-brand-600">
									{position}
								</p>
								<p className="mt-3 text-xs leading-relaxed text-ink-500">{bio}</p>
							</div>
						</article>
					))}
				</RevealGroup>
			</Section>

			{/* ── Strategic partnerships ── */}
			<Section tone="light">
				<Reveal>
					<SectionHeading
						align="center"
						eyebrow="Strategic Partnerships"
						title="Global technology partners."
						lead={`Delivering world-class solutions requires collaboration with globally recognized industry leaders. We partner with leading manufacturers and solution providers to bring the best to ${BRAND.country}.`}
					/>
				</Reveal>

				<RevealGroup className="auto-grid [--col:11rem] mt-12">
					{PARTNERS.map(({ name, category }) => (
						<div
							key={name}
							className="rounded-xl bg-white p-5 text-center ring-1 ring-ink-200/80 transition-all duration-(--duration-base) hover:-translate-y-1 hover:shadow-md hover:ring-brand-300/70"
						>
							<p className="font-display text-xl font-extrabold text-ink-900">{name}</p>
							<p className="mt-1 text-[0.625rem] font-bold uppercase tracking-wide text-ink-400">
								{category}
							</p>
						</div>
					))}
				</RevealGroup>

				<Reveal className="mt-8">
					<p className="rounded-xl bg-ink-50 p-6 text-center text-sm leading-relaxed text-ink-500 ring-1 ring-ink-200/70">
						These partnerships let us provide genuine, enterprise-grade hardware and
						software backed by manufacturer best practices, technical expertise and
						industry-leading support — delivering networking, cybersecurity,
						virtualization, cloud and digital infrastructure solutions that meet the
						highest standards of quality and performance.
					</p>
				</Reveal>
			</Section>

			{/* ── Sectors ── */}
			<Section tone="dark">
				<div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<Reveal>
						<SectionHeading
							tone="dark"
							eyebrow="Trusted by"
							title={`Institutions across ${BRAND.country}.`}
							lead="We work with organizations in healthcare, higher education, banking, government and telecommunications — institutions that need technology that actually works."
						/>
					</Reveal>

					<Reveal>
						<ul className="flex flex-wrap gap-2 lg:justify-end">
							{SECTORS.map((sector) => (
								<li
									key={sector}
									className={cn(
										"inline-flex items-center gap-2 rounded-lg bg-white/6 px-4 py-2.5",
										"text-[0.6875rem] font-bold uppercase tracking-wide text-white/60",
										"ring-1 ring-white/10 transition-colors hover:text-white hover:ring-accent-400/40",
									)}
								>
									<Zap size={11} className="text-accent-400" aria-hidden="true" />
									{sector}
								</li>
							))}
						</ul>
					</Reveal>
				</div>
			</Section>

			<CtaSection
				title="Ready to bring enterprise technology to your organization?"
				lead="Tell us what you are building and we will put the right team on it."
				primary={{ label: "Get in touch", href: "/contact" }}
				secondary={{ label: "Explore Services", href: "/services" }}
			/>
		</>
	);
}
