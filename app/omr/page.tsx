
import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Laptop Service Center in OMR Chennai | iFlow Systems",
  description:
    "iFlow Systems OMR Branch in Thoraipakkam offers expert laptop repair for all major brands. Free diagnosis, free pickup & drop, genuine-grade parts and 30-day service warranty.",
};

const services = [
  "Laptop Screen Replacement",
  "Battery Replacement",
  "Chip-Level Motherboard Repair",
  "Keyboard & Touchpad Repair",
  "Data Recovery",
  "Overheating & Cleaning",
  "OS & Software Support",
  "Hinge & Body Repair",
];

const areas = [
  "Thoraipakkam",
  "Sholinganallur",
  "Perungudi",
  "Karapakkam",
  "Mettukuppam",
  "Kandhanchavadi",
  "Okkiyampet",
  "Velachery",
  "Tharamani",
  "Semmancheri",
  "Madipakkam",
  "Pallikaranai",
];

const brands = ["Dell", "HP", "Lenovo", "Acer", "Asus"];

const faqs = [
  {
    question: "Where is iFlow Systems OMR Branch located?",
    answer:
      "Our OMR Branch is located at 3/828, Pillayar Kovil St, Mettukuppam, OMR Road, Thoraipakkam, Chennai – 600097.",
  },
  {
    question: "Do you provide free laptop diagnosis?",
    answer:
      "Yes. Every laptop is diagnosed at no charge. We confirm the exact repair cost before any repair work begins.",
  },
  {
    question: "Do you offer laptop pickup and drop in OMR?",
    answer:
      "Yes. Free laptop pickup and drop is available across OMR and nearby service areas. Contact us to arrange a convenient pickup.",
  },
  {
    question: "Which laptop brands do you repair?",
    answer:
      "We service Dell, HP, Lenovo, Acer, Asus and other major laptop brands.",
  },
  {
    question: "How long does laptop repair take?",
    answer:
      "Most screen, battery, keyboard and software repairs can be completed the same day. Complex motherboard repairs may take 1 to 2 days.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "Our repairs come with a 30-day service warranty. If the same issue repeats within the warranty period, we fix it free of charge.",
  },
];

export default function OMRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              IFLOW SYSTEMS · OMR BRANCH · THORAIPAKKAM
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              Laptop Service Center in OMR, Chennai
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Expert laptop repair at our OMR workshop in Thoraipakkam.
              All major brands, free diagnosis, genuine-grade parts and a
              30-day service warranty. Walk in or book a free pickup across
              OMR areas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+917824000011"
                className="rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                📞 Call OMR: 078240 00011
              </a>

              <a
                href="https://wa.me/917824000011"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-green-600 bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
              >
                💬 WhatsApp
              </a>

              <Link
                href="/book-service"
                className="rounded-full border-2 border-blue-700 px-7 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                🚗 Book Free Pickup
              </Link>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["⭐", "4.9★", "Google Rating"],
              ["💬", "139+", "Reviews"],
              ["🏆", "14+", "Years Expertise"],
              ["💻", "20K+", "Laptops Repaired"],
              ["🚗", "FREE", "Pickup & Drop"],
            ].map(([icon, value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="text-2xl">{icon}</div>
                <div className="mt-2 text-2xl font-extrabold text-[#0B1F3A]">
                  {value}
                </div>
                <div className="mt-1 text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCH INFO */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              OMR BRANCH
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
              iFlow Systems Laptop Service Center in Thoraipakkam
            </h2>

            <p className="mt-4 text-gray-600">
              Convenient laptop repair service for customers across OMR,
              Thoraipakkam and nearby Chennai areas.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Address Card */}
            <div className="rounded-3xl border border-gray-200 bg-[#F8FBFF] p-8">
              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                📍 Branch Information
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-green-600">
                    Address
                  </p>
                  <p className="mt-1 leading-7 text-gray-600">
                    3/828, Pillayar Kovil St, Mettukuppam, OMR Road,
                    Thoraipakkam, Chennai – 600097
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-green-600">
                    Phone
                  </p>
                  <a
                    href="tel:+917824000011"
                    className="mt-1 inline-block font-semibold text-blue-700 hover:text-green-600"
                  >
                    078240 00011
                  </a>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-green-600">
                    Working Hours
                  </p>
                  <p className="mt-1 text-gray-600">
                    Monday – Saturday: 10:00 AM – 9:00 PM
                    <br />
                    Sunday: 11:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=iFlow+Systems+Thoraipakkam+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                📍 Get Directions
              </a>
            </div>

            {/* Service Promise */}
            <div className="rounded-3xl border border-green-100 bg-green-50 p-8">
              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Why Choose Our OMR Branch?
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "🔍 Free diagnosis before repair",
                  "🚗 Free pickup and drop across OMR areas",
                  "🔧 Experienced laptop repair technicians",
                  "🛡️ 30-day service warranty",
                  "⚡ Same-day repairs for many common issues",
                  "🔬 Chip-level motherboard repair expertise",
                  "💻 Dell, HP, Lenovo, Acer, Asus and other brands",
                  "💰 Exact cost confirmed before repair",
                ].map((item) => (
                  <p key={item} className="text-gray-700">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F8FBFF] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              LAPTOP REPAIR SERVICES
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
              Complete Laptop Repair Services in OMR
            </h2>

            <p className="mt-4 text-gray-600">
              From screen and battery replacement to chip-level motherboard
              repair, our Thoraipakkam workshop handles a wide range of
              laptop issues.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 font-bold text-green-700">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0B1F3A]">
                  {service}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Professional diagnosis and repair at our OMR workshop.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            BRANDS WE SERVICE
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
            Laptop Brands We Repair in OMR
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-gray-200 bg-white px-7 py-3 font-bold text-[#0B1F3A] shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>

          <p className="mt-6 text-gray-600">
            We also service other major laptop brands. Contact our OMR branch
            to discuss your laptop model and issue.
          </p>
        </div>
      </section>

      {/* AREAS SERVED */}
      <section className="bg-[#F8FBFF] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              AREAS WE SERVE
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
              Laptop Repair Across OMR, Chennai
            </h2>

            <p className="mt-4 text-gray-600">
              Our OMR branch serves customers across Thoraipakkam and
              surrounding OMR areas with free pickup and drop.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-green-100 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FREE PICKUP CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-700 to-green-600 px-8 py-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Don&apos;t Want to Visit the Service Center?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Book our free laptop pickup and drop service. We collect your
            laptop, diagnose and repair it at our workshop, then deliver it
            back after testing.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-service"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-gray-100"
            >
              🚗 Book Free Pickup
            </Link>

            <a
              href="https://wa.me/917824000011"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-green-700"
            >
              💬 WhatsApp OMR
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FBFF] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
              OMR Laptop Repair – Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-6 text-lg font-bold text-[#0B1F3A]">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            NEED LAPTOP REPAIR?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
            Laptop Issue? Visit iFlow Systems OMR.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Get a free diagnosis at our Thoraipakkam workshop or book a free
            pickup from your home or office.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917824000011"
              className="rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-800"
            >
              📞 078240 00011
            </a>

            <Link
              href="/book-service"
              className="rounded-full border-2 border-green-600 px-7 py-3.5 text-sm font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
            >
              🚗 Book Free Pickup
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

