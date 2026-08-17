import { cn } from "@/lib/cn";

type Tone = "light" | "sunken" | "dark";

const TONES: Record<Tone, string> = {
	light: "bg-white text-ink-800",
	sunken: "bg-ink-50 text-ink-800",
	dark: "bg-ink-950 text-white",
};

interface SectionProps {
	id?: string;
	tone?: Tone;
	className?: string;
	/** Renders children edge-to-edge instead of inside the page container. */
	bleed?: boolean;
	children: React.ReactNode;
	"aria-label"?: string;
}

export function Section({
	id,
	tone = "light",
	className,
	bleed = false,
	children,
	...rest
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn("relative isolate overflow-hidden section-y", TONES[tone], className)}
			{...rest}
		>
			<div
				aria-hidden="true"
				className={cn(
					"pointer-events-none absolute inset-0 -z-10",
					tone === "dark" ? "grid-overlay" : "grid-overlay-light",
				)}
			/>
			{bleed ? children : <div className="container-page">{children}</div>}
		</section>
	);
}

export function Eyebrow({
	children,
	tone = "light",
	className,
}: {
	children: React.ReactNode;
	tone?: "light" | "dark";
	className?: string;
}) {
	return (
		<p
			className={cn(
				"inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em]",
				tone === "dark" ? "text-accent-400" : "text-brand-600",
				className,
			)}
		>
			<span
				aria-hidden="true"
				className={cn(
					"h-px w-7 rounded-full",
					tone === "dark"
						? "bg-linear-to-r from-accent-400 to-accent-400/0"
						: "bg-linear-to-r from-brand-600 to-brand-600/0",
				)}
			/>
			{children}
		</p>
	);
}

interface SectionHeadingProps {
	eyebrow?: string;
	title: React.ReactNode;
	lead?: React.ReactNode;
	tone?: "light" | "dark";
	align?: "start" | "center";
	className?: string;
	/** Rendered to the right of the heading on wide screens (e.g. a CTA). */
	action?: React.ReactNode;
}

export function SectionHeading({
	eyebrow,
	title,
	lead,
	tone = "light",
	align = "start",
	className,
	action,
}: SectionHeadingProps) {
	const centered = align === "center";

	return (
		<div
			className={cn(
				"flex flex-col gap-6",
				action && "lg:flex-row lg:items-end lg:justify-between",
				className,
			)}
		>
			<div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
				{eyebrow && (
					<Eyebrow tone={tone} className={cn("mb-4", centered && "justify-center")}>
						{eyebrow}
					</Eyebrow>
				)}
				<h2
					className={cn(
						"text-display-lg font-extrabold",
						tone === "dark" ? "text-white" : "text-ink-900",
					)}
				>
					{title}
				</h2>
				{lead && (
					<p
						className={cn(
							"mt-4 text-base leading-relaxed",
							tone === "dark" ? "text-white/60" : "text-ink-500",
							centered && "mx-auto",
						)}
					>
						{lead}
					</p>
				)}
			</div>
			{action && <div className="flex shrink-0 flex-wrap gap-3">{action}</div>}
		</div>
	);
}
