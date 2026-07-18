import {
	Building2,
	Calendar,
	Globe2,
	Handshake,
	HeartHandshake,
	Lightbulb,
	ShieldCheck,
	Target,
	UsersRound,
} from 'lucide-react';

const VALUES = [
	{
		icon: Target,
		title: 'Mission',
		copy: 'We empower businesses to thrive in the digital age by providing innovative technology solutions that enhance efficiency and drive growth.',
	},
	{
		icon: Lightbulb,
		title: 'Innovation',
		copy: 'From thin-client labs to cloud infrastructure, we bring modern, practical technology to organizations that need results, not just products.',
	},
	{
		icon: HeartHandshake,
		title: 'Partnership',
		copy: 'We build long-term relationships with institutions, schools, and government agencies across Liberia, treating every project as a shared commitment.',
	},
];

const SERVICES = [
	{ icon: Globe2, label: 'Web & Software Development' },
	{ icon: ShieldCheck, label: 'Cybersecurity Advisory' },
	{ icon: Building2, label: 'Network Infrastructure' },
	{ icon: UsersRound, label: 'Digital Literacy Programs' },
];

const STATS = [
	{ value: '2021', label: 'Established' },
	{ value: '2014', label: 'Programs since' },
	{ value: '12+', label: 'Institutional partners' },
	{ value: '6', label: 'Service verticals' },
];

export default function About() {
	return (
		<section id="about" className="section-padding relative overflow-hidden bg-white" aria-label="About UTECHS">
			<div className="absolute inset-0 tech-grid opacity-40" />
			<div className="relative section-container">
				<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
					{/* LEFT: Copy + stats */}
					<div className="reveal-up">
						<div className="section-kicker mb-3">About UTECHS</div>
						<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
							Built for real-world impact.
						</h2>
						<p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
							Unique Technology Solutions (UTECHS) is an ICT consulting and systems integration firm
							headquartered in Monrovia, Liberia. Since 2014, we have partnered with schools,
							universities, hospitals, banks, and government agencies to deliver practical technology
							solutions that actually work in the local context.
						</p>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
							From deploying thin-client computer labs in high schools to building LAN infrastructure
							for national institutions, UTECHS combines deep technical expertise with an
							understanding of Liberia&apos;s unique operational challenges.
						</p>

						<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
							{STATS.map(({ value, label }) => (
								<div key={label} className="border border-slate-200 bg-slate-50 p-4">
									<div className="font-display text-2xl font-extrabold text-brand-blue">{value}</div>
									<div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{label}</div>
								</div>
							))}
						</div>
					</div>

					{/* RIGHT: Values + services */}
					<div className="reveal-up">
						<div className="space-y-4">
							{VALUES.map(({ icon: Icon, title, copy }) => (
								<article key={title} className="card p-5">
									<div className="flex items-start gap-4">
										<div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-blue-100 bg-brand-blue-light text-brand-blue">
											<Icon size={21} />
										</div>
										<div>
											<h3 className="font-display text-base font-bold text-brand-neutral-dark">{title}</h3>
											<p className="mt-2 text-sm leading-6 text-slate-500">{copy}</p>
										</div>
									</div>
								</article>
							))}
						</div>

						<div className="mt-5 border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-300/40">
							<div className="dark-tech-grid -m-5 mb-5 border-b border-white/10 p-5">
								<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/38">Core capabilities</p>
								<h3 className="mt-2 font-display text-lg font-extrabold">Strategy, infrastructure, and code under one roof.</h3>
							</div>
							<div className="grid grid-cols-2 gap-2">
								{SERVICES.map(({ icon: Icon, label }) => (
									<div key={label} className="flex items-center gap-3 border border-white/10 bg-white/[0.06] p-3">
										<Icon size={16} className="flex-shrink-0 text-brand-green" />
										<span className="text-xs font-bold text-white/76">{label}</span>
									</div>
								))}
							</div>
							<div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
								<div className="flex h-10 w-10 items-center justify-center bg-brand-green text-slate-950">
									<Handshake size={18} />
								</div>
								<div>
									<p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/38">Technology partners</p>
									<p className="mt-1 text-xs font-semibold text-white/68">Dell, HP, Cisco, ESET, SOPHOS, Microsoft, VMware, IBM</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom proof bar */}
				<div className="mt-10 border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div>
							<p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Trusted by</p>
							<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
								We work with various institutions across Liberia in sectors including healthcare,
								higher education, banking, government, and telecommunications.
							</p>
						</div>
						<div className="flex flex-wrap gap-2">
							{['Government', 'Banking', 'Healthcare', 'Education'].map((sector) => (
								<span key={sector} className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
									{sector}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
