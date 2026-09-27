export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            CUSTOMER FEEDBACK
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600">
            We value every customer experience and are committed to providing
            reliable laptop repair and service.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-3xl border border-gray-200 bg-[#F8FBFF] p-10 text-center shadow-sm sm:p-14">

            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              ⭐
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#0B1F3A]">
              Customer Reviews Coming Soon
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              We&apos;re building great experiences for our customers. Verified
              customer reviews will be featured here soon.
            </p>

            {/* Review placeholders */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-xl text-gray-300">
                  ★★★★★
                </div>

                <div className="mx-auto mt-4 h-3 w-24 rounded-full bg-gray-100" />
                <div className="mx-auto mt-2 h-3 w-32 rounded-full bg-gray-100" />
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-xl text-gray-300">
                  ★★★★★
                </div>

                <div className="mx-auto mt-4 h-3 w-24 rounded-full bg-gray-100" />
                <div className="mx-auto mt-2 h-3 w-32 rounded-full bg-gray-100" />
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="text-xl text-gray-300">
                  ★★★★★
                </div>

                <div className="mx-auto mt-4 h-3 w-24 rounded-full bg-gray-100" />
                <div className="mx-auto mt-2 h-3 w-32 rounded-full bg-gray-100" />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}