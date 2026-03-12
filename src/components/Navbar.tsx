"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/messages", label: "Messages" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(26,58,42,0.06)]"
          : "bg-cream/70 backdrop-blur-md"
      }`}
    >
      {/* Decorative gold accent line at the very top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        {/* ── Logo & Site Name ── */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
        >
          <Image
            src="/images/Untitled-design.png"
            alt="Valimont Ministries logo"
            width={44}
            height={44}
            className="rounded-full object-cover"
            priority
          />
          <span className="font-serif text-xl font-semibold tracking-wide text-forest lg:text-2xl">
            Valimont Ministries
          </span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative px-4 py-2 font-sans text-[0.9rem] font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
                  isActive(href)
                    ? "text-forest"
                    : "text-charcoal/70 hover:text-forest"
                }`}
              >
                {label}
                {/* Active underline indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gold transition-all duration-300 ease-out ${
                    isActive(href) ? "w-5" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Mobile Hamburger Button ── */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-[2px] w-6 rounded-full bg-forest transition-all duration-300 ease-out ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-forest transition-all duration-300 ease-out ${
              mobileOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-forest transition-all duration-300 ease-out ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-forest/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Menu Panel ── */}
      <div
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-cream shadow-[-8px_0_30px_rgba(26,58,42,0.08)] transition-transform duration-400 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top section with branding */}
        <div className="flex items-center gap-3 border-b border-sage px-6 pb-5 pt-6">
          <Image
            src="/images/Untitled-design.png"
            alt="Valimont Ministries logo"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="font-serif text-lg font-semibold text-forest">
            Valimont Ministries
          </span>
        </div>

        {/* Mobile nav links */}
        <nav className="flex flex-1 flex-col gap-1 px-4 pt-6">
          {navLinks.map(({ href, label }, index) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`group flex items-center rounded-lg px-4 py-3 font-sans text-[0.95rem] font-medium uppercase tracking-[0.08em] transition-all duration-300 ${
                isActive(href)
                  ? "bg-sage/60 text-forest"
                  : "text-charcoal/70 hover:bg-sage/30 hover:text-forest"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Active accent bar */}
              <span
                className={`mr-3 inline-block h-4 w-[2px] rounded-full transition-all duration-300 ${
                  isActive(href) ? "bg-gold" : "bg-transparent"
                }`}
              />
              {label}
            </Link>
          ))}
        </nav>

        {/* Decorative bottom accent */}
        <div className="px-6 pb-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <p className="mt-4 font-serif text-sm italic text-charcoal/40">
            Faith, Hope &amp; Love
          </p>
        </div>
      </div>
    </header>
  );
}
