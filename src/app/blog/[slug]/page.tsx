import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found | Valimont Ministries" };
  }

  return {
    title: `${post.title} | Valimont Ministries`,
    description: post.description.slice(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get recent posts (exclude current, take up to 3)
  const recentPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-forest text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm text-white/60 hover:text-gold uppercase tracking-widest transition-colors duration-300 mb-8"
          >
            &larr; Back to Blog
          </Link>

          <div className="gold-line mx-auto mb-6" />

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6 leading-tight">
            {post.title}
          </h1>

          {post.subheading && (
            <p className="font-serif text-xl md:text-2xl text-white/70 italic mb-6 max-w-2xl mx-auto">
              {post.subheading}
            </p>
          )}

          {/* Post Meta */}
          <div className="flex items-center justify-center gap-4 text-sm text-white/60 font-sans">
            <time dateTime={new Date(post.date).toISOString()}>
              {formatDate(post.date)}
            </time>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span>{post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-6 -mt-8 md:-mt-12 relative z-10">
        <div className="relative w-full aspect-[21/9] max-h-[480px] rounded-sm overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Blog Content */}
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Divider */}
      <div className="section-divider max-w-3xl mx-auto" />

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-forest font-light">
              Recent Posts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((recentPost) => (
              <Link
                key={recentPost.slug}
                href={`/blog/${recentPost.slug}`}
                className="group block"
              >
                <article className="card-hover bg-white rounded-sm overflow-hidden shadow-sm h-full flex flex-col">
                  {/* Card Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={recentPost.image}
                      alt={recentPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-charcoal/50 font-sans mb-2">
                      <time
                        dateTime={new Date(recentPost.date).toISOString()}
                      >
                        {formatDate(recentPost.date)}
                      </time>
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      <span>{recentPost.readTime} read</span>
                    </div>

                    <h3 className="font-serif text-xl text-forest font-semibold leading-snug mb-2 group-hover:text-gold transition-colors duration-300">
                      {recentPost.title}
                    </h3>

                    <p className="font-sans text-charcoal/70 text-sm leading-relaxed flex-1">
                      {recentPost.description.length > 100
                        ? recentPost.description.slice(0, 100).trimEnd() +
                          "..."
                        : recentPost.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-sage">
                      <span className="font-sans text-xs font-semibold text-gold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
                        Read Article &rarr;
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Back to Blog CTA */}
          <div className="text-center mt-14">
            <Link href="/blog" className="btn-primary rounded-sm">
              View All Posts
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
