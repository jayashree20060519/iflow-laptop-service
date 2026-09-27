const services = [
  {
    icon: "🖥️",
    title: "Screen Replacement",
    description:
      "Laptop screen replacement for cracked, damaged, dim, flickering, blank, touch and non-touch displays across all major brands.",
  },
  {
    icon: "🔋",
    title: "Battery Replacement",
    description:
      "Battery inspection and replacement for major laptop brands. Battery health is tested after fitting to ensure reliable performance.",
  },
  {
    icon: "🔬",
    title: "Chip-Level Motherboard Repair",
    description:
      "Component-level diagnosis and repair for no power, charging failure, random shutdowns and other motherboard-related issues.",
  },
  {
    icon: "⌨️",
    title: "Keyboard & Touchpad",
    description:
      "Keyboard and touchpad replacement for all major laptop brands, including support for liquid-damaged keyboards.",
  },
  {
    icon: "💾",
    title: "Data Recovery",
    description:
      "Professional data recovery support for failed HDDs, SSD failures, deleted files and corrupted operating systems.",
  },
  {
    icon: "❄️",
    title: "Overheating & Cleaning",
    description:
      "Deep laptop cleaning, fan cleaning, thermal paste replacement and heat-sink servicing to help reduce overheating.",
  },
  {
    icon: "💻",
    title: "OS & Software Support",
    description:
      "Windows 10/11 installation, virus removal, driver updates, software troubleshooting and laptop performance optimisation.",
  },
  {
    icon: "🔩",
    title: "Hinge & Body Repair",
    description:
      "Laptop hinge and body repair for major brands, helping prevent further damage to the screen and laptop frame.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8FBFF] px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            OUR SERVICES
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
            Complete Laptop Repair Services in Chennai
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            All repairs are done at our workshop with genuine parts and a
            30-day service warranty. Free diagnosis on every laptop —
            exact cost confirmed before we begin.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-3xl transition duration-300 group-hover:bg-green-100">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-bold leading-7 text-[#0B1F3A]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              {/* Service Available */}
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs">
                  ✓
                </span>
                Service Available
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/book-service"
            className="inline-block rounded-full bg-blue-700 px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-800 hover:shadow-lg"
          >
            Book a Service
          </a>
        </div>

      </div>
    </section>
  );
}