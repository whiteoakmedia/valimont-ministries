import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Valimont Ministries",
  description:
    "Reflections, devotionals, and encouragement from Jelly Valimont.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-forest text-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="gold-line mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4">
            Jelly Valimont&apos;s Blog
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Devotionals, reflections, and words of encouragement for the journey
            of faith.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="card-hover bg-white rounded-sm overflow-hidden shadow-sm h-full flex flex-col">
                {/* Card Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-sm text-charcoal/50 font-sans mb-3">
                    <time dateTime={new Date(post.date).toISOString()}>
                      {formatDate(post.date)}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    <span>{post.readTime} read</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl text-forest font-semibold leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-sans text-charcoal/70 text-[0.95rem] leading-relaxed flex-1">
                    {post.description.length > 150
                      ? post.description.slice(0, 150).trimEnd() + "..."
                      : post.description}
                  </p>

                  {/* Read More */}
                  <div className="mt-5 pt-4 border-t border-sage">
                    <span className="font-sans text-sm font-semibold text-gold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
                      Read Article &rarr;
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
