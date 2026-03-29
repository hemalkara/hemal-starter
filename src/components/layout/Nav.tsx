'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { cn } from '@/lib/utils'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progress = useScrollProgress()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-[3px] bg-primary z-50 transition-all duration-300 ease-out" 
        style={{ width: `${progress}%` }} 
      />
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 lg:px-12',
          scrolled ? 'py-4 bg-bg/80 backdrop-blur-md border-b border-border' : 'py-6 bg-transparent'
        )}
      >
        <div className="max-w-[var(--max-width)] mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-heading font-bold uppercase tracking-wide">
            Budget Meat Shop
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button className="font-heading uppercase tracking-widest bg-primary text-text hover:bg-secondary">
              Order Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 relative p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-surface z-30 transition-transform duration-500 pt-24 px-6",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col gap-6 text-center">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-3xl font-heading uppercase tracking-wide py-2 border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className="mt-8 font-heading uppercase tracking-widest h-14 bg-primary text-text">
            Order Now
          </Button>
        </nav>
      </div>
    </>
  )
}
