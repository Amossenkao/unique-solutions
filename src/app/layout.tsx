import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ScrollReveal from "@/components/site/ScrollReveal";
import { PartnerDialogProvider } from "@/components/partner/PartnerDialogProvider";
import { BRAND, CONTACT } from "@/lib/site";
import "./globals.css";

/* Self-hosted at build time: no render-blocking request to Google, no layout
   shift, and `display: swap` keeps text painted during font load. */
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["600", "700", "800"],
	variable: "--font-jakarta",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://uniquetechnologysolutions.com"),
	title: {
		default: `${BRAND.legalName} — ICT Partner in ${BRAND.country}`,
		template: `%s · ${BRAND.name}`,
	},
	description:
		`${BRAND.country}'s trusted ICT partner. Enterprise network infrastructure, ` +
		`software development, cybersecurity, equipment supply and Computer Lab as a ` +
		`Service for schools.`,
	keywords: [
		BRAND.legalName,
		"ICT Liberia",
		"network infrastructure Monrovia",
		"computer lab as a service",
		"digital literacy Liberia",
		"cybersecurity Liberia",
	],
	authors: [{ name: BRAND.legalName }],
	openGraph: {
		title: `${BRAND.legalName} — ICT Partner in ${BRAND.country}`,
		description: `Powering ${BRAND.country}'s digital transformation since ${BRAND.foundedYear}.`,
		type: "website",
		locale: "en_US",
		siteName: BRAND.legalName,
	},
	twitter: {
		card: "summary_large_image",
		title: BRAND.legalName,
		description: `Powering ${BRAND.country}'s digital transformation since ${BRAND.foundedYear}.`,
	},
	robots: { index: true, follow: true },
};

export const viewport: Viewport = {
	themeColor: "#0a1220",
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
};

/* Marks the document as JS-capable before first paint, so the reveal system
   can hide content it is about to animate without ever hiding it from users
   whose JavaScript never arrives. */
const JS_FLAG = `document.documentElement.classList.add("js")`;

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: BRAND.legalName,
	alternateName: BRAND.name,
	foundingDate: String(BRAND.foundedYear),
	email: CONTACT.email,
	telephone: CONTACT.phones[0],
	address: {
		"@type": "PostalAddress",
		streetAddress: CONTACT.street,
		addressLocality: CONTACT.city,
		addressCountry: CONTACT.country,
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
			<head>
				<script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
			</head>
			<body className="font-sans">
				<a
					href="#main"
					className="sr-only rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200]"
				>
					Skip to content
				</a>

				<PartnerDialogProvider>
					<ScrollReveal />
					<Header />
					<main id="main">{children}</main>
					<Footer />
				</PartnerDialogProvider>
			</body>
		</html>
	);
}
