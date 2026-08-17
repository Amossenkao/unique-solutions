"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { usePartnerDialog } from "@/components/partner/PartnerDialogProvider";
import { BRAND, NAV, type NavItem } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Header() {
	const pathname = usePathname();
	const { open: openPartnerDialog } = usePartnerDialog();

	const [isScrolled, setIsScrolled] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [drawerSection, setDrawerSection] = useState<string | null>(null);
	const [lastPathname, setLastPathname] = useState(pathname);

	/* Navigating closes every open surface. Adjusting during render rather than
	   in an effect avoids a flash of the old menu on the new page. */
	if (pathname !== lastPathname) {
		setLastPathname(pathname);
		setDrawerOpen(false);
		setOpenMenu(null);
		setDrawerSection(null);
	}

	const navRef = useRef<HTMLElement>(null);
	const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	// Scroll state, sampled once per frame rather than per scroll event.
	useEffect(() => {
		let frame = 0;

		const onScroll = () => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				setIsScrolled(window.scrollY > 16);
			});
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			if (frame) cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	// Lock body scroll behind the mobile drawer.
	useEffect(() => {
		if (!drawerOpen) return;
		const { overflow } = document.body.style;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = overflow;
		};
	}, [drawerOpen]);

	// Escape closes whichever surface is open.
	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key !== "Escape") return;
			setOpenMenu(null);
			setDrawerOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	// Pointer outside the nav closes any open dropdown.
	useEffect(() => {
		if (!openMenu) return;
		const onPointerDown = (event: PointerEvent) => {
			if (!navRef.current?.contains(event.target as Node)) setOpenMenu(null);
		};
		document.addEventListener("pointerdown", onPointerDown);
		return () => document.removeEventListener("pointerdown", onPointerDown);
	}, [openMenu]);

	useEffect(() => () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
	}, []);

	const hoverOpen = useCallback((label: string) => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setOpenMenu(label);
	}, []);

	// Small grace period so the pointer can cross the gap to the panel.
	const hoverClose = useCallback(() => {
		closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
	}, []);

	const isActive = (item: NavItem) =>
		item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

	// Every page opens on a dark hero, so the bar can float transparently at
	// the top and become opaque only once the user scrolls past it.
	const floating = !isScrolled && !drawerOpen;

	return (
		<>
			<header
				className={cn(
					"fixed inset-x-0 top-0 z-50 h-(--header-h)",
					"transition-[background-color,box-shadow,backdrop-filter] duration-(--duration-base) ease-(--ease-out-soft)",
					floating
						? "bg-transparent"
						: "bg-white/85 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-white/75",
				)}
			>
				<div className="container-page flex h-full items-center justify-between gap-4">
					<Link
						href="/"
						aria-label={`${BRAND.name} home`}
						className="flex shrink-0 items-center gap-2.5"
					>
						<span className="flex size-10 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5">
							<Image
								src="/images/logo.jpg"
								alt=""
								width={40}
								height={40}
								className="size-full object-cover"
								priority
							/>
						</span>
						<span className="flex flex-col leading-none">
							<span
								className={cn(
									"font-display text-lg font-extrabold tracking-tight transition-colors",
									floating ? "text-white" : "text-brand-800",
								)}
							>
								{BRAND.name}
							</span>
							<span
								className={cn(
									"mt-1 text-[0.625rem] font-medium uppercase tracking-[0.12em] transition-colors",
									floating ? "text-white/60" : "text-ink-500",
								)}
							>
								{BRAND.tagline}
							</span>
						</span>
					</Link>

					{/* ── Desktop navigation ── */}
					<nav
						ref={navRef}
						aria-label="Main"
						className="hidden items-center gap-0.5 lg:flex"
					>
						{NAV.map((item) => {
							const active = isActive(item);

							if (!item.children) {
								return (
									<Link
										key={item.href}
										href={item.href}
										aria-current={active ? "page" : undefined}
										className={cn(
											"rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
											navLinkClass(floating, active),
										)}
									>
										{item.label}
									</Link>
								);
							}

							const expanded = openMenu === item.label;

							return (
								<div
									key={item.href}
									className="relative"
									onMouseEnter={() => hoverOpen(item.label)}
									onMouseLeave={hoverClose}
								>
									<button
										type="button"
										aria-expanded={expanded}
										aria-haspopup="true"
										onClick={() => setOpenMenu(expanded ? null : item.label)}
										className={cn(
											"inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
											navLinkClass(floating, active),
										)}
									>
										{item.label}
										<ChevronDown
											size={14}
											aria-hidden="true"
											className={cn(
												"transition-transform duration-(--duration-fast)",
												expanded && "rotate-180",
											)}
										/>
									</button>

									{expanded && (
										<div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2.5">
											<div className="w-[22rem] overflow-hidden rounded-xl bg-white p-2 shadow-xl ring-1 ring-ink-200/70 animate-scale-in">
												{item.children.map((child) => (
													<Link
														key={child.href}
														href={child.href}
														onClick={() => setOpenMenu(null)}
														className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-brand-50"
													>
														<span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-ink-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
															<child.icon size={15} aria-hidden="true" />
														</span>
														<span>
															<span className="block text-sm font-semibold text-ink-800">
																{child.label}
															</span>
															<span className="mt-0.5 block text-xs leading-snug text-ink-500">
																{child.description}
															</span>
														</span>
													</Link>
												))}
												<Link
													href={item.href}
													onClick={() => setOpenMenu(null)}
													className="mt-1 flex items-center gap-1.5 border-t border-ink-100 px-2.5 pb-1 pt-3 text-xs font-bold text-brand-600 transition-colors hover:text-brand-800"
												>
													View all {item.label.toLowerCase()}
													<ChevronRight size={13} aria-hidden="true" />
												</Link>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</nav>

					<div className="flex items-center gap-2">
						{/* Visibility lives on this wrapper, not on the Button. Button's
						    own `inline-flex` is emitted after `hidden` in Tailwind's
						    stylesheet, so a `hidden` passed straight to it loses. */}
						<div className="hidden lg:block">
							<Button
								type="button"
								onClick={openPartnerDialog}
								variant={floating ? "inverse" : "primary"}
								size="sm"
							>
								Partner With Us
							</Button>
						</div>

						<button
							type="button"
							onClick={() => setDrawerOpen(true)}
							aria-label="Open menu"
							aria-expanded={drawerOpen}
							aria-controls="mobile-nav"
							className={cn(
								"flex size-11 cursor-pointer items-center justify-center rounded-lg transition-colors lg:hidden",
								floating
									? "text-white hover:bg-white/12"
									: "text-ink-700 hover:bg-ink-100",
							)}
						>
							<Menu size={22} aria-hidden="true" />
						</button>
					</div>
				</div>
			</header>

			{/* ── Mobile drawer ── */}
			<div
				className={cn(
					"fixed inset-0 z-[60] bg-ink-950/50 backdrop-blur-sm transition-opacity duration-(--duration-base) lg:hidden",
					drawerOpen ? "opacity-100" : "pointer-events-none opacity-0",
				)}
				aria-hidden="true"
				onClick={() => setDrawerOpen(false)}
			/>

			<div
				id="mobile-nav"
				role="dialog"
				aria-modal="true"
				aria-label="Navigation menu"
				className={cn(
					"fixed inset-y-0 right-0 z-[70] flex h-dvh w-[min(78vw,18rem)] flex-col bg-white shadow-xl lg:hidden",
					"transition-transform duration-(--duration-base) ease-(--ease-out-soft)",
					drawerOpen ? "translate-x-0" : "translate-x-full",
				)}
				/* Keeps the off-screen drawer out of the tab order and the
				   accessibility tree while it is closed. */
				inert={!drawerOpen}
			>
				<div className="flex h-(--header-h) shrink-0 items-center justify-between border-b border-ink-100 px-(--gutter)">
					<span className="flex items-center gap-2.5">
						<span className="flex size-9 items-center justify-center overflow-hidden rounded-lg ring-1 ring-black/5">
							<Image
								src="/images/logo.jpg"
								alt=""
								width={36}
								height={36}
								className="size-full object-cover"
							/>
						</span>
						<span className="flex flex-col leading-none">
							<span className="font-display text-base font-extrabold text-brand-800">
								{BRAND.name}
							</span>
							<span className="mt-1 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-ink-400">
								{BRAND.tagline}
							</span>
						</span>
					</span>
					<button
						type="button"
						onClick={() => setDrawerOpen(false)}
						aria-label="Close menu"
						className="flex size-10 cursor-pointer items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-ink-100"
					>
						<X size={20} aria-hidden="true" />
					</button>
				</div>

				<nav aria-label="Mobile" className="flex-1 overflow-y-auto p-(--gutter)">
					<ul className="flex flex-col gap-1.5">
						{NAV.map((item) => {
							const active = isActive(item);

							if (!item.children) {
								return (
									<li key={item.href}>
										<Link
											href={item.href}
											aria-current={active ? "page" : undefined}
											className={cn(
												"flex min-h-12 items-center justify-between rounded-lg px-4 text-sm font-semibold transition-colors",
												active
													? "bg-brand-50 text-brand-700 ring-1 ring-brand-200"
													: "text-ink-700 hover:bg-ink-50",
											)}
										>
											{item.label}
											<ChevronRight size={15} className="text-ink-300" aria-hidden="true" />
										</Link>
									</li>
								);
							}

							const expanded = drawerSection === item.label;

							return (
								<li key={item.href} className="rounded-lg ring-1 ring-ink-200">
									<button
										type="button"
										aria-expanded={expanded}
										onClick={() => setDrawerSection(expanded ? null : item.label)}
										className={cn(
											"flex min-h-12 w-full cursor-pointer items-center justify-between rounded-lg px-4 text-sm font-semibold transition-colors",
											active ? "text-brand-700" : "text-ink-700",
										)}
									>
										{item.label}
										<ChevronDown
											size={15}
											aria-hidden="true"
											className={cn(
												"text-ink-400 transition-transform duration-(--duration-fast)",
												expanded && "rotate-180",
											)}
										/>
									</button>

									{expanded && (
										<div className="border-t border-ink-100 p-2">
											{item.children.map((child) => (
												<Link
													key={child.href}
													href={child.href}
													className="flex min-h-11 items-center gap-2.5 rounded-md px-2.5 text-xs font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
												>
													<child.icon
														size={15}
														className="shrink-0 text-brand-600"
														aria-hidden="true"
													/>
													{child.label}
												</Link>
											))}
											<Link
												href={item.href}
												className="flex min-h-11 items-center gap-1.5 rounded-md px-2.5 text-xs font-bold text-brand-600"
											>
												View all {item.label.toLowerCase()}
												<ChevronRight size={12} aria-hidden="true" />
											</Link>
										</div>
									)}
								</li>
							);
						})}
					</ul>
				</nav>

				<div className="shrink-0 border-t border-ink-100 p-(--gutter)">
					<Button
						type="button"
						onClick={() => {
							setDrawerOpen(false);
							openPartnerDialog();
						}}
						className="w-full"
						size="lg"
					>
						Partner With Us
					</Button>
				</div>
			</div>
		</>
	);
}

function navLinkClass(floating: boolean, active: boolean) {
	if (floating) {
		return active
			? "bg-white/15 text-white"
			: "text-white/75 hover:bg-white/10 hover:text-white";
	}
	return active
		? "bg-brand-50 text-brand-700"
		: "text-ink-600 hover:bg-ink-100 hover:text-ink-900";
}
