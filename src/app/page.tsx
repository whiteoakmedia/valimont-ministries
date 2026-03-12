import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { books } from "@/data/books";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3);
  const featuredBook = books[0];

  return (
    <>
      {/* ──────────────────────────────────────────────
          HERO SECTION
      ────────────────────────────────────────────── */}
      <section className="relative bg-rose overflow-hidden">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[5fr_7fr] items-end min-h-[520px] lg:min-h-[720px]">
          {/* Left — Text */}
          <div className="px-6 lg:px-12 py-20 lg:py-28 animate-fade-in-up z-10">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-forest leading-[1.1] tracking-tight">
              Valimont
              <br />
              Ministries
            </h1>

            <div className="gold-line mt-6 mb-8" />

            <p className="font-sans text-charcoal/80 text-lg md:text-xl leading-relaxed max-w-md">
              Jelly&rsquo;s heart&rsquo;s cry is to do the will of the Father,
              wherever and whatever that might be, to bring souls into the
              kingdom and to facilitate spiritual health and well-being to the
              body of Christ. If she can do it while laughing, so much the
              better!
            </p>

            <div className="mt-10">
              <Link href="/books" className="btn-primary">
                Explore Our Books
              </Link>
            </div>
          </div>

          {/* Right — Large floating cutout image */}
          <div className="hidden lg:flex justify-center items-end self-end animate-fade-in animation-delay-200">
            <Image
              src="/images/IMG_4252---Edited---Edited.png"
              alt="Jelly Valimont"
              width={720}
              height={900}
              className="object-contain object-bottom max-h-[720px] w-auto drop-shadow-2xl"
              priority
              sizes="(max-width: 1280px) 50vw, 720px"
            />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          LATEST BLOG POSTS
      ────────────────────────────────────────────── */}
      <section className="bg-rose-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section heading */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-semibold">
              From the Blog
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => {
              const delayClass =
                index === 0
                  ? "animation-delay-100"
                  : index === 1
                    ? "animation-delay-200"
                    : "animation-delay-300";

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`card-hover bg-white rounded-lg overflow-hidden shadow-sm animate-fade-in-up ${delayClass}`}
                >
                  {/* Card image */}
                  <div className="relative w-full h-56">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gold font-sans font-semibold uppercase tracking-wider mb-3">
                      <time dateTime={new Date(post.date).toISOString()}>
                        {formatDate(post.date)}
                      </time>
                      <span className="text-charcoal/30">&bull;</span>
                      <span>{post.readTime} read</span>
                    </div>

                    <h3 className="font-serif text-2xl text-charcoal font-semibold leading-snug mb-3">
                      {post.title}
                    </h3>

                    <p className="font-sans text-charcoal/70 text-base leading-relaxed line-clamp-3">
                      {post.description}
                    </p>

                    <span className="inline-block mt-4 text-gold font-sans font-semibold text-sm uppercase tracking-wider">
                      Read More &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View All link */}
          <div className="text-center mt-14">
            <Link href="/blog" className="btn-primary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          FEATURED BOOK — Pathways of a Prodigal
      ────────────────────────────────────────────── */}
      <section className="bg-sage py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book cover */}
          <div className="flex justify-center animate-fade-in-up">
            <Image
              src={featuredBook.image}
              alt={`${featuredBook.title} book cover`}
              width={320}
              height={480}
              className="w-64 md:w-80 drop-shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>

          {/* Book details */}
          <div className="animate-fade-in-up animation-delay-200">
            <p className="font-sans text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Featured Book
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-semibold leading-tight">
              {featuredBook.title}
            </h2>
            <div className="gold-line mt-4 mb-6" />
            <p className="font-sans text-charcoal/60 text-base mb-2 italic">
              by {featuredBook.author}
            </p>
            <p className="font-sans text-charcoal/80 text-lg leading-relaxed mb-8 max-w-xl">
              {featuredBook.shortDescription}
            </p>
            <Link href="/pathways" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          ABOUT TEASER
      ────────────────────────────────────────────── */}
      <section className="bg-rose-muted py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start animate-fade-in-up order-2 lg:order-1">
            <div className="relative w-72 md:w-96 aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/2022-PR-photo-1-1.jpg"
                alt="Jelly Valimont"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
          </div>

          {/* Text */}
          <div className="animate-fade-in-up animation-delay-200 order-1 lg:order-2">
            <p className="font-sans text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              About Jelly
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-semibold leading-tight">
              Meet Jelly Valimont
            </h2>
            <div className="gold-line mt-4 mb-6" />
            <p className="font-sans text-charcoal/80 text-lg leading-relaxed mb-4 max-w-xl">
              Author, speaker, and ministry leader, Jelly Valimont has spent
              decades encouraging believers through the Word of God with warmth,
              wisdom, and her signature humor. Her passion is to see people walk
              in the fullness of their calling and experience the goodness of
              God in every season of life.
            </p>
            <p className="font-sans text-charcoal/80 text-lg leading-relaxed mb-8 max-w-xl">
              Through Valimont Ministries, Jelly writes, speaks, and mentors
              others as they navigate faith, family, and the unexpected turns
              that shape a life surrendered to Christ.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
