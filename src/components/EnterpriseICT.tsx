import Image from 'next/image';
import { CheckCircle2, Network, Server, Shield, Sun, Wrench, ServerCog, Wifi } from 'lucide-react';

const SERVICES = [
	{
		icon: Network,
		title: 'LAN/WAN infrastructure',
		copy: 'Structured cabling, switches, routers, Wi-Fi, VLANs, and commissioning to ANSI/TIA/EIA-568 and IEEE 802.3 standards.',
	},
	{
		icon: Server,
		title: 'Servers & virtualization',
		copy: 'HP, Dell, Cisco server deployment, VMware virtualization, Windows Server, SQL licensing, and lifecycle support.',
	},
	{
		icon: Shield,
		title: 'Cybersecurity & managed support',
		copy: 'ESET endpoint protection, SOPHOS firewalls, security advisory, monitoring, patching, and equipment maintenance.',
	},
	{
		icon: Sun,
		title: 'Solar & power continuity',
		copy: 'Hybrid solar installations, battery banks, inverters, and protected power designs for mission-critical facilities.',
	},
];

const VALUE_POINTS = [
	{ value: '400+', label: 'Network points delivered', icon: Wifi },
	{ value: '10+', label: 'Enterprise clients', icon: ServerCog },
	{ value: '24h', label: 'Inquiry response target', icon: Wrench },
];

export default function EnterpriseICT() {
	return (
		<section id="enterprise-ict" className="section-padding relative overflow-hidden bg-slate-950 text-white" aria-label="Enterprise ICT Solutions">
			<div className="absolute inset-0 dark-tech-grid opacity-30" />
			<div className="relative section-container">
				<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
					{/* LEFT: Copy + Value stats */}
					<div className="reveal-up">
						<div className="mb-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-green">
							<span className="h-px w-8 bg-brand-green" />
							Enterprise ICT Solutions
						</div>
						<h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
							Infrastructure that powers Liberia&apos;s leading institutions.
						</h2>
						<p className="mt-5 max-w-2xl text-sm leading-7 text-white/62">
							From LAN/WAN networks and server rooms to cybersecurity and solar power,
							UTECHS designs, deploys, and maintains the technology backbone that organizations
							depend on every day.
						</p>

						<div className="mt-8 grid gap-3 sm:grid-cols-3">
							{VALUE_POINTS.map(({ value, label, icon: Icon }) => (
								<div key={label} className="border border-white/10 bg-white/[0.06] p-4">
									<Icon size={18} className="mb-3 text-brand-green" />
									<div className="font-display text-3xl font-extrabold text-white">{value}</div>
									<div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/42">{label}</div>
								</div>
							))}
						</div>
					</div>

					{/* RIGHT: Image with overlay */}
					<div className="relative reveal-up">
						<div className="border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image src="/images/hero/enterprise.jpg" alt="UTECHS enterprise ICT infrastructure deployment" fill
									className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
								<div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
								<div className="absolute bottom-4 left-4 right-4 border border-white/12 bg-slate-950/70 p-4 backdrop-blur-md">
									<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-green">Infrastructure delivery</p>
									<p className="mt-1 text-sm font-semibold text-white">Design, deploy, secure, and support — end to end.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Service cards */}
				<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 reveal-stagger">
					{SERVICES.map(({ icon: Icon, title, copy }, index) => (
						<article key={title} className="border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
							<div className="mb-5 flex items-center justify-between">
								<div className="flex h-11 w-11 items-center justify-center bg-brand-green text-slate-950">
									<Icon size={21} />
								</div>
								<span className="font-mono text-xs text-white/28">0{index + 1}</span>
							</div>
							<h3 className="font-display text-base font-bold text-white">{title}</h3>
							<p className="mt-3 text-sm leading-6 text-white/52">{copy}</p>
						</article>
					))}
				</div>

				{/* Client proof bar */}
				<div className="mt-12 border border-white/10 bg-white/[0.04] p-5">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div>
							<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/36">Enterprise clients</p>
							<p className="mt-2 max-w-2xl text-sm leading-6 text-white/58">
								JFK Hospital, National Port Authority, Liberia Revenue Authority,
								Afriland First Bank, LIBTELCO, National Oil Company of Liberia, Central Bank of Liberia, and more.
							</p>
						</div>
						<div className="flex flex-wrap gap-2">
							{['Assess', 'Design', 'Deploy', 'Support'].map((step) => (
								<span key={step} className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-wide text-white/68">
									<CheckCircle2 size={13} className="text-brand-green" />
									{step}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
