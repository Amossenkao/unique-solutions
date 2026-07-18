import Image from 'next/image';
import { CheckCircle2, Cpu, HardDrive, PackageCheck, Router, Server, ShieldCheck, Truck } from 'lucide-react';

const EQUIPMENT_IMAGES = [
	'/images/stock2.jpg',
	'/images/stock3.jpg',
	'/images/stock4.jpg',
	'/images/stock5.jpg',
	'/images/stock6.jpg',
];

const CATEGORIES = [
	{
		icon: Cpu,
		title: 'Computers & Lab Workstations',
		copy: 'Dell and HP desktops, monitors, keyboards, accessories, and NComputing thin-client devices for offices, schools, and computer labs.',
	},
	{
		icon: Server,
		title: 'Servers & Storage',
		copy: 'HP, Dell, and Cisco server procurement for Windows Server, SQL, virtualization, shared services, and centralized lab environments.',
	},
	{
		icon: Router,
		title: 'Network Equipment',
		copy: 'Cisco switches, routers, wireless access points, firewalls, structured cabling materials, and supporting rack equipment.',
	},
	{
		icon: ShieldCheck,
		title: 'Licenses & Security Tools',
		copy: 'ESET endpoint security, SOPHOS firewall solutions, Windows Server, SQL licenses, antivirus deployment, and security support.',
	},
];

const PROOF = [
	'Desktop computer supply and endpoint security licensing for healthcare institutions.',
	'Server, firewall, and network equipment procurement for telecommunications providers.',
	'Core network switching infrastructure for financial institutions.',
	'Desktop computers, thin-client devices, and accessories supplied for university computer lab deployments.',
];

export default function EquipmentSales() {
	return (
		<section id="ict-equipment" className="section-padding relative overflow-hidden bg-white" aria-label="ICT Equipment Sales">
			<div className="absolute inset-0 tech-grid opacity-45" />
			<div className="relative section-container">
				<div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
					<div className="reveal-up">
						<div className="section-kicker mb-3">ICT Equipment Sales</div>
						<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
							Equipment sourced, configured, supported.
						</h2>
						<p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
							UTECHS supplies ICT equipment for offices, banks, government agencies, hospitals, universities, and schools. The work does not stop at delivery: equipment can be configured, licensed, tested, installed, and supported as part of a complete technology rollout.
						</p>

						<div className="mt-8 grid gap-3 sm:grid-cols-2">
							{CATEGORIES.map(({ icon: Icon, title, copy }) => (
								<article key={title} className="card p-5">
									<div className="mb-4 flex h-11 w-11 items-center justify-center border border-blue-100 bg-brand-blue-light text-brand-blue">
										<Icon size={21} />
									</div>
									<h3 className="font-display text-base font-bold text-brand-neutral-dark">{title}</h3>
									<p className="mt-3 text-sm leading-6 text-slate-500">{copy}</p>
								</article>
							))}
						</div>
					</div>

					<div className="reveal-up">
						<div className="grid grid-cols-2 gap-3">
							{EQUIPMENT_IMAGES.map((src, index) => (
								<div
									key={src}
									className={`relative overflow-hidden border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/60 ${
										index === 0 ? 'col-span-2 aspect-[16/8]' : 'aspect-[4/3]'
									}`}
								>
									<Image
										src={src}
										alt={`UTECHS ICT equipment inventory ${index + 1}`}
										fill
										className="object-cover"
										sizes="(min-width: 1024px) 45vw, 100vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-950/42 to-transparent" />
								</div>
							))}
						</div>

						<div className="mt-5 border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-200/70">
							<div className="mb-5 flex items-center gap-3">
								<div className="flex h-11 w-11 items-center justify-center bg-brand-green text-slate-950">
									<PackageCheck size={22} />
								</div>
								<div>
									<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/38">Supply process</p>
									<h3 className="font-display text-lg font-extrabold">Source. Prepare. Deliver. Support.</h3>
								</div>
							</div>
							<div className="grid gap-2 sm:grid-cols-3">
								{['Procurement', 'Configuration', 'Installation'].map((step) => (
									<div key={step} className="border border-white/10 bg-white/[0.06] p-3">
										<Truck size={15} className="mb-2 text-brand-green" />
										<p className="text-xs font-bold text-white/76">{step}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-10 border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60">
					<p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Procurement track record</p>
					<div className="mt-4 grid gap-3 md:grid-cols-2">
						{PROOF.map((item) => (
							<div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
								<CheckCircle2 size={17} className="mt-0.5 flex-shrink-0 text-brand-green" />
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
