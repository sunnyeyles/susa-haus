"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/billums", label: "BILLUMS" },
  { href: "/kites", label: "KITES" },
  { href: "/story", label: "STORY" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b-4 border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/susahaus.svg"
              alt="Susahaus Logo"
              width={120}
              height={40}
              className="h-25 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-bold tracking-wide transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 border-2 border-border">
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </button>
        </div>
      </div>
    </nav>
  );
}
