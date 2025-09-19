"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Sacred Art of Bilum Weaving",
    excerpt:
      "Discover the spiritual significance behind every thread and pattern in traditional Papua New Guinea bilum craftsmanship.",
    image: "/images/IMG_1603.jpeg",
    date: "March 15, 2024",
    category: "CRAFT TRADITION",
  },
  {
    id: 2,
    title: "Kites That Touch the Sky",
    excerpt:
      "How traditional kites connect Papua New Guinea communities to their ancestors and the spiritual realm above.",
    image: "/images/IMG_7220+(1).jpg",
    date: "March 10, 2024",
    category: "CULTURAL HERITAGE",
  },
  {
    id: 3,
    title: "Preserving Ancient Techniques",
    excerpt:
      "Meet the master artisans who are keeping thousand-year-old weaving and crafting traditions alive for future generations.",
    image: "/images/IMG_1620.jpeg",
    date: "March 5, 2024",
    category: "ARTISAN STORIES",
  },
  {
    id: 4,
    title: "The Language of Patterns",
    excerpt:
      "Every design tells a story. Learn to read the symbolic language woven into traditional Papua New Guinea crafts.",
    image: "/images/IMG_1606.jpeg",
    date: "February 28, 2024",
    category: "CULTURAL MEANING",
  },
  {
    id: 5,
    title: "From Village to World",
    excerpt:
      "The journey of authentic crafts from remote Papua New Guinea villages to global appreciation and preservation.",
    image: "/images/IMG_1609.jpeg",
    date: "February 20, 2024",
    category: "GLOBAL IMPACT",
  },
  {
    id: 6,
    title: "Museum-Quality Heritage",
    excerpt:
      "Why some bilum and kites are considered museum pieces and how we ensure their cultural significance is preserved.",
    image: "/images/IMG_1619.jpeg",
    date: "February 15, 2024",
    category: "PRESERVATION",
  },
];

export default function BlogPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/IMG_1606.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="flex items-center justify-center h-full relative z-10">
          <div className="text-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold brutalist-text-shadow mb-6">
              {"STORIES & HERITAGE"}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4">
              {
                "Exploring the rich cultural tapestry of Papua New Guinea through authentic craftsmanship and ancestral wisdom"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="image-showcase brutalist-border">
              <Image
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold mb-4">
                {"FEATURED STORY"}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 brutalist-text-shadow">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-bold text-secondary">
                  {blogPosts[0].category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {blogPosts[0].date}
                </span>
              </div>
              <Link
                href={`/blog/${blogPosts[0].id}`}
                className="inline-block bg-secondary text-secondary-foreground px-8 py-4 font-bold text-lg hover:bg-secondary/90 transition-colors brutalist-border"
              >
                {"READ FULL STORY"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center text-secondary mb-16 brutalist-text-shadow">
            {"ALL STORIES"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-background brutalist-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="image-showcase">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block text-secondary font-bold text-sm hover:text-secondary/80 transition-colors"
                  >
                    {"READ MORE →"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
