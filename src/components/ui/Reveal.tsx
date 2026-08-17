import { cn } from "@/lib/cn";

/**
 * Marks a block to fade/rise in when it scrolls into view.
 *
 * These are plain server components — they only add a data attribute. The
 * single `ScrollReveal` observer in the layout does the work, and the CSS in
 * globals.css keeps content visible when JS or motion is unavailable.
 */

export function Reveal({
	children,
	className,
	as: Tag = "div",
}: {
	children: React.ReactNode;
	className?: string;
	as?: "div" | "section" | "article" | "li";
}) {
	return (
		<Tag data-reveal className={className}>
			{children}
		</Tag>
	);
}

/** Staggers its direct children as they enter the viewport. */
export function RevealGroup({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div data-reveal-group className={cn(className)}>
			{children}
		</div>
	);
}
