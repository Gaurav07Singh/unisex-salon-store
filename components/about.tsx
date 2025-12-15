export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Redefining Beauty Standards
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Luxe Studio, we believe beauty has no boundaries. Our modern, inclusive salon welcomes everyone
                seeking exceptional hair and beauty services in a comfortable, judgment-free environment.
              </p>
              <p>
                With over 15 years of combined experience, our team of certified stylists and colorists stay ahead of
                the latest trends while honoring timeless techniques. We use only premium, cruelty-free products that
                are gentle on your hair and the environment.
              </p>
              <p>
                Whether you're looking for a bold transformation or a subtle refresh, we're here to help you look and
                feel your absolute best.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">5K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <img src="/modern-salon-interior-with-styling-chairs.jpg" alt="Luxe Studio Interior" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
