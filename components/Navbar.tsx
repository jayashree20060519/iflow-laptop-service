
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Brands", href: "/#brands" },
  { name: "Quick Service", href: "/#quick-service" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [branchesOpen, setBranchesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-[#071A2F] via-[#0B2340] to-[#123B35] shadow-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="iFlow Systems"
            width={210}
            height={65}
            priority
            className="h-auto w-[190px] object-contain"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white transition hover:text-[#82C91E]"
            >
              {link.name}
            </Link>
          ))}

          {/* Branches Dropdown */}
          <div className="relative">

            <button
              type="button"
              onClick={() => setBranchesOpen(!branchesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white transition hover:text-[#82C91E]"
            >
              Branches
              <span
                className={`text-xs transition-transform ${
                  branchesOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {branchesOpen && (
              <div className="absolute right-0 top-full mt-4 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

                {/* OMR */}
                <Link
                  href="/omr"
                  onClick={() => setBranchesOpen(false)}
                  className="block px-5 py-4 transition hover:bg-blue-50"
                >
                  <p className="text-sm font-bold text-[#0B1F3A]">
                    📍 OMR – Thoraipakkam
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Laptop Service Center in OMR
                  </p>
                </Link>

                {/* ECR */}
                <Link
                  href="/ecr"
                  onClick={() => setBranchesOpen(false)}
                  className="block border-t border-gray-100 px-5 py-4 transition hover:bg-green-50"
                >
                  <p className="text-sm font-bold text-[#0B1F3A]">
                    📍 ECR – Neelankarai
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Laptop Service Center in ECR
                  </p>
                </Link>

              </div>
            )}

          </div>

          {/* Book Service */}
          <Link
            href="/book-service"
            className="rounded-full bg-[#82C91E] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#6FAF18] hover:shadow-lg"
          >
            Book a Service
          </Link>

        </div>

      </nav>
    </header>
  );
}

