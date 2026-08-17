import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BRAND, CONTACT, telHref } from "@/lib/site";

export const metadata: Metadata = {
	title: "Contact",
	description: `Talk to ${BRAND.legalName} about websites, infrastructure, managed computer labs or ICT equipment. We respond within ${CONTACT.responseWindow}.`,
};

const QUICK_LINKS = [
	{ label: "Services", href: "/services" },
	{ label: "Technology Solutions", href: "/solutions" },
	{ label: "About Us", href: "/about" },
];

export default function ContactPage() {
	return (
		<>
			<PageHero
				eyebrow="Contact Us"
				icon={Mail}
				wash="blue"
				title={
					<>
						Let&apos;s build your <span className="text-accent-400">solution</span>.
					</>
				}
				lead={`Whether you need a modern website, secure infrastructure, managed computer labs or enterprise equipment, this intake helps us route your inquiry to the right technical team.`}
			/>

			<Section tone="sunken">
				<div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5 lg:items-start">
					{/* Form leads on mobile; sidebar sits left on desktop. */}
					<Reveal className="lg:order-2 lg:col-span-3">
						<ContactForm />
					</Reveal>

					<Reveal className="space-y-4 lg:order-1 lg:col-span-2">
						<div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-ink-200/80">
							<h2 className="font-display text-sm font-bold text-ink-900">
								Contact Information
							</h2>
							<p className="mt-1.5 text-xs leading-relaxed text-ink-400">
								Reach out directly and we&apos;ll get back to you within{" "}
								{CONTACT.responseWindow}.
							</p>

							<ul className="mt-6 space-y-4">
								{CONTACT.phones.map((phone) => (
									<li key={phone}>
										<a href={telHref(phone)} className="group flex items-center gap-3">
											<span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
												<Phone size={16} aria-hidden="true" />
											</span>
											<span>
												<span className="block text-[0.625rem] font-medium uppercase tracking-wider text-ink-400">
													Phone
												</span>
												<span className="text-sm font-semibold text-ink-800 transition-colors group-hover:text-brand-600">
													{phone}
												</span>
											</span>
										</a>
									</li>
								))}
								<li>
									<a
										href={`mailto:${CONTACT.email}`}
										className="group flex items-center gap-3"
									>
										<span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-white">
											<Mail size={16} aria-hidden="true" />
										</span>
										<span className="min-w-0">
											<span className="block text-[0.625rem] font-medium uppercase tracking-wider text-ink-400">
												Email
											</span>
											<span className="block break-all text-sm font-semibold leading-snug text-ink-800 transition-colors group-hover:text-accent-600">
												{CONTACT.email}
											</span>
										</span>
									</a>
								</li>
							</ul>
						</div>

						<div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-ink-200/80">
							<a
								href={CONTACT.mapsUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-3"
							>
								<span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-ink-500 transition-colors group-hover:bg-ink-900 group-hover:text-white">
									<MapPin size={16} aria-hidden="true" />
								</span>
								<span>
									<span className="block text-[0.625rem] font-medium uppercase tracking-wider text-ink-400">
										Office
									</span>
									<span className="text-sm font-semibold text-ink-800">
										{CONTACT.street}
									</span>
									<span className="block text-xs text-ink-400">
										{CONTACT.city}, {CONTACT.country}
									</span>
								</span>
							</a>
						</div>

						<div className="rounded-xl bg-linear-to-br from-brand-800 to-brand-600 p-6 text-white shadow-md">
							<div className="flex items-center gap-3">
								<span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
									<Clock size={16} aria-hidden="true" />
								</span>
								<span>
									<span className="block text-[0.625rem] font-medium uppercase tracking-wider text-white/55">
										Response time
									</span>
									<span className="text-sm font-semibold">
										Within {CONTACT.responseWindow}
									</span>
								</span>
							</div>
							<p className="mt-4 text-xs leading-relaxed text-white/65">
								Our team reviews every inquiry personally and responds within one
								business day.
							</p>
						</div>

						<nav
							aria-label="Quick links"
							className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-ink-200/80"
						>
							<h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-500">
								Quick Links
							</h2>
							<ul>
								{QUICK_LINKS.map(({ label, href }) => (
									<li key={href}>
										<Link
											href={href}
											className="group flex min-h-11 items-center justify-between text-sm text-ink-600 transition-colors hover:text-brand-600"
										>
											{label}
											<ArrowRight
												size={14}
												aria-hidden="true"
												className="text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600"
											/>
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</Reveal>
				</div>
			</Section>
		</>
	);
}
