import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books | Valimont Ministries",
  description:
    "Explore books by Randy and Jelly Valimont. Faith-centered resources for families, ministry, and personal growth.",
};

export default function BooksPage() {
  return (
    <main className="bg-cream">
      {/* ── Hero Section ── */}
      <section className="relative bg-forest py-32 sm:py-40">
        {/* Decorative radial glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 80%, var(--gold) 0%, transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold opacity-0 animate-fade-in">
            Valimont Ministries
          </p>
          <h1 className="mt-4 font-serif text-5xl font-light tracking-wide text-cream sm:text-6xl lg:text-7xl opacity-0 animate-fade-in-up animation-delay-100">
            Books
          </h1>
          <div className="gold-line mx-auto mt-6 opacity-0 animate-fade-in-up animation-delay-200" />
          <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-cream/70 opacity-0 animate-fade-in-up animation-delay-300">
            Faith-centered resources for families, ministry, and personal
            growth. Written from real-life experience and biblical wisdom.
          </p>
        </div>
      </section>

      {/* ── Books Grid ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-12">
        <div className="space-y-20 sm:space-y-28">
          {books.map((book, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={book.slug}
                className={`group flex flex-col items-center gap-10 lg:gap-16 ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Book Cover Image */}
                <div className="w-full max-w-sm shrink-0 lg:w-5/12 card-hover">
                  <div className="relative aspect-[3/4] w-full drop-shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                    <Image
                      src={book.image}
                      alt={`${book.title} book cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 384px, 40vw"
                    />
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1 text-center lg:text-left">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {book.author}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold tracking-wide text-forest sm:text-4xl">
                    {book.title}
                  </h2>
                  <div
                    className={`gold-line mt-4 ${
                      isReversed
                        ? "mx-auto lg:ml-auto lg:mr-0"
                        : "mx-auto lg:mx-0"
                    }`}
                  />
                  <p className="mt-6 font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg">
                    {book.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:justify-start">
                    <p className="font-serif text-2xl font-semibold text-forest">
                      {book.price}
                    </p>
                    <Link
                      href={`/books/${book.slug}`}
                      className="btn-primary"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider mx-auto max-w-4xl" />

      {/* ── Author Bio Section ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Author Photo */}
          <div className="w-full max-w-xs shrink-0 lg:w-4/12">
            <div className="overflow-hidden rounded-sm shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/2022-PR-photo-1-1.jpg"
                  alt="Jelly Valimont"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 320px, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About the Author
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-wide text-forest sm:text-4xl">
              Jelly Valimont
            </h2>
            <div className="gold-line mx-auto mt-4 lg:mx-0" />
            <p className="mt-6 font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg">
              Jelly Valimont is a beloved speaker, author, and pastor&apos;s
              wife whose warmth and humor have inspired countless families
              across the nation. With decades of experience in ministry, Jelly
              brings a refreshingly honest and deeply personal perspective to
              the challenges of faith, family, and service.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg">
              Her books draw from real-life stories and biblical wisdom,
              offering practical guidance and heartfelt encouragement for
              anyone navigating the beautiful complexities of a faith-centered
              life.
            </p>
            <div className="mt-8">
              <Link href="/about" className="btn-gold">
                Learn More About Jelly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
