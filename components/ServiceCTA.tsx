import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#071A2F] via-[#0B2F46] to-[#123B35] px-8 py-16 text-center shadow-xl sm:px-12">

        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-500/10" />
        <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-500/10" />

        <div className="relative z-10 mx-auto max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
            NEED LAPTOP SERVICE?
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Get Your Laptop Back in Shape
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
            Get professional laptop repair and service from experienced
            technicians. Tell us your issue and let us help you find the
            right solution.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/book-service"
              className="rounded-full bg-green-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-green-600"
            >
              Book a Service
            </Link>

            <Link
              href="/contact"
              className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-green-400 hover:bg-green-500"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}