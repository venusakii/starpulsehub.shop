import { Zap, Shield, Rocket, Globe, Code, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Performance",
      description:
        "Experience unparalleled speed with our optimized infrastructure delivering results in milliseconds.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance standards keep your data protected at all times.",
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Go from concept to production in minutes with our streamlined deployment pipeline.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Reach users worldwide with our distributed network spanning 150+ countries.",
    },
    {
      icon: Code,
      title: "Developer First",
      description: "Intuitive APIs and comprehensive documentation make integration seamless.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for seamless teamwork, from ideation to deployment.",
    },
  ]

  return (
    <section id="features" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Everything You Need to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Innovate Faster
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Powerful features designed to accelerate your development workflow and scale your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
