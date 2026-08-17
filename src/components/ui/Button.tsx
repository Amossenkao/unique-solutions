import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "inverse-outline";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
	primary:
		"bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-md active:bg-brand-800",
	secondary:
		"bg-white text-brand-700 ring-1 ring-inset ring-ink-200 shadow-xs hover:bg-brand-50 hover:ring-brand-200 active:bg-brand-100",
	ghost: "text-ink-600 hover:bg-ink-100 hover:text-ink-900 active:bg-ink-200",
	inverse:
		"bg-white text-ink-900 shadow-md hover:bg-accent-400 hover:text-ink-950 active:bg-accent-500",
	"inverse-outline":
		"text-white ring-1 ring-inset ring-white/25 bg-white/5 backdrop-blur-sm hover:bg-white/12 hover:ring-white/45 active:bg-white/18",
};

/* Every size clears the 44px minimum touch target. */
const SIZES: Record<Size, string> = {
	sm: "min-h-11 px-3.5 text-sm gap-1.5",
	md: "min-h-11 px-5 text-sm gap-2",
	lg: "min-h-12 px-6 text-base gap-2",
};

/* Note: BASE sets `inline-flex`, and Tailwind emits `.inline-flex` after
   `.hidden`. Passing `hidden` via `className` therefore has no effect — put
   responsive visibility on a wrapper element instead. */
const BASE =
	"inline-flex items-center justify-center rounded-lg font-semibold " +
	"transition-[background-color,box-shadow,transform,color] duration-(--duration-fast) " +
	"ease-(--ease-out-soft) hover:-translate-y-px active:translate-y-0 " +
	"disabled:pointer-events-none disabled:opacity-60 whitespace-nowrap";

interface CommonProps {
	variant?: Variant;
	size?: Size;
	className?: string;
	children: React.ReactNode;
}

type ButtonProps = CommonProps &
	Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
		href?: never;
	};

type AnchorProps = CommonProps & {
	href: string;
	/** Set for mailto:, tel: and external URLs — renders a plain anchor. */
	external?: boolean;
	target?: string;
	rel?: string;
};

export default function Button(props: ButtonProps | AnchorProps) {
	if ("href" in props && props.href !== undefined) {
		const {
			variant = "primary",
			size = "md",
			className,
			children,
			href,
			external,
			target,
			rel,
		} = props;

		const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

		// Protocol links and in-page anchors bypass the client router.
		const isPlainAnchor = external ?? /^(https?:|mailto:|tel:|#)/.test(href);

		if (isPlainAnchor) {
			return (
				<a href={href} target={target} rel={rel} className={classes}>
					{children}
				</a>
			);
		}

		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		);
	}

	const { variant = "primary", size = "md", className, children, ...rest } = props;

	return (
		<button
			className={cn(BASE, VARIANTS[variant], SIZES[size], "cursor-pointer", className)}
			{...rest}
		>
			{children}
		</button>
	);
}
