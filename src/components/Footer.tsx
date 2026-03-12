import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Books", href: "/books" },
  { label: "Messages", href: "/messages" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/jelly.valimont",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jellyvalimont/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@randyvalimont1516",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/90 relative overflow-hidden">
      {/* Gold decorative divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Subtle decorative background element */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, var(--gold) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main footer content */}
        <div className="pt-16 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left column: Logo + Contact Form */}
          <div className="lg:col-span-7 space-y-10">
            {/* Logo */}
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/images/Untitled-design.png"
                  alt="Valimont Ministries"
                  width={180}
                  height={60}
                  className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            {/* Contact section */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-cream font-light tracking-wide mb-2">
                Contact Us
              </h3>
              <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-gold-light mb-5" />
              <p className="font-sans text-cream/70 text-base leading-relaxed max-w-md mb-8">
                Stay up to date with everything going on at Valimont Ministries.
              </p>

              <form action="#" method="POST" className="space-y-5 max-w-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="footer-name"
                      className="block font-sans text-xs uppercase tracking-[0.15em] text-cream/50 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="footer-name"
                      name="name"
                      placeholder="Your name"
                      className="w-full bg-transparent border border-cream/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/60 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="footer-email"
                      className="block font-sans text-xs uppercase tracking-[0.15em] text-cream/50 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="footer-email"
                      name="email"
                      placeholder="Your email"
                      className="w-full bg-transparent border border-cream/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold/60 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="footer-message"
                    className="block font-sans text-xs uppercase tracking-[0.15em] text-cream/50 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="footer-message"
                    name="message"
                    rows={4}
                    placeholder="Your message"
                    className="w-full bg-transparent border border-cream/20 text-cream placeholder:text-cream/30 px-4 py-3 font-sans text-sm resize-none focus:outline-none focus:border-gold/60 transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-white font-sans font-semibold text-xs uppercase tracking-[0.15em] px-8 py-3.5 transition-all duration-300 hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(196,151,92,0.35)] cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right column: Navigation + Social */}
          <div className="lg:col-span-5 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {/* Navigation */}
              <div>
                <h4 className="font-serif text-lg text-cream font-light tracking-wide mb-2">
                  Navigate
                </h4>
                <div className="w-8 h-[1px] bg-gold/50 mb-6" />
                <nav className="space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block font-sans text-sm text-cream/60 hover:text-gold tracking-wide transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Connect */}
              <div>
                <h4 className="font-serif text-lg text-cream font-light tracking-wide mb-2">
                  Connect
                </h4>
                <div className="w-8 h-[1px] bg-gold/50 mb-6" />
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors duration-300 group"
                      aria-label={social.label}
                    >
                      <span className="text-cream/40 group-hover:text-gold transition-colors duration-300">
                        {social.icon}
                      </span>
                      <span className="font-sans text-sm tracking-wide">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Ministry quote / tagline */}
                <div className="mt-10 pt-8 border-t border-cream/10">
                  <p className="font-serif text-cream/40 text-base italic leading-relaxed">
                    &ldquo;Proclaiming the truth of God&rsquo;s Word to the nations.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/40 tracking-wide">
            &copy; 2025 Valimont Ministries. All rights reserved
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/30 hover:text-gold transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
