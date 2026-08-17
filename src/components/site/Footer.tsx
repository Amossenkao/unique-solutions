import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import {
	BRAND,
	CONTACT,
	FOOTER_SERVICES,
	NAV,
	telHref,
} from "@/lib/site";

export default function Footer() {
	const year = new Date().getFullYear();
	const pageLinks = NAV.filter((item) => item.href !== "/");

	return (
		<footer className="relative isolate overflow-hidden bg-ink-950 text-white">
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid-overlay" />

			{/* ── Closing call to action ── */}
			<div className="border-b border-white/10 bg-white/3">
				<div className="container-page flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-400">
							Ready to get started?
						</p>
						<p className="mt-2 max-w-xl text-display-sm font-extrabold text-white">
							Build the website, wire the network, secure the operation.
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						<Button href="/contact" variant="inverse">
							<Mail size={15} aria-hidden="true" />
							Get in Touch
						</Button>
						<Button href={telHref(CONTACT.phones[0])} variant="inverse-outline">
							<Phone size={14} aria-hidden="true" />
							Call Now
						</Button>
					</div>
				</div>
			</div>

			{/* ── Directory ── */}
			<div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
				<div className="lg:col-span-4">
					<div className="flex items-center gap-2.5">
						<span className="flex size-10 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-white/10">
							<Image
								src="/images/logo.jpg"
								alt=""
								width={40}
								height={40}
								className="size-full object-cover"
							/>
						</span>
						<span className="flex flex-col leading-none">
							<span className="font-display text-base font-extrabold text-white">
								{BRAND.name}
							</span>
							<span className="mt-1 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-ink-400">
								{BRAND.tagline}
							</span>
						</span>
					</div>

					<p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
						A {BRAND.country}n-owned IT company delivering modern web systems,
						enterprise infrastructure, cybersecurity, and sustainable digital
						literacy programs since {BRAND.foundedYear}.
					</p>

					<div className="mt-5 flex flex-wrap gap-2">
						<Chip>Est. {BRAND.foundedYear}</Chip>
						<Chip>
							{CONTACT.city}, {CONTACT.country}
						</Chip>
					</div>
				</div>

				<nav className="lg:col-span-2" aria-labelledby="footer-pages">
					<FooterHeading id="footer-pages">Pages</FooterHeading>
					<ul className="flex flex-col gap-2.5">
						{pageLinks.map((item) => (
							<li key={item.href}>
								<FooterLink href={item.href}>{item.label}</FooterLink>
							</li>
						))}
					</ul>
				</nav>

				<nav className="lg:col-span-3" aria-labelledby="footer-services">
					<FooterHeading id="footer-services">Services</FooterHeading>
					<ul className="flex flex-col gap-2.5">
						{FOOTER_SERVICES.map(({ label, href }) => (
							<li key={label}>
								<FooterLink href={href}>{label}</FooterLink>
							</li>
						))}
					</ul>
				</nav>

				<div className="lg:col-span-3">
					<FooterHeading>Get in touch</FooterHeading>
					<ul className="flex flex-col gap-3.5">
						{CONTACT.phones.map((phone) => (
							<li key={phone}>
								<a
									href={telHref(phone)}
									className="flex items-center gap-2.5 text-sm text-ink-400 transition-colors hover:text-white"
								>
									<Phone size={14} className="shrink-0 text-accent-400" aria-hidden="true" />
									{phone}
								</a>
							</li>
						))}
						<li>
							<a
								href={`mailto:${CONTACT.email}`}
								className="flex items-start gap-2.5 break-all text-sm text-ink-400 transition-colors hover:text-white"
							>
								<Mail
									size={14}
									className="mt-1 shrink-0 text-accent-400"
									aria-hidden="true"
								/>
								{CONTACT.email}
							</a>
						</li>
						<li className="flex items-start gap-2.5 pt-1">
							<MapPin
								size={14}
								className="mt-1 shrink-0 text-accent-400"
								aria-hidden="true"
							/>
							<span className="text-sm text-ink-400">
								{CONTACT.street}
								<br />
								{CONTACT.city}, {CONTACT.country}
								<br />
								<a
									href={CONTACT.mapsUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-400 transition-colors hover:text-accent-300"
								>
									View on Maps
									<ExternalLink size={11} aria-hidden="true" />
								</a>
							</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="container-page flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 sm:flex-row">
				<p className="text-xs text-ink-500">
					© {year} {BRAND.legalName} ({BRAND.name}). All rights reserved.
				</p>
				<p className="text-xs text-ink-500">
					{BRAND.country}n-Owned Business · Est. {BRAND.foundedYear}
				</p>
			</div>
		</footer>
	);
}

function FooterHeading({ children, id }: { children: React.ReactNode; id?: string }) {
	return (
		<h2 id={id} className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-white">
			{children}
		</h2>
	);
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<Link
			href={href}
			className="text-sm text-ink-400 transition-colors hover:text-white"
		>
			{children}
		</Link>
	);
}

function Chip({ children }: { children: React.ReactNode }) {
	return (
		<span className="rounded-md bg-white/6 px-2.5 py-1 text-[0.6875rem] font-medium text-ink-400 ring-1 ring-white/10">
			{children}
		</span>
	);
}
