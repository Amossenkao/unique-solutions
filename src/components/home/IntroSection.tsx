import {
	Building2,
	Globe2,
	Handshake,
	HeartHandshake,
	Lightbulb,
	ShieldCheck,
	Target,
	UsersRound,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, IconTile } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { BRAND, TECH_PARTNERS, SECTORS } from "@/lib/site";

const PILLARS = [
	{
		icon: Target,
		title: "Mission",
		copy: "We empower organizations to thrive in the digital age with technology that enhances efficiency and drives measurable growth.",
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		copy: "From thin-client labs to cloud infrastructure, we bring modern, practical technology to organizations that need results, not just products.",
	},
	{
		icon: HeartHandshake,
		title: "Partnership",
		copy: `We build long-term relationships with institutions, schools and government agencies across ${BRAND.country}, treating every project as a shared commitment.`,
	},
];

const CAPABILITIES = [
	{ icon: Globe2, label: "Web & Software Development" },
	{ icon: ShieldCheck, label: "Cybersecurity Advisory" },
	{ icon: Building2, label: "Network Infrastructure" },
	{ icon: UsersRound, label: "Digital Literacy Programs" },
];

const STATS = [
	{ value: String(BRAND.incorporatedYear), label: "Established" },
	{ value: String(BRAND.foundedYear), label: "Programs since" },
	{ value: "12+", label: "Institutional partners" },
	{ value: "6", label: "Service verticals" },
];

export default function IntroSection() {
	return (
		<Section id="about" tone="light" aria-label={`About ${BRAND.name}`}>
			<div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
				<Reveal>
					<SectionHeading
						eyebrow={`About ${BRAND.name}`}
						title="Built for real-world impact."
					/>

					<div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-ink-500">
						<p>
							{BRAND.legalName} ({BRAND.name}) is an ICT consulting and systems
							integration firm headquartered in {BRAND.locality}, {BRAND.country}.
							Since {BRAND.foundedYear} we have partnered with schools,
							universities, hospitals, banks and government agencies to deliver
							technology that works in the local context.
						</p>
						<p>
							From deploying thin-client computer labs in high schools to building
							LAN infrastructure for national institutions, we combine deep
							technical expertise with an understanding of {BRAND.country}&apos;s
							operational realities.
						</p>
					</div>

					<dl className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
						{STATS.map(({ value, label }) => (
							<div key={label} className="rounded-lg bg-ink-50 p-4 ring-1 ring-ink-200/70">
								<dt className="sr-only">{label}</dt>
								<dd>
									<span className="block font-display text-2xl font-extrabold text-brand-600">
										{value}
									</span>
									<span className="mt-1 block text-[0.6875rem] font-semibold uppercase tracking-wide text-ink-400">
										{label}
									</span>
								</dd>
							</div>
						))}
					</dl>
				</Reveal>

				<Reveal>
					<RevealGroup className="space-y-3">
						{PILLARS.map(({ icon, title, copy }) => (
							<Card key={title} interactive>
								<div className="flex items-start gap-4">
									<IconTile icon={icon} />
									<div>
										<h3 className="text-display-xs font-bold text-ink-900">{title}</h3>
										<p className="mt-2 text-sm leading-relaxed text-ink-500">{copy}</p>
									</div>
								</div>
							</Card>
						))}
					</RevealGroup>

					{/* Dark inset — the one high-contrast moment in this section. */}
					<div className="relative mt-4 isolate overflow-hidden rounded-xl bg-ink-950 p-6 text-white shadow-lg">
						<div aria-hidden="true" className="absolute inset-0 -z-10 grid-overlay" />

						<p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
							Core capabilities
						</p>
						<h3 className="mt-2 text-display-xs font-extrabold">
							Strategy, infrastructure and code under one roof.
						</h3>

						<ul className="mt-5 grid gap-2 sm:grid-cols-2">
							{CAPABILITIES.map(({ icon: Icon, label }) => (
								<li
									key={label}
									className="flex items-center gap-2.5 rounded-lg bg-white/6 p-3 ring-1 ring-white/10"
								>
									<Icon size={15} className="shrink-0 text-accent-400" aria-hidden="true" />
									<span className="text-xs font-semibold text-white/80">{label}</span>
								</li>
							))}
						</ul>

						<div className="mt-5 flex items-start gap-3 border-t border-white/10 pt-5">
							<IconTile icon={Handshake} tone="accent" size="sm" />
							<div>
								<p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white/40">
									Technology partners
								</p>
								<p className="mt-1.5 text-xs font-medium leading-relaxed text-white/70">
									{TECH_PARTNERS.join(" · ")}
								</p>
							</div>
						</div>
					</div>
				</Reveal>
			</div>

			{/* Sector proof bar */}
			<Reveal className="mt-12">
				<div className="flex flex-col gap-5 rounded-xl bg-ink-50 p-6 ring-1 ring-ink-200/70 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-400">
							Trusted by
						</p>
						<p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500">
							We work with institutions across {BRAND.country} in healthcare, higher
							education, banking, government and telecommunications.
						</p>
					</div>
					<ul className="flex flex-wrap gap-2">
						{SECTORS.map((sector) => (
							<li
								key={sector}
								className="rounded-md bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-ink-500 ring-1 ring-ink-200"
							>
								{sector}
							</li>
						))}
					</ul>
				</div>
			</Reveal>
		</Section>
	);
}
