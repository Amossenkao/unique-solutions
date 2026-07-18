'use client';

import { useState, type ElementType } from 'react';
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
	Server,
	Shield,
	Sun,
	Workflow,
} from 'lucide-react';

type Studio = 'build' | 'operate' | 'learn';

interface Capability {
	icon: ElementType;
	title: string;
	description: string;
	tags: string[];
}

const STUDIOS: Record<
	Studio,
	{
		label: string;
		short: string;
		icon: ElementType;
		headline: string;
		copy: string;
		accent: string;
		capabilities: Capability[];
	}
> = {
	build: {
		label: 'Web & Software',
		short: 'Build',
		icon: Code2,
		headline: 'Digital products that look sharp and work hard.',
		copy:
			'From public websites to internal portals and API integrations, UTECHS builds modern systems with clean user experiences, secure architecture, and practical support after launch.',
		accent: 'text-brand-blue bg-brand-blue-light border-blue-100',
		capabilities: [
			{
				icon: Globe2,
				title: 'Corporate Websites & Portals',
				description:
					'Responsive websites, dashboards, admissions portals, service portals, and content workflows built for credibility and conversion.',
				tags: ['Next.js', 'UX/UI', 'CMS-ready'],
			},
			{
				icon: Workflow,
				title: 'Custom Web Apps & APIs',
				description:
					'Line-of-business apps, REST APIs, integrations, reporting tools, and automation for teams that need better operational systems.',
				tags: ['Node.js', '.NET', 'Python'],
			},
			{
				icon: Database,
				title: 'Data & Systems Integration',
				description:
					'Database design, migrations, authentication, role-based access, and integrations between finance, education, and admin systems.',
				tags: ['SQL', 'Auth', 'Reporting'],
			},
		],
	},
	operate: {
		label: 'Enterprise ICT',
		short: 'Operate',
		icon: Network,
		headline: 'The network, power, and security layer behind the software.',
		copy:
			'UTECHS designs and maintains the practical infrastructure that keeps institutions online: cabling, switching, servers, cybersecurity, solar systems, and managed support.',
		accent: 'text-brand-green-dark bg-brand-green-light border-green-100',
		capabilities: [
			{
				icon: Network,
				title: 'LAN/WAN Infrastructure',
				description:
					'Structured cabling, switches, routers, Wi-Fi, VLANs, and commissioning to ANSI/TIA/EIA-568 and IEEE 802.3 standards.',
				tags: ['Cisco', 'SOPHOS', 'Cat6/Cat6a'],
			},
			{
				icon: Server,
				title: 'Servers & Virtualization',
				description:
					'HP, Dell, Cisco server deployment, VMware virtualization, Windows Server, SQL licensing, storage, and lifecycle support.',
				tags: ['VMware', 'Windows Server', 'Dell/HP'],
			},
			{
				icon: Shield,
				title: 'Cybersecurity & Managed Support',
				description:
					'ESET endpoint protection, SOPHOS firewalls, security advisory, monitoring, patching, troubleshooting, and equipment support.',
				tags: ['ESET', 'Firewalls', 'Support'],
			},
			{
				icon: Sun,
				title: 'Solar & Power Continuity',
				description:
					'Hybrid solar installations, battery banks, inverters, and protected power designs for labs and mission-critical facilities.',
				tags: ['15kVA+', 'Battery banks', 'UPS'],
			},
		],
	},
	learn: {
		label: 'Computer Lab as a Service',
		short: 'Learn',
		icon: Monitor,
		headline: 'Sustainable labs with curriculum, instructors, and support.',
		copy:
			'Schools get a managed computer literacy program without heavy upfront capital expense. UTECHS handles setup, staffing, maintenance, and ongoing improvement.',
		accent: 'text-brand-orange bg-orange-50 border-orange-100',
		capabilities: [
			{
				icon: Monitor,
				title: 'NComputing Thin-Client Labs',
				description:
					'Centralized L300/M300 workstations with low power use, reliable management, and right-sized hardware procurement.',
				tags: ['L300/M300', 'Low power', 'Managed'],
			},
			{
				icon: BookOpen,
				title: 'Digital Literacy Curriculum',
				description:
					'Keyboarding, MS Office, internet research, email, cybersecurity awareness, digital citizenship, AI basics, and career readiness.',
				tags: ['Grade 1-12', 'Assessments', 'Syllabi'],
			},
			{
				icon: Cpu,
				title: 'Instructor & Lab Operations',
				description:
					'Qualified instructors manage daily classes, attendance, reporting, troubleshooting, and student progress tracking.',
				tags: ['Training', 'Reports', 'Maintenance'],
			},
		],
	},
};

const STACK = ['Next.js', 'React', 'Node.js', '.NET', 'Python', 'SQL', 'Cisco', 'SOPHOS', 'ESET', 'VMware'];

export default function ServicesTabs() {
	const [activeTab, setActiveTab] = useState<Studio>('build');
	const active = STUDIOS[activeTab];
	const ActiveIcon = active.icon;

	return (
		<section id="services" className="section-padding relative overflow-hidden bg-slate-50" aria-label="Services">
			<div className="absolute inset-0 tech-grid opacity-60" />
			<div className="relative section-container">
				<div className="mb-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
					<div className="reveal-up">
						<div className="section-kicker mb-3">Capabilities</div>
						<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
							Strategy, code, infrastructure, and support under one roof.
						</h2>
					</div>
					<p className="max-w-2xl text-sm leading-7 text-slate-500 lg:ml-auto">
						A true IT company is more than a vendor list. UTECHS can design the website, integrate the data, secure the endpoints, wire the network, power the facility, and train the people who use it.
					</p>
				</div>

				<div className="mb-8 grid gap-3 md:grid-cols-3" role="tablist" aria-label="Service studios">
					{(Object.keys(STUDIOS) as Studio[]).map((key) => {
						const item = STUDIOS[key];
						const Icon = item.icon;
						const activeState = activeTab === key;

						return (
							<button
								key={key}
								type="button"
								onClick={() => setActiveTab(key)}
								className={`group border p-4 text-left transition duration-200 ${
									activeState
										? 'border-brand-blue bg-white shadow-xl shadow-slate-200/70'
										: 'border-slate-200 bg-white/70 hover:-translate-y-0.5 hover:border-brand-blue/30 hover:bg-white'
								}`}
								role="tab"
								aria-selected={activeState}
							>
								<div className="flex items-center justify-between gap-3">
									<div className={`flex h-11 w-11 items-center justify-center border ${item.accent}`}>
										<Icon size={20} />
									</div>
									<span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">{item.short}</span>
								</div>
								<h3 className="mt-4 font-display text-base font-bold text-brand-neutral-dark">{item.label}</h3>
								<p className="mt-2 text-xs leading-5 text-slate-500">{item.headline}</p>
							</button>
						);
					})}
				</div>

				<div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
					<div key={`story-${activeTab}`} className="border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300/40 reveal-up">
						<div className="dark-tech-grid -m-6 mb-6 border-b border-white/10 p-6">
							<div className="mb-5 flex h-12 w-12 items-center justify-center bg-brand-green text-slate-950">
								<ActiveIcon size={24} />
							</div>
							<h3 className="font-display text-2xl font-extrabold leading-tight">{active.headline}</h3>
							<p className="mt-4 text-sm leading-7 text-white/62">{active.copy}</p>
						</div>

						<div className="grid grid-cols-2 gap-3">
							{[
								{ icon: Layers3, label: 'Discovery to launch' },
								{ icon: Cloud, label: 'Cloud and on-prem' },
								{ icon: Shield, label: 'Security first' },
								{ icon: Boxes, label: 'Ongoing support' },
							].map(({ icon: Icon, label }) => (
								<div key={label} className="border border-white/10 bg-white/[0.06] p-3">
									<Icon size={16} className="mb-2 text-brand-green" />
									<p className="text-xs font-semibold text-white/72">{label}</p>
								</div>
							))}
						</div>
					</div>

					<div key={`cards-${activeTab}`} className="grid gap-4 md:grid-cols-2 reveal-stagger">
						{active.capabilities.map((service) => {
							const Icon = service.icon;
							return (
								<article key={service.title} className="card group p-5">
									<div className="mb-5 flex items-start justify-between gap-4">
										<div className={`flex h-11 w-11 items-center justify-center border ${active.accent}`}>
											<Icon size={20} />
										</div>
										<ArrowUpRight size={17} className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-blue" />
									</div>
									<h3 className="font-display text-base font-bold text-brand-neutral-dark">{service.title}</h3>
									<p className="mt-3 text-sm leading-6 text-slate-500">{service.description}</p>
									<div className="mt-5 flex flex-wrap gap-2">
										{service.tags.map((tag) => (
											<span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
												{tag}
											</span>
										))}
									</div>
								</article>
							);
						})}
					</div>
				</div>

				<div className="mt-10 border border-slate-200 bg-white p-4">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
						<p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Working stack</p>
						<div className="flex flex-wrap gap-2">
							{STACK.map((item) => (
								<span key={item} className="bg-slate-950 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white/75">
									{item}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
