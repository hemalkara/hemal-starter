import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-[var(--max-width)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold uppercase tracking-wide">
              Budget Meat Shop
            </h3>
            <p className="text-muted text-sm max-w-xs">
              Quality meat. Prices that fear God. Providing fresh, affordable local meat daily across Bulawayo.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading tracking-wider uppercase">Shop</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="#beef" className="hover:text-primary transition-colors">Beef / Nyama Yenyombe</Link></li>
              <li><Link href="#chicken" className="hover:text-primary transition-colors">Chicken / Inkukhu</Link></li>
              <li><Link href="#pork" className="hover:text-primary transition-colors">Pork / Ingulube</Link></li>
              <li><Link href="#specials" className="hover:text-primary transition-colors">Weekly Specials</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading tracking-wider uppercase">Locations</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>12th Ave & Fife Street, CBD</li>
              <li>Nkulumane Shopping Mall</li>
              <li>Entumbane Complex</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading tracking-wider uppercase">Contact</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>+263 77 123 4567</li>
              <li>hello@budgetmeatshop.co.zw</li>
            </ul>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent border-border hover:bg-surface text-text font-heading uppercase tracking-widest">
              Get Directions
            </Button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Budget Meat Shop. All rights reserved.</p>
          <p>Built by Hemal</p>
        </div>
      </div>
    </footer>
  )
}
