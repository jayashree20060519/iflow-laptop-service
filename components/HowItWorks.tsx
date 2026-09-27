const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Choose Your Issue",
    description:
      "Tell us about your laptop problem and choose the service you need.",
  },
  {
    number: "02",
    icon: "📅",
    title: "Book a Service",
    description:
      "Send your service request and choose a convenient time for your service.",
  },
  {
    number: "03",
    icon: "🛠️",
    title: "Expert Diagnosis",
    description:
      "Our technician checks your laptop and identifies the exact problem.",
  },
  {
    number: "04",
    icon: "✅",
    title: "Get It Repaired",
    description:
      "Once approved, we complete the repair and get your laptop ready.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F8FBFF] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
            Simple. Quick. Reliable.
          </h2>

          <p className="mt-4 text-gray-600">
            Getting your laptop serviced is easy with iFlow Systems.
            Follow these simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
            >
              {/* Number */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-lg font-extrabold text-white">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mx-auto mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                {step.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}