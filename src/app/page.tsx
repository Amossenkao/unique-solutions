import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import TrustBar from "@/components/home/TrustBar";
import CapabilityTabs from "@/components/home/CapabilityTabs";
import CtaSection from "@/components/site/CtaSection";
import Button from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, IconTile } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { BRAND, SERVICE_LINKS, SOLUTION_LINKS } from "@/lib/site";

export default function HomePage() {
	return (
		<>
			<Hero />
			<IntroSection />
			<TrustBar />
			<CapabilityTabs />

			{/* ── Service directory ── */}
			<Section tone="light">
				<Reveal>
					<SectionHeading
						align="center"
						eyebrow="What We Do"
						title="Comprehensive technology solutions."
						lead={`From software development to cybersecurity, we deliver end-to-end IT solutions that drive digital transformation across ${BRAND.country}.`}
					/>
				</Reveal>

				<RevealGroup className="auto-grid [--col:19rem] mt-12">
					{SERVICE_LINKS.map(({ icon, label, href, description }) => (
						<Card key={href} href={href} className="flex flex-col">
							<IconTile
								icon={icon}
								className="transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600"
							/>
							<h3 className="mt-5 text-display-xs font-bold text-ink-900">{label}</h3>
							<p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-500">
								{description}
							</p>
							<span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-brand-600">
								Learn more
								<ArrowRight
									size={14}
									aria-hidden="true"
									className="transition-transform group-hover:translate-x-1"
								/>
							</span>
						</Card>
					))}
				</RevealGroup>
			</Section>

			{/* ── Solution directory ── */}
			<Section tone="sunken">
				<Reveal>
					<SectionHeading
						eyebrow="Technology Solutions"
						title="Purpose-built solutions."
						lead="Specialized platforms and systems designed for education, enterprise and institutional needs."
						action={
							<Button href="/solutions" className="group">
								View All Solutions
								<ArrowRight
									size={15}
									aria-hidden="true"
									className="transition-transform group-hover:translate-x-1"
								/>
							</Button>
						}
					/>
				</Reveal>

				<RevealGroup className="auto-grid [--col:15rem] mt-12">
					{SOLUTION_LINKS.map(({ icon, label, href, description }) => (
						<Card key={href} href={href} className="flex flex-col">
							<IconTile
								icon={icon}
								size="sm"
								className="transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600"
							/>
							<h3 className="mt-4 text-sm font-bold text-ink-900">{label}</h3>
							<p className="mt-2 flex-1 text-xs leading-relaxed text-ink-500">
								{description}
							</p>
						</Card>
					))}
				</RevealGroup>
			</Section>

			<CtaSection
				eyebrow="Get Started"
				title={
					<>
						Ready to transform your <span className="text-accent-400">technology</span>?
					</>
				}
				lead={`Whether you need a modern website, secure infrastructure, managed computer labs or enterprise equipment, ${BRAND.name} is your trusted partner in ${BRAND.country}.`}
				primary={{ label: "Start a Project", href: "/contact" }}
				secondary={{ label: "Explore Services", href: "/services" }}
			/>
		</>
	);
}
