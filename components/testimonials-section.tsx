import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jessica Williams",
      role: "CTO at TechCorp",
      content:
        "StarPulseHub transformed our development workflow. We shipped features 3x faster and our team loves the platform.",
      rating: 5,
      avatar: "/professional-woman-diverse.png",
    },
    {
      name: "David Martinez",
      role: "Founder of StartupXYZ",
      content:
        "The best infrastructure platform we've used. Incredible performance and the support team is outstanding.",
      rating: 5,
      avatar: "/professional-man.jpg",
    },
    {
      name: "Alexandra Thompson",
      role: "Lead Developer at InnovateLab",
      content:
        "Game-changing technology. The AI-powered features and global scale made it possible to compete with industry giants.",
      rating: 5,
      avatar: "/professional-woman-developer.png",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-card/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Loved by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Developers Worldwide
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Join thousands of teams who trust StarPulseHub to power their applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
