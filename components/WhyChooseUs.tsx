const reasons = [
  {
    icon: "⭐",
    title: "4.9 Star Rated",
    highlight: "139+ Reviews",
    description:
      "Trusted by customers across OMR, ECR and surrounding Chennai areas for reliable laptop repair.",
  },
  {
    icon: "🔬",
    title: "Chip-Level Repair",
    highlight: "Advanced Diagnosis",
    description:
      "Component-level motherboard diagnosis and repair for complex laptop hardware problems.",
  },
  {
    icon: "🚗",
    title: "Free Pickup & Drop",
    highlight: "OMR & ECR",
    description:
      "Convenient pickup from your home or office and safe delivery after repair and testing.",
  },
  {
    icon: "🔍",
    title: "Free Diagnosis",
    highlight: "No Hidden Charges",
    description:
      "We diagnose the laptop first and clearly explain the issue and repair cost before starting.",
  },
  {
    icon: "⚡",
    title: "Fast Repairs",
    highlight: "Same-Day Options",
    description:
      "Many common screen, battery, keyboard and software issues can be resolved on the same day.",
  },
  {
    icon: "🛡️",
    title: "30-Day Warranty",
    highlight: "Repair Support",
    description:
      "Our repair service includes a 30-day warranty for dependable after-service support.",
  },
  {
    icon: "💻",
    title: "All Major Brands",
    highlight: "One Service Center",
    description:
      "Dell, HP, Lenovo, ASUS, Acer, Apple and other major laptop brands are supported.",
  },
  {
    icon: "🏆",
    title: "14+ Years Experience",
    highlight: "20,000+ Laptops",
    description:
      "Years of hands-on experience helping customers with laptop repair and technical issues.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">

      {/* Soft Background Shapes */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-green-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
              Why Choose iFlow
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
            Laptop Repair You Can{" "}
            <span className="text-blue-700">
              Trust
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Professional laptop repair backed by experienced technicians,
            transparent diagnosis, quality parts and dependable customer
            support across Chennai.
          </p>

        </div>


        {/* ================= TRUST STATS ================= */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg sm:grid-cols-4">

          <div className="border-b border-gray-200 p-6 text-center sm:border-b-0 sm:border-r">
            <p className="text-3xl font-extrabold text-blue-700">
              14+
            </p>
            <p className="mt-1 text-sm font-medium text-gray-500">
              Years Experience
            </p>
          </div>

          <div className="border-b border-gray-200 p-6 text-center sm:border-b-0 sm:border-r">
            <p className="text-3xl font-extrabold text-green-600">
              20K+
            </p>
            <p className="mt-1 text-sm font-medium text-gray-500">
              Laptops Repaired
            </p>
          </div>

          <div className="p-6 text-center sm:border-r sm:border-gray-200">
            <p className="text-3xl font-extrabold text-blue-700">
              4.9★
            </p>
            <p className="mt-1 text-sm font-medium text-gray-500">
              Customer Rating
            </p>
          </div>

          <div className="p-6 text-center">
            <p className="text-3xl font-extrabold text-green-600">
              30 Days
            </p>
            <p className="mt-1 text-sm font-medium text-gray-500">
              Service Warranty
            </p>
          </div>

        </div>


        {/* ================= REASONS ================= */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >

              {/* Top Line */}
              <div className="absolute left-7 right-7 top-0 h-1 rounded-b-full bg-gradient-to-r from-blue-600 to-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <span className="absolute right-6 top-6 text-xs font-extrabold text-gray-200">
                {String(index + 1).padStart(2, "0")}
              </span>


              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-green-50 text-3xl shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-green-200">
                {reason.icon}
              </div>


              {/* Title */}
              <h3 className="mt-6 text-xl font-extrabold text-[#0B1F3A]">
                {reason.title}
              </h3>


              {/* Highlight */}
              <p className="mt-1 text-sm font-bold text-green-600">
                {reason.highlight}
              </p>


              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {reason.description}
              </p>


              {/* Bottom */}
              <div className="mt-6 flex items-center gap-2 border-t border-gray-100 pt-4">

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                  ✓
                </span>

                <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
                  Trusted Service
                </span>

              </div>

            </div>
          ))}

        </div>


        {/* ================= FINAL CTA ================= */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#0B1F3A] via-[#123B5C] to-[#12633F] px-8 py-10 shadow-xl sm:px-12">

          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full border-[40px] border-white/5" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-60 w-60 rounded-full border-[30px] border-green-400/10" />


          <div className="relative flex flex-col items-center justify-between gap-7 md:flex-row">

            <div className="text-center md:text-left">

              <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-400">
                Need Laptop Repair?
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                Let Our Experts Take Care of It.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-300">
                Get your laptop diagnosed by our experienced service team
                before deciding on the repair.
              </p>

            </div>


            <a
              href="/book-service"
              className="shrink-0 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-xl"
            >
              Book a Service →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}