import Link from "next/link";
import { ArrowRight, Globe, BarChart3, Palette, Megaphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
  {
    id: "web-design",
    icon: Globe,
    title: "Web Design & Development",
    tagline: "Websites That Convert Visitors Into Clients",
    description: "Your website is your 24/7 salesperson. We build stunning, fast-loading websites specifically designed for kitchen and bathroom remodelers—featuring portfolio showcases, lead capture systems, and mobile-first design that works as hard as you do.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-responsive layouts",
      "Portfolio & gallery showcases",
      "Lead capture forms & CTAs",
      "Fast loading speeds",
      "Easy-to-update content management",
    ],
  },
  {
    id: "seo",
    icon: BarChart3,
    title: "Search Engine Optimization",
    tagline: "Get Found by Homeowners Ready to Renovate",
    description: "When someone searches 'kitchen remodeler near me,' you need to be at the top. Our SEO strategies are built specifically for local service businesses, helping you dominate search results in your target areas and attract high-intent leads.",
    features: [
      "Local SEO optimization",
      "Google Business Profile management",
      "Keyword strategy for remodelers",
      "Content optimization",
      "Technical SEO audits",
      "Monthly performance reporting",
    ],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Identity",
    tagline: "Stand Out as the Premium Choice",
    description: "In a crowded market, a strong brand sets you apart. We create cohesive brand identities that communicate quality, professionalism, and trust—positioning you as the go-to choice for homeowners seeking the best.",
    features: [
      "Logo design & visual identity",
      "Brand messaging & voice",
      "Marketing collateral",
      "Business card & stationery design",
      "Brand guidelines documentation",
      "Vehicle wrap design",
    ],
  },
  {
    id: "social-ads",
    icon: Megaphone,
    title: "Social Media Advertising",
    tagline: "Put Your Best Work in Front of the Right Eyes",
    description: "Reach homeowners who are actively planning renovations. Our targeted ad campaigns on Facebook, Instagram, and beyond showcase your portfolio to qualified prospects in your service area—generating leads that are ready to talk.",
    features: [
      "Facebook & Instagram ad campaigns",
      "Audience targeting & segmentation",
      "Before-and-after showcase ads",
      "Lead generation campaigns",
      "Retargeting strategies",
      "Performance tracking & optimization",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container-wide relative py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Services That <span className="text-primary">Drive Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A complete suite of digital marketing solutions designed specifically for kitchen and bathroom remodeling professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                  <service.icon className="w-4 h-4" />
                  {service.title}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {service.tagline}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="hero" size="lg">
                  <Link href="/contact">
                    Get Started with {service.title.split(" ")[0]}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center">
                  <service.icon className="w-32 h-32 text-primary/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Simple Process
            </h2>
            <p className="text-lg text-muted-foreground">
              We make working with us easy and straightforward.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target market." },
              { step: "02", title: "Strategy", description: "We create a tailored plan to achieve your objectives." },
              { step: "03", title: "Execute", description: "Our team builds and implements your solution." },
              { step: "04", title: "Optimize", description: "We monitor, measure, and continuously improve." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-background mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto mb-8">
            Book a free consultation call. We'll assess your current situation and recommend the best approach for your goals.
          </p>
          <Button asChild size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Get Your Free Strategy Session
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}