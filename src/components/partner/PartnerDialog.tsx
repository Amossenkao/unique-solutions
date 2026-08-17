"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
	ArrowRight,
	Building2,
	Check,
	CheckCircle2,
	ChevronLeft,
	Code2,
	GraduationCap,
	Loader2,
	Mail,
	Network,
	PackageCheck,
	Phone,
	ShieldCheck,
	X,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { IconTile } from "@/components/ui/Card";
import { BRAND, CONTACT, telHref } from "@/lib/site";
import { cn } from "@/lib/cn";

type ClientType = "enterprise" | "education";
type Step = 1 | 2 | 3;

const EDUCATION_SOLUTIONS = [
	"NComputing Thin-Client Lab",
	"Solar Power Systems",
	"Trained IT Instructors",
	"Curriculum / Syllabi Integration",
];

const PROJECT_NEEDS = [
	"Websites, Portals & API Development",
	"Network Infrastructure (LAN/WAN)",
	"ICT Equipment Supply",
	"Solar / Power Backup Systems",
	"Cyber Security & Endpoint Protection",
	"Managed IT Services",
	"Other",
];

const ENROLLMENT_RANGES = [
	"Under 100 students",
	"100 – 300 students",
	"301 – 600 students",
	"601 – 1,000 students",
	"Over 1,000 students",
];

const SIGNALS = [
	{ icon: Code2, label: "Web platforms" },
	{ icon: Network, label: "ICT infrastructure" },
	{ icon: PackageCheck, label: "Equipment supply" },
	{ icon: ShieldCheck, label: "Security support" },
];

/* Includes anchors — omitting them let Tab escape the dialog through links. */
const FOCUSABLE =
	'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

const EMPTY_ENTERPRISE = {
	orgName: "",
	contactName: "",
	contactTitle: "",
	workEmail: "",
	phone: "",
	projectNeed: "",
	scopeDetails: "",
};

const EMPTY_EDUCATION = {
	institutionName: "",
	repName: "",
	repTitle: "",
	email: "",
	phone: "",
	enrollment: "",
	additionalContext: "",
};

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export default function PartnerDialog({ isOpen, onClose }: Props) {
	const [step, setStep] = useState<Step>(1);
	const [clientType, setClientType] = useState<ClientType | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [enterprise, setEnterprise] = useState(EMPTY_ENTERPRISE);
	const [education, setEducation] = useState(EMPTY_EDUCATION);
	const [solutions, setSolutions] = useState<string[]>([]);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const dialogRef = useRef<HTMLDivElement>(null);
	const closeRef = useRef<HTMLButtonElement>(null);

	const reset = useCallback(() => {
		setStep(1);
		setClientType(null);
		setIsSubmitting(false);
		setEnterprise(EMPTY_ENTERPRISE);
		setEducation(EMPTY_EDUCATION);
		setSolutions([]);
		setErrors({});
	}, []);

	const handleClose = useCallback(() => {
		onClose();
		// Clear after the close transition so the form doesn't visibly reset.
		window.setTimeout(reset, 250);
	}, [onClose, reset]);

	// Lock scroll and move focus into the dialog while it is open.
	useEffect(() => {
		if (!isOpen) return;

		const { overflow } = document.body.style;
		document.body.style.overflow = "hidden";
		closeRef.current?.focus();

		return () => {
			document.body.style.overflow = overflow;
		};
	}, [isOpen]);

	// Escape closes. Bound only while open, and re-bound only when the
	// handler identity actually changes.
	useEffect(() => {
		if (!isOpen) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") handleClose();
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isOpen, handleClose]);

	const trapFocus = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key !== "Tab" || !dialogRef.current) return;

		const nodes = Array.from(
			dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
		).filter((node) => node.offsetParent !== null);

		if (nodes.length === 0) return;

		const first = nodes[0];
		const last = nodes[nodes.length - 1];

		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}, []);

	const validate = () => {
		const next: Record<string, string> = {};

		if (clientType === "enterprise") {
			if (!enterprise.orgName.trim()) next.orgName = "Organization name is required.";
			if (!enterprise.contactName.trim()) next.contactName = "Contact name is required.";
			if (!enterprise.workEmail.includes("@")) next.workEmail = "A valid email is required.";
			if (!enterprise.phone.trim()) next.phone = "Phone number is required.";
			if (!enterprise.projectNeed) next.projectNeed = "Please select a project need.";
		} else {
			if (!education.institutionName.trim())
				next.institutionName = "Institution name is required.";
			if (!education.repName.trim()) next.repName = "Representative name is required.";
			if (!education.email.includes("@")) next.email = "A valid email is required.";
			if (!education.phone.trim()) next.phone = "Phone number is required.";
			if (!education.enrollment) next.enrollment = "Please select an enrollment range.";
			if (solutions.length === 0) next.solutions = "Select at least one solution.";
		}

		return next;
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const found = validate();

		if (Object.keys(found).length > 0) {
			setErrors(found);
			// Move the user to the first problem rather than leaving them to hunt.
			dialogRef.current
				?.querySelector<HTMLElement>("[data-field-error] input, [data-field-error] select")
				?.focus();
			return;
		}

		setErrors({});
		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 1200));
		setIsSubmitting(false);
		setStep(3);
	};

	if (!isOpen) return null;

	const isEnterprise = clientType === "enterprise";

	return (
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
			role="dialog"
			aria-modal="true"
			aria-labelledby="partner-dialog-title"
			onKeyDown={trapFocus}
		>
			<button
				type="button"
				aria-label="Close dialog"
				tabIndex={-1}
				onClick={handleClose}
				className="absolute inset-0 cursor-default bg-ink-950/70 backdrop-blur-sm animate-fade-in"
			/>

			<div
				ref={dialogRef}
				className="relative grid max-h-[92dvh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl animate-scale-in lg:grid-cols-[0.85fr_1.15fr]"
			>
				{/* Context rail — desktop only; the form is the priority on mobile. */}
				<aside className="relative hidden overflow-hidden bg-ink-950 p-8 text-white lg:block">
					<div aria-hidden="true" className="absolute inset-0 grid-overlay" />
					<div className="relative flex h-full flex-col">
						<p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-400">
							Partnership intake
						</p>
						<h2
							id="partner-dialog-title"
							className="mt-4 text-display-sm font-extrabold leading-tight"
						>
							Let&apos;s scope the right {BRAND.name} team for your project.
						</h2>
						<p className="mt-4 text-sm leading-relaxed text-white/55">
							Tell us whether you are building a digital product, upgrading
							infrastructure, buying ICT equipment, or launching a school lab
							program.
						</p>

						<ul className="mt-8 grid gap-2.5">
							{SIGNALS.map(({ icon, label }) => (
								<li
									key={label}
									className="flex items-center gap-3 rounded-lg bg-white/5 p-3 ring-1 ring-white/10"
								>
									<IconTile icon={icon} tone="accent" size="sm" />
									<span className="text-sm font-semibold text-white/80">{label}</span>
								</li>
							))}
						</ul>

						<div className="mt-auto border-t border-white/10 pt-6">
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
								Direct line
							</p>
							<div className="mt-4 space-y-3">
								<a
									href={telHref(CONTACT.phones[0])}
									className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-accent-400"
								>
									<Phone size={16} aria-hidden="true" />
									{CONTACT.phones[0]}
								</a>
								<a
									href={`mailto:${CONTACT.email}`}
									className="flex items-center gap-3 break-all text-sm text-white/70 transition-colors hover:text-accent-400"
								>
									<Mail size={16} className="shrink-0" aria-hidden="true" />
									{CONTACT.email}
								</a>
							</div>
						</div>
					</div>
				</aside>

				<div className="flex min-h-0 flex-col">
					<header className="flex items-start justify-between gap-4 border-b border-ink-100 px-5 py-4 sm:px-7">
						<div>
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
								{step === 3 ? "Request received" : `Step ${step} of 2`}
							</p>
							{/* Only heading on mobile; the rail owns the labelled title on desktop. */}
							<p className="mt-1 text-display-xs font-bold text-ink-900 lg:hidden">
								Partner With {BRAND.name}
							</p>
							<p className="mt-1 hidden text-display-xs font-bold text-ink-900 lg:block">
								{step === 3
									? "We have what we need to begin."
									: step === 1
										? "Choose the partnership path."
										: isEnterprise
											? "Enterprise project details."
											: "School lab program details."}
							</p>
						</div>
						<button
							ref={closeRef}
							type="button"
							onClick={handleClose}
							aria-label="Close dialog"
							className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-700"
						>
							<X size={19} aria-hidden="true" />
						</button>
					</header>

					{step !== 3 && (
						<div className="h-1 bg-ink-100" role="presentation">
							<div
								className="h-full bg-brand-600 transition-[width] duration-(--duration-slow) ease-(--ease-out-soft)"
								style={{ width: step === 1 ? "50%" : "100%" }}
							/>
						</div>
					)}

					<form
						onSubmit={handleSubmit}
						noValidate
						className="flex min-h-0 flex-1 flex-col"
					>
						<div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-7">
							{step === 1 && (
								<div className="space-y-3 animate-fade-in">
									<p className="text-sm leading-relaxed text-ink-500">
										Choose the closest fit. We use this to shape the questions and
										route your request.
									</p>

									<PathButton
										icon={Building2}
										title="Enterprise, NGO, Government, or Business"
										copy="Websites, portals, APIs, network infrastructure, cybersecurity, solar systems, ICT equipment procurement, and managed IT support."
										onClick={() => {
											setClientType("enterprise");
											setStep(2);
											setErrors({});
										}}
									/>
									<PathButton
										icon={GraduationCap}
										accent
										title="School, College, or University"
										copy="Managed computer labs, NComputing deployments, instructor staffing, curriculum integration, maintenance, and student fee program setup."
										onClick={() => {
											setClientType("education");
											setStep(2);
											setErrors({});
										}}
									/>
								</div>
							)}

							{step === 2 && isEnterprise && (
								<div className="space-y-4 animate-fade-in">
									<div className="grid gap-4 sm:grid-cols-2">
										<Field label="Organization Name" error={errors.orgName} required>
											<input
												type="text"
												placeholder="e.g. Your organization name"
												autoComplete="organization"
												value={enterprise.orgName}
												onChange={(e) =>
													setEnterprise((p) => ({ ...p, orgName: e.target.value }))
												}
												className={fieldClass(errors.orgName)}
											/>
										</Field>
										<Field label="Contact Person" error={errors.contactName} required>
											<input
												type="text"
												placeholder="Full name"
												autoComplete="name"
												value={enterprise.contactName}
												onChange={(e) =>
													setEnterprise((p) => ({ ...p, contactName: e.target.value }))
												}
												className={fieldClass(errors.contactName)}
											/>
										</Field>
									</div>

									<div className="grid gap-4 sm:grid-cols-2">
										<Field label="Job Title">
											<input
												type="text"
												placeholder="e.g. IT Director"
												autoComplete="organization-title"
												value={enterprise.contactTitle}
												onChange={(e) =>
													setEnterprise((p) => ({ ...p, contactTitle: e.target.value }))
												}
												className={fieldClass()}
											/>
										</Field>
										<Field label="Phone Number" error={errors.phone} required>
											<input
												type="tel"
												placeholder="+231 ..."
												autoComplete="tel"
												value={enterprise.phone}
												onChange={(e) =>
													setEnterprise((p) => ({ ...p, phone: e.target.value }))
												}
												className={fieldClass(errors.phone)}
											/>
										</Field>
									</div>

									<Field label="Work Email" error={errors.workEmail} required>
										<input
											type="email"
											placeholder="you@organization.com"
											autoComplete="email"
											value={enterprise.workEmail}
											onChange={(e) =>
												setEnterprise((p) => ({ ...p, workEmail: e.target.value }))
											}
											className={fieldClass(errors.workEmail)}
										/>
									</Field>

									<Field label="Core Project Need" error={errors.projectNeed} required>
										<select
											value={enterprise.projectNeed}
											onChange={(e) =>
												setEnterprise((p) => ({ ...p, projectNeed: e.target.value }))
											}
											className={cn(fieldClass(errors.projectNeed), "cursor-pointer")}
										>
											<option value="">Select a category...</option>
											{PROJECT_NEEDS.map((need) => (
												<option key={need} value={need}>
													{need}
												</option>
											))}
										</select>
									</Field>

									<Field label="Project Scope Details">
										<textarea
											rows={4}
											placeholder="Briefly describe requirements, timeline, current systems, or decision context..."
											value={enterprise.scopeDetails}
											onChange={(e) =>
												setEnterprise((p) => ({ ...p, scopeDetails: e.target.value }))
											}
											className={cn(fieldClass(), "resize-none")}
										/>
									</Field>
								</div>
							)}

							{step === 2 && !isEnterprise && (
								<div className="space-y-4 animate-fade-in">
									<div className="grid gap-4 sm:grid-cols-2">
										<Field
											label="Institution Name"
											error={errors.institutionName}
											required
										>
											<input
												type="text"
												placeholder="e.g. Your school or institution name"
												autoComplete="organization"
												value={education.institutionName}
												onChange={(e) =>
													setEducation((p) => ({ ...p, institutionName: e.target.value }))
												}
												className={fieldClass(errors.institutionName)}
											/>
										</Field>
										<Field label="Representative Name" error={errors.repName} required>
											<input
												type="text"
												placeholder="Full name"
												autoComplete="name"
												value={education.repName}
												onChange={(e) =>
													setEducation((p) => ({ ...p, repName: e.target.value }))
												}
												className={fieldClass(errors.repName)}
											/>
										</Field>
									</div>

									<div className="grid gap-4 sm:grid-cols-2">
										<Field label="Title / Role">
											<input
												type="text"
												placeholder="e.g. Principal"
												autoComplete="organization-title"
												value={education.repTitle}
												onChange={(e) =>
													setEducation((p) => ({ ...p, repTitle: e.target.value }))
												}
												className={fieldClass()}
											/>
										</Field>
										<Field label="Phone Number" error={errors.phone} required>
											<input
												type="tel"
												placeholder="+231 ..."
												autoComplete="tel"
												value={education.phone}
												onChange={(e) =>
													setEducation((p) => ({ ...p, phone: e.target.value }))
												}
												className={fieldClass(errors.phone)}
											/>
										</Field>
									</div>

									<div className="grid gap-4 sm:grid-cols-2">
										<Field label="Email Address" error={errors.email} required>
											<input
												type="email"
												placeholder="school@example.com"
												autoComplete="email"
												value={education.email}
												onChange={(e) =>
													setEducation((p) => ({ ...p, email: e.target.value }))
												}
												className={fieldClass(errors.email)}
											/>
										</Field>
										<Field label="Student Enrollment" error={errors.enrollment} required>
											<select
												value={education.enrollment}
												onChange={(e) =>
													setEducation((p) => ({ ...p, enrollment: e.target.value }))
												}
												className={cn(fieldClass(errors.enrollment), "cursor-pointer")}
											>
												<option value="">Select range...</option>
												{ENROLLMENT_RANGES.map((range) => (
													<option key={range} value={range}>
														{range}
													</option>
												))}
											</select>
										</Field>
									</div>

									<fieldset data-field-error={errors.solutions ? "" : undefined}>
										<legend className="mb-2 block text-xs font-bold uppercase tracking-wide text-ink-600">
											Solutions of Interest <span className="text-red-500">*</span>
										</legend>
										<div className="grid gap-2 sm:grid-cols-2">
											{EDUCATION_SOLUTIONS.map((solution) => {
												const checked = solutions.includes(solution);
												return (
													<button
														key={solution}
														type="button"
														aria-pressed={checked}
														onClick={() =>
															setSolutions((prev) =>
																prev.includes(solution)
																	? prev.filter((s) => s !== solution)
																	: [...prev, solution],
															)
														}
														className={cn(
															"flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-xs font-semibold transition-colors",
															checked
																? "bg-accent-50 text-accent-700 ring-1 ring-accent-400"
																: "bg-white text-ink-600 ring-1 ring-ink-200 hover:ring-accent-300",
														)}
													>
														<span
															className={cn(
																"flex size-4 shrink-0 items-center justify-center rounded",
																checked
																	? "bg-accent-500 text-white"
																	: "ring-1 ring-ink-300",
															)}
														>
															{checked && <Check size={11} strokeWidth={3} />}
														</span>
														{solution}
													</button>
												);
											})}
										</div>
										{errors.solutions && <FieldError>{errors.solutions}</FieldError>}
									</fieldset>

									<Field label="Additional Lab Context">
										<textarea
											rows={3}
											placeholder="Existing lab space, current equipment, connectivity, or special requirements..."
											value={education.additionalContext}
											onChange={(e) =>
												setEducation((p) => ({
													...p,
													additionalContext: e.target.value,
												}))
											}
											className={cn(fieldClass(), "resize-none")}
										/>
									</Field>
								</div>
							)}

							{step === 3 && (
								<div
									className="flex min-h-[22rem] flex-col items-center justify-center text-center animate-fade-in"
									role="status"
								>
									<span className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent-50 text-accent-600">
										<CheckCircle2 size={34} aria-hidden="true" />
									</span>
									<h3 className="text-display-sm font-extrabold text-ink-900">
										Thank you for reaching out.
									</h3>
									<p className="mt-3 max-w-md text-sm leading-relaxed text-ink-500">
										A {BRAND.name} representative will review your request and
										contact you within {CONTACT.responseWindow}.
									</p>
									<div className="mt-7 grid w-full max-w-md gap-3 sm:grid-cols-2">
										<a
											href={telHref(CONTACT.phones[0])}
											className="rounded-lg p-4 text-left text-sm font-semibold text-brand-700 ring-1 ring-ink-200 transition-colors hover:bg-brand-50"
										>
											<Phone size={16} className="mb-2" aria-hidden="true" />
											{CONTACT.phones[0]}
										</a>
										<a
											href={`mailto:${CONTACT.email}`}
											className="rounded-lg p-4 text-left text-sm font-semibold text-brand-700 ring-1 ring-ink-200 transition-colors hover:bg-brand-50"
										>
											<Mail size={16} className="mb-2" aria-hidden="true" />
											Email {BRAND.name}
										</a>
									</div>
									<Button
										type="button"
										onClick={handleClose}
										className="mt-7"
										size="md"
									>
										Close
									</Button>
								</div>
							)}
						</div>

						{step === 2 && (
							<footer className="flex shrink-0 items-center justify-between gap-3 border-t border-ink-100 bg-ink-50 px-5 py-4 sm:px-7">
								<button
									type="button"
									onClick={() => {
										setStep(1);
										setErrors({});
									}}
									className="inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-sm font-semibold text-ink-500 transition-colors hover:text-ink-900"
								>
									<ChevronLeft size={15} aria-hidden="true" />
									Back
								</button>
								<Button type="submit" disabled={isSubmitting} className="min-w-[9.5rem]">
									{isSubmitting ? (
										<>
											<Loader2 size={15} className="animate-spin" aria-hidden="true" />
											Submitting…
										</>
									) : (
										"Submit Inquiry"
									)}
								</Button>
							</footer>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}

/* ── Local pieces ──────────────────────────────────────────────────────── */

function fieldClass(error?: string) {
	return cn(
		"w-full rounded-lg px-3.5 py-2.5 text-sm transition-shadow",
		"placeholder:text-ink-400 focus:outline-none focus:ring-2",
		error
			? "bg-red-50 text-ink-800 ring-1 ring-red-300 focus:ring-red-400"
			: "bg-white text-ink-700 ring-1 ring-ink-200 hover:ring-ink-300 focus:ring-brand-500",
	);
}

function FieldError({ children }: { children: React.ReactNode }) {
	return <span className="mt-1 block text-xs font-medium text-red-600">{children}</span>;
}

function Field({
	label,
	error,
	required,
	children,
}: {
	label: string;
	error?: string;
	required?: boolean;
	children: React.ReactNode;
}) {
	return (
		<label className="block" data-field-error={error ? "" : undefined}>
			<span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-600">
				{label}{" "}
				{required && (
					<span className="text-red-500" aria-hidden="true">
						*
					</span>
				)}
			</span>
			{children}
			{error && <FieldError>{error}</FieldError>}
		</label>
	);
}

function PathButton({
	icon: Icon,
	title,
	copy,
	accent = false,
	onClick,
}: {
	icon: typeof Building2;
	title: string;
	copy: string;
	accent?: boolean;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={cn(
				"group grid w-full cursor-pointer gap-4 rounded-xl p-5 text-left ring-1 transition-all duration-(--duration-base) ease-(--ease-out-soft) sm:grid-cols-[auto_1fr_auto] sm:items-start",
				accent
					? "ring-ink-200 hover:bg-accent-50/60 hover:ring-accent-400"
					: "ring-ink-200 hover:bg-brand-50/60 hover:ring-brand-500",
			)}
		>
			<span
				className={cn(
					"flex size-12 items-center justify-center rounded-lg transition-colors",
					accent
						? "bg-accent-50 text-accent-600 group-hover:bg-accent-400 group-hover:text-ink-950"
						: "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white",
				)}
			>
				<Icon size={22} aria-hidden="true" />
			</span>
			<span>
				<span className="block text-display-xs font-bold text-ink-900">{title}</span>
				<span className="mt-1.5 block text-sm leading-relaxed text-ink-500">{copy}</span>
			</span>
			<ArrowRight
				size={19}
				aria-hidden="true"
				className={cn(
					"hidden self-center text-ink-300 transition-transform group-hover:translate-x-1 sm:block",
					accent ? "group-hover:text-accent-600" : "group-hover:text-brand-600",
				)}
			/>
		</button>
	);
}
