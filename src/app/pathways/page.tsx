import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pathways of a Prodigal | Valimont Ministries",
  description:
    "Pathways of a Prodigal by Jelly Valimont - A heartfelt guide on parenting, faith, and redemption for every parent and believer.",
};

export default function PathwaysPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative bg-forest pt-36 pb-20 sm:pt-40 sm:pb-28 lg:pb-32 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, var(--gold) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Book Cover */}
            <div className="flex-shrink-0 animate-fade-in-up">
              <div className="relative">
                {/* Subtle shadow behind book */}
                <div className="absolute -inset-4 bg-black/20 blur-2xl rounded-lg" />
                <Image
                  src="/images/bookcoer.png"
                  alt="Pathways of a Prodigal book cover"
                  width={340}
                  height={510}
                  className="relative rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                  priority
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center lg:text-left animate-fade-in-up animation-delay-200">
              <div className="gold-line mb-6 mx-auto lg:mx-0" />
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-cream tracking-wide mb-6 leading-tight">
                Pathways of a Prodigal
              </h1>
              <p className="font-sans text-lg sm:text-xl text-cream/70 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
                A Heartfelt Guide on Parenting, Faith, and Redemption for Every
                Parent and Believer
              </p>
              <Link
                href="/books/pathways-of-a-prodigal"
                className="btn-gold inline-block"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── About This Book ── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Family Photo */}
            <div className="flex-shrink-0 w-full max-w-md lg:max-w-sm">
              <div className="relative">
                <Image
                  src="/images/286652252_10228729815177077_7403155513910098563_n.jpg"
                  alt="Jelly Valimont and family"
                  width={480}
                  height={480}
                  className="w-full object-cover rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                />
                {/* Decorative gold corner accent */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-gold/30 rounded-br-sm" />
              </div>
            </div>

            {/* About Text */}
            <div className="flex-1">
              <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light tracking-wide mb-4">
                About This Book
              </h2>
              <div className="gold-line mb-8" />
              <p className="font-sans text-lg text-charcoal/80 leading-relaxed max-w-xl">
                Written by Jelly Valimont,{" "}
                <em className="text-forest font-medium">
                  Pathways of a Prodigal
                </em>{" "}
                is an inspiring and deeply personal guide for parents navigating
                the joys and challenges of raising children in a faith-centered
                home. Drawing from real-life experiences and biblical wisdom,
                this book offers practical advice, heartfelt stories, and
                spiritual insights to help you build a strong foundation for
                your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Decorative Divider ── */}
      <div className="section-divider" />

      {/* ── CTA Section ── */}
      <section className="bg-sage py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-forest font-light tracking-wide mb-4">
            Get Your Copy Today
          </h2>
          <div className="gold-line mx-auto mb-8" />
          <p className="font-sans text-lg text-charcoal/70 leading-relaxed max-w-xl mx-auto mb-10">
            Experience the joy and fulfillment of raising children in a
            faith-centered home. Order your copy of{" "}
            <em className="text-forest">Pathways of a Prodigal</em> now and
            embark on a journey of faith, family, and redemption.
          </p>
          <Link
            href="/books/pathways-of-a-prodigal"
            className="btn-primary inline-block"
          >
            Buy Now
          </Link>
        </div>
      </section>

      {/* ── Closing Scripture ── */}
      <section className="bg-cream-dark py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-serif text-xl sm:text-2xl text-forest/80 italic leading-relaxed">
            &ldquo;Train up a child in the way he should go: and when he is old,
            he will not depart from it.&rdquo;
          </p>
          <p className="font-sans text-sm text-charcoal/50 mt-4 uppercase tracking-[0.12em]">
            Proverbs 22:6
          </p>
        </div>
      </section>
    </>
  );
}
