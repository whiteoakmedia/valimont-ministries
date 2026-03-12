import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/data/books";
import PayPalButton from "@/components/PayPalButton";

interface BookPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);

  if (!book) {
    return { title: "Book Not Found | Valimont Ministries" };
  }

  return {
    title: `${book.title} | Valimont Ministries`,
    description: book.seoDescription,
  };
}

export default async function BookDetailPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="bg-cream">
      {/* ── Hero Banner ── */}
      <section className="relative bg-forest py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 80%, var(--gold) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold opacity-0 animate-fade-in">
            {book.author}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-wide text-cream sm:text-5xl lg:text-6xl opacity-0 animate-fade-in-up animation-delay-100">
            {book.title}
          </h1>
          <div className="gold-line mx-auto mt-6 opacity-0 animate-fade-in-up animation-delay-200" />
        </div>
      </section>

      {/* ── Book Detail Content ── */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-12">
        {/* Back Link */}
        <Link
          href="/books"
          className="group mb-12 inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.12em] text-forest/60 transition-colors duration-300 hover:text-forest"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to Books
        </Link>

        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
          {/* Book Cover */}
          <div className="w-full max-w-md shrink-0 lg:w-5/12 sticky top-32">
            <div className="relative aspect-[3/4] w-full drop-shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
              <Image
                src={book.image}
                alt={`${book.title} book cover`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 448px, 40vw"
                priority
              />
            </div>
          </div>

          {/* Book Information */}
          <div className="flex-1">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              By {book.author}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-wide text-forest sm:text-4xl">
              {book.title}
            </h2>
            <div className="gold-line mt-4" />

            {/* Price */}
            <p className="mt-6 font-serif text-3xl font-semibold text-forest">
              {book.price}
            </p>

            {/* Long Description */}
            <div className="mt-8 space-y-4">
              {book.longDescription.split("\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-base leading-relaxed text-charcoal/80 sm:text-lg sm:leading-loose"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decorative divider */}
            <div className="my-10 h-[1px] w-full bg-gradient-to-r from-sage-dark via-sage-dark/50 to-transparent" />

            {/* PayPal Purchase Section */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-forest">
                Purchase This Book
              </h3>
              <p className="mt-2 font-sans text-sm text-charcoal/60">
                Secure checkout powered by PayPal.
              </p>
              <PayPalButton price={book.price} />
            </div>

            {/* Additional Info */}
            <div className="mt-12 rounded-sm border border-sage bg-sage/30 px-6 py-5">
              <p className="font-sans text-sm leading-relaxed text-charcoal/70">
                Have questions about this book or need help with your order?
                Feel free to{" "}
                <Link
                  href="/#contact"
                  className="font-semibold text-forest underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold"
                >
                  contact us
                </Link>{" "}
                and we will be happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Browse More Books ── */}
      <section className="border-t border-sage bg-cream-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Continue Exploring
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-wide text-forest">
            More Books
          </h2>
          <div className="gold-line mx-auto mt-4" />

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {books
              .filter((b) => b.slug !== book.slug)
              .slice(0, 4)
              .map((otherBook) => (
                <Link
                  key={otherBook.slug}
                  href={`/books/${otherBook.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] w-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                    <Image
                      src={otherBook.image}
                      alt={`${otherBook.title} book cover`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <p className="mt-3 font-serif text-sm font-semibold text-forest transition-colors group-hover:text-gold sm:text-base">
                    {otherBook.title}
                  </p>
                  <p className="mt-0.5 font-sans text-xs text-charcoal/50">
                    {otherBook.author}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
