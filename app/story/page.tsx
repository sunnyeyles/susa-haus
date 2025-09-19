"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function StoryPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/IMG_1620.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="flex items-center justify-center h-full relative z-10">
          <div className="text-center text-white">
            <h1 className="text-6xl md:text-8xl font-bold brutalist-text-shadow mb-6">
              {"OUR STORY"}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              {
                "Preserving the ancient art of Papua New Guinea through authentic bilum and traditional kites"
              }
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="image-showcase brutalist-border">
              <Image
                src="/images/IMG_1603.jpeg"
                alt="Traditional bilum weaving process"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 brutalist-text-shadow">
                {"ANCIENT CRAFT"}
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                {
                  "For over 1,000 years, the women of Papua New Guinea have woven bilum from the fibers of wild plants. These aren't just bags - they're cultural artifacts that carry stories, traditions, and the very essence of Melanesian heritage."
                }
              </p>
              <p className="text-lg leading-relaxed">
                {
                  "Each bilum takes weeks to complete, with patterns passed down through generations. The intricate designs tell stories of family lineage, tribal identity, and connection to the land."
                }
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-6 brutalist-text-shadow">
                {"FLYING TRADITIONS"}
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                {
                  "The traditional kites of Papua New Guinea soar beyond mere play - they connect earth to sky, carrying prayers and celebrating the harvest seasons. Made from natural materials and decorated with ancestral symbols."
                }
              </p>
              <p className="text-lg leading-relaxed">
                {
                  "These kites represent freedom, spirituality, and the deep connection between the people and their environment. Each design is unique, reflecting the maker's village and personal story."
                }
              </p>
            </div>
            <div className="order-1 lg:order-2 image-showcase brutalist-border">
              <Image
                src="/images/IMG_7220+(1).jpg"
                alt="Traditional Papua New Guinea kite"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_1606.jpeg"
            alt="Colorful traditional crafts"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 brutalist-text-shadow">
            {"OUR MISSION"}
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            {
              "Ve'a exists to preserve and celebrate the extraordinary craftsmanship of Papua New Guinea. We work directly with artisan communities, ensuring fair compensation and cultural respect."
            }
          </p>
          <p className="text-lg leading-relaxed">
            {
              "Every piece we showcase tells a story of resilience, creativity, and cultural pride. We're not just displaying crafts - we're preserving a way of life for future generations."
            }
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center text-secondary mb-16 brutalist-text-shadow">
            {"OUR VALUES"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="image-showcase brutalist-border mb-6">
                <Image
                  src="/images/IMG_1606.jpeg"
                  alt="Ceremonial bilum with intricate patterns"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {"AUTHENTICITY"}
              </h3>
              <p className="text-base leading-relaxed">
                {
                  "Every piece is genuinely handcrafted by traditional artisans using ancestral techniques and natural materials."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="image-showcase brutalist-border mb-6">
                <Image
                  src="/images/IMG_1609.jpeg"
                  alt="Family set of bilum mats"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {"COMMUNITY"}
              </h3>
              <p className="text-base leading-relaxed">
                {
                  "We support entire communities, ensuring fair wages and sustainable practices that honor traditional ways of life."
                }
              </p>
            </div>

            <div className="text-center">
              <div className="image-showcase brutalist-border mb-6">
                <Image
                  src="/images/IMG_1619.jpeg"
                  alt="Heritage quality bilum"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {"HERITAGE"}
              </h3>
              <p className="text-base leading-relaxed">
                {
                  "We preserve cultural knowledge and ensure these ancient arts continue to thrive in the modern world."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary mb-4">{"Ve'a"}</h3>
          <p className="text-lg mb-6">
            {
              "Preserving Papua New Guinea's cultural heritage through authentic craftsmanship"
            }
          </p>
          <p className="text-sm opacity-80">
            {
              "© 2024 Ve'a. All rights reserved. Made with respect for traditional artisans."
            }
          </p>
        </div>
      </footer>
    </div>
  );
}
