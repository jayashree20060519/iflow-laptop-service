
import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Laptop Service Center in ECR Chennai | iFlow Systems",
  description:
    "iFlow Systems ECR Branch in Neelankarai provides professional laptop repair and service for all major brands. Free diagnosis, pickup support and 30-day service warranty.",
  keywords: [
    "laptop service center ECR Chennai",
    "laptop repair ECR Chennai",
    "laptop service center Neelankarai",
    "laptop repair Neelankarai",
    "laptop repair near ECR",
    "laptop service East Coast Road Chennai",
  ],
  alternates: {
    canonical: "https://iflowsystems.co.in/ecr",
  },
};

const services = [
  "Laptop Screen Replacement",
  "Battery Replacement",
  "Chip-Level Motherboard Repair",
  "Keyboard & Touchpad Repair",
  "Charging Issue Repair",
  "Data Recovery",
  "Overheating & Cleaning",
  "OS & Software Support",
  "SSD & RAM Upgrade",
  "Hinge & Body Repair",
];

const areas = [
  "Neelankarai",
  "Palavakkam",
  "Perungudi",
  "Thoraipakkam",
  "Kottivakkam",
  "Injambakkam",
  "Sholinganallur",
  "Akkarai",
  "Vettuvankeni",
  "Uthandi",
  "Adyar",
  "Besant Nagar",
];

const brands = [
  "Dell",
  "HP",
  "Lenovo",
  "Acer",
  "ASUS",
  "Apple",
];

const faqs = [
  {
    question: "Where is iFlow Systems ECR Branch located?",
    answer:
      "Our ECR Branch is located at No.106, New, 6th East Street, Vaithiyalingam Salai, East Coast Road, Ganesh Nagar, Neelankarai, Chennai – 600115.",
  },
  {
    question: "Do you provide laptop repair in Neelankarai?",
    answer:
      "Yes. iFlow Systems provides professional laptop repair and service for customers in Neelankarai and nearby ECR areas.",
  },
  {
    question: "Do you provide free laptop diagnosis?",
    answer:
      "Yes. We diagnose the laptop issue before starting the repair and confirm the repair cost with the customer.",
  },
  {
    question: "Do you provide laptop pickup and drop in ECR?",
    answer:
      "Pickup support is available for customers in ECR and nearby service areas. Contact our team to check pickup availability for your location.",
  },
  {
    question: "Which laptop brands do you repair?",
    answer:
      "We repair Dell, HP, Lenovo, Acer, ASUS, Apple and other major laptop brands.",
  },
  {
    question: "What laptop problems can you repair?",
    answer:
      "We handle screen replacement, battery issues, charging problems, motherboard repair, keyboard repair, overheating, software problems, data recovery and SSD or RAM upgrades.",
  },
  {
    question: "How long does laptop repair take?",
    answer:
      "Common repairs such as screen, battery, keyboard and software issues may be completed quickly depending on parts availability. Complex motherboard repairs may require additional time.",
  },
  {
    question: "Do you provide a service warranty?",
    answer:
      "Yes. Eligible repairs come with a 30-day service warranty. Warranty terms may vary depending on the repair and replacement part.",
  },
];

export default function ECRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              IFLOW SYSTEMS · ECR BRANCH · NEELANKARAI
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              Laptop Service Center in ECR, Chennai
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              iFlow Systems provides professional laptop repair and service
              in ECR, Neelankarai and surrounding Chennai areas. We repair
              Dell, HP, Lenovo, ASUS, Acer, Apple and other major laptop
              brands with reliable service and customer support.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              Our ECR service center handles screen replacement, battery
              replacement, charging issues, motherboard repair, keyboard
              repair, software support, data recovery and laptop upgrades.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="tel:+917824000011"
                className="rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                📞 Call ECR: 078240 00011
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
                🚗 Book Service
              </Link>

            </div>
          </div>

          {/* STATS */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {[
              ["🔧", "Expert", "Laptop Repairs"],
              ["🔍", "FREE", "Diagnosis"],
              ["💻", "All Major", "Brands"],
              ["🛡️", "30-Day", "Service Warranty"],
              ["🚗", "Pickup", "Support"],
            ].map(([icon, value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="text-2xl">{icon}</div>

                <div className="mt-2 text-xl font-extrabold text-[#0B1F3A]">
                  {value}
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  {label}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= BRANCH INFORMATION ================= */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              ECR BRANCH
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
              iFlow Systems Laptop Service Center in Neelankarai
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Convenient laptop repair and service for customers in
              Neelankarai, ECR and nearby areas of Chennai.
            </p>

          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            {/* ADDRESS */}
            <div className="rounded-3xl border border-gray-200 bg-[#F8FBFF] p-8">

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                📍 Branch Information
              </h3>

              <div className="mt-6 space-y-6">

                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-green-600">
                    Address
                  </p>

                  <p className="mt-2 leading-7 text-gray-600">
                    No.106, New, 6th East Street,
                    <br />
                    Vaithiyalingam Salai,
                    <br />
                    East Coast Road,
                    <br />
                    Ganesh Nagar, Neelankarai,
                    <br />
                    Chennai, Tamil Nadu – 600115
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
                    Service Area
                  </p>

                  <p className="mt-1 leading-6 text-gray-600">
                    ECR, Neelankarai, Palavakkam, Kottivakkam,
                    Injambakkam and surrounding Chennai areas.
                  </p>
                </div>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=iFlow+Systems+Neelankarai+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                📍 Get Directions
              </a>

            </div>

            {/* WHY CHOOSE */}
            <div className="rounded-3xl border border-green-100 bg-green-50 p-8">

              <h3 className="text-2xl font-bold text-[#0B1F3A]">
                Why Choose iFlow Systems ECR?
              </h3>

              <div className="mt-6 space-y-4">

                {[
                  "🔍 Free laptop diagnosis before repair",
                  "🔧 Experienced laptop repair technicians",
                  "💻 Service for major laptop brands",
                  "🛡️ 30-day service warranty on eligible repairs",
                  "⚡ Quick support for common laptop issues",
                  "🔬 Motherboard and hardware repair",
                  "🚗 Pickup support for nearby areas",
                  "💰 Repair cost confirmed before work begins",
                ].map((item) => (
                  <p
                    key={item}
                    className="text-gray-700"
                  >
                    {item}
                  </p>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-[#F8FBFF] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              LAPTOP REPAIR SERVICES
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
              Complete Laptop Repair Services in ECR
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our ECR and Neelankarai service center provides professional
              repair and technical support for common laptop hardware and
              software problems.
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
                  Professional diagnosis and repair support from our ECR
                  service center.
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            BRANDS WE SERVICE
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
            Laptop Brands We Repair in ECR
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
            We also service other major laptop brands. Contact our ECR branch
            to confirm support for your laptop model.
          </p>

        </div>
      </section>

      {/* ================= AREAS SERVED ================= */}
      <section className="bg-[#F8FBFF] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              AREAS WE SERVE
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
              Laptop Repair Across ECR and Nearby Areas
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              iFlow Systems ECR provides laptop repair and service support
              across Neelankarai and surrounding ECR areas of Chennai.
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

      {/* ================= PICKUP CTA ================= */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-700 to-green-600 px-8 py-12 text-center text-white shadow-xl">

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Don&apos;t Want to Visit Our ECR Branch?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Contact iFlow Systems to check pickup support in your area.
            We can arrange laptop collection, diagnosis and repair based on
            service availability.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/book-service"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-gray-100"
            >
              🚗 Book a Service
            </Link>

            <a
              href="https://wa.me/917824000011"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-green-700"
            >
              💬 WhatsApp ECR
            </a>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#F8FBFF] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
              ECR Laptop Repair – Frequently Asked Questions
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

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            NEED LAPTOP REPAIR?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
            Laptop Problem in ECR? iFlow Systems Can Help.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Visit our Neelankarai service center or contact our team to
            discuss your laptop repair requirement.
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
              🚗 Book a Service
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
