import type { Metadata } from "next";
import Image from "next/image";
import {
	BookOpen,
	Cloud,
	Database,
	Globe2,
	Mail,
	Network,
	PackageCheck,
	PenTool,
	Server,
	ServerCog,
	Settings,
	Shield,
	ShoppingCart,
	Truck,
	UsersRound,
	Wifi,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaSection from "@/components/site/CtaSection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, IconTile, Tag } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { BRAND, CONTACT } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
	title: "Services",
	description: `Software development, computer labs, ICT equipment supply, network infrastructure, cybersecurity and ICT policy consulting from ${BRAND.legalName}.`,
};

const SOFTWARE_SERVICES = [
	{
		icon: Globe2,
		title: "Web and Mobile Application Development",
		copy: `${BRAND.name} designs, develops and deploys secure, scalable and user-centric web and mobile applications that help organizations streamline operations, enhance service delivery and accelerate digital transformation. Using modern frameworks and agile delivery, we build business management systems, e-government platforms, customer portals, e-commerce applications and Android/iOS apps tailored to each client. Our end-to-end approach covers business analysis, UX/UI design, development, integration, testing, deployment and ongoing maintenance.`,
		tags: ["Next.js", "React", "Node.js", ".NET", "Python"],
	},
	{
		icon: Database,
		title: "Database Design and Management",
		copy: `We provide database design, implementation, optimization and management that keeps organizational data secure, accurate, accessible and highly available. Our expertise covers database architecture, data modeling, migration, performance tuning, backup and disaster recovery, security implementation, replication and ongoing administration — helping organizations maximize the value of their data and maintain business continuity.`,
		tags: ["SQL", "PostgreSQL", "Migration", "Backup"],
	},
	{
		icon: PenTool,
		title: "Website Development",
		copy: `We deliver professional, responsive, high-performance websites that strengthen brand visibility and establish a credible digital presence. Our work spans corporate websites, e-commerce platforms, institutional portals, content management systems and custom web solutions — all optimized for performance, security, mobile responsiveness and search visibility, from concept through hosting and maintenance.`,
		tags: ["CMS", "E-commerce", "SEO", "Responsive"],
	},
];

const NETWORK_SERVICES = [
	{
		icon: Network,
		title: "Local Area Network (LAN)",
		copy: "We design, deploy and optimize secure, scalable, high-performance LAN infrastructure that provides reliable connectivity for mission-critical operations. Services include structured cabling, fiber optic backbone installation, enterprise switching and routing, wireless deployment, network segmentation, security implementation, performance optimization and ongoing maintenance.",
		tags: ["Cisco", "Cat6/Cat6a", "Fiber Optic", "VLANs"],
	},
	{
		icon: Globe2,
		title: "Metropolitan and Wide Area Network (MAN/WAN)",
		copy: "We connect geographically dispersed offices, branches, campuses and remote users into a unified, high-performance enterprise network. Expertise includes network architecture and design, fiber and leased-line connectivity, SD-WAN deployment, VPN implementation, MPLS integration, inter-site routing, redundancy, bandwidth optimization and continuous monitoring.",
		tags: ["SD-WAN", "VPN", "MPLS", "Fiber"],
	},
	{
		icon: Wifi,
		title: "Enterprise Wireless Solution",
		copy: "We design, deploy and manage secure, high-performance enterprise wireless networks. Our solutions cover site surveys, wireless planning, indoor and outdoor Wi-Fi deployment, controller-based and cloud-managed architectures, seamless roaming, guest access, segmentation and ongoing performance optimization.",
		tags: ["Wi-Fi 6", "Cloud-managed", "Roaming", "Site Surveys"],
	},
	{
		icon: Server,
		title: "Datacenter Design and Implementation",
		copy: "We provide end-to-end data center design, implementation and modernization for mission-critical operations — covering architecture, server and storage deployment, virtualization, power and cooling, structured cabling, network infrastructure, rack installation, disaster recovery planning and physical security.",
		tags: ["Rack Design", "Cooling", "DR Planning", "Virtualization"],
	},
	{
		icon: ServerCog,
		title: "Managed Infrastructure",
		copy: "We provide ongoing managed infrastructure services to ensure continuous operation and proactive maintenance of your technology systems, including monitoring, patching, troubleshooting and performance optimization.",
		tags: ["Monitoring", "Maintenance", "24/7 Support", "Patch Management"],
	},
];

const SECURITY_SERVICES = [
	{
		icon: Shield,
		title: "Cybersecurity Solutions",
		copy: "We deliver cybersecurity that safeguards critical digital assets while enabling organizations to innovate with confidence. Services include security assessments, vulnerability management, firewall deployment, endpoint protection, identity and access management, security monitoring, incident response and regulatory compliance.",
		tags: ["ESET", "SOPHOS", "Firewalls", "Endpoint Protection"],
	},
	{
		icon: Cloud,
		title: "Cloud Computing",
		copy: "We design, deploy and manage secure cloud infrastructure, cloud migration, hybrid and multi-cloud environments, backup and disaster recovery, and cloud collaboration platforms — helping organizations improve resilience, reduce infrastructure costs and accelerate digital transformation.",
		tags: ["Cloud Migration", "Hybrid Cloud", "Backup & DR", "SaaS"],
	},
];

const LAB_PILLARS = [
	{
		icon: Server,
		title: "Central server architecture",
		copy: "One managed server powers multiple L300/M300 stations with centralized software, user policies and updates.",
	},
	{
		icon: UsersRound,
		title: "Instructor-led classes",
		copy: "We deploy qualified instructors to teach, report attendance, assess students and keep labs productive.",
	},
	{
		icon: Settings,
		title: "Maintenance included",
		copy: "Preventive maintenance, troubleshooting, antivirus, software updates and faulty equipment replacement are handled.",
	},
	{
		icon: BookOpen,
		title: "Career-ready curriculum",
		copy: "Students learn keyboarding, MS Office, research, email, cybersecurity awareness, AI fundamentals and digital citizenship.",
	},
];

const LAB_METRICS = [
	{ value: "90%", label: "Lower power use" },
	{ value: "$20", label: "Per student / semester" },
	{ value: "30+", label: "Stations from one server" },
];

const EQUIPMENT_PILLARS = [
	{
		icon: ShoppingCart,
		title: "Hardware Procurement",
		copy: "Desktops, laptops, servers, printers, monitors, UPS units, routers, switches, firewalls and accessories selected for real operating conditions.",
	},
	{
		icon: PackageCheck,
		title: "Configuration & Readiness",
		copy: "Equipment is imaged, licensed, tested, inventoried and labeled before deployment to reduce downtime at handoff.",
	},
	{
		icon: Truck,
		title: "Delivery, Install & Support",
		copy: "We deliver, install, commission and maintain supplied equipment as part of broader support agreements.",
	},
	{
		icon: Shield,
		title: "Licensed Software",
		copy: "ESET endpoint security, SOPHOS firewall solutions, Windows Server, SQL licenses, antivirus deployment and security support.",
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
	"Backup, Recovery and Data Retention Policies",
	"Identity and Access Management (IAM) Policies",
	"IT Service Management (ITSM) Frameworks",
	"Artificial Intelligence (AI) Governance Policies",
	"Technology Standards and Operating Procedures",
	"ICT Capacity Building and Change Management Strategies",
];

const LAB_IMAGES = ["/images/lab1.jpg", "/images/lab3.jpg", "/images/lab4.jpg"];
const EQUIPMENT_IMAGES = [
	"/images/stock2.jpg",
	"/images/stock3.jpg",
	"/images/stock4.jpg",
	"/images/stock5.jpg",
];

export default function ServicesPage() {
	return (
		<>
			<PageHero
				eyebrow="Our Services"
				icon={Network}
				wash="blue"
				title={
					<>
						Everything IT, under <span className="text-accent-400">one roof</span>.
					</>
				}
				lead={`A true IT company is more than a vendor list. ${BRAND.name} supplies the equipment, builds the lab, secures the network, supports the infrastructure and designs the web systems that make the operation work.`}
			/>

			{/* ── Software development ── */}
			<Section id="software-development" tone="light">
				<div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
					<Reveal>
						<div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
							<SectionHeading
								eyebrow="Software Development"
								title="Digital products that work."
								lead="From public websites to internal portals and API integrations, we build modern systems with clean user experiences, secure architecture and practical support after launch."
							/>
							<ul className="mt-6 flex flex-wrap gap-2">
								{["Next.js", "React", "Node.js", ".NET", "Python", "SQL"].map((tag) => (
									<li
										key={tag}
										className="rounded-md bg-ink-950 px-3 py-1.5 text-[0.6875rem] font-bold uppercase tracking-wide text-white/80"
									>
										{tag}
									</li>
								))}
							</ul>
						</div>
					</Reveal>

					<RevealGroup className="space-y-5">
						{SOFTWARE_SERVICES.map(({ icon, title, copy, tags }) => (
							<Card key={title} interactive>
								<IconTile icon={icon} />
								<h3 className="mt-5 text-display-xs font-bold text-ink-900">{title}</h3>
								<p className="mt-3 text-sm leading-relaxed text-ink-500">{copy}</p>
								<ul className="mt-5 flex flex-wrap gap-2">
									{tags.map((tag) => (
										<li key={tag}>
											<Tag>{tag}</Tag>
										</li>
									))}
								</ul>
							</Card>
						))}
					</RevealGroup>
				</div>
			</Section>

			{/* ── Computer Lab as a Service ── */}
			<Section id="computer-lab" tone="dark">
				<div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
					<Reveal>
						<SectionHeading
							tone="dark"
							eyebrow="Computer Lab as a Service"
							title="Your lab, fully managed."
						/>

						<div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-white/60">
							<p>
								The rapid advancement of digital technology is transforming
								education, employment, business, communication, healthcare and
								government services. Digital literacy is no longer optional; it is a
								fundamental requirement for participation in the twenty-first-century
								economy.
							</p>
							<p>
								In {BRAND.country}, many high school and university students complete
								their education with limited practical exposure to computers,
								productivity applications, internet research, digital communication
								and cybersecurity awareness. In many institutions the challenge is
								not only the absence of computers, but the lack of a sustainable
								framework for integrating technology into the learning environment.
							</p>
							<p>
								Our Technology Integration and Digital Literacy Program goes beyond
								supplying computers. It combines establishing and modernizing
								laboratories, deploying qualified instructors, delivering structured
								training, maintaining ICT equipment and providing ongoing technical
								support.
							</p>
						</div>

						<dl className="mt-8 grid gap-3 sm:grid-cols-3">
							{LAB_METRICS.map(({ value, label }) => (
								<div
									key={label}
									className="rounded-lg bg-white/6 p-4 ring-1 ring-white/10"
								>
									<dt className="sr-only">{label}</dt>
									<dd>
										<span className="block font-display text-display-sm font-extrabold text-accent-400">
											{value}
										</span>
										<span className="mt-1 block text-[0.6875rem] font-semibold uppercase tracking-wide text-white/45">
											{label}
										</span>
									</dd>
								</div>
							))}
						</dl>
					</Reveal>

					<Reveal>
						<div className="grid grid-cols-2 gap-3">
							{LAB_IMAGES.map((src, index) => (
								<div
									key={src}
									className={cn(
										"relative overflow-hidden rounded-xl bg-white/6 shadow-lg ring-1 ring-white/10",
										index === 0 ? "col-span-2 aspect-16/8" : "aspect-4/3",
									)}
								>
									<Image
										src={src}
										alt={`Computer lab deployment ${index + 1}`}
										fill
										loading="lazy"
										className="object-cover"
										sizes="(min-width: 1024px) 45vw, 100vw"
									/>
									<div
										aria-hidden="true"
										className="absolute inset-0 bg-linear-to-t from-ink-950/45 to-transparent"
									/>
								</div>
							))}
						</div>
					</Reveal>
				</div>

				<RevealGroup className="auto-grid [--col:16rem] mt-12">
					{LAB_PILLARS.map(({ icon, title, copy }, index) => (
						<Card key={title} tone="dark" interactive>
							<div className="flex items-center justify-between">
								<IconTile icon={icon} tone="accent" />
								<span className="font-mono text-xs text-white/25">
									{String(index + 1).padStart(2, "0")}
								</span>
							</div>
							<h3 className="mt-5 text-display-xs font-bold text-white">{title}</h3>
							<p className="mt-2.5 text-sm leading-relaxed text-white/55">{copy}</p>
						</Card>
					))}
				</RevealGroup>
			</Section>

			{/* ── ICT equipment ── */}
			<Section id="ict-equipment" tone="light">
				<div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
					<Reveal>
						<SectionHeading
							eyebrow="ICT Equipment and Software Supply"
							title="Equipment sourced, configured, supported."
							lead={`${BRAND.name} is a trusted provider of high-quality ICT equipment and licensed software. Through our network of global technology partners and authorized manufacturers, we supply genuine enterprise-grade hardware and software.`}
						/>

						<RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
							{EQUIPMENT_PILLARS.map(({ icon, title, copy }) => (
								<Card key={title} interactive className="p-5">
									<IconTile icon={icon} />
									<h3 className="mt-4 text-sm font-bold text-ink-900">{title}</h3>
									<p className="mt-2 text-xs leading-relaxed text-ink-500">{copy}</p>
								</Card>
							))}
						</RevealGroup>
					</Reveal>

					<Reveal>
						<div className="grid grid-cols-2 gap-3">
							{EQUIPMENT_IMAGES.map((src, index) => (
								<div
									key={src}
									className={cn(
										"relative overflow-hidden rounded-xl bg-ink-100 shadow-md ring-1 ring-ink-200",
										index === 0 ? "col-span-2 aspect-16/8" : "aspect-4/3",
									)}
								>
									<Image
										src={src}
										alt={`ICT equipment inventory ${index + 1}`}
										fill
										loading="lazy"
										className="object-cover"
										sizes="(min-width: 1024px) 45vw, 100vw"
									/>
								</div>
							))}
						</div>

						<div className="relative isolate mt-5 overflow-hidden rounded-xl bg-ink-950 p-5 text-white shadow-lg">
							<div aria-hidden="true" className="absolute inset-0 -z-10 grid-overlay" />
							<div className="flex items-center gap-3">
								<IconTile icon={PackageCheck} tone="accent" />
								<div>
									<p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/40">
										Supply process
									</p>
									<h3 className="text-display-xs font-extrabold">
										Source. Prepare. Deliver. Support.
									</h3>
								</div>
							</div>
							<ol className="mt-5 grid gap-2 sm:grid-cols-3">
								{["Procurement", "Configuration", "Installation"].map((step) => (
									<li
										key={step}
										className="rounded-lg bg-white/6 p-3 ring-1 ring-white/10"
									>
										<Truck size={15} className="mb-2 text-accent-400" aria-hidden="true" />
										<p className="text-xs font-bold text-white/80">{step}</p>
									</li>
								))}
							</ol>
						</div>
					</Reveal>
				</div>
			</Section>

			{/* ── Network infrastructure ── */}
			<Section id="network-infrastructure" tone="sunken">
				<Reveal>
					<SectionHeading
						eyebrow="Network Infrastructure"
						title={`Infrastructure that keeps ${BRAND.country} running.`}
						lead="From LAN/WAN networks and data centers to enterprise wireless and managed infrastructure, we design, deploy and maintain the technology backbone organizations depend on every day."
					/>
				</Reveal>

				<RevealGroup className="mt-12 space-y-5">
					{NETWORK_SERVICES.map(({ icon, title, copy, tags }) => (
						<Card key={title} interactive>
							<div className="flex items-start gap-4">
								<IconTile icon={icon} />
								<div className="min-w-0">
									<h3 className="text-display-xs font-bold text-ink-900">{title}</h3>
									<p className="mt-3 text-sm leading-relaxed text-ink-500">{copy}</p>
									<ul className="mt-4 flex flex-wrap gap-2">
										{tags.map((tag) => (
											<li key={tag}>
												<Tag>{tag}</Tag>
											</li>
										))}
									</ul>
								</div>
							</div>
						</Card>
					))}
				</RevealGroup>
			</Section>

			{/* ── Cybersecurity & cloud ── */}
			<Section id="cybersecurity" tone="dark">
				<Reveal>
					<SectionHeading
						tone="dark"
						eyebrow="Cybersecurity and Cloud Computing"
						title="Security and cloud, unified."
						lead="We deliver cybersecurity and cloud solutions that safeguard critical digital assets while enabling organizations to innovate with confidence in a rapidly evolving technology landscape."
					/>
				</Reveal>

				<RevealGroup className="auto-grid [--col:24rem] mt-12">
					{SECURITY_SERVICES.map(({ icon, title, copy, tags }) => (
						<Card key={title} tone="dark" interactive>
							<IconTile icon={icon} tone="accent" />
							<h3 className="mt-5 text-display-xs font-bold text-white">{title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-white/60">{copy}</p>
							<ul className="mt-5 flex flex-wrap gap-2">
								{tags.map((tag) => (
									<li key={tag}>
										<Tag tone="dark">{tag}</Tag>
									</li>
								))}
							</ul>
						</Card>
					))}
				</RevealGroup>
			</Section>

			{/* ── Policy & strategy ── */}
			<Section id="policy-strategy" tone="light">
				<div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
					<Reveal>
						<div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
							<SectionHeading
								eyebrow="Policy & Strategy"
								title="Technology policy and strategy development."
							/>
							<div className="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
								<p>
									We partner with governments, businesses and institutions to develop
									technology policies, ICT strategies and digital transformation
									roadmaps that align technology investment with organizational goals.
								</p>
								<p>
									Through a collaborative, evidence-based approach we help
									organizations establish governance frameworks, optimize ICT
									investment, manage technology risk and accelerate sustainable
									digital transformation.
								</p>
							</div>
						</div>
					</Reveal>

					<Reveal>
						<div className="rounded-xl bg-ink-50 p-6 ring-1 ring-ink-200/70">
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-400">
								Our expertise includes the development of
							</p>
							<ol className="mt-5 space-y-2.5">
								{POLICY_ITEMS.map((item, index) => (
									<li key={item} className="flex items-start gap-3 text-sm text-ink-600">
										<span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-brand-600 text-[0.625rem] font-bold text-white">
											{index + 1}
										</span>
										{item}
									</li>
								))}
							</ol>
						</div>
					</Reveal>
				</div>
			</Section>

			<CtaSection
				title={
					<>
						Ready to discuss your <span className="text-accent-400">project</span>?
					</>
				}
				lead="Whether you need software development, network infrastructure, cybersecurity or managed services, our team is ready to help."
				primary={{ label: "Start a Project", href: "/contact" }}
				secondary={{
					label: "Email Us",
					href: `mailto:${CONTACT.email}`,
					icon: <Mail size={15} aria-hidden="true" />,
				}}
			/>
		</>
	);
}
