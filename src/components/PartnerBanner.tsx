'use client';

import { Building2, GraduationCap, Landmark, Network, ShieldCheck } from 'lucide-react';

const PARTNERS = [
	'LIBTELCO',
	'Liberia Revenue Authority',
	'Central Bank of Liberia',
	'JFK Memorial Hospital',
	'Afriland First Bank',
	'Grand Bassa University',
	'STARZ University',
	'Faith University',
	'National Port Authority',
	'NOCAL',
];

const SIGNALS = [
	{ icon: Landmark, value: 'Gov', label: 'Public-sector delivery' },
	{ icon: Building2, value: 'Banking', label: 'Financial infrastructure' },
	{ icon: GraduationCap, value: 'Schools', label: 'Managed lab programs' },
	{ icon: ShieldCheck, value: 'Secure', label: 'Endpoint and firewall work' },
];

const DOUBLED = [...PARTNERS, ...PARTNERS];

export default function PartnerBanner() {
	return (
		<section className="relative overflow-hidden bg-white py-10" aria-label="Trusted organizations">
			<div className="absolute inset-0 tech-grid opacity-50" />
			<div className="relative section-container">
				<div className="grid gap-6 lg:grid-cols-[0.95fr_1.4fr] lg:items-center">
					<div className="reveal-up">
						<div className="section-kicker mb-3">Trusted delivery</div>
						<h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-3xl">
							Real systems for institutions that cannot pause.
						</h2>
						<p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
							UTECHS combines software engineering, infrastructure, cybersecurity, and support for organizations across Liberia.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-3 sm:grid-cols-4 reveal-stagger">
						{SIGNALS.map(({ icon: Icon, value, label }) => (
							<div key={label} className="border border-slate-200 bg-white p-4 shadow-sm">
								<div className="mb-3 flex h-9 w-9 items-center justify-center bg-brand-blue-light text-brand-blue">
									<Icon size={18} />
								</div>
								<div className="font-display text-lg font-extrabold text-brand-neutral-dark">{value}</div>
								<div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">{label}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="relative mt-8 border-y border-slate-200 bg-slate-950 py-4">
				<div className="absolute inset-0 dark-tech-grid opacity-20" />
				<div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent" />
				<div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />
				<div className="marquee-track relative">
					{DOUBLED.map((partner, index) => (
						<div
							key={`${partner}-${index}`}
							className="mx-3 inline-flex min-w-[210px] items-center gap-3 border border-white/10 bg-white/[0.06] px-4 py-3 text-white/75"
						>
							<Network size={15} className="text-brand-green" />
							<span className="truncate text-xs font-bold uppercase tracking-[0.12em]">{partner}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
