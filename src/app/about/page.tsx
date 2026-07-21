import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
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
	Award,
	Eye,
	Clock,
	Star,
} from "lucide-react";

export const metadata: Metadata = {
	title: "About Us — UNIQUE Technology Solutions | Liberia",
	description:
		"Learn about UNIQUE Technology Solutions (UNIQUE), a proudly Liberian-owned ICT consulting and systems integration firm headquartered in Monrovia, Liberia.",
};

const VALUES = [
	{
		icon: Target,
		title: "Mission",
		copy: "We empower organizations to lead with confidence in the digital era by delivering innovative, secure, and transformative technology solutions that accelerate growth, optimize operations, and create lasting competitive advantage.",
	},
	{
		icon: Eye,
		title: "Vision",
		copy: "To become one of Liberia's leading providers of innovative, secure, and transformative technology solutions, recognized for delivering excellence, driving digital innovation, and creating lasting value for our clients. We aspire to empower governments, businesses, and communities to achieve digital excellence, sustainable growth, and a more connected, technology-driven future.",
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		copy: "From thin-client labs to cloud infrastructure, we bring modern, practical technology to organizations that need results, not just products.",
	},
	{
		icon: HeartHandshake,
		title: "Partnership",
		copy: "We build long-term relationships with institutions, schools, and government agencies across Liberia, treating every project as a shared commitment.",
	},
];

const CORE_VALUES = [
	{ icon: Star, title: "Excellence", copy: "We uphold the highest standards in every engagement, delivering quality solutions that exceed expectations." },
	{ icon: Lightbulb, title: "Innovation", copy: "We embrace emerging technologies and creative approaches to solve complex challenges." },
	{ icon: ShieldCheck, title: "Integrity", copy: "We conduct business with transparency, honesty, and ethical responsibility." },
	{ icon: HeartHandshake, title: "Customer Satisfaction", copy: "Our clients are at the center of everything we do. Their success is our success." },
];

const SERVICES = [
	{ icon: Globe2, label: "Web & Software Development" },
	{ icon: ShieldCheck, label: "Cybersecurity Advisory" },
	{ icon: Building2, label: "Network Infrastructure" },
	{ icon: UsersRound, label: "Digital Literacy Programs" },
];

const STATS = [
	{ value: "2021", label: "Established" },
	{ value: "2014", label: "Programs since" },
	{ value: "12+", label: "Institutional partners" },
	{ value: "6", label: "Service verticals" },
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

export default function AboutPage() {
	return (
		<>
			<ScrollReveal />
			<Header />

			<main>
				{/* Hero */}
				<section className="relative mt-[72px] overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
					<div className="absolute inset-0 dark-tech-grid opacity-30" />
					<div className="absolute inset-0 bg-gradient-to-br from-[#061B3A] via-[#0A4B93]/40 to-[#07111f]" />
					<div className="relative section-container">
						<div className="mx-auto max-w-3xl text-center">
							<div className="mb-4 inline-flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
								<Building2 size={15} className="text-brand-green" />
								About UNIQUE
							</div>
							<h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
								Built for real-world
								<span className="text-brand-green"> impact</span>.
							</h1>
							<p className="mt-5 text-base leading-7 text-white/62 sm:text-lg">
								A proudly Liberian-owned ICT consulting and systems integration firm delivering innovative, secure, and scalable technology solutions.
							</p>
						</div>
					</div>
				</section>

				{/* Who We Are */}
				<section className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
							<div className="reveal-up">
								<div className="section-kicker mb-3">Who We Are</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									Pioneering digital transformation in Liberia.
								</h2>
								<p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
									Unique Technology Solutions (UNIQUE) is a proudly Liberian-owned Information and Communication Technology (ICT) consulting and systems integration firm specializing in the delivery of innovative, secure, and scalable technology solutions that enable organizations to achieve their strategic objectives and maximize the value of their technology investments.
								</p>
								<p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
									Our team of highly skilled professionals brings extensive expertise in Software Development, Enterprise Systems Integration, Cybersecurity, Network Design and Deployment, Cloud Infrastructure, Server and End-User Virtualization, Data Warehousing, ICT Equipment Supply, Technology Integration, Managed IT Services, and Human Capacity Development.
								</p>
								<p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
									Leveraging global best practices and industry standards, we deliver reliable, future-ready solutions that drive digital transformation, operational efficiency, and sustainable growth across both public and private sector organizations.
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
							</div>
						</div>
					</div>
				</section>

				{/* Core Values */}
				<section className="section-padding relative overflow-hidden bg-slate-50">
					<div className="absolute inset-0 tech-grid opacity-60" />
					<div className="relative section-container">
						<div className="mb-10 text-center">
							<div className="section-kicker mb-3 justify-center">Core Values</div>
							<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl">
								What drives us.
							</h2>
						</div>

						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 reveal-stagger">
							{CORE_VALUES.map(({ icon: Icon, title, copy }) => (
								<article key={title} className="border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
									<div className="mb-4 flex h-11 w-11 items-center justify-center bg-brand-blue-light text-brand-blue">
										<Icon size={20} />
									</div>
									<h3 className="font-display text-base font-bold text-brand-neutral-dark">{title}</h3>
									<p className="mt-2 text-xs leading-5 text-slate-500">{copy}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* School Partnership Program */}
				<section className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
							<div className="reveal-up">
								<div className="section-kicker mb-3">Flagship Program</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									School Partnership Program.
								</h2>
								<p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
									Through our flagship School Partnership Program, UNIQUE provides end-to-end ICT solutions for educational institutions, including the design, supply, installation, maintenance, and lifecycle management of modern computer laboratories, complemented by structured digital literacy and capacity-building programs.
								</p>
								<p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
									Our proven track record spans successful ICT equipment supply and technology implementation for government institutions, financial institutions, educational organizations, healthcare facilities, and leading private sector enterprises.
								</p>
								<p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
									Guided by a commitment to excellence, innovation, integrity, and customer satisfaction, UNIQUE continues to build lasting partnerships by delivering high-quality, cost-effective technology solutions that empower institutions to thrive in an increasingly digital world.
								</p>
							</div>

							<div className="reveal-up">
								<div className="border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300/40">
									<div className="dark-tech-grid -m-6 mb-6 border-b border-white/10 p-6">
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
					</div>
				</section>

				{/* Leadership - Coming Soon */}
				<section className="section-padding relative overflow-hidden bg-slate-950 text-white">
					<div className="absolute inset-0 dark-tech-grid opacity-30" />
					<div className="relative section-container text-center">
						<div className="mx-auto max-w-2xl">
							<div className="mb-4 inline-flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
								<UsersRound size={15} className="text-brand-green" />
								Leadership
							</div>
							<h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
								Meet our <span className="text-brand-green">leadership</span> team.
							</h2>
							<p className="mt-5 text-base leading-7 text-white/62">
								Our leadership team brings decades of combined experience in technology, business strategy, and organizational development. Leadership profiles coming soon.
							</p>
							<div className="mt-8 inline-flex items-center gap-3 border border-white/10 bg-white/[0.06] px-6 py-4">
								<Clock size={18} className="text-brand-green" />
								<span className="text-sm font-bold text-white/78">Coming Soon</span>
							</div>
						</div>
					</div>
				</section>

				{/* Strategic Global Partnership */}
				<section className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="mb-10 text-center">
							<div className="section-kicker mb-3 justify-center">Strategic Partnerships</div>
							<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
								Global technology partners.
							</h2>
							<p className="mt-4 max-w-3xl mx-auto text-sm leading-7 text-slate-500">
								At UNIQUE, we recognize that delivering world-class technology solutions requires collaboration with globally recognized industry leaders. We have established strategic partnerships and business relationships with leading technology manufacturers and solution providers.
							</p>
						</div>

						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 reveal-stagger">
							{PARTNERS.map(({ name, category }) => (
								<article
									key={name}
									className="border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-slate-200/70"
								>
									<div className="mb-3 font-display text-2xl font-extrabold text-brand-neutral-dark">{name}</div>
									<div className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{category}</div>
								</article>
							))}
						</div>

						<div className="mt-10 border border-slate-200 bg-slate-50 p-6 text-center">
							<p className="text-sm leading-7 text-slate-500">
								These partnerships enable us to provide genuine, enterprise-grade hardware and software solutions backed by manufacturer best practices, technical expertise, and industry-leading support. By leveraging these strategic alliances, UNIQUE delivers cutting-edge networking, cybersecurity, virtualization, cloud, endpoint computing, identity and access management, and digital infrastructure solutions that meet the highest standards of quality, reliability, security, and performance.
							</p>
						</div>
					</div>
				</section>

				{/* Trusted By */}
				<section className="section-padding relative overflow-hidden bg-slate-50">
					<div className="absolute inset-0 tech-grid opacity-60" />
					<div className="relative section-container">
						<div className="border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60">
							<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
								<div>
									<p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Trusted by</p>
									<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
										We work with various institutions across Liberia in sectors including healthcare,
										higher education, banking, government, and telecommunications.
									</p>
								</div>
								<div className="flex flex-wrap gap-2">
									{["Government", "Banking", "Healthcare", "Education"].map((sector) => (
										<span key={sector} className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
											{sector}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
