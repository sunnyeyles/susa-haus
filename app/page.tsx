"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 parallax-layer-1"
          style={{
            backgroundImage: "url('/images/IMG_1603.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className=" font-bold mb-8 text-balance">
            AUTHENTIC
            <br />
            <span className="text-primary">PAPUA NEW GUINEA</span>
            <br />
            CRAFTS
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-balance">
            A photographic showcase of traditional bilum grass mats and
            handcrafted kites from the heart of Papua New Guinea. Each image
            tells a story of cultural heritage and artisan craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4"
              variant="outline"
            >
              <Link href="/billums">VIEW BILUM GALLERY</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4"
            >
              <Link href="/kites">VIEW KITE GALLERY</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
