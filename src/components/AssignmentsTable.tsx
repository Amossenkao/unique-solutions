'use client';

import { useMemo, useState, type ElementType } from 'react';
import { Briefcase, Building2, CheckCircle2, Filter, GraduationCap, Hospital, Landmark, Network, Search } from 'lucide-react';

type Category = 'All' | 'Healthcare' | 'Banking' | 'Government' | 'Higher Ed' | 'Infrastructure';

interface Assignment {
	client: string;
	sector: Category;
	year: string;
	scope: string;
	tags: string[];
}

const ASSIGNMENTS: Assignment[] = [
	{
		client: 'JFK Memorial Hospital',
		sector: 'Healthcare',
		year: '2022-2026',
		scope: 'Enterprise IT Support, Supply of Dell Optiplex i7 Desktops, ESET Antivirus Licensing (60 seats), Active Directory Administration, Network Troubleshooting, and ICT Equipment Supply for FY 2026.',
		tags: ['ICT Supply', 'Antivirus', 'Networking', 'Support'],
	},
	{
		client: 'Liberia Revenue Authority (LRA)',
		sector: 'Government',
		year: '2020-2021',
		scope: 'Advanced Network Diagnostics & Performance Tuning; LAN installation for 40+ network points at LRA Collectorate (Roberts International Airport); SOPHOS XGS Firewall and Cisco 3750 switch procurement and deployment.',
		tags: ['LAN Design', 'Firewall', 'Network Tuning'],
	},
	{
		client: 'Faith University College',
		sector: 'Higher Ed',
		year: '2026',
		scope: '15kVA Hybrid Solar Installation, LAN Infrastructure, NComputing Computer Lab Setup, and ESET Endpoint Security with 35 licenses.',
		tags: ['Solar', 'LAN', 'NComputing', 'Antivirus'],
	},
	{
		client: 'LIBTELCO',
		sector: 'Government',
		year: '2022',
		scope: 'Procurement and installation of HP Servers, Cisco routers/firewalls, SOPHOS Firewall, Windows Server and SQL licenses, plus Cisco routers and gigabit switches.',
		tags: ['Servers', 'Cisco', 'Firewall', 'ICT Supply'],
	},
	{
		client: 'Afriland First Bank Liberia',
		sector: 'Banking',
		year: '2026',
		scope: 'Procurement and delivery of four Cisco Layer 3 switches for core banking network infrastructure.',
		tags: ['Cisco Switches', 'Core Banking', 'Networking'],
	},
	{
		client: 'Central Bank of Liberia',
		sector: 'Banking',
		year: 'Ongoing',
		scope: "Joint venture with Unique Solutions-Gambia: maintenance and support for the Central Bank's 4G Wireless Network Infrastructure serving the CBL and all commercial banks in Liberia.",
		tags: ['4G Wireless', 'Managed Services', 'Joint Venture'],
	},
	{
		client: 'Grand Bassa University',
		sector: 'Higher Ed',
		year: '2024',
		scope: 'Structured LAN installation supporting 210+ network points; CCTV system installation across campus; supply of desktops, thin-client devices, and accessories.',
		tags: ['LAN', 'CCTV', 'NComputing', 'ICT Supply'],
	},
	{
		client: 'STARZ University of Science & Technology',
		sector: 'Higher Ed',
		year: '2023-Ongoing',
		scope: 'LAN design and commissioning; ICT equipment supply; CCTV installation; continuous maintenance and technical support for 8 computer laboratories across 3 campus locations.',
		tags: ['8 Labs', 'LAN', 'CCTV', 'Managed Support'],
	},
	{
		client: 'National Oil Company of Liberia (NOCAL)',
		sector: 'Government',
		year: '2025',
		scope: 'Design and installation of structured LAN cabling to support 400+ network data points, implemented to ANSI/TIA/EIA-568, ISO/IEC 11801, and IEEE 802.3 standards.',
		tags: ['LAN 400+ Points', 'Cabling', 'Standards'],
	},
	{
		client: 'National Port Authority',
		sector: 'Government',
		year: '2024',
		scope: 'Structured LAN cabling for 110+ network points meeting ANSI/TIA/EIA-568 and ISO/IEC 11801 international standards.',
		tags: ['LAN', 'Structured Cabling', 'Standards'],
	},
	{
		client: 'Margibi University',
		sector: 'Higher Ed',
		year: '2026',
		scope: 'LAN installation accommodating 75+ data points; supply and installation of 30 i5 desktop computers and NComputing thin-client devices; full commissioning and testing.',
		tags: ['LAN', 'NComputing', 'ICT Supply'],
	},
	{
		client: 'Upstairs Christian Academy',
		sector: 'Higher Ed',
		year: 'Ongoing',
		scope: 'Computer Lab as a Service partnership with NComputing lab deployment, qualified IT instructor staffing, structured digital literacy curriculum delivery, and ongoing maintenance.',
		tags: ['CaaS', 'NComputing', 'Curriculum'],
	},
];

const FILTER_CATEGORIES: { label: Category; icon: ElementType }[] = [
	{ label: 'All', icon: Filter },
	{ label: 'Healthcare', icon: Hospital },
	{ label: 'Banking', icon: Briefcase },
	{ label: 'Government', icon: Landmark },
	{ label: 'Higher Ed', icon: GraduationCap },
	{ label: 'Infrastructure', icon: Building2 },
];

const METRICS = [
	{ value: '400+', label: 'network points', detail: 'NOCAL structured LAN' },
	{ value: '210+', label: 'campus points', detail: 'Grand Bassa University' },
	{ value: '8', label: 'computer labs', detail: 'STARZ multi-campus support' },
	{ value: '60', label: 'ESET seats', detail: 'JFK Memorial Hospital' },
];

const SECTOR_STYLES: Record<Category | string, string> = {
	Healthcare: 'bg-red-50 text-red-600 border-red-100',
	Banking: 'bg-amber-50 text-amber-700 border-amber-100',
	Government: 'bg-brand-blue-light text-brand-blue border-blue-100',
	'Higher Ed': 'bg-brand-green-light text-brand-green-dark border-green-100',
	Infrastructure: 'bg-slate-50 text-slate-600 border-slate-200',
};

export default function AssignmentsTable() {
	const [search, setSearch] = useState('');
	const [activeFilter, setActiveFilter] = useState<Category>('All');

	const filtered = useMemo(() => {
		return ASSIGNMENTS.filter((assignment) => {
			const matchesSector = activeFilter === 'All' || assignment.sector === activeFilter;
			const query = search.toLowerCase();
			const matchesSearch =
				!query ||
				assignment.client.toLowerCase().includes(query) ||
				assignment.scope.toLowerCase().includes(query) ||
				assignment.tags.some((tag) => tag.toLowerCase().includes(query)) ||
				assignment.sector.toLowerCase().includes(query);

			return matchesSector && matchesSearch;
		});
	}, [activeFilter, search]);

	return (
		<section id="track-record" className="section-padding relative overflow-hidden bg-white" aria-label="Assignment History">
			<div className="absolute inset-0 tech-grid opacity-45" />
			<div className="relative section-container">
				<div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
					<div className="reveal-up">
						<div className="section-kicker mb-3">Track record</div>
						<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
							Proof in networks, labs, servers, and systems delivery.
						</h2>
					</div>
					<p className="max-w-2xl text-sm leading-7 text-slate-500 lg:ml-auto">
						From national telecom infrastructure to university labs and bank switching equipment, UTECHS has delivered for Liberia&apos;s most demanding institutions.
					</p>
				</div>

				<div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 reveal-stagger">
					{METRICS.map((metric) => (
						<div key={metric.detail} className="border border-slate-200 bg-slate-950 p-4 text-white shadow-xl shadow-slate-200/60">
							<div className="mb-5 flex items-center justify-between">
								<Network size={17} className="text-brand-green" />
								<CheckCircle2 size={16} className="text-white/28" />
							</div>
							<div className="font-display text-3xl font-extrabold">{metric.value}</div>
							<div className="mt-1 text-xs font-bold uppercase tracking-wide text-brand-green">{metric.label}</div>
							<div className="mt-2 text-xs leading-5 text-white/46">{metric.detail}</div>
						</div>
					))}
				</div>

				<div className="mb-7 border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/50">
					<div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h3 className="font-display text-base font-bold text-brand-neutral-dark">Assignment explorer</h3>
							<p className="text-xs text-slate-500">Filter by sector or search for technologies, clients, and scope.</p>
						</div>
						<p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
							Showing {filtered.length} of {ASSIGNMENTS.length}
						</p>
					</div>

					<div className="flex flex-col gap-4 sm:flex-row">
						<div className="relative flex-1 max-w-sm">
							<Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
							<input
								type="text"
								placeholder="Search clients, projects, or tags..."
								value={search}
								onChange={(event) => setSearch(event.target.value)}
								className="w-full border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-700 transition-all placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
								aria-label="Search assignments"
							/>
						</div>

						<div className="flex flex-wrap gap-2" role="group" aria-label="Filter by sector">
							{FILTER_CATEGORIES.map(({ label, icon: Icon }) => (
								<button
									key={label}
									type="button"
									onClick={() => setActiveFilter(label)}
									aria-pressed={activeFilter === label}
									className={`inline-flex items-center gap-1.5 border px-3.5 py-2 text-xs font-bold transition-all duration-150 ${
										activeFilter === label
											? 'border-brand-blue bg-brand-blue text-white shadow-sm'
											: 'border-slate-200 bg-white text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue'
									}`}
								>
									<Icon size={12} />
									{label}
								</button>
							))}
						</div>
					</div>
				</div>

				{filtered.length === 0 ? (
					<div className="border border-slate-200 bg-white py-16 text-center text-slate-400">
						<Search size={28} className="mx-auto mb-3 opacity-40" />
						<p className="text-sm font-medium">No assignments match your search.</p>
						<p className="mt-1 text-xs">Try a different keyword or filter.</p>
					</div>
				) : (
					<>
						<div className="hidden overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-200/70 md:block">
							<table className="w-full text-sm" role="table">
								<thead>
									<tr className="border-b border-slate-200 bg-slate-950 text-white">
										<th className="w-[25%] px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-white/58">Client</th>
										<th className="w-[13%] px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-white/58">Sector</th>
										<th className="w-[11%] px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-white/58">Year</th>
										<th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-white/58">Scope of Work</th>
									</tr>
								</thead>
								<tbody>
									{filtered.map((assignment, index) => (
										<tr
											key={assignment.client}
											className={`border-b border-slate-100 transition-colors hover:bg-brand-blue-light/35 ${
												index % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
											}`}
										>
											<td className="px-5 py-5 align-top">
												<div className="text-sm font-bold leading-tight text-brand-neutral-dark">{assignment.client}</div>
												<div className="mt-2 flex flex-wrap gap-1">
													{assignment.tags.map((tag) => (
														<span key={tag} className="bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
															{tag}
														</span>
													))}
												</div>
											</td>
											<td className="px-4 py-5 align-top">
												<span className={`whitespace-nowrap border px-2.5 py-1 text-[11px] font-bold ${SECTOR_STYLES[assignment.sector]}`}>
													{assignment.sector}
												</span>
											</td>
											<td className="whitespace-nowrap px-4 py-5 align-top text-xs font-semibold text-slate-500">{assignment.year}</td>
											<td className="max-w-[460px] px-5 py-5 align-top text-xs leading-6 text-slate-600">{assignment.scope}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<div className="grid gap-4 md:hidden">
							{filtered.map((assignment) => (
								<article key={assignment.client} className="border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/60">
									<div className="mb-3 flex items-start justify-between gap-3">
										<h3 className="text-sm font-bold leading-tight text-brand-neutral-dark">{assignment.client}</h3>
										<span className={`flex-shrink-0 border px-2 py-0.5 text-[10px] font-bold ${SECTOR_STYLES[assignment.sector]}`}>
											{assignment.sector}
										</span>
									</div>
									<p className="mb-3 text-xs leading-6 text-slate-500">{assignment.scope}</p>
									<div className="flex items-center justify-between gap-3">
										<div className="flex flex-wrap gap-1">
											{assignment.tags.map((tag) => (
												<span key={tag} className="bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
													{tag}
												</span>
											))}
										</div>
										<span className="ml-2 flex-shrink-0 text-[11px] font-bold text-slate-400">{assignment.year}</span>
									</div>
								</article>
							))}
						</div>
					</>
				)}
			</div>
		</section>
	);
}
