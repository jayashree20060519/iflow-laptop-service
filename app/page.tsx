
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import QuickService from "@/components/QuickService";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ServiceCTA from "@/components/ServiceCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= LOCAL BUSINESS SEO ================= */}
      <LocalBusinessSchema />

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative min-h-[650px] scroll-mt-20 overflow-hidden"
      >
        <Image
          src="/hero-bg.png"
          alt="iFlow Systems laptop repair and service center in Chennai"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              LAPTOP REPAIR & SERVICE IN CHENNAI
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              Best Laptop Service Center
              <br />
              <span className="text-blue-700">
                in Chennai
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              iFlow Systems provides professional laptop repair and service
              in Chennai for Dell, HP, Lenovo, ASUS, Acer, Apple and other
              major brands. We handle screen replacement, battery replacement,
              motherboard repair, software support, data recovery and laptop
              upgrades.
            </p>

            <p className="mt-4 text-sm font-semibold text-[#0B1F3A]">
              Serving customers in OMR, Thoraipakkam, ECR, Neelankarai and
              surrounding areas of Chennai.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/book-service"
                className="rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                Book a Service
              </Link>

              <Link
                href="#services"
                className="rounded-full border-2 border-green-600 bg-white/80 px-7 py-3.5 text-sm font-bold text-green-700 backdrop-blur-sm transition hover:bg-green-600 hover:text-white"
              >
                Explore Services
              </Link>

            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-700">
              <span>✓ Experienced Technicians</span>
              <span>✓ Quality Service</span>
              <span>✓ Multiple Brands</span>
            </div>

          </div>
        </div>
      </section>

      {/* ================= QUICK SERVICE ================= */}
      <div id="quick-service" className="scroll-mt-20">
        <QuickService />
      </div>

      {/* ================= SERVICES ================= */}
      <div id="services" className="scroll-mt-20">
        <Services />
      </div>

      {/* ================= BRANDS ================= */}
      <div id="brands" className="scroll-mt-20">
        <Brands />
      </div>

      {/* ================= SERVICE LOCATIONS ================= */}
      <section className="bg-[#F8FBFF] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              OUR SERVICE LOCATIONS
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
              Laptop Service Centers in Chennai
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              iFlow Systems provides professional laptop repair and service
              in OMR and ECR, Chennai. Our technicians handle laptop repairs,
              screen replacement, battery replacement, motherboard repair,
              software support and laptop upgrades for all major brands.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* OMR */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                📍
              </div>

              <h3 className="mt-5 text-2xl font-bold text-[#0B1F3A]">
                Laptop Service Center in OMR
              </h3>

              <p className="mt-3 font-semibold text-green-600">
                Thoraipakkam, Chennai
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Get professional laptop repair and service in OMR,
                Thoraipakkam. We provide screen replacement, battery
                replacement, motherboard repair, software support, SSD &
                RAM upgrades and other laptop repair services.
              </p>

              <Link
                href="/omr"
                className="mt-6 inline-flex rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-800"
              >
                View OMR Service →
              </Link>

            </div>

            {/* ECR */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                📍
              </div>

              <h3 className="mt-5 text-2xl font-bold text-[#0B1F3A]">
                Laptop Service Center in ECR
              </h3>

              <p className="mt-3 font-semibold text-green-600">
                Neelankarai, Chennai
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Get professional laptop repair and service in ECR,
                Neelankarai. Our team provides screen, battery, motherboard,
                charging, software and laptop upgrade services for major
                laptop brands.
              </p>

              <Link
                href="/ecr"
                className="mt-6 inline-flex rounded-full bg-green-600 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-green-700"
              >
                View ECR Service →
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs />

      {/* ================= ABOUT ================= */}
      <div id="about" className="scroll-mt-20">
        <About />
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <HowItWorks />

      {/* ================= TESTIMONIALS ================= */}
      <Testimonials />

      {/* ================= SERVICE CTA ================= */}
      <ServiceCTA />

      {/* ================= CONTACT ================= */}
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />

    </main>
  );
}
