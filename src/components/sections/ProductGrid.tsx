import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/animations/Reveal'
import { Button } from '@/components/ui/button'

export interface Product {
  name: string
  price: string
  unit: string
  category: string
  imageSrc: string
  href: string
}

interface ProductGridProps {
  products: Product[]
  className?: string
}

export function ProductGrid({ products, className }: ProductGridProps) {
  return (
    <section className={`py-[var(--section-y-mob)] lg:py-[var(--section-y)] px-6 lg:px-12 ${className || ''}`}>
      <div className="max-w-[var(--max-width)] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-8">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 60} direction="up">
              <Link href={product.href} className="group block">
                <div className="bg-surface rounded-xl border border-border overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-primary">
                  <div className="aspect-[4/3] relative overflow-hidden bg-bg">
                    {/* Placeholder div if no image loaded -- using Next Image unoptimized */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${product.imageSrc})` }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-heading font-bold uppercase tracking-widest text-muted block mb-2">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-heading font-bold uppercase tracking-wide text-text mb-4">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-display text-primary">{product.price}</span>
                        <span className="text-sm text-muted">{product.unit}</span>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-text font-heading uppercase tracking-widest text-xs h-8">
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
