import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Sparkles, Palette, User } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Hair Styling & Cutting",
    description: "Expert cuts, trims, and styling for all hair types and lengths.",
    price: "From $45",
  },
  {
    icon: Palette,
    title: "Color Services",
    description: "Full color, highlights, balayage, and color correction by certified colorists.",
    price: "From $85",
  },
  {
    icon: Sparkles,
    title: "Treatments & Care",
    description: "Deep conditioning, keratin treatments, and scalp therapy for healthy hair.",
    price: "From $65",
  },
  {
    icon: User,
    title: "Grooming Services",
    description: "Beard trims, hot towel shaves, and complete grooming packages.",
    price: "From $35",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive beauty and grooming services tailored to your unique style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-foreground">{service.price}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
