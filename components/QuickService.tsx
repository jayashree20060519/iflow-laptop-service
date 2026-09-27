const quickServices = [
  {
    icon: "💻",
    title: "Laptop Not Working",
    description: "Complete laptop diagnosis and repair",
  },
  {
    icon: "🖥️",
    title: "Screen Issue",
    description: "Screen replacement and display problems",
  },
  {
    icon: "🔋",
    title: "Battery Problem",
    description: "Battery checking and replacement",
  },
  {
    icon: "⚡",
    title: "Charging Issue",
    description: "Charging port and power problems",
  },
  {
    icon: "🚀",
    title: "Slow Laptop",
    description: "Performance optimization and upgrades",
  },
  {
    icon: "🛠️",
    title: "Other Issues",
    description: "Get help with any laptop problem",
  },
];

export default function QuickService() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            QUICK SERVICE
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
            What&apos;s wrong with your laptop?
          </h2>

          <p className="mt-4 text-gray-600">
            Select your laptop issue and get the right service quickly.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {quickServices.map((service) => (
            <button
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl transition group-hover:bg-green-100">
                  {service.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0B1F3A]">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {service.description}
                  </p>
                </div>

              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-800">
            Get Quick Service
          </button>
        </div>

      </div>
    </section>
  );
}