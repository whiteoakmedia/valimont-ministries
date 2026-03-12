import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Messages | Valimont Ministries",
  description:
    "Watch the messages and sermons of the late Dr. Randy Valimont.",
};

export default function MessagesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-forest pt-36 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, var(--gold) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="gold-line mx-auto mb-6" />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-cream tracking-wide mb-6">
            Messages
          </h1>
          <p className="font-sans text-lg sm:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Watch the messages and sermons of the late Dr. Randy Valimont.
          </p>
        </div>
      </section>

      {/* ── Sermon Archive Placeholder ── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Decorative cross symbol */}
          <div className="mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-16 h-16 mx-auto text-gold/40"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="28" y="8" width="8" height="48" rx="1" />
              <rect x="12" y="22" width="40" height="8" rx="1" />
            </svg>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light tracking-wide mb-4">
            Sermon Archive Coming Soon
          </h2>
          <div className="gold-line mx-auto mb-8" />
          <p className="font-sans text-lg text-charcoal/70 leading-relaxed max-w-xl mx-auto mb-12">
            In the meantime, visit our YouTube channel to watch messages from
            Dr. Randy Valimont.
          </p>

          {/* YouTube CTA card */}
          <div className="inline-block bg-white rounded-sm shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-10 py-10 sm:px-14 sm:py-12 card-hover">
            {/* YouTube icon */}
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 mx-auto text-gold"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-forest mb-6">
              Dr. Randy Valimont on YouTube
            </p>

            <Link
              href="https://www.youtube.com/@randyvalimont1516"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Visit YouTube Channel
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 010-1.06l7.22-7.22H8.75a.75.75 0 010-1.5h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V7.06l-7.22 7.22a.75.75 0 01-1.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Decorative bottom divider */}
          <div className="mt-20">
            <div className="section-divider" />
          </div>
        </div>
      </section>

      {/* ── Remembrance / Legacy Note ── */}
      <section className="bg-cream-dark py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-serif text-xl sm:text-2xl text-forest/80 italic leading-relaxed">
            &ldquo;Preach the word; be prepared in season and out of
            season.&rdquo;
          </p>
          <p className="font-sans text-sm text-charcoal/50 mt-4 uppercase tracking-[0.12em]">
            2 Timothy 4:2
          </p>
        </div>
      </section>
    </>
  );
}
