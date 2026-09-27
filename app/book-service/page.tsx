
"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BookService() {
  const [submitted, setSubmitted] = useState(false);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // Prevent selecting a past date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    setMinDate(`${year}-${month}-${day}`);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const customerName =
      formData.get("customerName")?.toString().trim() || "";

    const phone =
      formData.get("phone")?.toString().trim() || "";

    const email =
      formData.get("email")?.toString().trim() || "";

    const laptopBrand =
      formData.get("laptopBrand")?.toString().trim() || "";

    const serviceRequired =
      formData.get("serviceRequired")?.toString().trim() || "";

    const problem =
      formData.get("problem")?.toString().trim() || "";

    const preferredDate =
      formData.get("preferredDate")?.toString().trim() || "";

    const preferredTime =
      formData.get("preferredTime")?.toString().trim() || "";

    const address =
      formData.get("address")?.toString().trim() || "";

    /* =====================================================
       PHONE VALIDATION
    ===================================================== */

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    /* =====================================================
       DATE VALIDATION
    ===================================================== */

    if (preferredDate && minDate && preferredDate < minDate) {
      alert("Please select today or a future date.");
      return;
    }

    /* =====================================================
       PROFESSIONAL WHATSAPP MESSAGE
    ===================================================== */

    const formattedDate = preferredDate
      ? new Date(
          `${preferredDate}T00:00:00`
        ).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "Not provided";

    const whatsappMessage = `🔔 NEW SERVICE BOOKING
━━━━━━━━━━━━━━━━━━━━

👤 CUSTOMER DETAILS

Name: ${customerName}
Phone: ${cleanPhone}
Email: ${email || "Not provided"}

💻 LAPTOP DETAILS

Brand: ${laptopBrand}
Service: ${serviceRequired}

📝 PROBLEM

${problem}

📅 APPOINTMENT

Date: ${formattedDate}
Time: ${preferredTime || "Not provided"}

📍 ADDRESS

${address || "Not provided"}

━━━━━━━━━━━━━━━━━━━━

iFLOW SYSTEMS
New service request from website.

📞 +91 78240 00011`;

    /* =====================================================
       OPEN WHATSAPP
    ===================================================== */

    const whatsappUrl = `https://wa.me/917824000011?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    /* =====================================================
       SUCCESS STATE
    ===================================================== */

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="bg-gradient-to-r from-[#071A2F] via-[#0B2340] to-[#123B35] px-6 py-16 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#82C91E]">
          iFLOW SYSTEMS
        </p>

        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          Book a Service
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
          Tell us about your laptop problem and our team will get in touch
          with you shortly.
        </p>
      </section>

      {/* =====================================================
          BOOKING SECTION
      ===================================================== */}

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">

          {/* =================================================
              TITLE
          ================================================= */}

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Service Details
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Please provide the details below so we can understand your
              requirement.
            </p>
          </div>

          {/* =================================================
              SUCCESS
          ================================================= */}

          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#82C91E] text-3xl text-white shadow-lg">
                ✓
              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#0B1F3A]">
                Service Request Submitted!
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-gray-600">
                Your service request has been prepared for WhatsApp.
                Our team will contact you shortly to confirm the booking.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">

                <Link
                  href="/"
                  className="rounded-full bg-blue-700 px-7 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Back to Home
                </Link>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-full border border-gray-300 bg-white px-7 py-3 font-bold text-gray-700 transition hover:border-green-400 hover:bg-green-50"
                >
                  Book Another Service
                </button>

              </div>
            </div>
          ) : (

            /* =================================================
               FORM
            ================================================= */

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* =================================================
                  NAME + PHONE
              ================================================= */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="customerName"
                    className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                  >
                    Customer Name *
                  </label>

                  <input
                    id="customerName"
                    name="customerName"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

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
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                  <p className="mt-1 text-[11px] text-gray-400">
                    Enter a valid 10-digit mobile number.
                  </p>
                </div>

              </div>

              {/* =================================================
                  EMAIL + BRAND
              ================================================= */}

              <div className="grid gap-6 md:grid-cols-2">

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
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="laptopBrand"
                    className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                  >
                    Laptop Brand *
                  </label>

                  <select
                    id="laptopBrand"
                    name="laptopBrand"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select brand</option>
                    <option>Dell</option>
                    <option>HP</option>
                    <option>Lenovo</option>
                    <option>ASUS</option>
                    <option>Acer</option>
                    <option>Apple</option>
                    <option>Other</option>
                  </select>
                </div>

              </div>

              {/* =================================================
                  SERVICE
              ================================================= */}

              <div>
                <label
                  htmlFor="serviceRequired"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Service Required *
                </label>

                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select service</option>
                  <option>Laptop Repair</option>
                  <option>Screen & Display</option>
                  <option>Battery Replacement</option>
                  <option>Charging Issue</option>
                  <option>Motherboard Repair</option>
                  <option>Keyboard & Touchpad</option>
                  <option>Hinge & Body Repair</option>
                  <option>Data Recovery</option>
                  <option>Overheating & Cleaning</option>
                  <option>Software & OS Support</option>
                  <option>SSD & RAM Upgrade</option>
                  <option>Other Issue</option>
                </select>
              </div>

              {/* =================================================
                  PROBLEM
              ================================================= */}

              <div>
                <label
                  htmlFor="problem"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Describe Your Problem *
                </label>

                <textarea
                  id="problem"
                  name="problem"
                  required
                  minLength={5}
                  rows={5}
                  placeholder="Tell us about the laptop problem..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

                <p className="mt-1 text-[11px] text-gray-400">
                  Example: Laptop is slow, overheating, screen not working,
                  charging issue, etc.
                </p>
              </div>

              {/* =================================================
                  DATE + TIME
              ================================================= */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="preferredDate"
                    className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    min={minDate}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                  <p className="mt-1 text-[11px] text-gray-400">
                    Select today or a future date.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                  >
                    Preferred Time
                  </label>

                  <select
                    id="preferredTime"
                    name="preferredTime"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select time</option>
                    <option>9:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 1:00 PM</option>
                    <option>2:00 PM - 4:00 PM</option>
                    <option>4:00 PM - 6:00 PM</option>
                    <option>6:00 PM - 8:00 PM</option>
                  </select>
                </div>

              </div>

              {/* =================================================
                  ADDRESS
              ================================================= */}

              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-semibold text-[#0B1F3A]"
                >
                  Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  placeholder="Enter your address"
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

                <p className="mt-1 text-[11px] text-gray-400">
                  Required if you are requesting pickup and drop.
                </p>
              </div>

              {/* =================================================
                  WHATSAPP INFO
              ================================================= */}

              <div className="rounded-2xl border border-green-200 bg-green-50 p-4">

                <div className="flex items-start gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-xl text-white">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-green-800">
                      WhatsApp Booking
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-green-700">
                      After submitting, your service details will open in
                      WhatsApp so you can send the booking request directly
                      to iFLOW SYSTEMS.
                    </p>
                  </div>

                </div>

              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <div className="pt-3 text-center">

                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-blue-700 to-green-600 px-10 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Book Service via WhatsApp
                </button>

                <p className="mt-3 text-xs text-gray-500">
                  Our team will contact you to confirm your service request.
                </p>

                <p className="mt-1 text-[10px] text-gray-400">
                  iFLOW SYSTEMS • +91 78240 00011
                </p>

              </div>

            </form>
          )}

        </div>
      </section>
    </main>
  );
}
