"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter subscription:", email);
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t-4 border-border py-12 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <Image
                src="/susahaus.svg"
                alt="Susahaus Logo"
                width={200}
                height={67}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              Authentic Papua New Guinea Crafts
            </p>
            <p className="text-sm text-muted-foreground">
              Preserving traditional weaving and kite-making techniques for
              future generations.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">STAY CONNECTED</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on new collections and cultural stories
            </p>
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    required
                  />
                  <Button type="submit" className="px-6 py-2">
                    SUBSCRIBE
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-primary font-bold">
                ✓ Thank you for subscribing!
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <div className="space-y-3">
              <div className="flex justify-center md:justify-end">
                <a
                  href="https://instagram.com/susahaus_bilums"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="font-bold">@susahaus_bilums</span>
                </a>
              </div>
              <div className="flex justify-center md:justify-end">
                <a
                  href="https://instagram.com/susahaus_kites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="font-bold">@susahaus_kites</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link
              href="/contact"
              className="hover:text-primary font-bold transition-colors"
            >
              CONTACT
            </Link>
            <Link
              href="/blog"
              className="hover:text-primary font-bold transition-colors"
            >
              BLOG
            </Link>
            <Link
              href="/story"
              className="hover:text-primary font-bold transition-colors"
            >
              STORY
            </Link>
            <Link
              href="/billums"
              className="hover:text-primary font-bold transition-colors"
            >
              BILUMS
            </Link>
            <Link
              href="/kites"
              className="hover:text-primary font-bold transition-colors"
            >
              KITES
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Susahaus. Preserving Papua New Guinea traditions.
          </p>
        </div>
      </div>
    </footer>
  );
}
