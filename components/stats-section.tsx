export function StatsSection() {
  const stats = [
    { value: "10M+", label: "Active Users", company: "Global Enterprises" },
    { value: "99.9%", label: "Uptime SLA", company: "Enterprise Ready" },
    { value: "150+", label: "Countries", company: "Worldwide Coverage" },
    { value: "50ms", label: "Response Time", company: "Lightning Fast" },
  ]

  return (
    <section className="py-24 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {stat.value}
              </div>
              <div className="text-foreground font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
