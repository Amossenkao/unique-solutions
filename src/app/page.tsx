"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PartnerBanner from "@/components/PartnerBanner";
import ServicesTabs from "@/components/ServicesTabs";
import Footer from "@/components/Footer";
import PartnerModal from "@/components/PartnerModal";
import ScrollReveal from "@/components/ScrollReveal";
import {
	ArrowRight,
	Boxes,
	Code2,
	GraduationCap,
	Monitor,
	Network,
	PackageCheck,
	Shield,
} from "lucide-react";

const SERVICE_HIGHLIGHTS = [
	{
		icon: Code2,
		title: "Software Development",
		description:
			"Web and mobile applications, database design, and website development tailored to your business needs.",
		href: "/services#software-development",
	},
	{
		icon: Monitor,
		title: "Computer Lab as a Service",
		description:
			"End-to-end ICT solutions for educational institutions with thin-client labs, instructors, and curriculum.",
		href: "/services#computer-lab",
	},
	{
		icon: PackageCheck,
		title: "ICT Equipment Supply",
		description:
			"Enterprise-grade hardware and licensed software from leading global technology partners.",
		href: "/services#ict-equipment",
	},
	{
		icon: Network,
		title: "Network Infrastructure",
		description:
			"LAN, MAN/WAN, enterprise wireless, datacenter design, and managed infrastructure solutions.",
		href: "/services#network-infrastructure",
	},
	{
		icon: Shield,
		title: "Cybersecurity & Cloud",
		description:
			"Security assessments, endpoint protection, cloud migration, and managed security services.",
		href: "/services#cybersecurity",
	},
	{
		icon: Boxes,
		title: "Technology Solutions",
		description:
			"School management systems, biometric access control, ERP, and digital literacy training.",
		href: "/solutions",
	},
];

const SOLUTION_HIGHLIGHTS = [
	{
		icon: GraduationCap,
		title: "Digital Literacy Training",
		description:
			"Structured digital literacy programs for schools and institutions across Liberia.",
		href: "/solutions#digital-literacy-training",
	},
	{
		icon: Monitor,
		title: "School Management System",
		description:
			"Comprehensive school administration and student management platforms.",
		href: "/solutions#school-management",
	},
	{
		icon: Shield,
		title: "Biometric Access Control",
		description:
			"Identity management and biometric security solutions for enterprises.",
		href: "/solutions#biometric-access",
	},
	{
		icon: Boxes,
		title: "Enterprise Resource Planning",
		description:
			"Integrated ERP systems for streamlined business operations.",
		href: "/solutions#erp",
	},
];

export default function Home() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<ScrollReveal />
			<Header onOpenModal={() => setModalOpen(true)} />

			<main>
				<Hero onOpenModal={() => setModalOpen(true)} />
				<About />
				<PartnerBanner />
				<ServicesTabs />

				{/* Service Highlights */}
				<section className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="mb-10 text-center">
							<div className="section-kicker mb-3 justify-center">What We Do</div>
							<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
								Comprehensive technology solutions.
							</h2>
							<p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-slate-500">
								From software development to cybersecurity, we deliver end-to-end IT solutions that drive digital transformation across Liberia.
							</p>
						</div>

						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 reveal-stagger">
							{SERVICE_HIGHLIGHTS.map(({ icon: Icon, title, description, href }) => (
								<Link
									key={title}
									href={href}
									className="card group p-6"
								>
									<div className="mb-4 flex h-12 w-12 items-center justify-center border border-blue-100 bg-brand-blue-light text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
										<Icon size={22} />
									</div>
									<h3 className="font-display text-lg font-bold text-brand-neutral-dark">{title}</h3>
									<p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
									<div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:gap-2.5 transition-all">
										Learn more <ArrowRight size={14} />
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Solution Highlights */}
				<section className="section-padding relative overflow-hidden bg-slate-50">
					<div className="absolute inset-0 tech-grid opacity-60" />
					<div className="relative section-container">
						<div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
							<div className="reveal-up">
								<div className="section-kicker mb-3">Technology Solutions</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									Purpose-built solutions.
								</h2>
								<p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
									Specialized platforms and systems designed for education, enterprise, and institutional needs.
								</p>
							</div>
							<Link
								href="/solutions"
								className="btn-primary self-start"
							>
								View All Solutions
								<ArrowRight size={15} />
							</Link>
						</div>

						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 reveal-stagger">
							{SOLUTION_HIGHLIGHTS.map(({ icon: Icon, title, description, href }) => (
								<Link
									key={title}
									href={href}
									className="border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-slate-200/70"
								>
									<div className="mb-4 flex h-11 w-11 items-center justify-center bg-brand-blue-light text-brand-blue">
										<Icon size={20} />
									</div>
									<h3 className="font-display text-base font-bold text-brand-neutral-dark">{title}</h3>
									<p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="section-padding relative overflow-hidden bg-slate-950 text-white">
					<div className="absolute inset-0 dark-tech-grid opacity-30" />
					<div className="relative section-container text-center">
						<div className="mx-auto max-w-3xl">
							<div className="section-kicker mb-3 justify-center">
								<span className="text-brand-green before:hidden">Get Started</span>
							</div>
							<h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
								Ready to transform your
								<span className="text-brand-green"> technology</span>?
							</h2>
							<p className="mt-5 text-base leading-7 text-white/62">
								Whether you need a modern website, secure infrastructure, managed computer labs, or enterprise equipment, UTECHS is your trusted partner in Liberia.
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
								<Link
									href="/contact"
									className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-brand-blue-dark shadow-2xl shadow-black/25 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-green hover:text-white"
								>
									Start a Project
									<ArrowRight size={17} />
								</Link>
								<Link
									href="/services"
									className="group inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 bg-white/[0.08] px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.16]"
								>
									Explore Services
									<ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />

			<PartnerModal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
			/>
		</>
	);
}
