"use client";

import { useState } from "react";
import {
	Building2,
	Check,
	CheckCircle2,
	GraduationCap,
	Loader2,
	Mail,
	Phone,
	Send,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { BRAND, CONTACT, telHref } from "@/lib/site";
import { cn } from "@/lib/cn";

type PartnerType = "enterprise" | "education";

const PROJECT_NEEDS = [
	"Network Infrastructure (LAN/WAN)",
	"Solar / Power Backup Systems",
	"Software & API Development",
	"Cyber Security & Endpoint Protection",
	"ICT Equipment Supply",
	"Managed IT Services",
	"Other",
];

const EDUCATION_SOLUTIONS = [
	"NComputing Thin-Client Lab",
	"Solar Power Systems",
	"Trained IT Instructors",
	"Curriculum / Syllabi Integration",
];

const ENROLLMENT_RANGES = [
	"Under 100 students",
	"100 – 300 students",
	"301 – 600 students",
	"601 – 1,000 students",
	"Over 1,000 students",
];

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

export default function ContactForm() {
	/* Deterministic default — the previous `Math.random()` initial value
	   differed between server and client render and broke hydration. */
	const [partnerType, setPartnerType] = useState<PartnerType>("enterprise");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const [enterprise, setEnterprise] = useState(EMPTY_ENTERPRISE);
	const [education, setEducation] = useState(EMPTY_EDUCATION);
	const [solutions, setSolutions] = useState<string[]>([]);

	const isEnterprise = partnerType === "enterprise";

	const validate = () => {
		const next: Record<string, string> = {};

		if (isEnterprise) {
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
			return;
		}

		setErrors({});
		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 1400));
		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	const reset = () => {
		setIsSubmitted(false);
		setPartnerType("enterprise");
		setEnterprise(EMPTY_ENTERPRISE);
		setEducation(EMPTY_EDUCATION);
		setSolutions([]);
		setErrors({});
	};

	if (isSubmitted) {
		return (
			<div className="mx-auto max-w-2xl py-10 text-center animate-fade-in" role="status">
				<span className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-accent-50 text-accent-600">
					<CheckCircle2 size={40} aria-hidden="true" />
				</span>
				<h2 className="text-display-md font-extrabold text-ink-900">
					Thank you for reaching out.
				</h2>
				<p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-500">
					A {BRAND.name} representative will review your requirements and contact you
					within{" "}
					<span className="font-semibold text-brand-700">{CONTACT.responseWindow}</span>.
				</p>

				<div className="mt-8 inline-flex flex-col gap-5 rounded-xl bg-white px-8 py-6 shadow-sm ring-1 ring-ink-200/80 sm:flex-row sm:gap-8">
					<a href={telHref(CONTACT.phones[0])} className="group flex items-center gap-3">
						<span className="flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
							<Phone size={18} aria-hidden="true" />
						</span>
						<span className="text-left">
							<span className="block text-[0.625rem] font-medium uppercase tracking-wider text-ink-400">
								Call us
							</span>
							<span className="text-sm font-semibold text-ink-800">
								{CONTACT.phones[0]}
							</span>
						</span>
					</a>
					<a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-3">
						<span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-white">
							<Mail size={18} aria-hidden="true" />
						</span>
						<span className="min-w-0 text-left">
							<span className="block text-[0.625rem] font-medium uppercase tracking-wider text-ink-400">
								Email us
							</span>
							<span className="block break-all text-sm font-semibold text-ink-800">
								{CONTACT.email}
							</span>
						</span>
					</a>
				</div>

				<div className="mt-8">
					<button
						type="button"
						onClick={reset}
						className="cursor-pointer rounded-md px-3 py-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-800"
					>
						Submit another inquiry
					</button>
				</div>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			noValidate
			className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink-200/80 sm:p-7"
		>
			<fieldset>
				<legend className="mb-3 block text-xs font-bold uppercase tracking-wider text-ink-600">
					I am a… <span className="text-red-500">*</span>
				</legend>
				<div className="grid gap-3 sm:grid-cols-2">
					<TypeButton
						icon={Building2}
						label="Enterprise"
						hint="Business, Gov, NGO"
						selected={isEnterprise}
						onClick={() => {
							setPartnerType("enterprise");
							setErrors({});
						}}
					/>
					<TypeButton
						icon={GraduationCap}
						label="Education"
						hint="School or University"
						accent
						selected={!isEnterprise}
						onClick={() => {
							setPartnerType("education");
							setErrors({});
						}}
					/>
				</div>
			</fieldset>

			{isEnterprise ? (
				<div className="mt-6 space-y-4 animate-fade-in">
					<Field label="Organization Name" error={errors.orgName} required>
						<input
							type="text"
							placeholder="e.g. Your organization name"
							autoComplete="organization"
							value={enterprise.orgName}
							onChange={(e) => setEnterprise((p) => ({ ...p, orgName: e.target.value }))}
							className={fieldClass(errors.orgName)}
						/>
					</Field>

					<div className="grid gap-4 sm:grid-cols-2">
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
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
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
						<Field label="Phone Number" error={errors.phone} required>
							<input
								type="tel"
								placeholder="+231 …"
								autoComplete="tel"
								value={enterprise.phone}
								onChange={(e) => setEnterprise((p) => ({ ...p, phone: e.target.value }))}
								className={fieldClass(errors.phone)}
							/>
						</Field>
					</div>

					<Field label="Core Project Need" error={errors.projectNeed} required>
						<select
							value={enterprise.projectNeed}
							onChange={(e) =>
								setEnterprise((p) => ({ ...p, projectNeed: e.target.value }))
							}
							className={cn(fieldClass(errors.projectNeed), "cursor-pointer")}
						>
							<option value="">Select a category…</option>
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
							placeholder="Briefly describe your requirements, timeline or any context…"
							value={enterprise.scopeDetails}
							onChange={(e) =>
								setEnterprise((p) => ({ ...p, scopeDetails: e.target.value }))
							}
							className={cn(fieldClass(), "resize-none")}
						/>
					</Field>
				</div>
			) : (
				<div className="mt-6 space-y-4 animate-fade-in">
					<Field label="Institution Name" error={errors.institutionName} required>
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

					<div className="grid gap-4 sm:grid-cols-2">
						<Field label="Representative Name" error={errors.repName} required>
							<input
								type="text"
								placeholder="Full name"
								autoComplete="name"
								value={education.repName}
								onChange={(e) => setEducation((p) => ({ ...p, repName: e.target.value }))}
								className={fieldClass(errors.repName)}
							/>
						</Field>
						<Field label="Title / Role">
							<input
								type="text"
								placeholder="e.g. Principal"
								autoComplete="organization-title"
								value={education.repTitle}
								onChange={(e) => setEducation((p) => ({ ...p, repTitle: e.target.value }))}
								className={fieldClass()}
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
								onChange={(e) => setEducation((p) => ({ ...p, email: e.target.value }))}
								className={fieldClass(errors.email)}
							/>
						</Field>
						<Field label="Phone Number" error={errors.phone} required>
							<input
								type="tel"
								placeholder="+231 …"
								autoComplete="tel"
								value={education.phone}
								onChange={(e) => setEducation((p) => ({ ...p, phone: e.target.value }))}
								className={fieldClass(errors.phone)}
							/>
						</Field>
					</div>

					<Field
						label="Approximate Student Enrollment"
						error={errors.enrollment}
						required
					>
						<select
							value={education.enrollment}
							onChange={(e) => setEducation((p) => ({ ...p, enrollment: e.target.value }))}
							className={cn(fieldClass(errors.enrollment), "cursor-pointer")}
						>
							<option value="">Select enrollment range…</option>
							{ENROLLMENT_RANGES.map((range) => (
								<option key={range} value={range}>
									{range}
								</option>
							))}
						</select>
					</Field>

					<fieldset>
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
											"flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-xs font-semibold transition-colors",
											checked
												? "bg-accent-50 text-accent-700 ring-1 ring-accent-400"
												: "bg-white text-ink-600 ring-1 ring-ink-200 hover:ring-accent-300",
										)}
									>
										<span
											className={cn(
												"flex size-4 shrink-0 items-center justify-center rounded",
												checked ? "bg-accent-500 text-white" : "ring-1 ring-ink-300",
											)}
										>
											{checked && <Check size={11} strokeWidth={3} aria-hidden="true" />}
										</span>
										{solution}
									</button>
								);
							})}
						</div>
						{errors.solutions && (
							<span className="mt-1 block text-xs font-medium text-red-600">
								{errors.solutions}
							</span>
						)}
					</fieldset>

					<Field label="Additional Context">
						<textarea
							rows={3}
							placeholder="Do you have an existing lab space? Any special requirements?"
							value={education.additionalContext}
							onChange={(e) =>
								setEducation((p) => ({ ...p, additionalContext: e.target.value }))
							}
							className={cn(fieldClass(), "resize-none")}
						/>
					</Field>
				</div>
			)}

			<Button type="submit" disabled={isSubmitting} size="lg" className="mt-7 w-full">
				{isSubmitting ? (
					<>
						<Loader2 size={16} className="animate-spin" aria-hidden="true" />
						Submitting…
					</>
				) : (
					<>
						Send Inquiry
						<Send size={15} aria-hidden="true" />
					</>
				)}
			</Button>
		</form>
	);
}

/* ── Local pieces ──────────────────────────────────────────────────────── */

function fieldClass(error?: string) {
	return cn(
		"w-full rounded-lg px-4 py-3 text-sm transition-shadow",
		"placeholder:text-ink-400 focus:outline-none focus:ring-2",
		error
			? "bg-red-50 text-ink-800 ring-1 ring-red-300 focus:ring-red-400"
			: "bg-white text-ink-700 ring-1 ring-ink-200 hover:ring-ink-300 focus:ring-brand-500",
	);
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
		<label className="block">
			<span className="mb-1.5 block text-xs font-semibold text-ink-600">
				{label}{" "}
				{required && (
					<span className="text-red-500" aria-hidden="true">
						*
					</span>
				)}
			</span>
			{children}
			{error && (
				<span className="mt-1 block text-xs font-medium text-red-600">{error}</span>
			)}
		</label>
	);
}

function TypeButton({
	icon: Icon,
	label,
	hint,
	selected,
	accent = false,
	onClick,
}: {
	icon: typeof Building2;
	label: string;
	hint: string;
	selected: boolean;
	accent?: boolean;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			aria-pressed={selected}
			onClick={onClick}
			className={cn(
				"group relative flex cursor-pointer items-center gap-3 rounded-xl p-4 text-left transition-all duration-(--duration-base)",
				selected
					? accent
						? "bg-accent-50/70 ring-2 ring-accent-500"
						: "bg-brand-50/70 ring-2 ring-brand-600"
					: "ring-1 ring-ink-200 hover:bg-ink-50",
			)}
		>
			<span
				className={cn(
					"flex size-11 shrink-0 items-center justify-center rounded-lg transition-colors",
					selected
						? accent
							? "bg-accent-500 text-white"
							: "bg-brand-600 text-white"
						: accent
							? "bg-accent-50 text-accent-600"
							: "bg-brand-50 text-brand-600",
				)}
			>
				<Icon size={20} aria-hidden="true" />
			</span>
			<span>
				<span className="block font-display text-sm font-bold text-ink-900">{label}</span>
				<span className="text-[0.6875rem] text-ink-400">{hint}</span>
			</span>
			{selected && (
				<CheckCircle2
					size={16}
					aria-hidden="true"
					className={cn(
						"absolute right-3 top-3",
						accent ? "text-accent-600" : "text-brand-600",
					)}
				/>
			)}
		</button>
	);
}
