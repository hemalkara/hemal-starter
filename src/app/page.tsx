import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { HeroVideo } from '@/components/sections/HeroVideo'
import { FeatureStrip } from '@/components/sections/FeatureStrip'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { Editorial } from '@/components/sections/Editorial'
import { Poster } from '@/components/sections/Poster'
import { StatsBar } from '@/components/sections/StatsBar'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/sections/CTABanner'
import { Truck, ShieldCheck, Tag, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      
      <HeroVideo 
        title="Fresh. Bold. Delivered."
        subtitle="The best cuts of meat delivered directly to your doorstep in Bulawayo."
        eyebrow="Bulawayo, Zimbabwe"
        videoSrc="/video/hero.mp4"
        posterSrc="https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=2070&auto=format&fit=crop"
        ctaLabel="Order Now"
        ctaHref="#products"
      />

      <FeatureStrip 
        features={[
          { icon: Truck, title: 'Free Delivery', text: 'On all orders above $20 within Bulawayo CBD and surrounding suburbs.' },
          { icon: ShieldCheck, title: 'Always Fresh', text: 'Sourced directly from local farmers and prepared daily by our master butchers.' },
          { icon: Tag, title: 'Weekly Specials', text: 'Incredible deals on bulk buys and weekend braai packs every single week.' },
          { icon: MapPin, title: '3 Locations', text: 'Visit us in CBD, Nkulumane, or Entumbane for priority service.' }
        ]}
      />

      <StatsBar 
        stats={[
          { value: 500, suffix: '+', label: 'Orders' },
          { value: 3, label: 'Locations' },
          { value: 3, prefix: '$', suffix: '.69/kg', label: 'Starting Price' },
          { value: 100, suffix: '%', label: 'Fresh' }
        ]}
      />

      <div id="products">
        <ProductGrid 
          products={[
            { name: 'T-Bone Steak', category: 'Beef', price: '$8.50', unit: '/kg', imageSrc: 'https://images.unsplash.com/photo-1544025162-8315db8111e9?q=80&w=2070&auto=format&fit=crop', href: '#' },
            { name: 'Beef Fillet', category: 'Beef', price: '$12.00', unit: '/kg', imageSrc: 'https://images.unsplash.com/photo-1615937657715-bc0b6b79cdf8?q=80&w=2070&auto=format&fit=crop', href: '#' },
            { name: 'Beef Mince', category: 'Beef', price: '$6.50', unit: '/kg', imageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop', href: '#' },
            { name: 'Whole Chicken', category: 'Poultry', price: '$4.20', unit: '/kg', imageSrc: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?q=80&w=2070&auto=format&fit=crop', href: '#' }
          ]}
        />
      </div>

      <Poster 
        text="Quality meat. Prices that fear God." 
      />

      <div id="about">
        <Editorial 
          label="Our Story"
          title="From Farm to Table."
          body="We believe that quality meat shouldn't be a luxury. By bypassing the middlemen and working directly with local cattle farmers across Matabeleland, we bring premium cuts to your kitchen at unbeatable prices."
          image="https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop"
          ctaLabel="Read More"
          ctaHref="#about"
          reverse={false}
        />
      </div>

      <div id="reviews">
        <Testimonials 
          reviews={[
            { quote: "The most affordable T-bone in Byo. Always fresh, and the delivery guy was so polite.", author: "Sihle N.", rating: 5 },
            { quote: "I buy my monthly meat hamper here. Saves me money and the quality beats the major supermarkets easily.", author: "Farai T.", rating: 5 },
            { quote: "Their Friday braai packs are legendary. Don't sleep on the pork chops!", author: "Melusi D.", rating: 4 }
          ]}
        />
      </div>

      <div id="contact">
        <CTABanner 
          title="Ready to order?"
          primaryLabel="Shop Now"
          primaryHref="#products"
          secondaryLabel="Contact Us"
          secondaryHref="#contact"
        />
      </div>

      <Footer />
    </main>
  )
}
