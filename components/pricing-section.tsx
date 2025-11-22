import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small teams and side projects",
      features: ["5 team members", "50GB storage", "Basic analytics", "Email support", "API access"],
      popular: false,
    },
    {
      name: "Professional",
      price: "99",
      description: "For growing businesses and startups",
      features: [
        "Unlimited team members",
        "500GB storage",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "SSO authentication",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom needs",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Dedicated support",
        "Custom SLA",
        "Advanced security",
        "On-premise option",
        "Training & onboarding",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-sm text-secondary font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Simple,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-card border-border ${plan.popular ? "border-primary cosmic-glow" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <Button
                  className={`w-full mb-8 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
