import {
	Boxes,
	Code2,
	Fingerprint,
	FileText,
	GraduationCap,
	Monitor,
	PackageCheck,
	Shield,
	Wifi,
	type LucideIcon,
} from "lucide-react";

/**
 * Single source of truth for brand, contact details and navigation.
 * Anything that appears in more than one place on the site belongs here.
 */

export const BRAND = {
	/** Wordmark shown in the header/footer lockup. */
	name: "UNIQUE",
	/** Full legal name, used in metadata, footer fine print and prose. */
	legalName: "Unique Technology Solutions",
	tagline: "Technology Solutions",
	foundedYear: 2014,
	incorporatedYear: 2021,
	locality: "Monrovia",
	country: "Liberia",
} as const;

export const CONTACT = {
	phones: ["0555 532 355", "0779 373 928"],
	email: "uniquetechsolutions2022@gmail.com",
	street: "Camp Johnson Road",
	city: "Monrovia",
	country: "Liberia",
	mapsUrl: "https://maps.google.com/?q=Camp+Johnson+Road+Monrovia+Liberia",
	responseWindow: "24 business hours",
} as const;

/** Strips spaces so a display number can be used in a `tel:` href. */
export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export interface NavChild {
	label: string;
	href: string;
	icon: LucideIcon;
	description: string;
}

export interface NavItem {
	label: string;
	href: string;
	children?: NavChild[];
}

export const SERVICE_LINKS: NavChild[] = [
	{
		label: "Software Development",
		href: "/services#software-development",
		icon: Code2,
		description: "Web and mobile apps, portals, APIs and databases.",
	},
	{
		label: "Computer Lab as a Service",
		href: "/services#computer-lab",
		icon: Monitor,
		description: "Managed labs with instructors, curriculum and support.",
	},
	{
		label: "ICT Equipment Supply",
		href: "/services#ict-equipment",
		icon: PackageCheck,
		description: "Enterprise hardware and licensed software, deployment-ready.",
	},
	{
		label: "Network Infrastructure",
		href: "/services#network-infrastructure",
		icon: Wifi,
		description: "LAN, MAN/WAN, wireless and datacenter design.",
	},
	{
		label: "Cybersecurity & Cloud",
		href: "/services#cybersecurity",
		icon: Shield,
		description: "Endpoint protection, firewalls, cloud migration.",
	},
	{
		label: "Policy & Strategy",
		href: "/services#policy-strategy",
		icon: FileText,
		description: "ICT governance, roadmaps and compliance frameworks.",
	},
];

export const SOLUTION_LINKS: NavChild[] = [
	{
		label: "Digital Literacy Training",
		href: "/solutions#digital-literacy-training",
		icon: GraduationCap,
		description: "Structured programs for schools and institutions.",
	},
	{
		label: "School Management System",
		href: "/solutions#school-management",
		icon: Monitor,
		description: "Student records, academics, finance and reporting.",
	},
	{
		label: "Biometric Access Control",
		href: "/solutions#biometric-access",
		icon: Fingerprint,
		description: "Fingerprint and facial identity management.",
	},
	{
		label: "Enterprise Resource Planning",
		href: "/solutions#erp",
		icon: Boxes,
		description: "Finance, HR, procurement and analytics on one platform.",
	},
];

export const NAV: NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services", children: SERVICE_LINKS },
	{ label: "Solutions", href: "/solutions", children: SOLUTION_LINKS },
	{ label: "Contact", href: "/contact" },
];

/** Service names listed in the footer — labels only, no links needed. */
export const FOOTER_SERVICES = SERVICE_LINKS.map(({ label, href }) => ({
	label,
	href,
}));

export const SECTORS = [
	"Government",
	"Banking",
	"Healthcare",
	"Education",
	"Telecom",
] as const;

export const TECH_PARTNERS = [
	"Dell",
	"HP",
	"Cisco",
	"ESET",
	"SOPHOS",
	"Microsoft",
	"VMware",
	"IBM",
] as const;
