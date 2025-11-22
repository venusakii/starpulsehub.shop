import { Cpu, Database, Cloud, Lock } from "lucide-react"

export function TechnologySection() {
  const technologies = [
    {
      icon: Cpu,
      title: "AI-Powered Engine",
      description: "Machine learning algorithms optimize performance in real-time, adapting to your usage patterns.",
    },
    {
      icon: Database,
      title: "Distributed Architecture",
      description: "Our edge network ensures low latency and high availability across all regions.",
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Built for the cloud from day one, with automatic scaling and zero downtime deployments.",
    },
    {
      icon: Lock,
      title: "Zero-Trust Security",
      description: "Every request is verified, every connection is encrypted, every action is logged.",
    },
  ]

  return (
    <section id="technology" className="py-24 bg-card/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-sm text-secondary font-medium">Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Powered by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Next-Gen Infrastructure
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Our technology stack is designed for reliability, performance, and scalability at every level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <tech.icon className="w-7 h-7 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
