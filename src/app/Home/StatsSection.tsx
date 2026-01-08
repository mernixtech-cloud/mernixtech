"use client"


  const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "150%", label: "Avg. Lead Increase" },
    { value: "45+", label: "Remodeling Clients" },
  ];

const StatsSection = () => {

  return (
     <section className="py-16 bg-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-background mb-2">
                  {stat.value}
                </p>
                <p className="text-background/70 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default StatsSection