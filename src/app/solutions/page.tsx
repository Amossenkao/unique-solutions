import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
	ArrowRight,
	Boxes,
	BookOpen,
	Fingerprint,
	GraduationCap,
	Monitor,
	Server,
	Shield,
	Settings,
	CheckCircle2,
} from "lucide-react";

const DIGITAL_LITERACY_FEATURES = [
	{ title: "Lab Design & Infrastructure", copy: "Complete computer laboratory design, supply, installation, and commissioning using thin-client or traditional workstation architectures optimized for educational environments." },
	{ title: "Structured Curriculum", copy: "Comprehensive digital literacy curriculum covering keyboarding, productivity applications, internet research, digital communication, cybersecurity awareness, AI fundamentals, and digital citizenship." },
	{ title: "Qualified Instructors", copy: "Deployment of trained and certified IT instructors to manage daily classes, track student progress, and ensure effective knowledge transfer." },
	{ title: "Ongoing Maintenance", copy: "Preventive maintenance, troubleshooting, antivirus management, software updates, and equipment replacement to ensure uninterrupted lab operations." },
	{ title: "Assessment & Reporting", copy: "Regular student assessments, attendance tracking, progress reporting, and program evaluation to measure learning outcomes." },
	{ title: "Capacity Building", copy: "Teacher training programs and institutional capacity building to ensure long-term sustainability of digital literacy initiatives." },
];

const SCHOOL_MGMT_FEATURES = [
	{ title: "Student Information Management", copy: "Centralized student records, enrollment processing, admission tracking, and comprehensive student profile management." },
	{ title: "Academic Management", copy: "Course scheduling, timetable generation, attendance tracking, grade management, and academic performance analytics." },
	{ title: "Financial Management", copy: "Fee structure configuration, automated billing, payment tracking, receipt generation, and financial reporting." },
	{ title: "Communication Portal", copy: "Parent-teacher communication, student notifications, announcement broadcasting, and real-time messaging capabilities." },
	{ title: "Reporting & Analytics", copy: "Comprehensive dashboards, customizable reports, academic analytics, and institutional performance metrics." },
	{ title: "Cloud Deployment", copy: "Secure cloud-hosted or on-premise deployment options with data backup, disaster recovery, and 24/7 technical support." },
];

const BIOMETRIC_FEATURES = [
	{ title: "Fingerprint Recognition", copy: "High-accuracy fingerprint scanning and matching systems for quick and reliable identity verification at access points." },
	{ title: "Facial Recognition", copy: "Advanced facial recognition technology for contactless, hygienic, and fast identity verification in high-traffic environments." },
	{ title: "Access Control Systems", copy: "Integration with door controllers, turnstiles, gates, and locks to provide comprehensive physical access management." },
	{ title: "Time & Attendance", copy: "Automated employee check-in/check-out tracking, shift management, overtime calculation, and attendance reporting." },
	{ title: "Identity Management", copy: "Centralized identity lifecycle management including enrollment, credentialing, role-based access policies, and de-provisioning." },
	{ title: "Integration & Analytics", copy: "Integration with HR systems, ERP platforms, and security information systems with real-time monitoring and audit trails." },
];

const ERP_FEATURES = [
	{ title: "Financial Management", copy: "General ledger, accounts payable/receivable, budgeting, financial reporting, and multi-currency support for complete financial visibility." },
	{ title: "Human Resources", copy: "Employee management, payroll processing, benefits administration, performance evaluation, and workforce planning." },
	{ title: "Supply Chain & Procurement", copy: "Purchase order management, vendor management, inventory control, warehouse management, and logistics tracking." },
	{ title: "Sales & CRM", copy: "Customer relationship management, sales pipeline tracking, order processing, invoicing, and customer analytics." },
	{ title: "Business Intelligence", copy: "Real-time dashboards, customizable reports, data visualization, and predictive analytics for informed decision-making." },
	{ title: "Customization & Integration", copy: "Tailored module configuration, API integrations with existing systems, data migration, and user training programs." },
];

export default function SolutionsPage() {
	return (
		<>
			<ScrollReveal />
			<Header />

			<main>
				{/* Hero */}
				<section className="relative mt-[72px] overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
					<div className="absolute inset-0 dark-tech-grid opacity-30" />
					<div className="absolute inset-0 bg-gradient-to-br from-[#062416] via-[#4C8317]/35 to-[#07111f]" />
					<div className="relative section-container">
						<div className="mx-auto max-w-3xl text-center">
							<div className="mb-4 inline-flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
								<Boxes size={15} className="text-brand-green" />
								Technology Solutions
							</div>
							<h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
								Purpose-built
								<span className="text-brand-green"> solutions</span>.
							</h1>
							<p className="mt-5 text-base leading-7 text-white/62 sm:text-lg">
								Specialized platforms and systems designed for education, enterprise, and institutional needs across Liberia.
							</p>
						</div>
					</div>
				</section>

				{/* Digital Literacy Training */}
				<section id="digital-literacy-training" className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
							<div className="reveal-up sticky top-24">
								<div className="mb-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-blue">
									<span className="h-px w-8 bg-brand-blue" />
									Digital Literacy Training
								</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									Empowering the next generation with digital skills.
								</h2>
								<p className="mt-5 text-sm leading-7 text-slate-500">
									Our Integration of Digital Literacy Training and Infrastructure solution provides a comprehensive approach to equipping educational institutions with the technology and skills needed for the digital age. We combine the establishment of modern computer laboratories with structured digital literacy curricula and qualified instruction to ensure students develop essential technology competencies.
								</p>
								<div className="mt-6 flex flex-wrap gap-2">
									{["NComputing", "Thin-Client", "Curriculum", "Instructors"].map((tag) => (
										<span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">{tag}</span>
									))}
								</div>
								<div className="mt-8">
									<Link href="/contact" className="btn-primary">
										Request a Consultation
										<ArrowRight size={15} />
									</Link>
								</div>
							</div>

							<div className="space-y-4 reveal-stagger">
								{DIGITAL_LITERACY_FEATURES.map(({ title, copy }) => (
									<article key={title} className="card p-5">
										<div className="flex items-start gap-4">
											<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-blue-100 bg-brand-blue-light text-brand-blue">
												<CheckCircle2 size={18} />
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
				</section>

				{/* School Management System */}
				<section id="school-management" className="section-padding relative overflow-hidden bg-slate-50">
					<div className="absolute inset-0 tech-grid opacity-60" />
					<div className="relative section-container">
						<div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
							<div className="reveal-up sticky top-24">
								<div className="mb-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-blue">
									<span className="h-px w-8 bg-brand-blue" />
									School Management System
								</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									Streamline school operations with smart technology.
								</h2>
								<p className="mt-5 text-sm leading-7 text-slate-500">
									UNIQUE designs and deploys comprehensive School Management Systems (SMS) that automate and optimize administrative, academic, and financial operations for educational institutions. Our platforms provide centralized management of student records, enrollment, attendance, grading, scheduling, fee collection, and reporting, enabling institutions to operate more efficiently and make data-driven decisions.
								</p>
								<div className="mt-6 flex flex-wrap gap-2">
									{["Cloud-based", "Student Records", "Analytics", "Mobile"].map((tag) => (
										<span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">{tag}</span>
									))}
								</div>
								<div className="mt-8">
									<Link href="/contact" className="btn-primary">
										Request a Consultation
										<ArrowRight size={15} />
									</Link>
								</div>
							</div>

							<div className="space-y-4 reveal-stagger">
								{SCHOOL_MGMT_FEATURES.map(({ title, copy }) => (
									<article key={title} className="card p-5">
										<div className="flex items-start gap-4">
											<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-blue-100 bg-brand-blue-light text-brand-blue">
												<CheckCircle2 size={18} />
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
				</section>

				{/* Biometric Access Control */}
				<section id="biometric-access" className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
							<div className="reveal-up sticky top-24">
								<div className="mb-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-blue">
									<span className="h-px w-8 bg-brand-blue" />
									Biometric Access Control
								</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									Secure identity management for the modern enterprise.
								</h2>
								<p className="mt-5 text-sm leading-7 text-slate-500">
									UNIQUE delivers advanced Biometric Access Control and Identity Management solutions that provide organizations with robust, reliable, and scalable security for physical and logical access. Leveraging leading biometric technologies from partners like Suprema, we deploy systems that ensure only authorized personnel can access secured areas, critical systems, and sensitive data.
								</p>
								<div className="mt-6 flex flex-wrap gap-2">
									{["Suprema", "Fingerprint", "Facial Recognition", "Attendance"].map((tag) => (
										<span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">{tag}</span>
									))}
								</div>
								<div className="mt-8">
									<Link href="/contact" className="btn-primary">
										Request a Consultation
										<ArrowRight size={15} />
									</Link>
								</div>
							</div>

							<div className="space-y-4 reveal-stagger">
								{BIOMETRIC_FEATURES.map(({ title, copy }) => (
									<article key={title} className="card p-5">
										<div className="flex items-start gap-4">
											<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-blue-100 bg-brand-blue-light text-brand-blue">
												<CheckCircle2 size={18} />
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
				</section>

				{/* Enterprise Resource Planning */}
				<section id="erp" className="section-padding relative overflow-hidden bg-slate-50">
					<div className="absolute inset-0 tech-grid opacity-60" />
					<div className="relative section-container">
						<div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
							<div className="reveal-up sticky top-24">
								<div className="mb-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-blue">
									<span className="h-px w-8 bg-brand-blue" />
									Enterprise Resource Planning
								</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									Unified business operations on one platform.
								</h2>
								<p className="mt-5 text-sm leading-7 text-slate-500">
									UNIQUE designs, deploys, and supports Enterprise Resource Planning (ERP) solutions that integrate core business processes\u2014including finance, human resources, procurement, inventory, sales, and operations\u2014into a unified, data-driven platform. Our ERP implementations help organizations streamline workflows, reduce operational silos, improve decision-making, and achieve greater efficiency across all departments.
								</p>
								<div className="mt-6 flex flex-wrap gap-2">
									{["Finance", "HR", "Procurement", "Analytics"].map((tag) => (
										<span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">{tag}</span>
									))}
								</div>
								<div className="mt-8">
									<Link href="/contact" className="btn-primary">
										Request a Consultation
										<ArrowRight size={15} />
									</Link>
								</div>
							</div>

							<div className="space-y-4 reveal-stagger">
								{ERP_FEATURES.map(({ title, copy }) => (
									<article key={title} className="card p-5">
										<div className="flex items-start gap-4">
											<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-blue-100 bg-brand-blue-light text-brand-blue">
												<CheckCircle2 size={18} />
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
				</section>

				{/* CTA */}
				<section className="section-padding relative overflow-hidden bg-slate-950 text-white">
					<div className="absolute inset-0 dark-tech-grid opacity-30" />
					<div className="relative section-container text-center">
						<div className="mx-auto max-w-3xl">
							<h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
								Ready to implement a
								<span className="text-brand-green"> solution</span>?
							</h2>
							<p className="mt-5 text-base leading-7 text-white/62">
								Let us help you choose the right technology solution for your institution. Our team is ready to consult, design, deploy, and support.
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
								<Link
									href="/contact"
									className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-brand-blue-dark shadow-2xl shadow-black/25 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-green hover:text-white"
								>
									Get Started
									<ArrowRight size={17} />
								</Link>
								<Link
									href="/services"
									className="group inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 bg-white/[0.08] px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.16]"
								>
									View Services
									<ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
