"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const whatsappMessage = `NEW CUSTOMER ENQUIRY

Customer Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Laptop Issue:
${message}

--------------------------------
iFLOW SYSTEMS
Website contact enquiry.`;

    const whatsappUrl = `https://wa.me/917824000011?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section
      id="contact"
      className="bg-[#F8FBFF] px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            CONTACT US
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
            Let&apos;s Get Your Laptop Fixed
          </h2>

          <p className="mt-4 text-gray-600">
            Have a laptop problem? Get in touch with our team and find the
            right service for your device.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl bg-gradient-to-br from-[#071A2F] to-[#123B35] p-8 text-white shadow-xl sm:p-10">

            <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-400">
              GET IN TOUCH
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              We&apos;re Here to Help
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              Contact us for laptop repair, service, upgrades and technical
              support.
            </p>

            {/* Details */}
            <div className="mt-8 space-y-7">

              {/* OMR */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/20 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">
                    OMR Branch
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    3/828, Pillayar Kovil St,
                    <br />
                    Mettukuppam, OMR,
                    <br />
                    Thoraipakkam, Chennai,
                    <br />
                    Tamil Nadu - 600097
                  </p>

                  <a
                    href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiYvpvCwaCWAxUAAAAAHQAAAAAQDw..i&pvq=Cg0vZy8xMWg1Zm0zaG5xIhMKDWlmbG93IHN5c3RlbXMQAhgD&lqi=Cg1pZmxvdyBzeXN0ZW1zSJb9xtmVr4CACFoXEAAQARgAGAEiDWlmb3cgIHN5c3RlbXOSARdjb21wdXRlcl9yZXBhaXJfc2VydmljZQ&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3a525d1bad26b235:0x5e0d0d4748737a43"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-green-400 transition hover:text-green-300"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              {/* ECR */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/20 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">
                    ECR Branch
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    No.106, New, 6th East Street,
                    <br />
                    Vaithiyalingam Salai,
                    <br />
                    East Coast Road,
                    <br />
                    Ganesh Nagar, Neelankarai,
                    <br />
                    Chennai, Tamil Nadu - 600115
                  </p>

                  <a
                    href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiYvpvCwaCWAxUAAAAAHQAAAAAQHg..i&pvq=Cg0vZy8xMWcwaHlsdmx4IhMKDWlmbG93IHN5c3RlbXMQAhgD&lqi=Cg1pZmxvdyBzeXN0ZW1zSNzU5f6BroCACFoXEAAQARgAGAEiDWlmb3cgIHN5c3RlbXOSARBjb21wdXRlcl9zZXJ2aWNl&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3a525d24326d3e91:0x3cecf14a1fd0af0c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-green-400 transition hover:text-green-300"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/20 text-xl">
                  📞
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">
                    Phone
                  </p>

                  <a
                    href="tel:+917824000011"
                    className="mt-1 block text-sm text-gray-300 transition hover:text-white"
                  >
                    +91 78240 00011
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/20 text-xl">
                  💬
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/917824000011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-gray-300 transition hover:text-white"
                  >
                    Chat with our team
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/20 text-xl">
                  🕐
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">
                    Working Hours
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    Please contact our team for current working hours.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/book-service"
                className="inline-flex rounded-full bg-green-500 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-green-600"
              >
                Book a Service
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">

            <h3 className="text-2xl font-bold text-[#0B1F3A]">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Tell us about your laptop issue and our team can get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Your Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Laptop Issue *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your laptop problem..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-800"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}