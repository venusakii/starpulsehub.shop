import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Store, Smartphone, Briefcase } from "lucide-react"

export function SolutionsSection() {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise",
      description: "Scalable solutions for large organizations with advanced security and compliance features.",
      features: ["Custom SLA", "Dedicated support", "Advanced analytics"],
    },
    {
      icon: Store,
      title: "E-Commerce",
      description: "Build high-converting online stores with seamless payment integration and inventory management.",
      features: ["Payment processing", "Inventory sync", "Marketing tools"],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native mobile experiences with cross-platform support and offline capabilities.",
      features: ["iOS & Android", "Push notifications", "Offline mode"],
    },
    {
      icon: Briefcase,
      title: "SaaS Products",
      description: "Launch your SaaS with built-in subscription management and analytics.",
      features: ["Subscription billing", "User management", "API access"],
    },
  ]

  return (
    <section id="solutions" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm text-accent font-medium">Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Built for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              Every Industry
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Tailored solutions that meet the unique needs of your business, from startups to enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent/50 transition-all group">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-accent/30 text-foreground hover:bg-accent/10 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
