"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const kiteGallery = [
  {
    id: 1,
    title: "TRADITIONAL BIRD KITE",
    description:
      "Hand-painted kite inspired by Papua New Guinea's exotic birds. Features vibrant colors and traditional motifs.",
    image: "/images/IMG_7220+(1).jpg",
    category: "Bird Spirit",
  },
  {
    id: 2,
    title: "CEREMONIAL SPIRIT KITE",
    description:
      "Large ceremonial kite used in traditional festivals. Decorated with ancestral symbols and natural pigments.",
    image: "/images/IMG_7226+(1).jpg",
    category: "Ceremonial",
  },
  {
    id: 3,
    title: "CHILDREN'S LEARNING KITE",
    description:
      "Perfect for young ones to learn traditional kite flying. Durable construction with cultural storytelling elements.",
    image: "/images/IMG_7229+(1).jpg",
    category: "Educational",
  },
  {
    id: 4,
    title: "WARRIOR KITE",
    description:
      "Powerful kite design representing strength and courage. Features bold geometric patterns and earth tones.",
    image: "/images/IMG_7233+(1).jpg",
    category: "Warrior",
  },
  {
    id: 5,
    title: "OCEAN SPIRIT KITE",
    description:
      "Flowing kite design inspired by Papua New Guinea's coastal waters. Blues and greens with wave patterns.",
    image: "/images/IMG_7230+(1).jpg",
    category: "Ocean Spirit",
  },
  {
    id: 6,
    title: "MASTER ARTISAN KITE",
    description:
      "Premium kite crafted by master kite makers. Museum-quality construction with intricate hand-painted details.",
    image: "/images/IMG_7234+(1).jpg",
    category: "Master Craft",
  },
];

export default function KitesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 px-4 bg-muted overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/IMG_7236+(1).jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance">
            <span className="text-primary">KITE</span>
            <br />
            GALLERY
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-balance">
            A visual celebration of Papua New Guinea&apos;s traditional kites.
            Each photograph captures the vibrant artistry and spiritual
            significance of these flying cultural treasures.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kiteGallery.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden brutalist-border mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="text-sm font-bold text-primary mb-2">
                  {item.category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
