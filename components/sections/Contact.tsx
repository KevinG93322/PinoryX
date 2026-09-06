"use client";

import { FormEvent, useState } from "react";
import { interests, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

type Status = "idle" | "sent";

const fieldClass =
  "w-full border border-line bg-white px-3.5 py-3 text-base text-ink";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`PineryX inquiry — ${interest || "Project"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany / project: ${company || "—"}\nInterest: ${interest}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <Section id="contact" className="bg-elevated pb-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Tell us what you are building.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Share a short brief of what you want to launch. We reply by email.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block text-xl font-medium text-blue transition-colors hover:text-blue-dim"
            >
              {site.email}
            </a>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="surface-card bg-white p-6 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required autoComplete="name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Company / project" name="company" autoComplete="organization" />
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">
                    Interest
                  </span>
                  <select
                    name="interest"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select a focus
                    </option>
                    {interests.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`${fieldClass} resize-y`}
                  placeholder="What are you trying to launch, and on which chain — if you already know?"
                />
              </label>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-dim"
                >
                  Send message
                </button>
                {status === "sent" ? (
                  <p className="text-sm text-muted">
                    If your email client did not open, write to {site.email}.
                  </p>
                ) : (
                  <p className="text-sm text-muted">We read every serious inquiry.</p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </label>
  );
}
