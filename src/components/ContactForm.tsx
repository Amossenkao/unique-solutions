"use client";

import { useState } from "react";
import {
  Building2,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

type PartnerType = "enterprise" | "education" | null;

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

export default function ContactForm() {
  const [partnerType, setPartnerType] = useState<PartnerType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Enterprise fields
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactTitle, setContactTitle] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectNeed, setProjectNeed] = useState("");
  const [scopeDetails, setScopeDetails] = useState("");

  // Education fields
  const [institutionName, setInstitutionName] = useState("");
  const [repName, setRepName] = useState("");
  const [repTitle, setRepTitle] = useState("");
  const [eduEmail, setEduEmail] = useState("");
  const [eduPhone, setEduPhone] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [solutions, setSolutions] = useState<string[]>([]);
  const [additionalContext, setAdditionalContext] = useState("");

  const fieldClass = (name: string) =>
    `w-full px-4 py-3 text-sm border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-white ${
      errors[name]
        ? "border-red-300 bg-red-50/50 focus:ring-red-200 focus:border-red-400"
        : "border-slate-200 text-slate-700 placeholder:text-slate-400 hover:border-slate-300"
    }`;

  const toggleSolution = (sol: string) => {
    setSolutions((prev) =>
      prev.includes(sol) ? prev.filter((s) => s !== sol) : [...prev, sol]
    );
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (partnerType === "enterprise") {
      if (!orgName.trim()) e.orgName = "Organization name is required.";
      if (!contactName.trim()) e.contactName = "Contact name is required.";
      if (!workEmail.trim() || !workEmail.includes("@"))
        e.workEmail = "A valid email is required.";
      if (!phone.trim()) e.phone = "Phone number is required.";
      if (!projectNeed) e.projectNeed = "Please select a project need.";
    } else {
      if (!institutionName.trim())
        e.institutionName = "Institution name is required.";
      if (!repName.trim()) e.repName = "Representative name is required.";
      if (!eduEmail.trim() || !eduEmail.includes("@"))
        e.eduEmail = "A valid email is required.";
      if (!eduPhone.trim()) e.eduPhone = "Phone number is required.";
      if (!enrollment) e.enrollment = "Please select enrollment range.";
      if (solutions.length === 0)
        e.solutions = "Select at least one solution.";
    }
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1600));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        id="contact-form"
        className="section-padding relative overflow-hidden bg-slate-50"
      >
        <div className="absolute inset-0 tech-grid opacity-45" />
        <div className="relative section-container">
          <div className="max-w-2xl mx-auto text-center py-12 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-brand-green-light flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-brand-green" />
            </div>
            <h2 className="font-display text-3xl font-bold text-brand-neutral-dark mb-3">
              Thank you for reaching out!
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-md mx-auto mb-8">
              A UTECHS representative will review your project requirements and
              contact you within{" "}
              <span className="font-semibold text-brand-blue">
                24 business hours
              </span>.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-6 bg-white rounded-lg border border-slate-100 shadow-sm px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-blue-light flex items-center justify-center">
                  <Phone size={18} className="text-brand-blue" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                    Call us
                  </p>
                  <a
                    href="tel:0555532355"
                    className="text-sm font-semibold text-brand-blue-dark hover:text-brand-blue transition-colors"
                  >
                    0555 532 355
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-green-light flex items-center justify-center">
                  <Mail size={18} className="text-brand-green" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                    Email us
                  </p>
                  <a
                    href="mailto:uniquetechsolutions2022@gmail.com"
                    className="text-sm font-semibold text-brand-blue-dark hover:text-brand-blue transition-colors"
                  >
                    uniquetechsolutions2022@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setPartnerType(null);
                setOrgName("");
                setContactName("");
                setContactTitle("");
                setWorkEmail("");
                setPhone("");
                setProjectNeed("");
                setScopeDetails("");
                setInstitutionName("");
                setRepName("");
                setRepTitle("");
                setEduEmail("");
                setEduPhone("");
                setEnrollment("");
                setSolutions([]);
                setAdditionalContext("");
              }}
              className="mt-8 text-sm text-brand-blue hover:text-brand-blue-dark font-medium transition-colors"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact-form"
      className="section-padding relative overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 tech-grid opacity-45" />
      <div className="relative section-container">
        {/* Section header */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="reveal-up">
            <p className="section-kicker mb-3">Start a project</p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-neutral-dark sm:text-4xl lg:text-5xl">
              Bring us the business problem. We&apos;ll map the technology path.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-500 lg:ml-auto">
            Whether you need a modern website, a secure internal platform,
            enterprise infrastructure, or a managed school lab, this intake helps
            us route your inquiry to the right technical team.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3 lg:order-2 glass-panel p-5 sm:p-6">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Partner type selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-3 uppercase tracking-wider">
                  I am a... <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setPartnerType("enterprise");
                      setErrors({});
                    }}
                    className={`relative flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 text-left group ${
                      partnerType === "enterprise"
                        ? "border-brand-blue bg-brand-blue-light/50 shadow-sm shadow-brand-blue/10"
                        : "border-slate-200 hover:border-brand-blue/40 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        partnerType === "enterprise"
                          ? "bg-brand-blue text-white"
                          : "bg-brand-blue-light text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                      }`}
                    >
                      <Building2 size={20} />
                    </div>
                    <div>
                      <span
                        className={`font-display font-semibold text-sm block ${
                          partnerType === "enterprise"
                            ? "text-brand-blue-dark"
                            : "text-brand-neutral-dark"
                        }`}
                      >
                        Enterprise
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Business, Gov, NGO
                      </span>
                    </div>
                    {partnerType === "enterprise" && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle2
                          size={16}
                          className="text-brand-blue"
                        />
                      </div>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPartnerType("education");
                      setErrors({});
                    }}
                    className={`relative flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-200 text-left group ${
                      partnerType === "education"
                        ? "border-brand-green bg-brand-green-light/50 shadow-sm shadow-brand-green/10"
                        : "border-slate-200 hover:border-brand-green/40 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        partnerType === "education"
                          ? "bg-brand-green text-white"
                          : "bg-brand-green-light text-brand-green-dark group-hover:bg-brand-green group-hover:text-white"
                      }`}
                    >
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <span
                        className={`font-display font-semibold text-sm block ${
                          partnerType === "education"
                            ? "text-brand-green-dark"
                            : "text-brand-neutral-dark"
                        }`}
                      >
                        Education
                      </span>
                      <span className="text-[11px] text-slate-400">
                        School or University
                      </span>
                    </div>
                    {partnerType === "education" && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle2
                          size={16}
                          className="text-brand-green"
                        />
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* Enterprise fields */}
              {partnerType === "enterprise" && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Organization Name{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Liberia Revenue Authority"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      className={fieldClass("orgName")}
                    />
                    {errors.orgName && (
                      <p className="text-red-500 text-[11px] mt-1">
                        {errors.orgName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Contact Person{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className={fieldClass("contactName")}
                      />
                      {errors.contactName && (
                        <p className="text-red-500 text-[11px] mt-1">
                          {errors.contactName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Job Title
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. IT Director"
                        value={contactTitle}
                        onChange={(e) => setContactTitle(e.target.value)}
                        className={fieldClass("contactTitle")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Work Email{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@organization.com"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        className={fieldClass("workEmail")}
                      />
                      {errors.workEmail && (
                        <p className="text-red-500 text-[11px] mt-1">
                          {errors.workEmail}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Phone Number{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+231 ..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={fieldClass("phone")}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[11px] mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Core Project Need{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={projectNeed}
                      onChange={(e) => setProjectNeed(e.target.value)}
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
                      <p className="text-red-500 text-[11px] mt-1">
                        {errors.projectNeed}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Project Scope Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your project requirements, timeline, or any context that will help us prepare..."
                      value={scopeDetails}
                      onChange={(e) => setScopeDetails(e.target.value)}
                      className={`${fieldClass("scopeDetails")} resize-none`}
                    />
                  </div>
                </div>
              )}

              {/* Education fields */}
              {partnerType === "education" && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Institution Name{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Upstairs Christian Academy"
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      className={fieldClass("institutionName")}
                    />
                    {errors.institutionName && (
                      <p className="text-red-500 text-[11px] mt-1">
                        {errors.institutionName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Representative Name{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={repName}
                        onChange={(e) => setRepName(e.target.value)}
                        className={fieldClass("repName")}
                      />
                      {errors.repName && (
                        <p className="text-red-500 text-[11px] mt-1">
                          {errors.repName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Title / Role
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Principal"
                        value={repTitle}
                        onChange={(e) => setRepTitle(e.target.value)}
                        className={fieldClass("repTitle")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Email Address{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="school@example.com"
                        value={eduEmail}
                        onChange={(e) => setEduEmail(e.target.value)}
                        className={fieldClass("eduEmail")}
                      />
                      {errors.eduEmail && (
                        <p className="text-red-500 text-[11px] mt-1">
                          {errors.eduEmail}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Phone Number{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+231 ..."
                        value={eduPhone}
                        onChange={(e) => setEduPhone(e.target.value)}
                        className={fieldClass("eduPhone")}
                      />
                      {errors.eduPhone && (
                        <p className="text-red-500 text-[11px] mt-1">
                          {errors.eduPhone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Approximate Student Enrollment{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={enrollment}
                      onChange={(e) => setEnrollment(e.target.value)}
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
                      <p className="text-red-500 text-[11px] mt-1">
                        {errors.enrollment}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">
                      Solutions of Interest{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {EDUCATION_SOLUTIONS.map((sol) => {
                        const checked = solutions.includes(sol);
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
                                  <path
                                    d="M1.5 5.5l2.5 2.5 4.5-4.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    fill="none"
                                  />
                                </svg>
                              )}
                            </span>
                            {sol}
                          </button>
                        );
                      })}
                    </div>
                    {errors.solutions && (
                      <p className="text-red-500 text-[11px] mt-1">
                        {errors.solutions}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Additional Context
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Do you have an existing lab space? Any special requirements or questions?"
                      value={additionalContext}
                      onChange={(e) => setAdditionalContext(e.target.value)}
                      className={`${fieldClass("additionalContext")} resize-none`}
                    />
                  </div>
                </div>
              )}

              {/* Submit button */}
              {partnerType && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={15} />
                    </>
                  )}
                </button>
              )}
            </form>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 lg:order-1 space-y-5">
            {/* Contact cards */}
            <div className="bg-white rounded-lg border border-slate-100 shadow-sm p-6 space-y-6">
              <div>
                <h3 className="font-display font-bold text-brand-neutral-dark text-sm mb-1">
                  Contact Information
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Reach out directly and we&apos;ll get back to you within 24
                  business hours.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:0555532355"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors">
                    <Phone
                      size={16}
                      className="text-brand-blue group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                      Phone
                    </p>
                    <p className="text-sm font-semibold text-brand-neutral-dark group-hover:text-brand-blue transition-colors">
                      0555 532 355
                    </p>
                  </div>
                </a>

                <a
                  href="tel:0779373928"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors">
                    <Phone
                      size={16}
                      className="text-brand-blue group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                      Phone
                    </p>
                    <p className="text-sm font-semibold text-brand-neutral-dark group-hover:text-brand-blue transition-colors">
                      0779 373 928
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:uniquetechsolutions2022@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-green-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors">
                    <Mail
                      size={16}
                      className="text-brand-green group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-brand-neutral-dark group-hover:text-brand-green transition-colors break-all leading-snug">
                      uniquetechsolutions2022@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="bg-white rounded-lg border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-slate-500" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                    Office
                  </p>
                  <p className="text-sm font-semibold text-brand-neutral-dark">
                    Camp Johnson Road
                  </p>
                  <p className="text-xs text-slate-400">Monrovia, Liberia</p>
                </div>
              </div>
            </div>

            {/* Response time card */}
            <div className="bg-gradient-to-br from-brand-blue-dark to-brand-blue rounded-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">
                    Response Time
                  </p>
                  <p className="text-sm font-semibold">Within 24 Hours</p>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                Our team reviews every inquiry personally and responds within one
                business day.
              </p>
            </div>

            {/* Quick links */}
            <div className="bg-white rounded-lg border border-slate-100 shadow-sm p-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Quick Links
              </h4>
              <div className="space-y-2">
                {[
                  { label: "Enterprise Services", href: "#services" },
                  { label: "Computer Lab Program", href: "#digital-literacy" },
                  { label: "Our Track Record", href: "#track-record" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between text-sm text-slate-600 hover:text-brand-blue py-1.5 group"
                  >
                    {link.label}
                    <ArrowRight
                      size={14}
                      className="text-slate-300 group-hover:text-brand-blue transition-all group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
