import Image from "next/image";

const brands = [
  {
    name: "Dell",
    logo: "/dell.png",
  },
  {
    name: "HP",
    logo: "/hp.png",
  },
  {
    name: "Lenovo",
    logo: "/lenovo.png",
  },
  {
    name: "ASUS",
    logo: "/asus.png",
  },
  {
    name: "Acer",
    logo: "/acer.png",
  },
  {
    name: "Apple",
    logo: "/apple.png",
  },
];

export default function Brands() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            BRANDS WE SERVICE
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#0B1F3A] sm:text-4xl">
            We Service All Major Laptop Brands
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Our experienced technicians provide professional laptop repair
            and service for popular brands and models.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex min-h-[170px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl"
            >
              {/* Logo Container */}
              <div className="flex h-20 w-28 items-center justify-center rounded-xl bg-[#F8FBFF] p-3 transition duration-300 group-hover:bg-green-50">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} laptop logo`}
                  width={110}
                  height={70}
                  className="max-h-16 w-auto object-contain"
                />
              </div>

              {/* Brand Name */}
              <h3 className="mt-5 text-base font-bold text-[#0B1F3A]">
                {brand.name}
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-500">
                Laptop Service
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t see your brand?
            <span className="ml-1 font-semibold text-blue-700">
              Contact us — we may still be able to help.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}