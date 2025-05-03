"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            المهندس أبو ريماس
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            من أنا
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary">
            أعمالي
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            تواصل معي
          </Link>
          <Button variant="outline">تابعني</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            <Link href="#about" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              من أنا
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              أعمالي
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              تواصل معي
            </Link>
            <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
              تابعني
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
