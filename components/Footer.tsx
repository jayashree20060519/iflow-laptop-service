import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Brands", href: "/#brands" },
  { name: "About Us", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { name: "Laptop Repair", href: "/#services" },
  { name: "Screen Replacement", href: "/#services" },
  { name: "Battery Replacement", href: "/#services" },
  { name: "Motherboard Repair", href: "/#services" },
  { name: "SSD & RAM Upgrade", href: "/#services" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071A2F] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="iFlow Systems Laptop Service Center Chennai"
                width={190}
                height={60}
                className="h-auto w-[180px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              iFlow Systems provides professional laptop repair and service
              solutions in Chennai, including screen replacement, battery
              replacement, motherboard repair, data recovery and laptop
              upgrades.
            </p>

            {/* WhatsApp */}
            <div className="mt-6">
              <a
                href="https://wa.me/917824000011"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact iFlow Systems on WhatsApp"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-600"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-green-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">

              {/* Location */}
              <div className="flex gap-3">
                <span className="text-green-400">📍</span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-green-400">
                    Service Locations
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    OMR – Thoraipakkam
                    <br />
                    ECR – Neelankarai
                    <br />
                    Chennai, Tamil Nadu
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <span className="text-green-400">📞</span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-green-400">
                    Phone
                  </p>

                  <a
                    href="tel:+917824000011"
                    className="mt-1 block text-sm text-gray-400 transition hover:text-white"
                  >
                    +91 78240 00011
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-3">
                <span className="text-green-400">💬</span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-green-400">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/917824000011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-gray-400 transition hover:text-white"
                  >
                    Chat with our team
                  </a>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-7">
              <Link
                href="/book-service"
                className="inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-800"
              >
                Book a Service
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center sm:flex-row sm:text-left lg:px-8">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} iFlow Systems. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Professional Laptop Service Center in Chennai
          </p>

        </div>
      </div>

    </footer>
  );
}