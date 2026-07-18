"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  X,
  Building2,
  GraduationCap,
  ChevronLeft,
  CheckCircle2,
  Loader2,
} from "lucide-react";

type ClientType = "enterprise" | "education" | null;
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
  "NComputing Thin-Client Lab",
  "Solar Power Systems",
  "Trained IT Instructors",
  "Curriculum / Syllabi Integration",
];

const PROJECT_NEEDS = [
  "Network Infrastructure (LAN/WAN)",
  "Solar / Power Backup Systems",
  "Software & API Development",
  "Cyber Security & Endpoint Protection",
  "ICT Equipment Supply",
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

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [step, setStep] = useState<Step>(1);
  const [clientType, setClientType] = useState<ClientType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [enterpriseFields, setEnterpriseFields] = useState<EnterpriseFields>({
    orgName: "",
    contactName: "",
    contactTitle: "",
    workEmail: "",
    phone: "",
    projectNeed: "",
    scopeDetails: "",
  });

  const [educationFields, setEducationFields] = useState<EducationFields>({
    institutionName: "",
    repName: "",
    repTitle: "",
    email: "",
    phone: "",
    enrollment: "",
    solutions: [],
    additionalContext: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and trap focus
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    firstFocusRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Focus trap within modal
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== "Tab" || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    },
    []
  );

  const resetModal = () => {
    setStep(1);
    setClientType(null);
    setErrors({});
    setIsSubmitting(false);
    setEnterpriseFields({
      orgName: "",
      contactName: "",
      contactTitle: "",
      workEmail: "",
      phone: "",
      projectNeed: "",
      scopeDetails: "",
    });
    setEducationFields({
      institutionName: "",
      repName: "",
      repTitle: "",
      email: "",
      phone: "",
      enrollment: "",
      solutions: [],
      additionalContext: "",
    });
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetModal, 300);
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
        ? prev.solutions.filter((s) => s !== solution)
        : [...prev.solutions, solution],
    }));
  };

  const validateEnterprise = () => {
    const e: Record<string, string> = {};
    if (!enterpriseFields.orgName.trim()) e.orgName = "Organization name is required.";
    if (!enterpriseFields.contactName.trim()) e.contactName = "Contact name is required.";
    if (!enterpriseFields.workEmail.trim() || !enterpriseFields.workEmail.includes("@"))
      e.workEmail = "A valid email address is required.";
    if (!enterpriseFields.phone.trim()) e.phone = "Phone number is required.";
    if (!enterpriseFields.projectNeed) e.projectNeed = "Please select a project need.";
    return e;
  };

  const validateEducation = () => {
    const e: Record<string, string> = {};
    if (!educationFields.institutionName.trim()) e.institutionName = "Institution name is required.";
    if (!educationFields.repName.trim()) e.repName = "Representative name is required.";
    if (!educationFields.email.trim() || !educationFields.email.includes("@"))
      e.email = "A valid email address is required.";
    if (!educationFields.phone.trim()) e.phone = "Phone number is required.";
    if (!educationFields.enrollment) e.enrollment = "Please select enrollment range.";
    if (educationFields.solutions.length === 0) e.solutions = "Select at least one solution.";
    return e;
  };

  const handleSubmit = async () => {
    const errs =
      clientType === "enterprise" ? validateEnterprise() : validateEducation();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setIsSubmitting(true);
    // Simulate async submit (replace with real API call)
    await new Promise((r) => setTimeout(r, 1400));
    setIsSubmitting(false);
    setStep(3);
  };

  const fieldClass = (name: string) =>
    `w-full px-3 py-2.5 text-sm border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
      errors[name]
        ? "border-red-300 bg-red-50 focus:ring-red-200 focus:border-red-400"
        : "border-slate-200 bg-white text-slate-700 placeholder:text-slate-400"
    }`;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 modal-backdrop animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[560px] bg-white rounded-lg shadow-2xl flex flex-col max-h-[90vh] animate-slide-up"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 flex-shrink-0">
          <div>
            <h2
              id="modal-title"
              className="font-display font-bold text-brand-neutral-dark text-base"
            >
              {step === 3
                ? "Request Received"
                : step === 1
                ? "Partner With UTECHS"
                : clientType === "enterprise"
                ? "Enterprise Partnership Inquiry"
                : "School Partnership Inquiry"}
            </h2>
            {step !== 3 && (
              <p className="text-xs text-slate-400 mt-0.5">
                Step {step} of 2 — {step === 1 ? "Select your type" : "Fill in your details"}
              </p>
            )}
          </div>
          <button
            ref={firstFocusRef}
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress bar */}
        {step !== 3 && (
          <div className="h-1 bg-slate-100 flex-shrink-0">
            <div
              className="h-full bg-brand-blue transition-all duration-500 rounded-full"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>
        )}

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-6 py-5">
          {/* Step 1: Type selection */}
          {step === 1 && (
            <div className="space-y-3 animate-fade-in">
              <p className="text-sm text-slate-500 mb-5">
                Tell us who you are so we can tailor our response to your specific needs.
              </p>
              <button
                onClick={() => handleSelectType("enterprise")}
                className="w-full flex items-start gap-4 p-5 rounded-lg border-2 border-slate-200 hover:border-brand-blue hover:bg-brand-blue-light/40 transition-all duration-200 text-left group"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-blue-light text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Building2 size={20} />
                </div>
                <div>
                  <div className="font-display font-semibold text-brand-neutral-dark text-sm mb-1">
                    Enterprise Client
                  </div>
                  <div className="text-slate-500 text-xs leading-relaxed">
                    Business, Government Agency, NGO, or Financial Institution seeking network infrastructure, security, solar systems, or software development.
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleSelectType("education")}
                className="w-full flex items-start gap-4 p-5 rounded-lg border-2 border-slate-200 hover:border-brand-green hover:bg-brand-green-light/60 transition-all duration-200 text-left group"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-green-light text-brand-green-dark flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="font-display font-semibold text-brand-neutral-dark text-sm mb-1">
                    Educational Institution
                  </div>
                  <div className="text-slate-500 text-xs leading-relaxed">
                    Primary school, high school, college, or university interested in the Computer Lab as a Service (CaaS) partnership program.
                  </div>
                </div>
              </button>
            </div>
          )}

          {/* Step 2: Enterprise form */}
          {step === 2 && clientType === "enterprise" && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Organization Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Liberia Revenue Authority"
                  value={enterpriseFields.orgName}
                  onChange={(e) =>
                    setEnterpriseFields((p) => ({ ...p, orgName: e.target.value }))
                  }
                  className={fieldClass("orgName")}
                />
                {errors.orgName && (
                  <p className="text-red-500 text-[11px] mt-1">{errors.orgName}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Contact Person <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={enterpriseFields.contactName}
                    onChange={(e) =>
                      setEnterpriseFields((p) => ({ ...p, contactName: e.target.value }))
                    }
                    className={fieldClass("contactName")}
                  />
                  {errors.contactName && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.contactName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. IT Director"
                    value={enterpriseFields.contactTitle}
                    onChange={(e) =>
                      setEnterpriseFields((p) => ({ ...p, contactTitle: e.target.value }))
                    }
                    className={fieldClass("contactTitle")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Work Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@organization.com"
                    value={enterpriseFields.workEmail}
                    onChange={(e) =>
                      setEnterpriseFields((p) => ({ ...p, workEmail: e.target.value }))
                    }
                    className={fieldClass("workEmail")}
                  />
                  {errors.workEmail && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.workEmail}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+231 ..."
                    value={enterpriseFields.phone}
                    onChange={(e) =>
                      setEnterpriseFields((p) => ({ ...p, phone: e.target.value }))
                    }
                    className={fieldClass("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Core Project Need <span className="text-red-400">*</span>
                </label>
                <select
                  value={enterpriseFields.projectNeed}
                  onChange={(e) =>
                    setEnterpriseFields((p) => ({ ...p, projectNeed: e.target.value }))
                  }
                  className={fieldClass("projectNeed")}
                >
                  <option value="">Select a category...</option>
                  {PROJECT_NEEDS.map((need) => (
                    <option key={need} value={need}>
                      {need}
                    </option>
                  ))}
                </select>
                {errors.projectNeed && (
                  <p className="text-red-500 text-[11px] mt-1">{errors.projectNeed}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Project Scope Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your project requirements, timeline, or any context that will help us prepare a relevant response..."
                  value={enterpriseFields.scopeDetails}
                  onChange={(e) =>
                    setEnterpriseFields((p) => ({ ...p, scopeDetails: e.target.value }))
                  }
                  className={`${fieldClass("scopeDetails")} resize-none`}
                />
              </div>
            </div>
          )}

          {/* Step 2: Education form */}
          {step === 2 && clientType === "education" && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Institution Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Upstairs Christian Academy"
                  value={educationFields.institutionName}
                  onChange={(e) =>
                    setEducationFields((p) => ({ ...p, institutionName: e.target.value }))
                  }
                  className={fieldClass("institutionName")}
                />
                {errors.institutionName && (
                  <p className="text-red-500 text-[11px] mt-1">{errors.institutionName}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Representative Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={educationFields.repName}
                    onChange={(e) =>
                      setEducationFields((p) => ({ ...p, repName: e.target.value }))
                    }
                    className={fieldClass("repName")}
                  />
                  {errors.repName && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.repName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Title / Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Principal"
                    value={educationFields.repTitle}
                    onChange={(e) =>
                      setEducationFields((p) => ({ ...p, repTitle: e.target.value }))
                    }
                    className={fieldClass("repTitle")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="school@example.com"
                    value={educationFields.email}
                    onChange={(e) =>
                      setEducationFields((p) => ({ ...p, email: e.target.value }))
                    }
                    className={fieldClass("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+231 ..."
                    value={educationFields.phone}
                    onChange={(e) =>
                      setEducationFields((p) => ({ ...p, phone: e.target.value }))
                    }
                    className={fieldClass("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Approximate Student Enrollment <span className="text-red-400">*</span>
                </label>
                <select
                  value={educationFields.enrollment}
                  onChange={(e) =>
                    setEducationFields((p) => ({ ...p, enrollment: e.target.value }))
                  }
                  className={fieldClass("enrollment")}
                >
                  <option value="">Select enrollment range...</option>
                  {ENROLLMENT_RANGES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.enrollment && (
                  <p className="text-red-500 text-[11px] mt-1">{errors.enrollment}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">
                  Solutions of Interest <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {EDUCATION_SOLUTIONS.map((sol) => {
                    const checked = educationFields.solutions.includes(sol);
                    return (
                      <button
                        key={sol}
                        type="button"
                        onClick={() => toggleSolution(sol)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-xs font-medium text-left transition-all duration-150 ${
                          checked
                            ? "border-brand-green bg-brand-green-light text-brand-green-dark"
                            : "border-slate-200 bg-white text-slate-600 hover:border-brand-green/40"
                        }`}
                        aria-pressed={checked}
                      >
                        <span
                          className={`w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                            checked
                              ? "border-brand-green bg-brand-green"
                              : "border-slate-300"
                          }`}
                        >
                          {checked && (
                            <svg
                              viewBox="0 0 10 10"
                              className="w-2.5 h-2.5 text-white"
                              fill="currentColor"
                            >
                              <path d="M1.5 5.5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                            </svg>
                          )}
                        </span>
                        {sol}
                      </button>
                    );
                  })}
                </div>
                {errors.solutions && (
                  <p className="text-red-500 text-[11px] mt-1">{errors.solutions}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Additional Lab Context
                </label>
                <textarea
                  rows={3}
                  placeholder="Do you have an existing lab space? Current equipment? Any special requirements or questions about the program?"
                  value={educationFields.additionalContext}
                  onChange={(e) =>
                    setEducationFields((p) => ({ ...p, additionalContext: e.target.value }))
                  }
                  className={`${fieldClass("additionalContext")} resize-none`}
                />
              </div>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="flex flex-col items-center text-center py-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-brand-green-light flex items-center justify-center mb-5">
                <CheckCircle2 size={32} className="text-brand-green" />
              </div>
              <h3 className="font-display font-bold text-brand-neutral-dark text-lg mb-2">
                Thank you for reaching out!
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                A UTECHS representative will review your project requirements and contact you within{" "}
                <span className="font-semibold text-brand-blue">24 business hours</span>.
              </p>
              <div className="mt-6 pt-5 border-t border-slate-100 w-full text-left">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">
                  You can also reach us directly
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="tel:0555532355"
                    className="text-brand-blue hover:underline font-medium"
                  >
                    📞 0555532355
                  </a>
                  <a
                    href="tel:0779373928"
                    className="text-brand-blue hover:underline font-medium"
                  >
                    📞 0779373928
                  </a>
                  <a
                    href="mailto:uniquetechsolutions2022@gmail.com"
                    className="text-brand-blue hover:underline font-medium"
                  >
                    ✉ uniquetechsolutions2022@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="mt-6 btn-primary w-full justify-center"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {/* Footer actions */}
        {step === 2 && (
          <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3 flex-shrink-0 bg-slate-50 rounded-b-2xl">
            <button
              onClick={() => {
                setStep(1);
                setErrors({});
              }}
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 font-medium transition-colors"
            >
              <ChevronLeft size={15} />
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px] justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
