"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
        setMousePosition({ x, y })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/RWr8XeBUxTU?autoplay=1&mute=1&loop=1&playlist=RWr8XeBUxTU&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&vq=hd1080&iv_load_policy=3"
            className="absolute inset-0 w-full h-full object-cover scale-110"
            style={{
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none',
              transform: 'scale(1.1)',
            }}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title="Salon Video Background"
            frameBorder="0"
          />
        </div>
        
        {/* Video Overlay for Text Readability */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        
        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Gradient Orb */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px) translate(-50%, -50%)`,
            left: '20%',
            top: '30%'
          }}
        />
        
        {/* Secondary Gradient Orb */}
        <div 
          className="absolute w-80 h-80 rounded-full bg-accent/10 blur-3xl transition-transform duration-400 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px) translate(-50%, -50%)`,
            right: '25%',
            bottom: '20%'
          }}
        />
        
        {/* Floating Particles */}
        <div 
          className="absolute w-4 h-4 rounded-full bg-primary/20 transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`,
            left: '15%',
            top: '60%'
          }}
        />
        <div 
          className="absolute w-3 h-3 rounded-full bg-accent/30 transition-transform duration-600 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 2.5}px, ${mousePosition.y * 2.5}px)`,
            right: '20%',
            top: '40%'
          }}
        />
        <div 
          className="absolute w-6 h-6 rounded-full bg-primary/15 transition-transform duration-400 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            left: '70%',
            top: '25%'
          }}
        />
        
        {/* Animated Lines */}
        <div 
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${mousePosition.y}px) rotate(${mousePosition.x}deg)`,
            width: '60%',
            left: '20%',
            top: '35%'
          }}
        />
        <div 
          className="absolute h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent transition-transform duration-350 ease-out"
          style={{
            transform: `translateY(${mousePosition.y * 0.8}px) rotate(${-mousePosition.x * 0.8}deg)`,
            width: '40%',
            right: '15%',
            bottom: '45%'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 text-balance transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                textShadow: `${mousePosition.x * 0.1}px ${mousePosition.y * 0.1}px 20px rgba(139, 92, 246, 0.3)`
              }}
            >
              Where Style Meets Excellence
            </h1>
            <p 
              className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto text-pretty transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                textShadow: `${mousePosition.x * 0.05}px ${mousePosition.y * 0.05}px 10px rgba(139, 92, 246, 0.2)`
              }}
            >
              Experience premium hair and beauty services in a modern, inclusive environment. Our expert stylists are
              dedicated to bringing out your best self.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-200 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
                }}
              >
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="transition-transform duration-200 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
                }}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
