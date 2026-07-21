import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
	ArrowRight,
	ArrowUpRight,
	BookOpen,
	Boxes,
	Cloud,
	Code2,
	Database,
	Globe2,
	Mail,
	Monitor,
	Network,
	PackageCheck,
	PenTool,
	Server,
	Shield,
	ShoppingCart,
	Truck,
	ServerCog,
	Wifi,
	Settings,
	FileText,
	UsersRound,
} from "lucide-react";

const SOFTWARE_SERVICES = [
	{
		icon: Globe2,
		title: "Web and Mobile Application Development",
		copy: "Unique Technology Solutions (UNIQUE) designs, develops, and deploys secure, scalable, and user-centric web and mobile applications that enable organizations to streamline operations, enhance service delivery, and accelerate digital transformation. Leveraging modern development frameworks, industry best practices, and agile methodologies, we build customized enterprise solutions\u2014including business management systems, e-government platforms, customer portals, e-commerce applications, and Android and iOS mobile applications\u2014tailored to meet each client's unique business requirements. Our end-to-end development approach encompasses business analysis, user experience (UX/UI) design, application development, system integration, testing, deployment, and ongoing maintenance, ensuring high-performance, reliable, and future-ready digital solutions that drive efficiency, innovation, and sustainable business growth.",
		tags: ["Next.js", "React", "Node.js", ".NET", "Python"],
	},
	{
		icon: Database,
		title: "Database Design and Management",
		copy: "Unique Technology Solutions (UNIQUE) provides comprehensive database design, implementation, optimization, and management services that ensure organizational data remains secure, accurate, accessible, and highly available. We design scalable, high-performance database solutions tailored to support mission-critical applications, business intelligence, and enterprise operations using industry-leading database technologies. Our expertise includes database architecture, data modeling, migration, performance tuning, backup and disaster recovery, security implementation, replication, and ongoing administration. By applying industry best practices and robust data governance principles, we enable organizations to maximize the value of their data, improve operational efficiency, support informed decision-making, and maintain business continuity in an increasingly data-driven environment.",
		tags: ["SQL", "PostgreSQL", "Migration", "Backup"],
	},
	{
		icon: PenTool,
		title: "Website Development",
		copy: "Unique Technology Solutions (UNIQUE) delivers professional, responsive, and high-performance website development services that strengthen brand visibility, enhance customer engagement, and establish a powerful digital presence. We design and develop modern, secure, and user-friendly websites tailored to the unique needs of businesses, government institutions, educational organizations, and non-profit entities. Our expertise spans corporate websites, e-commerce platforms, institutional portals, content management systems (CMS), and custom web solutions, all optimized for performance, security, mobile responsiveness, and search engine visibility. From concept and design to development, deployment, hosting, and ongoing maintenance, we provide end-to-end website solutions that combine exceptional user experience with cutting-edge technology to support organizational growth and digital transformation.",
		tags: ["CMS", "E-commerce", "SEO", "Responsive"],
	},
];

const NETWORK_SERVICES = [
	{
		icon: Network,
		title: "Local Area Network (LAN)",
		copy: "Unique Technology Solutions (UNIQUE) specializes in the design, deployment, and optimization of secure, scalable, and high-performance Local Area Network (LAN) infrastructures that provide reliable connectivity and support mission-critical business operations. Our end-to-end networking services include structured cabling, fiber optic backbone installation, enterprise switching and routing, wireless network deployment, network segmentation, security implementation, performance optimization, and ongoing maintenance. Leveraging industry-leading technologies and globally recognized best practices, we develop resilient network infrastructures that ensure seamless communication, secure data transmission, high availability, and efficient resource sharing.",
		tags: ["Cisco", "Cat6/Cat6a", "Fiber Optic", "VLANs"],
	},
	{
		icon: Globe2,
		title: "Metropolitan and Wide Area Network (MAN/WAN)",
		copy: "UNIQUE delivers comprehensive Metropolitan Area Network (MAN) and Wide Area Network (WAN) solutions that securely connect geographically dispersed offices, branches, campuses, and remote users into a unified, high-performance enterprise network. Our expertise includes network architecture and design, fiber optic and leased-line connectivity, SD-WAN deployment, VPN implementation, MPLS integration, inter-site routing, network security, redundancy, bandwidth optimization, and continuous monitoring.",
		tags: ["SD-WAN", "VPN", "MPLS", "Fiber"],
	},
	{
		icon: Wifi,
		title: "Enterprise Wireless Solution",
		copy: "UNIQUE designs, deploys, and manages secure, high-performance enterprise wireless networks that provide seamless, reliable, and scalable connectivity for organizations of all sizes. Our wireless solutions encompass comprehensive site surveys, wireless network planning, indoor and outdoor Wi-Fi deployment, controller-based and cloud-managed wireless architectures, seamless roaming, guest access, network segmentation, security implementation, and ongoing performance optimization.",
		tags: ["Wi-Fi 6", "Cloud-managed", "Roaming", "Site Surveys"],
	},
	{
		icon: Server,
		title: "Datacenter Design and Implementation",
		copy: "UNIQUE provides end-to-end data center design, implementation, and modernization services that deliver secure, resilient, and high-performance ICT infrastructure for mission-critical operations. Our expertise encompasses data center architecture, server and storage deployment, virtualization, power and cooling systems, structured cabling, network infrastructure, rack and cabinet installation, disaster recovery planning, and physical and environmental security.",
		tags: ["Rack Design", "Cooling", "DR Planning", "Virtualization"],
	},
	{
		icon: ServerCog,
		title: "Managed Infrastructure",
		copy: "UNIQUE provides ongoing managed infrastructure services to ensure continuous operation, optimal performance, and proactive maintenance of your technology systems. Our managed services include monitoring, patching, troubleshooting, and performance optimization.",
		tags: ["Monitoring", "Maintenance", "24/7 Support", "Patch Management"],
	},
];

const CYBERSECURITY_SERVICES = [
	{
		icon: Shield,
		title: "Cybersecurity Solutions",
		copy: "UNIQUE delivers comprehensive cybersecurity solutions that safeguard critical digital assets while enabling organizations to innovate with confidence in a rapidly evolving technology landscape. Our cybersecurity services include security assessments, vulnerability management, firewall deployment, endpoint protection, identity and access management, security monitoring, incident response, and regulatory compliance, ensuring robust protection against emerging cyber threats.",
		tags: ["ESET", "SOPHOS", "Firewalls", "Endpoint Protection"],
	},
	{
		icon: Cloud,
		title: "Cloud Computing",
		copy: "Complementing our cybersecurity capabilities, we design, deploy, and manage secure cloud infrastructures, cloud migration, hybrid and multi-cloud environments, backup and disaster recovery solutions, and cloud-based collaboration platforms. By combining advanced security practices with scalable cloud technologies, UNIQUE empowers organizations to enhance resilience, improve operational efficiency, reduce infrastructure costs, and accelerate their digital transformation journey.",
		tags: ["Cloud Migration", "Hybrid Cloud", "Backup & DR", "SaaS"],
	},
];

const POLICY_ITEMS = [
	"ICT Strategy and Digital Transformation Roadmaps",
	"ICT Governance Frameworks",
	"Enterprise Architecture Frameworks",
	"Cybersecurity Policies and Standards",
	"Information Security Policies",
	"Data Governance and Data Protection Policies",
	"Acceptable Use Policies (AUP)",
	"ICT Infrastructure and Network Policies",
	"Cloud Computing Strategy and Governance Frameworks",
	"Business Continuity and Disaster Recovery (BCP/DR) Plans",
	"IT Risk Management Frameworks",
	"Disaster Recovery Site (DRS) Strategies",
	"ICT Procurement and Asset Management Policies",
	"Software Licensing and Compliance Policies",
	"Backup, Recovery, and Data Retention Policies",
	"Identity and Access Management (IAM) Policies",
	"IT Service Management (ITSM) Frameworks",
	"Artificial Intelligence (AI) Governance Policies",
	"Technology Standards and Operating Procedures",
	"ICT Capacity Building and Change Management Strategies",
];

export default function ServicesPage() {
	return (
		<>
			<ScrollReveal />
			<Header />

			<main>
				{/* Hero */}
				<section className="relative mt-[72px] overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
					<div className="absolute inset-0 dark-tech-grid opacity-30" />
					<div className="absolute inset-0 bg-gradient-to-br from-[#06152d] via-[#083f7d]/50 to-[#07111f]" />
					<div className="relative section-container">
						<div className="mx-auto max-w-3xl text-center">
							<div className="mb-4 inline-flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
								<Network size={15} className="text-brand-green" />
								Our Services
							</div>
							<h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
								Everything IT, under
								<span className="text-brand-green"> one roof</span>.
							</h1>
							<p className="mt-5 text-base leading-7 text-white/62 sm:text-lg">
								A true IT company is more than a vendor list. UNIQUE can supply the equipment, build the lab, secure the network, support the infrastructure, and design the web systems that make the operation work.
							</p>
						</div>
					</div>
				</section>

				{/* Software Development */}
				<section id="software-development" className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
							<div className="reveal-up">
								<div className="sticky top-24">
									<div className="mb-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-blue">
										<span className="h-px w-8 bg-brand-blue" />
										Software Development
									</div>
									<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl">
										Digital products that work.
									</h2>
									<p className="mt-4 text-sm leading-7 text-slate-500">
										From public websites to internal portals and API integrations, UNIQUE builds modern systems with clean user experiences, secure architecture, and practical support after launch.
									</p>
									<div className="mt-6 flex flex-wrap gap-2">
										{["Next.js", "React", "Node.js", ".NET", "Python", "SQL"].map((tag) => (
											<span key={tag} className="bg-slate-950 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white/75">{tag}</span>
										))}
									</div>
								</div>
							</div>

							<div className="space-y-6 reveal-stagger">
								{SOFTWARE_SERVICES.map(({ icon: Icon, title, copy, tags }) => (
									<article key={title} className="card p-6">
										<div className="mb-4 flex items-start justify-between gap-4">
											<div className="flex h-11 w-11 items-center justify-center border border-blue-100 bg-brand-blue-light text-brand-blue">
												<Icon size={20} />
											</div>
											<ArrowUpRight size={17} className="text-slate-300" />
										</div>
										<h3 className="font-display text-lg font-bold text-brand-neutral-dark">{title}</h3>
										<p className="mt-3 text-sm leading-7 text-slate-500">{copy}</p>
										<div className="mt-5 flex flex-wrap gap-2">
											{tags.map((tag) => (
												<span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">{tag}</span>
											))}
										</div>
									</article>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Computer Lab as a Service */}
				<section id="computer-lab" className="section-padding relative overflow-hidden bg-slate-950 text-white">
					<div className="absolute inset-0 dark-tech-grid opacity-30" />
					<div className="relative section-container">
						<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
							<div className="reveal-up">
								<div className="mb-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-green">
									<span className="h-px w-8 bg-brand-green" />
									Computer Lab as a Service
								</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
									Your lab, fully managed.
								</h2>
								<p className="mt-5 max-w-2xl text-sm leading-7 text-white/62">
									The rapid advancement of digital technology is transforming education, employment, business, communication, healthcare, government services, and virtually every aspect of modern society. Digital literacy is therefore no longer an optional skill; it is a fundamental requirement for effective participation in the twenty-first-century economy.
								</p>
								<p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">
									In Liberia, many high school and university students complete their education with limited practical exposure to computers, productivity applications, internet research, digital communication, cybersecurity awareness, and other essential technology skills. In many institutions, the challenge is not only the absence of computers but also the lack of a complete and sustainable framework for integrating technology into the educational environment.
								</p>
								<p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">
									Recognizing these challenges, UNIQUE proposes a comprehensive Technology Integration and Digital Literacy Program for high schools, colleges, and universities in Liberia. The initiative goes beyond the supply of computers. It provides an end-to-end technology integration model that combines the establishment and modernization of computer laboratories, deployment of qualified instructors, delivery and management of structured digital literacy training, continuous maintenance of ICT equipment, and ongoing technical support.
								</p>

								<div className="mt-8 grid gap-3 sm:grid-cols-3">
									{[
										{ value: "90%", label: "Lower power use" },
										{ value: "$20", label: "Per student / semester" },
										{ value: "30+", label: "Stations from one server" },
									].map(({ value, label }) => (
										<div key={label} className="border border-white/10 bg-white/[0.06] p-4">
											<div className="font-display text-3xl font-extrabold text-brand-green">{value}</div>
											<div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/42">{label}</div>
										</div>
									))}
								</div>
							</div>

							<div className="reveal-up">
								<div className="grid grid-cols-2 gap-3">
									{["/images/lab1.jpg", "/images/lab3.jpg", "/images/lab4.jpg"].map((src, index) => (
										<div
											key={src}
											className={`relative overflow-hidden border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 ${
												index === 0 ? "col-span-2 aspect-[16/8]" : "aspect-[4/3]"
											}`}
										>
											<Image
												src={src}
												alt={`UNIQUE computer lab deployment ${index + 1}`}
												fill
												className="object-cover"
												sizes="(min-width: 1024px) 45vw, 100vw"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-slate-950/42 to-transparent" />
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 reveal-stagger">
							{[
								{ icon: Server, title: "Central server architecture", copy: "One managed server powers multiple L300/M300 stations with centralized software, user policies, and updates." },
								{ icon: UsersRound, title: "Instructor-led classes", copy: "UNIQUE deploys qualified instructors to teach, report attendance, assess students, and keep labs productive." },
								{ icon: Settings, title: "Maintenance included", copy: "Preventive maintenance, troubleshooting, antivirus, software updates, and faulty equipment replacement are handled." },
								{ icon: BookOpen, title: "Career-ready curriculum", copy: "Students learn keyboarding, MS Office, research, email, cybersecurity awareness, AI fundamentals, and digital citizenship." },
							].map(({ icon: Icon, title, copy }, index) => (
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
					</div>
				</section>

				{/* ICT Equipment */}
				<section id="ict-equipment" className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-45" />
					<div className="relative section-container">
						<div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
							<div className="reveal-up">
								<div className="section-kicker mb-3">ICT Equipment and Software Supply</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									Equipment sourced, configured, supported.
								</h2>
								<p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
									UNIQUE is a trusted provider of high-quality ICT equipment and licensed software solutions, delivering reliable technology products that support the operational and strategic needs of organizations across diverse sectors. Through our extensive network of global technology partners and authorized manufacturers, we supply genuine enterprise-grade hardware and software.
								</p>

								<div className="mt-8 grid gap-3 sm:grid-cols-2">
									{[
										{ icon: ShoppingCart, title: "Hardware Procurement", copy: "Desktops, laptops, servers, printers, monitors, UPS units, routers, switches, firewalls, and accessories selected for real operating conditions." },
										{ icon: PackageCheck, title: "Configuration & Readiness", copy: "Equipment can be imaged, licensed, tested, inventoried, labeled, and prepared before deployment to reduce downtime at handoff." },
										{ icon: Truck, title: "Delivery, Install & Support", copy: "UNIQUE can deliver, install, commission, and maintain supplied equipment as part of broader support agreements." },
										{ icon: Shield, title: "Licensed Software", copy: "ESET endpoint security, SOPHOS firewall solutions, Windows Server, SQL licenses, antivirus deployment, and security support." },
									].map(({ icon: Icon, title, copy }) => (
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
									{["/images/stock2.jpg", "/images/stock3.jpg", "/images/stock4.jpg", "/images/stock5.jpg"].map((src, index) => (
										<div
											key={src}
											className={`relative overflow-hidden border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/60 ${
												index === 0 ? "col-span-2 aspect-[16/8]" : "aspect-[4/3]"
											}`}
										>
											<Image
												src={src}
												alt={`UNIQUE ICT equipment inventory ${index + 1}`}
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
										{["Procurement", "Configuration", "Installation"].map((step) => (
											<div key={step} className="border border-white/10 bg-white/[0.06] p-3">
												<Truck size={15} className="mb-2 text-brand-green" />
												<p className="text-xs font-bold text-white/76">{step}</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Network Infrastructure */}
				<section id="network-infrastructure" className="section-padding relative overflow-hidden bg-slate-50">
					<div className="absolute inset-0 tech-grid opacity-60" />
					<div className="relative section-container">
						<div className="mb-10">
							<div className="section-kicker mb-3">Network Infrastructure</div>
							<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
								Infrastructure that keeps Liberia running.
							</h2>
							<p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
								From LAN/WAN networks and data centers to enterprise wireless and managed infrastructure, UNIQUE designs, deploys, and maintains the technology backbone that organizations depend on every day.
							</p>
						</div>

						<div className="space-y-6">
							{NETWORK_SERVICES.map(({ icon: Icon, title, copy, tags }) => (
								<article key={title} className="card p-6">
									<div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
										<div>
											<div className="flex items-center gap-4">
												<div className="flex h-12 w-12 items-center justify-center border border-blue-100 bg-brand-blue-light text-brand-blue flex-shrink-0">
													<Icon size={22} />
												</div>
												<h3 className="font-display text-xl font-bold text-brand-neutral-dark">{title}</h3>
											</div>
											<p className="mt-4 text-sm leading-7 text-slate-500">{copy}</p>
											<div className="mt-4 flex flex-wrap gap-2">
												{tags.map((tag) => (
													<span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">{tag}</span>
												))}
											</div>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* Cybersecurity & Cloud */}
				<section id="cybersecurity" className="section-padding relative overflow-hidden bg-slate-950 text-white">
					<div className="absolute inset-0 dark-tech-grid opacity-30" />
					<div className="relative section-container">
						<div className="mb-10">
							<div className="mb-3 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-green">
								<span className="h-px w-8 bg-brand-green" />
								Cybersecurity and Cloud Computing
							</div>
							<h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
								Security and cloud, unified.
							</h2>
							<p className="mt-4 max-w-3xl text-sm leading-7 text-white/62">
								UNIQUE delivers comprehensive cybersecurity and cloud computing solutions that safeguard critical digital assets while enabling organizations to innovate with confidence in a rapidly evolving technology landscape.
							</p>
						</div>

						<div className="grid gap-6 lg:grid-cols-2">
							{CYBERSECURITY_SERVICES.map(({ icon: Icon, title, copy, tags }) => (
								<article key={title} className="border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]">
									<div className="mb-5 flex h-12 w-12 items-center justify-center bg-brand-green text-slate-950">
										<Icon size={22} />
									</div>
									<h3 className="font-display text-xl font-bold text-white">{title}</h3>
									<p className="mt-4 text-sm leading-7 text-white/62">{copy}</p>
									<div className="mt-5 flex flex-wrap gap-2">
										{tags.map((tag) => (
											<span key={tag} className="border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white/68">{tag}</span>
										))}
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* Policy & Strategy */}
				<section id="policy-strategy" className="section-padding relative overflow-hidden bg-white">
					<div className="absolute inset-0 tech-grid opacity-40" />
					<div className="relative section-container">
						<div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
							<div className="reveal-up sticky top-24">
								<div className="section-kicker mb-3">Policy & Strategy</div>
								<h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
									Technology policy and strategy development.
								</h2>
								<p className="mt-5 text-sm leading-7 text-slate-500">
									UNIQUE partners with governments, businesses, and institutions to develop comprehensive technology policies, ICT strategies, and digital transformation roadmaps that align technology investments with organizational goals and long-term business objectives.
								</p>
								<p className="mt-4 text-sm leading-7 text-slate-500">
									Through a collaborative and evidence-based approach, we help organizations establish robust governance frameworks, optimize ICT investments, manage technology risks, and accelerate sustainable digital transformation.
								</p>
							</div>

							<div className="reveal-up">
								<div className="border border-slate-200 bg-slate-50 p-6">
									<p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400 mb-4">Our expertise includes the development of:</p>
									<div className="space-y-2">
										{POLICY_ITEMS.map((item, index) => (
											<div key={item} className="flex items-start gap-3 text-sm text-slate-600">
												<span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-brand-blue text-[10px] font-bold text-white">{index + 1}</span>
												{item}
											</div>
										))}
									</div>
								</div>
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
								Ready to discuss your
								<span className="text-brand-green"> project</span>?
							</h2>
							<p className="mt-5 text-base leading-7 text-white/62">
								Whether you need software development, network infrastructure, cybersecurity, or managed services, our team is ready to help.
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
								<Link
									href="/contact"
									className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-bold text-brand-blue-dark shadow-2xl shadow-black/25 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-green hover:text-white"
								>
									Start a Project
									<ArrowRight size={17} />
								</Link>
								<a
									href="mailto:uniquetechsolutions2022@gmail.com"
									className="group inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 bg-white/[0.08] px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.16]"
								>
									<Mail size={15} />
									Email Us
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
