import type { Metadata } from "next";
import { ArrowRight, Boxes, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaSection from "@/components/site/CtaSection";
import Button from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, Tag } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
	title: "Technology Solutions",
	description: `Digital literacy training, school management systems, biometric access control and ERP platforms built for education, enterprise and institutional needs in ${BRAND.country}.`,
};

interface Solution {
	id: string;
	eyebrow: string;
	title: string;
	copy: string;
	tags: string[];
	features: { title: string; copy: string }[];
}

const SOLUTIONS: Solution[] = [
	{
		id: "digital-literacy-training",
		eyebrow: "Digital Literacy Training",
		title: "Empowering the next generation with digital skills.",
		copy: "Our Integration of Digital Literacy Training and Infrastructure solution equips educational institutions with the technology and skills needed for the digital age. We combine modern computer laboratories with structured curricula and qualified instruction so students develop essential technology competencies.",
		tags: ["NComputing", "Thin-Client", "Curriculum", "Instructors"],
		features: [
			{
				title: "Lab Design & Infrastructure",
				copy: "Complete laboratory design, supply, installation and commissioning using thin-client or traditional workstation architectures optimized for education.",
			},
			{
				title: "Structured Curriculum",
				copy: "Digital literacy covering keyboarding, productivity applications, internet research, digital communication, cybersecurity awareness, AI fundamentals and digital citizenship.",
			},
			{
				title: "Qualified Instructors",
				copy: "Trained and certified IT instructors manage daily classes, track student progress and ensure effective knowledge transfer.",
			},
			{
				title: "Ongoing Maintenance",
				copy: "Preventive maintenance, troubleshooting, antivirus management, software updates and equipment replacement keep labs running.",
			},
			{
				title: "Assessment & Reporting",
				copy: "Regular student assessments, attendance tracking, progress reporting and program evaluation to measure learning outcomes.",
			},
			{
				title: "Capacity Building",
				copy: "Teacher training and institutional capacity building ensure long-term sustainability of digital literacy initiatives.",
			},
		],
	},
	{
		id: "school-management",
		eyebrow: "School Management System",
		title: "Streamline school operations with smart technology.",
		copy: `${BRAND.name} designs and deploys School Management Systems that automate administrative, academic and financial operations. Our platforms centralize student records, enrollment, attendance, grading, scheduling, fee collection and reporting so institutions can operate efficiently and decide with data.`,
		tags: ["Cloud-based", "Student Records", "Analytics", "Mobile"],
		features: [
			{
				title: "Student Information Management",
				copy: "Centralized student records, enrollment processing, admission tracking and comprehensive student profile management.",
			},
			{
				title: "Academic Management",
				copy: "Course scheduling, timetable generation, attendance tracking, grade management and academic performance analytics.",
			},
			{
				title: "Financial Management",
				copy: "Fee structure configuration, automated billing, payment tracking, receipt generation and financial reporting.",
			},
			{
				title: "Communication Portal",
				copy: "Parent-teacher communication, student notifications, announcement broadcasting and real-time messaging.",
			},
			{
				title: "Reporting & Analytics",
				copy: "Dashboards, customizable reports, academic analytics and institutional performance metrics.",
			},
			{
				title: "Cloud Deployment",
				copy: "Secure cloud-hosted or on-premise deployment with data backup, disaster recovery and technical support.",
			},
		],
	},
	{
		id: "biometric-access",
		eyebrow: "Biometric Access Control",
		title: "Secure identity management for the modern enterprise.",
		copy: `${BRAND.name} delivers biometric access control and identity management that provides robust, scalable security for physical and logical access. Using leading biometric technologies from partners such as Suprema, we deploy systems that ensure only authorized personnel reach secured areas, critical systems and sensitive data.`,
		tags: ["Suprema", "Fingerprint", "Facial Recognition", "Attendance"],
		features: [
			{
				title: "Fingerprint Recognition",
				copy: "High-accuracy fingerprint scanning and matching for quick, reliable identity verification at access points.",
			},
			{
				title: "Facial Recognition",
				copy: "Contactless, hygienic and fast identity verification for high-traffic environments.",
			},
			{
				title: "Access Control Systems",
				copy: "Integration with door controllers, turnstiles, gates and locks for comprehensive physical access management.",
			},
			{
				title: "Time & Attendance",
				copy: "Automated check-in/check-out tracking, shift management, overtime calculation and attendance reporting.",
			},
			{
				title: "Identity Management",
				copy: "Centralized identity lifecycle management: enrollment, credentialing, role-based access policies and de-provisioning.",
			},
			{
				title: "Integration & Analytics",
				copy: "Integration with HR, ERP and security information systems, with real-time monitoring and audit trails.",
			},
		],
	},
	{
		id: "erp",
		eyebrow: "Enterprise Resource Planning",
		title: "Unified business operations on one platform.",
		copy: `${BRAND.name} designs, deploys and supports ERP solutions that integrate finance, human resources, procurement, inventory, sales and operations into a single data-driven platform — streamlining workflows, reducing operational silos and improving decision-making.`,
		tags: ["Finance", "HR", "Procurement", "Analytics"],
		features: [
			{
				title: "Financial Management",
				copy: "General ledger, accounts payable/receivable, budgeting, financial reporting and multi-currency support.",
			},
			{
				title: "Human Resources",
				copy: "Employee management, payroll processing, benefits administration, performance evaluation and workforce planning.",
			},
			{
				title: "Supply Chain & Procurement",
				copy: "Purchase order management, vendor management, inventory control, warehouse management and logistics tracking.",
			},
			{
				title: "Sales & CRM",
				copy: "Customer relationship management, sales pipeline tracking, order processing, invoicing and customer analytics.",
			},
			{
				title: "Business Intelligence",
				copy: "Real-time dashboards, customizable reports, data visualization and predictive analytics.",
			},
			{
				title: "Customization & Integration",
				copy: "Tailored module configuration, API integrations with existing systems, data migration and user training.",
			},
		],
	},
];

export default function SolutionsPage() {
	return (
		<>
			<PageHero
				eyebrow="Technology Solutions"
				icon={Boxes}
				wash="green"
				title={
					<>
						Purpose-built <span className="text-accent-400">solutions</span>.
					</>
				}
				lead={`Specialized platforms and systems designed for education, enterprise and institutional needs across ${BRAND.country}.`}
			/>

			{SOLUTIONS.map((solution, index) => (
				<SolutionSection
					key={solution.id}
					solution={solution}
					tone={index % 2 === 0 ? "light" : "sunken"}
				/>
			))}

			<CtaSection
				title={
					<>
						Ready to implement a <span className="text-accent-400">solution</span>?
					</>
				}
				lead="Let us help you choose the right technology for your institution. Our team is ready to consult, design, deploy and support."
				primary={{ label: "Get Started", href: "/contact" }}
				secondary={{ label: "View Services", href: "/services" }}
			/>
		</>
	);
}

function SolutionSection({
	solution,
	tone,
}: {
	solution: Solution;
	tone: "light" | "sunken";
}) {
	const { id, eyebrow, title, copy, tags, features } = solution;

	return (
		<Section id={id} tone={tone}>
			<div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
				<Reveal>
					<div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
						<SectionHeading eyebrow={eyebrow} title={title} lead={copy} />

						<ul className="mt-6 flex flex-wrap gap-2">
							{tags.map((tag) => (
								<li key={tag}>
									<Tag>{tag}</Tag>
								</li>
							))}
						</ul>

						<div className="mt-8">
							<Button href="/contact" className="group">
								Request a Consultation
								<ArrowRight
									size={15}
									aria-hidden="true"
									className="transition-transform group-hover:translate-x-1"
								/>
							</Button>
						</div>
					</div>
				</Reveal>

				<RevealGroup className="auto-grid [--col:20rem]">
					{features.map(({ title: featureTitle, copy: featureCopy }) => (
						<Card key={featureTitle} interactive className="p-5">
							<div className="flex items-start gap-3.5">
								<CheckCircle2
									size={18}
									className="mt-0.5 shrink-0 text-accent-500"
									aria-hidden="true"
								/>
								<div className="min-w-0">
									<h3 className="text-sm font-bold text-ink-900">{featureTitle}</h3>
									<p className="mt-2 text-sm leading-relaxed text-ink-500">
										{featureCopy}
									</p>
								</div>
							</div>
						</Card>
					))}
				</RevealGroup>
			</div>
		</Section>
	);
}
