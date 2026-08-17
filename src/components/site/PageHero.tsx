import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

interface PageHeroProps {
	eyebrow: string;
	icon: LucideIcon;
	title: React.ReactNode;
	lead: string;
	/** Optional stat strip rendered beneath the lead. */
	stats?: { value: string; label: string }[];
	/** Background wash. Each inner page gets its own so they read as distinct. */
	wash?: "blue" | "green" | "indigo";
	children?: React.ReactNode;
}

const WASHES = {
	blue: "from-brand-950 via-brand-800/60 to-ink-950",
	green: "from-accent-900 via-accent-700/40 to-ink-950",
	indigo: "from-[#0b1e46] via-brand-700/45 to-ink-950",
} as const;

/**
 * The dark hero every inner page opens with. Keeping it in one place is what
 * lets the header float transparently over the top of all five pages.
 */
export default function PageHero({
	eyebrow,
	icon: Icon,
	title,
	lead,
	stats,
	wash = "blue",
	children,
}: PageHeroProps) {
	return (
		<section className="relative isolate overflow-hidden bg-ink-950 text-white">
			<div
				aria-hidden="true"
				className={cn("absolute inset-0 -z-20 bg-linear-to-br", WASHES[wash])}
			/>
			<div aria-hidden="true" className="absolute inset-0 -z-10 grid-overlay" />
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-40 right-0 -z-10 size-[32rem] rounded-full bg-brand-500/10 blur-[120px]"
			/>

			<div className="container-page pb-(--section-y) pt-[calc(var(--header-h)+var(--section-y))]">
				<div className="mx-auto max-w-3xl text-center">
					<p className="inline-flex items-center gap-2 rounded-full bg-white/7 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75 ring-1 ring-white/12 backdrop-blur-sm">
						<Icon size={14} className="text-accent-400" aria-hidden="true" />
						{eyebrow}
					</p>

					<h1 className="mt-6 text-display-xl font-extrabold text-white">{title}</h1>

					<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
						{lead}
					</p>

					{children && <div className="mt-8">{children}</div>}

					{stats && (
						<dl className="mt-12 grid grid-cols-2 overflow-hidden rounded-xl bg-white/4 ring-1 ring-white/10 backdrop-blur-sm sm:grid-cols-4">
							{stats.map(({ value, label }) => (
								<div
									key={label}
									className="border-b border-r border-white/10 px-4 py-5 last:border-r-0 sm:border-b-0 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r"
								>
									<dt className="sr-only">{label}</dt>
									<dd>
										<span className="block font-display text-display-sm font-extrabold text-accent-400">
											{value}
										</span>
										<span className="mt-1.5 block text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white/40">
											{label}
										</span>
									</dd>
								</div>
							))}
						</dl>
					)}
				</div>
			</div>
		</section>
	);
}
