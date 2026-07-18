import Image from 'next/image';
import { BookOpenCheck, CheckCircle2, CircleDollarSign, Monitor, PlugZap, Server, UsersRound, Wrench } from 'lucide-react';

const OPERATING_MODEL = [
	{
		icon: Server,
		title: 'Central server architecture',
		copy: 'One managed server powers multiple L300/M300 stations with centralized software, user policies, and updates.',
	},
	{
		icon: UsersRound,
		title: 'Instructor-led classes',
		copy: 'UTECHS deploys qualified instructors to teach, report attendance, assess students, and keep labs productive.',
	},
	{
		icon: Wrench,
		title: 'Maintenance included',
		copy: 'Preventive maintenance, troubleshooting, antivirus, software updates, and faulty equipment replacement are handled.',
	},
	{
		icon: BookOpenCheck,
		title: 'Career-ready curriculum',
		copy: 'Students learn keyboarding, MS Office, research, email, cybersecurity awareness, AI fundamentals, and digital citizenship.',
	},
];

const VALUE_POINTS = [
	{ value: '90%', label: 'Lower workstation power use', icon: PlugZap },
	{ value: '$20', label: 'Per student / semester', icon: CircleDollarSign },
	{ value: '30+', label: 'Stations from one server', icon: Monitor },
];

export default function DigitalLiteracy() {
	return (
		<section id="digital-literacy" className="section-padding relative overflow-hidden bg-slate-950 text-white" aria-label="Digital Literacy Program">
			<div className="absolute inset-0 dark-tech-grid opacity-30" />
			<div className="relative section-container">
				<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
					<div className="reveal-up">
						<div className="mb-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-green">
							<span className="h-px w-8 bg-brand-green" />
							Computer Lab as a Service
						</div>
						<h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
							A school computer lab that operates like a managed service.
						</h2>
						<p className="mt-5 max-w-2xl text-sm leading-7 text-white/62">
							UTECHS gives schools a complete digital literacy program: thin-client hardware, lab networking, optional internet, curriculum, instructors, maintenance, and a funding model that does not depend on heavy upfront capital.
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

					<div className="relative reveal-up">
						<div className="border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image
									src="/images/lab1.jpg"
									alt="UTECHS computer lab deployment"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 45vw, 100vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
								<div className="absolute bottom-4 left-4 right-4 border border-white/12 bg-slate-950/70 p-4 backdrop-blur-md">
									<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-green">Lab deployment</p>
									<p className="mt-1 text-sm font-semibold text-white">Hardware, curriculum, staffing, and support in one program.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 reveal-stagger">
					{OPERATING_MODEL.map(({ icon: Icon, title, copy }, index) => (
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

				<div className="mt-12 border border-white/10 bg-white/[0.04] p-5">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div>
							<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/36">Active school partners</p>
							<p className="mt-2 max-w-2xl text-sm leading-6 text-white/58">
								STARZ College, Grand Bassa University, Faith University, Rudolph Kwanue University, Upstairs Christian Academy, Bishop Marwieh High School, and more.
							</p>
						</div>
						<div className="flex flex-wrap gap-2">
							{['Assess', 'Deploy', 'Teach', 'Maintain'].map((step) => (
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
