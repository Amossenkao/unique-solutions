'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
	ArrowRight,
	Building2,
	CheckCircle2,
	ChevronLeft,
	Code2,
	GraduationCap,
	Loader2,
	Mail,
	MonitorCog,
	Network,
	PackageCheck,
	Phone,
	ShieldCheck,
	X,
} from 'lucide-react';

type ClientType = 'enterprise' | 'education' | null;
type Step = 1 | 2 | 3;

interface EnterpriseFields {
	orgName: string;
	contactName: string;
	contactTitle: string;
	workEmail: string;
	phone: string;
	projectNeed: string;
	scopeDetails: string;
}

interface EducationFields {
	institutionName: string;
	repName: string;
	repTitle: string;
	email: string;
	phone: string;
	enrollment: string;
	solutions: string[];
	additionalContext: string;
}

interface PartnerModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const EDUCATION_SOLUTIONS = [
	'NComputing Thin-Client Lab',
	'Solar Power Systems',
	'Trained IT Instructors',
	'Curriculum / Syllabi Integration',
];

const PROJECT_NEEDS = [
	'Websites, Portals & API Development',
	'Network Infrastructure (LAN/WAN)',
	'ICT Equipment Supply',
	'Solar / Power Backup Systems',
	'Cyber Security & Endpoint Protection',
	'Managed IT Services',
	'Other',
];

const ENROLLMENT_RANGES = [
	'Under 100 students',
	'100 - 300 students',
	'301 - 600 students',
	'601 - 1,000 students',
	'Over 1,000 students',
];

const MODAL_SIGNALS = [
	{ icon: Code2, label: 'Web platforms' },
	{ icon: Network, label: 'ICT infrastructure' },
	{ icon: PackageCheck, label: 'Equipment supply' },
	{ icon: ShieldCheck, label: 'Security support' },
];

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
	const [step, setStep] = useState<Step>(1);
	const [clientType, setClientType] = useState<ClientType>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [enterpriseFields, setEnterpriseFields] = useState<EnterpriseFields>({
		orgName: '',
		contactName: '',
		contactTitle: '',
		workEmail: '',
		phone: '',
		projectNeed: '',
		scopeDetails: '',
	});

	const [educationFields, setEducationFields] = useState<EducationFields>({
		institutionName: '',
		repName: '',
		repTitle: '',
		email: '',
		phone: '',
		enrollment: '',
		solutions: [],
		additionalContext: '',
	});

	const [errors, setErrors] = useState<Record<string, string>>({});
	const modalRef = useRef<HTMLDivElement>(null);
	const closeRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!isOpen) return;

		document.body.style.overflow = 'hidden';
		closeRef.current?.focus();

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	useEffect(() => {
		const handler = (event: KeyboardEvent) => {
			if (event.key === 'Escape') handleClose();
		};

		if (isOpen) window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	});

	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key !== 'Tab' || !modalRef.current) return;

			const focusable = modalRef.current.querySelectorAll<HTMLElement>(
				'button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
			);
			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last?.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first?.focus();
			}
		},
		[],
	);

	const resetModal = () => {
		setStep(1);
		setClientType(null);
		setErrors({});
		setIsSubmitting(false);
		setEnterpriseFields({
			orgName: '',
			contactName: '',
			contactTitle: '',
			workEmail: '',
			phone: '',
			projectNeed: '',
			scopeDetails: '',
		});
		setEducationFields({
			institutionName: '',
			repName: '',
			repTitle: '',
			email: '',
			phone: '',
			enrollment: '',
			solutions: [],
			additionalContext: '',
		});
	};

	const handleClose = () => {
		onClose();
		window.setTimeout(resetModal, 250);
	};

	const handleSelectType = (type: ClientType) => {
		setClientType(type);
		setStep(2);
		setErrors({});
	};

	const toggleSolution = (solution: string) => {
		setEducationFields((prev) => ({
			...prev,
			solutions: prev.solutions.includes(solution)
				? prev.solutions.filter((item) => item !== solution)
				: [...prev.solutions, solution],
		}));
	};

	const validateEnterprise = () => {
		const nextErrors: Record<string, string> = {};
		if (!enterpriseFields.orgName.trim())
			nextErrors.orgName = 'Organization name is required.';
		if (!enterpriseFields.contactName.trim())
			nextErrors.contactName = 'Contact name is required.';
		if (
			!enterpriseFields.workEmail.trim() ||
			!enterpriseFields.workEmail.includes('@')
		) {
			nextErrors.workEmail = 'A valid email address is required.';
		}
		if (!enterpriseFields.phone.trim())
			nextErrors.phone = 'Phone number is required.';
		if (!enterpriseFields.projectNeed)
			nextErrors.projectNeed = 'Please select a project need.';
		return nextErrors;
	};

	const validateEducation = () => {
		const nextErrors: Record<string, string> = {};
		if (!educationFields.institutionName.trim())
			nextErrors.institutionName = 'Institution name is required.';
		if (!educationFields.repName.trim())
			nextErrors.repName = 'Representative name is required.';
		if (!educationFields.email.trim() || !educationFields.email.includes('@')) {
			nextErrors.email = 'A valid email address is required.';
		}
		if (!educationFields.phone.trim())
			nextErrors.phone = 'Phone number is required.';
		if (!educationFields.enrollment)
			nextErrors.enrollment = 'Please select enrollment range.';
		if (educationFields.solutions.length === 0)
			nextErrors.solutions = 'Select at least one solution.';
		return nextErrors;
	};

	const handleSubmit = async () => {
		const nextErrors =
			clientType === 'enterprise' ? validateEnterprise() : validateEducation();
		if (Object.keys(nextErrors).length > 0) {
			setErrors(nextErrors);
			return;
		}

		setErrors({});
		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 1400));
		setIsSubmitting(false);
		setStep(3);
	};

	// No cursor-pointer on text inputs — only buttons, selects, and links get that
	const fieldClass = (name: string) =>
		`w-full border px-3 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/25 ${
			errors[name]
				? 'border-red-300 bg-red-50 text-slate-800 focus:border-red-400 focus:ring-red-200'
				: 'border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-blue'
		}`;

	// Selects need cursor-pointer since they open a picker
	const selectClass = (name: string) => `${fieldClass(name)} cursor-pointer`;

	if (!isOpen) return null;

	const isEnterprise = clientType === 'enterprise';

	const goBack = () => {
		setStep(1);
		setErrors({});
	};

	return (
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5"
			role="dialog"
			aria-modal="true"
			aria-labelledby="partner-modal-title"
			onKeyDown={handleKeyDown}
		>
			<div
				className="absolute inset-0 cursor-pointer bg-slate-950/70 modal-backdrop animate-fade-in"
				onClick={handleClose}
				aria-hidden="true"
			/>

			<div
				ref={modalRef}
				className="relative grid h-[92dvh] max-h-[92dvh] w-full max-w-5xl overflow-hidden bg-white shadow-2xl animate-slide-up lg:grid-cols-[0.85fr_1.15fr]"
			>
				<aside className="relative hidden overflow-hidden bg-slate-950 p-7 text-white lg:block">
					<div className="absolute inset-0 dark-tech-grid opacity-30" />
					<div className="relative flex h-full flex-col">
						<div>
							<p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-green">
								Partnership intake
							</p>
							<h2
								className="mt-4 font-display text-3xl font-extrabold leading-tight"
								id="partner-modal-title"
							>
								Let&apos;s scope the right UTECHS team for your project.
							</h2>
							<p className="mt-4 text-sm leading-7 text-white/58">
								Tell us whether you are building a digital product, upgrading
								infrastructure, buying ICT equipment, or launching a school lab
								program.
							</p>
						</div>

						<div className="mt-8 grid gap-3">
							{MODAL_SIGNALS.map(({ icon: Icon, label }) => (
								<div
									key={label}
									className="flex items-center gap-3 border border-white/10 bg-white/[0.06] p-3"
								>
									<span className="flex h-9 w-9 items-center justify-center bg-brand-green text-slate-950">
										<Icon size={18} />
									</span>
									<span className="text-sm font-bold text-white/78">
										{label}
									</span>
								</div>
							))}
						</div>

						<div className="mt-auto border-t border-white/10 pt-6">
							<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/34">
								Direct line
							</p>
							<div className="mt-4 space-y-3">
								<a
									href="tel:0555532355"
									className="flex cursor-pointer items-center gap-3 text-sm text-white/72 hover:text-brand-green"
								>
									<Phone size={16} />
									0555 532 355
								</a>
								<a
									href="mailto:uniquetechsolutions2022@gmail.com"
									className="flex cursor-pointer items-center gap-3 text-sm text-white/72 hover:text-brand-green"
								>
									<Mail size={16} />
									uniquetechsolutions2022@gmail.com
								</a>
							</div>
						</div>
					</div>
				</aside>

				<section className="flex h-full min-h-0 flex-col overflow-hidden">
					<div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-7">
						<div>
							<p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-blue">
								{step === 3 ? 'Request received' : `Step ${step} of 2`}
							</p>
							<h2
								className="mt-1 font-display text-lg font-extrabold text-brand-neutral-dark lg:hidden"
								id="partner-modal-title"
							>
								Partner With UTECHS
							</h2>
							<h3 className="mt-1 hidden font-display text-lg font-extrabold text-brand-neutral-dark lg:block">
								{step === 3
									? 'We have what we need to begin.'
									: step === 1
										? 'Choose the partnership path.'
										: isEnterprise
											? 'Enterprise project details.'
											: 'School lab program details.'}
							</h3>
						</div>
						<button
							ref={closeRef}
							onClick={handleClose}
							className="flex h-9 w-9 flex-shrink-0 cursor-pointer items-center justify-center text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
							aria-label="Close modal"
						>
							<X size={19} />
						</button>
					</div>

					{step !== 3 && (
						<div className="h-1 bg-slate-100">
							<div
								className="h-full bg-brand-blue transition-all duration-500"
								style={{ width: step === 1 ? '50%' : '100%' }}
							/>
						</div>
					)}

					<div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-7">
						{step === 1 && (
							<div className="space-y-4 animate-fade-in">
								<p className="text-sm leading-6 text-slate-500">
									Choose the closest fit. We use this to shape the questions and
									route your request.
								</p>

								<button
									onClick={() => handleSelectType('enterprise')}
									className="group grid w-full cursor-pointer gap-4 border-2 border-slate-200 p-5 text-left transition hover:border-brand-blue hover:bg-brand-blue-light/35 sm:grid-cols-[auto_1fr_auto]"
								>
									<span className="flex h-12 w-12 items-center justify-center bg-brand-blue-light text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
										<Building2 size={22} />
									</span>
									<span>
										<span className="block font-display text-base font-extrabold text-brand-neutral-dark">
											Enterprise, NGO, Government, or Business
										</span>
										<span className="mt-2 block text-sm leading-6 text-slate-500">
											Websites, portals, APIs, network infrastructure,
											cybersecurity, solar systems, ICT equipment procurement,
											and managed IT support.
										</span>
									</span>
									<ArrowRight
										size={19}
										className="hidden text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-blue sm:block"
									/>
								</button>

								<button
									onClick={() => handleSelectType('education')}
									className="group grid w-full cursor-pointer gap-4 border-2 border-slate-200 p-5 text-left transition hover:border-brand-green hover:bg-brand-green-light/55 sm:grid-cols-[auto_1fr_auto]"
								>
									<span className="flex h-12 w-12 items-center justify-center bg-brand-green-light text-brand-green-dark transition group-hover:bg-brand-green group-hover:text-white">
										<GraduationCap size={22} />
									</span>
									<span>
										<span className="block font-display text-base font-extrabold text-brand-neutral-dark">
											School, College, or University
										</span>
										<span className="mt-2 block text-sm leading-6 text-slate-500">
											Managed computer labs, NComputing deployments, instructor
											staffing, curriculum integration, maintenance, and student
											fee program setup.
										</span>
									</span>
									<ArrowRight
										size={19}
										className="hidden text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-green sm:block"
									/>
								</button>
							</div>
						)}

						{step === 2 && clientType === 'enterprise' && (
							<div className="space-y-4 animate-fade-in">
								<div className="grid gap-4 sm:grid-cols-2">
									<Field
										label="Organization Name"
										error={errors.orgName}
										required
									>
										<input
											type="text"
											placeholder="e.g. Your organization name"
											value={enterpriseFields.orgName}
											onChange={(event) =>
												setEnterpriseFields((prev) => ({
													...prev,
													orgName: event.target.value,
												}))
											}
											className={fieldClass('orgName')}
										/>
									</Field>
									<Field
										label="Contact Person"
										error={errors.contactName}
										required
									>
										<input
											type="text"
											placeholder="Full name"
											value={enterpriseFields.contactName}
											onChange={(event) =>
												setEnterpriseFields((prev) => ({
													...prev,
													contactName: event.target.value,
												}))
											}
											className={fieldClass('contactName')}
										/>
									</Field>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									<Field label="Job Title">
										<input
											type="text"
											placeholder="e.g. IT Director"
											value={enterpriseFields.contactTitle}
											onChange={(event) =>
												setEnterpriseFields((prev) => ({
													...prev,
													contactTitle: event.target.value,
												}))
											}
											className={fieldClass('contactTitle')}
										/>
									</Field>
									<Field label="Phone Number" error={errors.phone} required>
										<input
											type="tel"
											placeholder="+231 ..."
											value={enterpriseFields.phone}
											onChange={(event) =>
												setEnterpriseFields((prev) => ({
													...prev,
													phone: event.target.value,
												}))
											}
											className={fieldClass('phone')}
										/>
									</Field>
								</div>

								<Field label="Work Email" error={errors.workEmail} required>
									<input
										type="email"
										placeholder="you@organization.com"
										value={enterpriseFields.workEmail}
										onChange={(event) =>
											setEnterpriseFields((prev) => ({
												...prev,
												workEmail: event.target.value,
											}))
										}
										className={fieldClass('workEmail')}
									/>
								</Field>

								<Field
									label="Core Project Need"
									error={errors.projectNeed}
									required
								>
									<select
										value={enterpriseFields.projectNeed}
										onChange={(event) =>
											setEnterpriseFields((prev) => ({
												...prev,
												projectNeed: event.target.value,
											}))
										}
										className={selectClass('projectNeed')}
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
										placeholder="Briefly describe requirements, timeline, current systems, procurement needs, or decision context..."
										value={enterpriseFields.scopeDetails}
										onChange={(event) =>
											setEnterpriseFields((prev) => ({
												...prev,
												scopeDetails: event.target.value,
											}))
										}
										className={`${fieldClass('scopeDetails')} resize-none`}
									/>
								</Field>
							</div>
						)}

						{step === 2 && clientType === 'education' && (
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
											value={educationFields.institutionName}
											onChange={(event) =>
												setEducationFields((prev) => ({
													...prev,
													institutionName: event.target.value,
												}))
											}
											className={fieldClass('institutionName')}
										/>
									</Field>
									<Field
										label="Representative Name"
										error={errors.repName}
										required
									>
										<input
											type="text"
											placeholder="Full name"
											value={educationFields.repName}
											onChange={(event) =>
												setEducationFields((prev) => ({
													...prev,
													repName: event.target.value,
												}))
											}
											className={fieldClass('repName')}
										/>
									</Field>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									<Field label="Title / Role">
										<input
											type="text"
											placeholder="e.g. Principal"
											value={educationFields.repTitle}
											onChange={(event) =>
												setEducationFields((prev) => ({
													...prev,
													repTitle: event.target.value,
												}))
											}
											className={fieldClass('repTitle')}
										/>
									</Field>
									<Field label="Phone Number" error={errors.phone} required>
										<input
											type="tel"
											placeholder="+231 ..."
											value={educationFields.phone}
											onChange={(event) =>
												setEducationFields((prev) => ({
													...prev,
													phone: event.target.value,
												}))
											}
											className={fieldClass('phone')}
										/>
									</Field>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									<Field label="Email Address" error={errors.email} required>
										<input
											type="email"
											placeholder="school@example.com"
											value={educationFields.email}
											onChange={(event) =>
												setEducationFields((prev) => ({
													...prev,
													email: event.target.value,
												}))
											}
											className={fieldClass('email')}
										/>
									</Field>
									<Field
										label="Student Enrollment"
										error={errors.enrollment}
										required
									>
										<select
											value={educationFields.enrollment}
											onChange={(event) =>
												setEducationFields((prev) => ({
													...prev,
													enrollment: event.target.value,
												}))
											}
											className={selectClass('enrollment')}
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

								<Field
									label="Solutions of Interest"
									error={errors.solutions}
									required
								>
									<div className="grid gap-2 sm:grid-cols-2">
										{EDUCATION_SOLUTIONS.map((solution) => {
											const checked =
												educationFields.solutions.includes(solution);
											return (
												<button
													key={solution}
													type="button"
													onClick={() => toggleSolution(solution)}
													className={`flex cursor-pointer items-center gap-2 border px-3 py-2.5 text-left text-xs font-bold transition ${
														checked
															? 'border-brand-green bg-brand-green-light text-brand-green-dark'
															: 'border-slate-200 bg-white text-slate-600 hover:border-brand-green/40'
													}`}
													aria-pressed={checked}
												>
													<span
														className={`flex h-4 w-4 flex-shrink-0 items-center justify-center border ${
															checked
																? 'border-brand-green bg-brand-green'
																: 'border-slate-300'
														}`}
													>
														{checked && (
															<CheckCircle2 size={11} className="text-white" />
														)}
													</span>
													{solution}
												</button>
											);
										})}
									</div>
								</Field>

								<Field label="Additional Lab Context">
									<textarea
										rows={3}
										placeholder="Existing lab space, current equipment, connectivity, schedule, or special requirements..."
										value={educationFields.additionalContext}
										onChange={(event) =>
											setEducationFields((prev) => ({
												...prev,
												additionalContext: event.target.value,
											}))
										}
										className={`${fieldClass('additionalContext')} resize-none`}
									/>
								</Field>
							</div>
						)}

						{step === 3 && (
							<div className="flex min-h-[360px] flex-col items-center justify-center text-center animate-fade-in">
								<div className="mb-5 flex h-16 w-16 items-center justify-center bg-brand-green-light text-brand-green">
									<CheckCircle2 size={34} />
								</div>
								<h3 className="font-display text-2xl font-extrabold text-brand-neutral-dark">
									Thank you for reaching out.
								</h3>
								<p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
									A UTECHS representative will review your request and contact
									you within 24 business hours.
								</p>
								<div className="mt-7 grid w-full max-w-md gap-3 text-left sm:grid-cols-2">
									<a
										href="tel:0555532355"
										className="cursor-pointer border border-slate-200 p-4 text-sm font-bold text-brand-blue hover:bg-brand-blue-light"
									>
										<Phone size={16} className="mb-2" />
										0555 532 355
									</a>
									<a
										href="mailto:uniquetechsolutions2022@gmail.com"
										className="cursor-pointer border border-slate-200 p-4 text-sm font-bold text-brand-blue hover:bg-brand-blue-light"
									>
										<Mail size={16} className="mb-2" />
										Email UTECHS
									</a>
								</div>
								<button
									onClick={handleClose}
									className="btn-primary mt-7 cursor-pointer justify-center"
								>
									Close
								</button>
							</div>
						)}
					</div>

					{step === 2 && (
						<div className="flex flex-shrink-0 items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-5 py-4 sm:px-7">
							<button
								onClick={goBack}
								className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-bold text-slate-500 transition hover:text-slate-800"
							>
								<ChevronLeft size={15} />
								Back
							</button>
							<button
								onClick={handleSubmit}
								disabled={isSubmitting}
								className="btn-primary min-w-[150px] cursor-pointer justify-center disabled:cursor-not-allowed disabled:opacity-70"
							>
								{isSubmitting ? (
									<>
										<Loader2 size={15} className="animate-spin" />
										Submitting...
									</>
								) : (
									'Submit Inquiry'
								)}
							</button>
						</div>
					)}
				</section>
			</div>
		</div>
	);
}

function Field({
	children,
	error,
	label,
	required,
}: {
	children: React.ReactNode;
	error?: string;
	label: string;
	required?: boolean;
}) {
	return (
		<label className="block">
			<span className="mb-1.5 block text-xs font-extrabold uppercase tracking-wide text-slate-600">
				{label} {required && <span className="text-red-400">*</span>}
			</span>
			{children}
			{error && (
				<span className="mt-1 block text-[11px] font-medium text-red-500">
					{error}
				</span>
			)}
		</label>
	);
}
