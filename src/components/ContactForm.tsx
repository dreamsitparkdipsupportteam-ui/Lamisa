"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/content/services";
import { SERVICE_EVENT } from "./ServiceCta";
import { site } from "@/content/site";

type Values = { name: string; email: string; service: string; message: string; website: string };
type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const empty: Values = { name: "", email: "", service: "", message: "", website: "" };

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) errors.email = "Please enter a valid email address.";
  if (v.message.trim().length < 10) errors.message = "Please write at least a short message (10+ characters).";
  return errors;
}

const fieldClass =
  "mt-2 w-full rounded-2xl border bg-white px-4 py-3.5 text-base text-brand-ink placeholder:text-brand-ink/45 transition focus:border-brand-purple focus:outline-none focus:ring-4 focus:ring-brand-purple/15";

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  useEffect(() => {
    const onService = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (typeof detail === "string") setValues((v) => ({ ...v, service: detail }));
    };
    window.addEventListener(SERVICE_EVENT, onService);
    return () => window.removeEventListener(SERVICE_EVENT, onService);
  }, []);

  const set = (key: keyof Values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "submitting") return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ state: "idle" });
      const first = (["name", "email", "message"] as const).find((k) => found[k]);
      if (first) document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus({ state: "success" });
        setValues(empty);
        return;
      }

      if (res.status === 422) {
        const data = (await res.json()) as { fields?: Errors };
        setErrors(data.fields ?? {});
        setStatus({ state: "error", message: "Please check the highlighted fields and try again." });
        return;
      }

      if (res.status === 503) {
        setStatus({
          state: "error",
          message: site.email
            ? `The contact form isn't connected yet, so your message was not sent. Please email me directly at ${site.email}.`
            : "The contact form isn't connected yet, so your message was not sent. Please reach out through one of the links beside the form.",
        });
        return;
      }

      setStatus({
        state: "error",
        message: "Something went wrong and your message was not sent. Please try again in a moment.",
      });
    } catch {
      setStatus({
        state: "error",
        message: "We couldn't reach the server, so your message was not sent. Check your connection and try again.",
      });
    }
  }

  const submitting = status.state === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Project inquiry form" className="card p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-bold">
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`${fieldClass} ${errors.name ? "border-red-600" : "border-brand-lavender"}`}
            placeholder="Jane Doe"
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-1.5 text-sm font-semibold text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-bold">
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`${fieldClass} ${errors.email ? "border-red-600" : "border-brand-lavender"}`}
            placeholder="jane@company.com"
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-1.5 text-sm font-semibold text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-service" className="text-sm font-bold">
          What do you need help with? <span className="font-medium text-brand-ink/60">(optional)</span>
        </label>
        <select
          id="contact-service"
          name="service"
          value={values.service}
          onChange={set("service")}
          className={`${fieldClass} border-brand-lavender`}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="text-sm font-bold">
          Tell me about your project
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={set("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${fieldClass} resize-y ${errors.message ? "border-red-600" : "border-brand-lavender"}`}
          placeholder="Your goals, your audience, and where you'd like to be in a few months."
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-1.5 text-sm font-semibold text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot: hidden from people and assistive tech, catches simple bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={set("website")}
        />
      </div>

      <button type="submit" disabled={submitting} className="btn btn-primary mt-7 w-full disabled:opacity-70 sm:w-auto">
        {submitting ? (
          <>
            <Loader2 aria-hidden className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send inquiry
            <Send aria-hidden className="h-5 w-5" />
          </>
        )}
      </button>

      <div aria-live="polite" role="status" className="mt-5 empty:hidden">
        {status.state === "success" ? (
          <p className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-900">
            <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
            Thank you! Your message was sent. I&apos;ll get back to you soon.
          </p>
        ) : null}
        {status.state === "error" ? (
          <p className="flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-900">
            <AlertCircle aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
