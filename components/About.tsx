import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/hero-bg.png"
            alt="Professional laptop repair service at iFlow Systems"
            width={900}
            height={650}
            className="h-[420px] w-full object-cover object-right"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 to-transparent" />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            ABOUT IFLOW SYSTEMS
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B1F3A] sm:text-4xl">
            Trusted Laptop Repair Experts in Chennai
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            iFlow Systems provides professional laptop repair and service
            solutions for customers across Chennai. With experienced
            technicians and workshop-based repairs, we handle hardware,
            software and performance-related laptop issues.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            From screen and battery replacement to chip-level motherboard
            repair, data recovery, software support and laptop upgrades, our
            team focuses on accurate diagnosis and reliable repair solutions.
          </p>

          {/* Points */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              "14+ Years of Expertise",
              "20,000+ Laptops Repaired",
              "Free Diagnosis",
              "30-Day Service Warranty",
              "Free Pickup & Drop",
              "All Major Brands",
            ].map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                  ✓
                </span>

                <span className="font-semibold text-[#0B1F3A]">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8">
            <Link
              href="/book-service"
              className="inline-flex rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-800"
            >
              Book a Service
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}