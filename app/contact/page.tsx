"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ContactPage() {
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
            backgroundImage: "url('/images/IMG_1617.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="flex items-center justify-center h-full relative z-10">
          <div className="text-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold brutalist-text-shadow mb-6">
              {"CONNECT WITH US"}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4">
              {
                "Join our mission to preserve and celebrate Papua New Guinea's cultural heritage"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 brutalist-text-shadow">
                {"GET IN TOUCH"}
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                {
                  "Whether you're interested in learning more about our artisans, collaborating on cultural preservation projects, or simply want to share your appreciation for traditional crafts, we'd love to hear from you."
                }
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    {"@"}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{"Email"}</h3>
                    <p className="text-muted-foreground">
                      {"hello@vea-heritage.com"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xl">
                    {"📍"}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{"Location"}</h3>
                    <p className="text-muted-foreground">
                      {
                        "Working directly with artisan communities across Papua New Guinea"
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    {"⏰"}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      {"Response Time"}
                    </h3>
                    <p className="text-muted-foreground">
                      {"We typically respond within 24-48 hours"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 brutalist-border">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-foreground mb-2"
                  >
                    {"YOUR NAME"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border-4 border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-foreground mb-2"
                  >
                    {"EMAIL ADDRESS"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border-4 border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-foreground mb-2"
                  >
                    {"SUBJECT"}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border-4 border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">{"Select a topic"}</option>
                    <option value="general">{"General Inquiry"}</option>
                    <option value="collaboration">{"Collaboration"}</option>
                    <option value="media">{"Media & Press"}</option>
                    <option value="education">
                      {"Educational Partnership"}
                    </option>
                    <option value="artisan">{"Artisan Support"}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-foreground mb-2"
                  >
                    {"YOUR MESSAGE"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border-4 border-foreground bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground py-4 font-bold text-lg hover:bg-secondary/90 transition-colors brutalist-border"
                >
                  {"SEND MESSAGE"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center text-secondary mb-16 brutalist-text-shadow">
            {"ABOUT VE'A"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="image-showcase brutalist-border">
              <Image
                src="/images/IMG_1606.jpeg"
                alt="Traditional Papua New Guinea crafts"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                {"OUR MISSION"}
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                {
                  "Ve'a is dedicated to preserving and celebrating the extraordinary cultural heritage of Papua New Guinea through authentic traditional crafts. We work directly with artisan communities to ensure fair compensation, cultural respect, and the continuation of ancient traditions."
                }
              </p>
              <p className="text-lg leading-relaxed">
                {
                  "Every bilum and kite we showcase represents not just exceptional craftsmanship, but a living connection to thousand-year-old traditions and the resilient spirit of Melanesian culture."
                }
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl mx-auto mb-4 brutalist-border">
                {"🤝"}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {"FAIR PARTNERSHIP"}
              </h3>
              <p className="text-base leading-relaxed">
                {
                  "We ensure artisans receive fair compensation and maintain control over their cultural heritage."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-2xl mx-auto mb-4 brutalist-border">
                {"🏛️"}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {"CULTURAL PRESERVATION"}
              </h3>
              <p className="text-base leading-relaxed">
                {
                  "We document and preserve traditional techniques for future generations to learn and appreciate."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl mx-auto mb-4 brutalist-border">
                {"🌍"}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {"GLOBAL AWARENESS"}
              </h3>
              <p className="text-base leading-relaxed">
                {
                  "We share the beauty and significance of Papua New Guinea crafts with the world."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
