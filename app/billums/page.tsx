"use client";
// import { ParallaxScroll } from "@/components/parallax-scroll";
import { LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";

// const billumGallery = [
//   {
//     id: 1,
//     title: "TRADITIONAL BILUM MAT",
//     description:
//       "Hand-woven grass mat using traditional Papua New Guinea techniques. Perfect for meditation or decorative use.",
//     image: "/images/IMG_1603.jpeg",
//     category: "Traditional",
//   },
//   {
//     id: 2,
//     title: "CEREMONIAL BILUM",
//     description:
//       "Intricately woven ceremonial mat with traditional patterns passed down through generations.",
//     image: "/images/IMG_1606.jpeg",
//     category: "Ceremonial",
//   },
//   {
//     id: 3,
//     title: "FAMILY BILUM SET",
//     description:
//       "Set of three bilum mats in different sizes, perfect for family gatherings and cultural ceremonies.",
//     image: "/images/IMG_1609.jpeg",
//     category: "Family",
//   },
//   {
//     id: 4,
//     title: "ARTISAN BILUM",
//     description:
//       "Premium bilum crafted by master weavers, featuring complex geometric patterns and natural dyes.",
//     image: "/images/IMG_1615.jpeg",
//     category: "Artisan",
//   },
//   {
//     id: 5,
//     title: "COMPACT BILUM",
//     description:
//       "Smaller bilum mat ideal for personal use, travel, or as a unique decorative piece.",
//     image: "/images/IMG_1617.jpeg",
//     category: "Personal",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
//   {
//     id: 6,
//     title: "HERITAGE BILUM",
//     description:
//       "Museum-quality bilum representing centuries of Papua New Guinea weaving tradition and cultural heritage.",
//     image: "/images/IMG_1619.jpeg",
//     category: "Heritage",
//   },
// ];

export default function BillumsPage() {
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
            backgroundImage: "url('/images/IMG_1620.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance">
            <span className="text-primary">BILUM</span>
            <br />
            GALLERY
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-balance">
            A photographic journey through traditional Papua New Guinea bilum
            mats. Each image captures the intricate craftsmanship and cultural
            significance of these sacred woven treasures.
          </p>
        </div>
      </section>

      <section>
        <LayoutGrid className="w-10 h-10" />
        {/* <ParallaxScroll images={billumGallery.map((item) => item.image)} /> */}
      </section>
    </div>
  );
}
