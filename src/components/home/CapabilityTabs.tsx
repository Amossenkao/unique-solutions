"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
	ArrowUpRight,
	BookOpen,
	Boxes,
	Cloud,
	Code2,
	Cpu,
	Database,
	Globe2,
	Layers3,
	Monitor,
	Network,
	PackageCheck,
	Server,
	Shield,
	ShoppingCart,
	Sun,
	Truck,
	Workflow,
	type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, IconTile, Tag } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type StudioKey = "supply" | "learn" | "operate" | "build";

interface Capability {
	icon: LucideIcon;
	title: string;
	description: string;
	tags: string[];
}

interface Studio {
	key: StudioKey;
	label: string;
	short: string;
	icon: LucideIcon;
	headline: string;
	copy: string;
	gallery?: string[];
	capabilities: Capability[];
}

const STUDIOS: Studio[] = [
	{
		key: "supply",
		label: "ICT Equipment Supply",
		short: "Supply",
		icon: PackageCheck,
		headline: "Reliable ICT equipment, sourced, configured and supported.",
		copy: "We supply desktops, servers, routers, switches, thin clients, accessories, licenses and complete lab bundles for organizations that need equipment they can actually maintain.",
		gallery: [
			"/images/stock2.jpg",
			"/images/stock3.jpg",
			"/images/stock4.jpg",
			"/images/stock6.jpg",
		],
		capabilities: [
			{
				icon: ShoppingCart,
				title: "Hardware Procurement",
				description:
					"Desktops, laptops, servers, printers, monitors, UPS units, routers, switches, firewalls and accessories selected for real operating conditions.",
				tags: ["Dell", "HP", "Cisco"],
			},
			{
				icon: PackageCheck,
				title: "Configuration & Readiness",
				description:
					"Equipment is imaged, licensed, tested, inventoried and labeled before deployment to reduce downtime at handoff.",
				tags: ["Imaging", "Licensing", "Testing"],
			},
			{
				icon: Truck,
				title: "Delivery, Install & Support",
				description:
					"We deliver, install, commission and maintain supplied equipment as part of broader support agreements.",
				tags: ["Delivery", "Install", "Warranty"],
			},
		],
	},
	{
		key: "learn",
		label: "Computer Lab as a Service",
		short: "Learn",
		icon: Monitor,
		headline: "Sustainable labs with curriculum, instructors and support.",
		copy: "Schools get a managed computer literacy program without heavy upfront capital expense. We handle setup, staffing, maintenance and ongoing improvement.",
		gallery: ["/images/lab1.jpg", "/images/lab3.jpg", "/images/lab4.jpg"],
		capabilities: [
			{
				icon: Monitor,
				title: "NComputing Thin-Client Labs",
				description:
					"Centralized L300/M300 workstations with low power use, reliable management and right-sized hardware procurement.",
				tags: ["L300/M300", "Low power", "Managed"],
			},
			{
				icon: BookOpen,
				title: "Digital Literacy Curriculum",
				description:
					"Keyboarding, MS Office, internet research, email, cybersecurity awareness, digital citizenship, AI basics and career readiness.",
				tags: ["Grade 1–12", "Assessments", "Syllabi"],
			},
			{
				icon: Cpu,
				title: "Instructor & Lab Operations",
				description:
					"Qualified instructors manage daily classes, attendance, reporting, troubleshooting and student progress tracking.",
				tags: ["Training", "Reports", "Maintenance"],
			},
		],
	},
	{
		key: "operate",
		label: "Enterprise ICT",
		short: "Operate",
		icon: Network,
		headline: "The network, power and security layer behind the software.",
		copy: "We design and maintain the infrastructure that keeps institutions online: cabling, switching, servers, cybersecurity, solar systems and managed support.",
		capabilities: [
			{
				icon: Network,
				title: "LAN/WAN Infrastructure",
				description:
					"Structured cabling, switches, routers, Wi-Fi, VLANs and commissioning to ANSI/TIA/EIA-568 and IEEE 802.3 standards.",
				tags: ["Cisco", "SOPHOS", "Cat6/Cat6a"],
			},
			{
				icon: Server,
				title: "Servers & Virtualization",
				description:
					"HP, Dell and Cisco server deployment, VMware virtualization, Windows Server, SQL licensing, storage and lifecycle support.",
				tags: ["VMware", "Windows Server", "Dell/HP"],
			},
			{
				icon: Shield,
				title: "Cybersecurity & Managed Support",
				description:
					"ESET endpoint protection, SOPHOS firewalls, security advisory, monitoring, patching and equipment support.",
				tags: ["ESET", "Firewalls", "Support"],
			},
			{
				icon: Sun,
				title: "Solar & Power Continuity",
				description:
					"Hybrid solar installations, battery banks, inverters and protected power designs for labs and mission-critical facilities.",
				tags: ["15kVA+", "Battery banks", "UPS"],
			},
		],
	},
	{
		key: "build",
		label: "Web & Software",
		short: "Build",
		icon: Code2,
		headline: "Digital products that look sharp and work hard.",
		copy: "From public websites to internal portals and API integrations, we build modern systems with clean user experiences, secure architecture and practical support after launch.",
		capabilities: [
			{
				icon: Globe2,
				title: "Corporate Websites & Portals",
				description:
					"Responsive websites, dashboards, admissions portals, service portals and content workflows built for credibility and conversion.",
				tags: ["Next.js", "UX/UI", "CMS-ready"],
			},
			{
				icon: Workflow,
				title: "Custom Web Apps & APIs",
				description:
					"Line-of-business apps, REST APIs, integrations, reporting tools and automation for teams that need better operational systems.",
				tags: ["Node.js", ".NET", "Python"],
			},
			{
				icon: Database,
				title: "Data & Systems Integration",
				description:
					"Database design, migrations, authentication, role-based access and integrations between finance, education and admin systems.",
				tags: ["SQL", "Auth", "Reporting"],
			},
		],
	},
];

const DELIVERY_TRAITS = [
	{ icon: Layers3, label: "Discovery to launch" },
	{ icon: Cloud, label: "Cloud and on-prem" },
	{ icon: Shield, label: "Security first" },
	{ icon: Boxes, label: "Ongoing support" },
];

const STACK = [
	"Next.js",
	"React",
	"Node.js",
	".NET",
	"Python",
	"SQL",
	"Cisco",
	"SOPHOS",
	"ESET",
	"VMware",
];

export default function CapabilityTabs() {
	const [activeKey, setActiveKey] = useState<StudioKey>("supply");
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const activeIndex = STUDIOS.findIndex((s) => s.key === activeKey);
	const active = STUDIOS[activeIndex];
	const ActiveIcon = active.icon;

	/* Roving focus with automatic activation — the standard tablist pattern. */
	const onTabKeyDown = (event: React.KeyboardEvent) => {
		const last = STUDIOS.length - 1;
		let nextIndex: number | null = null;

		if (event.key === "ArrowRight") nextIndex = activeIndex === last ? 0 : activeIndex + 1;
		else if (event.key === "ArrowLeft") nextIndex = activeIndex === 0 ? last : activeIndex - 1;
		else if (event.key === "Home") nextIndex = 0;
		else if (event.key === "End") nextIndex = last;

		if (nextIndex === null) return;
		event.preventDefault();
		setActiveKey(STUDIOS[nextIndex].key);
		tabRefs.current[nextIndex]?.focus();
	};

	return (
		<Section id="services" tone="sunken" aria-label="Capabilities">
			<Reveal>
				<SectionHeading
					eyebrow="Capabilities"
					title="Everything IT, under one roof."
					lead="A true IT company is more than a vendor list. We supply the equipment, build the lab, secure the network, support the infrastructure and design the web systems that make the operation work."
				/>
			</Reveal>

			<div
				role="tablist"
				aria-label="Service areas"
				onKeyDown={onTabKeyDown}
				className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
			>
				{STUDIOS.map((studio, index) => {
					const selected = studio.key === activeKey;
					const Icon = studio.icon;

					return (
						<button
							key={studio.key}
							ref={(node) => {
								tabRefs.current[index] = node;
							}}
							type="button"
							role="tab"
							id={`tab-${studio.key}`}
							aria-selected={selected}
							aria-controls={`panel-${studio.key}`}
							tabIndex={selected ? 0 : -1}
							onClick={() => setActiveKey(studio.key)}
							className={cn(
								"cursor-pointer rounded-xl p-4 text-left transition-all duration-(--duration-base) ease-(--ease-out-soft)",
								selected
									? "bg-white shadow-md ring-2 ring-brand-600"
									: "bg-white/60 ring-1 ring-ink-200 hover:-translate-y-0.5 hover:bg-white hover:ring-brand-300",
							)}
						>
							<div className="flex items-center justify-between gap-3">
								<IconTile icon={Icon} />
								<span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-400">
									{studio.short}
								</span>
							</div>
							<h3 className="mt-4 text-sm font-bold text-ink-900">{studio.label}</h3>
							<p className="mt-1.5 text-xs leading-relaxed text-ink-500">
								{studio.headline}
							</p>
						</button>
					);
				})}
			</div>

			<div
				role="tabpanel"
				id={`panel-${active.key}`}
				aria-labelledby={`tab-${active.key}`}
				tabIndex={0}
				className="mt-6 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]"
			>
				<div
					key={`story-${active.key}`}
					className="relative isolate overflow-hidden rounded-xl bg-ink-950 p-6 text-white shadow-lg animate-fade-in"
				>
					<div aria-hidden="true" className="absolute inset-0 -z-10 grid-overlay" />

					<IconTile icon={ActiveIcon} tone="accent" />
					<h3 className="mt-5 text-display-sm font-extrabold leading-tight">
						{active.headline}
					</h3>
					<p className="mt-4 text-sm leading-relaxed text-white/60">{active.copy}</p>

					{active.gallery && (
						<div className="mt-6 grid grid-cols-2 gap-2">
							{active.gallery.map((src, index) => (
								<div
									key={src}
									className={cn(
										"relative overflow-hidden rounded-lg bg-white/4 ring-1 ring-white/10",
										index === 0 && active.gallery!.length === 3
											? "col-span-2 aspect-16/8"
											: "aspect-4/3",
									)}
								>
									<Image
										src={src}
										alt=""
										fill
										loading="lazy"
										className="object-cover"
										sizes="(min-width: 1024px) 18vw, 45vw"
									/>
									<div
										aria-hidden="true"
										className="absolute inset-0 bg-linear-to-t from-ink-950/50 to-transparent"
									/>
								</div>
							))}
						</div>
					)}

					<ul className="mt-6 grid grid-cols-2 gap-2.5">
						{DELIVERY_TRAITS.map(({ icon: Icon, label }) => (
							<li
								key={label}
								className="rounded-lg bg-white/6 p-3 ring-1 ring-white/10"
							>
								<Icon size={16} className="mb-2 text-accent-400" aria-hidden="true" />
								<p className="text-xs font-semibold text-white/75">{label}</p>
							</li>
						))}
					</ul>
				</div>

				<RevealGroup
					key={`cards-${active.key}`}
					className="auto-grid [--col:18rem] content-start"
				>
					{active.capabilities.map(({ icon, title, description, tags }) => (
						<Card key={title} interactive className="flex flex-col">
							<div className="flex items-start justify-between gap-4">
								<IconTile icon={icon} />
								<ArrowUpRight size={17} className="text-ink-300" aria-hidden="true" />
							</div>
							<h4 className="mt-5 text-display-xs font-bold text-ink-900">{title}</h4>
							<p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
								{description}
							</p>
							<ul className="mt-5 flex flex-wrap gap-2">
								{tags.map((tag) => (
									<li key={tag}>
										<Tag>{tag}</Tag>
									</li>
								))}
							</ul>
						</Card>
					))}
				</RevealGroup>
			</div>

			<Reveal className="mt-8">
				<div className="flex flex-col gap-4 rounded-xl bg-white p-4 ring-1 ring-ink-200/80 sm:flex-row sm:items-center">
					<p className="shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-ink-400">
						Working stack
					</p>
					<ul className="flex flex-wrap gap-2">
						{STACK.map((item) => (
							<li
								key={item}
								className="rounded-md bg-ink-950 px-2.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-wide text-white/80"
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			</Reveal>
		</Section>
	);
}
