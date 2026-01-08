"use client"
import Link from 'next/link'
import { BarChart3, Palette, Globe, Megaphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Stunning, conversion-focused websites that showcase your best work and turn visitors into qualified leads.",
    href: "/services#web-design",
  },
  {
    icon: BarChart3,
    title: "SEO",
    description: "Dominate local search results and get found by homeowners actively looking for remodeling services.",
    href: "/services#seo",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Build a memorable brand that positions you as the premium choice in your market.",
    href: "/services#branding",
  },
  {
    icon: Megaphone,
    title: "Social Ads",
    description: "Targeted advertising campaigns that put your portfolio in front of ready-to-renovate homeowners.",
    href: "/services#social-ads",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Everything You Need to Grow
            </h2>
            <p className="text-lg text-muted-foreground">
              A complete digital marketing solution designed specifically for kitchen and bathroom remodeling professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ServicesSection