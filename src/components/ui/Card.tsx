import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type CardTone = "light" | "dark";

const TONE_CLASSES: Record<CardTone, string> = {
	light: "bg-white ring-1 ring-ink-200/80 text-ink-800",
	dark: "bg-white/4 ring-1 ring-white/10 text-white/80",
};

const HOVER_CLASSES: Record<CardTone, string> = {
	light: "hover:-translate-y-1 hover:shadow-lg hover:ring-brand-300/70",
	dark: "hover:-translate-y-1 hover:bg-white/7 hover:ring-accent-400/40",
};

interface CardProps {
	tone?: CardTone;
	/** Adds lift-on-hover. Implied when `href` is set. */
	interactive?: boolean;
	href?: string;
	className?: string;
	children: React.ReactNode;
}

export function Card({
	tone = "light",
	interactive = false,
	href,
	className,
	children,
}: CardProps) {
	const classes = cn(
		"relative rounded-xl p-5 sm:p-6",
		"transition-[transform,box-shadow,background-color] duration-(--duration-base) ease-(--ease-out-soft)",
		TONE_CLASSES[tone],
		(interactive || href) && HOVER_CLASSES[tone],
		href && "group block",
		className,
	);

	if (href) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		);
	}

	return <div className={classes}>{children}</div>;
}

/** The square icon chip used at the top of most cards. */
export function IconTile({
	icon: Icon,
	tone = "light",
	size = "md",
	className,
}: {
	icon: LucideIcon;
	tone?: CardTone | "accent";
	size?: "sm" | "md";
	className?: string;
}) {
	const box = size === "sm" ? "size-9" : "size-11";
	const glyph = size === "sm" ? 16 : 20;

	const tones = {
		light: "bg-brand-50 text-brand-600 ring-1 ring-brand-100",
		dark: "bg-white/6 text-accent-400 ring-1 ring-white/10",
		accent: "bg-accent-400 text-ink-950",
	} as const;

	return (
		<span
			className={cn(
				"inline-flex shrink-0 items-center justify-center rounded-lg",
				box,
				tones[tone],
				className,
			)}
		>
			<Icon size={glyph} aria-hidden="true" />
		</span>
	);
}

export function Tag({
	children,
	tone = "light",
}: {
	children: React.ReactNode;
	tone?: CardTone;
}) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-md px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide",
				tone === "dark"
					? "bg-white/6 text-white/70 ring-1 ring-white/10"
					: "bg-ink-50 text-ink-600 ring-1 ring-ink-200",
			)}
		>
			{children}
		</span>
	);
}
