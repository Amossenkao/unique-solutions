import {
	Building2,
	GraduationCap,
	Landmark,
	Network,
	ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { BRAND } from "@/lib/site";

const SIGNALS = [
	{ icon: Landmark, value: "Gov", label: "Public-sector delivery" },
	{ icon: Building2, value: "Banking", label: "Financial infrastructure" },
	{ icon: GraduationCap, value: "Schools", label: "Managed lab programs" },
	{ icon: ShieldCheck, value: "Secure", label: "Endpoint and firewall work" },
];

const ORGANIZATION_TYPES = [
	"Healthcare Institutions",
	"Government Agencies",
	"Banking & Finance",
	"Higher Education",
	"Telecommunications",
	"Universities & Colleges",
	"Public Sector",
	"Schools & Academies",
];

export default function TrustBar() {
	return (
		<section
			className="relative isolate overflow-hidden bg-white py-14"
			aria-label="Trusted organizations"
		>
			<div className="container-page">
				<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
					<Reveal>
						<SectionHeading
							eyebrow="Trusted delivery"
							title="Systems institutions depend on."
							lead={`${BRAND.name} combines software engineering, infrastructure, cybersecurity and support for organizations across ${BRAND.country}.`}
						/>
					</Reveal>

					<RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-4">
						{SIGNALS.map(({ icon, value, label }) => (
							<div
								key={label}
								className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-ink-200/80"
							>
								<IconTile icon={icon} size="sm" />
								<p className="mt-3 font-display text-base font-extrabold text-ink-900">
									{value}
								</p>
								<p className="mt-1 text-[0.6875rem] font-medium uppercase tracking-wide text-ink-400">
									{label}
								</p>
							</div>
						))}
					</RevealGroup>
				</div>
			</div>

			{/* Scrolling sector strip. The list is duplicated to make the loop
			    seamless; the copy is hidden from assistive tech. */}
			<div className="relative mt-12 overflow-hidden bg-ink-950 py-4">
				<div aria-hidden="true" className="absolute inset-0 grid-overlay" />
				<div
					aria-hidden="true"
					className="absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-ink-950 to-transparent"
				/>
				<div
					aria-hidden="true"
					className="absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-ink-950 to-transparent"
				/>

				<ul className="marquee-track relative hover:[animation-play-state:paused]">
					{[0, 1].map((pass) => (
						<li key={pass} aria-hidden={pass === 1 ? "true" : undefined}>
							<ul className="flex">
								{ORGANIZATION_TYPES.map((type) => (
									<li
										key={type}
										className="mx-1.5 inline-flex items-center gap-2.5 whitespace-nowrap rounded-lg bg-white/6 px-4 py-2.5 ring-1 ring-white/10"
									>
										<Network size={14} className="text-accent-400" aria-hidden="true" />
										<span className="text-xs font-bold uppercase tracking-[0.1em] text-white/70">
											{type}
										</span>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
