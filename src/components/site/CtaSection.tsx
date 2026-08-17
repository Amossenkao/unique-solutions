import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

interface Action {
	label: string;
	href: string;
	icon?: React.ReactNode;
}

interface CtaSectionProps {
	eyebrow?: string;
	title: React.ReactNode;
	lead: string;
	primary: Action;
	secondary?: Action;
}

/** The closing call to action. Shared by every page so the ask stays identical. */
export default function CtaSection({
	eyebrow,
	title,
	lead,
	primary,
	secondary,
}: CtaSectionProps) {
	return (
		<Section tone="dark">
			<Reveal className="mx-auto max-w-3xl text-center">
				{eyebrow && (
					<p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-400">
						{eyebrow}
					</p>
				)}
				<h2 className="mt-4 text-display-lg font-extrabold text-white">{title}</h2>
				<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
					{lead}
				</p>
				<div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
					<Button href={primary.href} variant="inverse" size="lg" className="group">
						{primary.icon}
						{primary.label}
						<ArrowRight
							size={17}
							aria-hidden="true"
							className="transition-transform group-hover:translate-x-1"
						/>
					</Button>
					{secondary && (
						<Button
							href={secondary.href}
							variant="inverse-outline"
							size="lg"
							className="group"
						>
							{secondary.icon}
							{secondary.label}
							<ArrowRight
								size={17}
								aria-hidden="true"
								className="transition-transform group-hover:translate-x-1"
							/>
						</Button>
					)}
				</div>
			</Reveal>
		</Section>
	);
}
