import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Elite Kitchen Design",
    category: "Web Design + SEO",
    description: "A complete digital transformation for a luxury kitchen remodeling firm, resulting in 200% more qualified leads.",
    results: ["+200% leads", "+85% organic traffic", "50% faster load time"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Modern Bath Co.",
    category: "Branding + Web Design",
    description: "Brand identity and website redesign that positioned this startup as a premium bathroom renovation specialist.",
    results: ["+150% website traffic", "40% higher close rate", "Brand recognition"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Thompson Renovations",
    category: "Social Ads + SEO",
    description: "Integrated digital marketing campaign that filled their project pipeline for 6 months in advance.",
    results: ["6-month waitlist", "+300% social reach", "3.5x ROI on ads"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Coastal Kitchen & Bath",
    category: "Full Service",
    description: "End-to-end digital presence overhaul including branding, website, SEO, and ongoing marketing.",
    results: ["+250% leads", "Top 3 Google rankings", "Award-winning design"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Precision Remodeling",
    category: "Web Design + Lead Gen",
    description: "Custom website with integrated lead capture systems and automated follow-up sequences.",
    results: ["+180% conversions", "90% faster response", "Automated nurturing"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Heritage Home Designs",
    category: "Branding + Marketing",
    description: "Complete rebrand and marketing strategy for an established remodeling company entering new markets.",
    results: ["3 new markets", "+120% brand awareness", "Premium positioning"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container-wide relative py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Our <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real results for real remodeling businesses. See how we've helped contractors like you grow their digital presence and generate more qualified leads.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border overflow-hidden card-hover bg-card"
              >
                <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center p-6`}>
                  <div className="w-16 h-16 rounded-xl bg-card/80 backdrop-blur flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result, resultIndex) => (
                      <span
                        key={resultIndex}
                        className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "45+", label: "Remodeling Clients" },
              { value: "150%", label: "Average Lead Increase" },
              { value: "$2M+", label: "Revenue Generated" },
            ].map((stat, index) => (
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

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="rounded-2xl bg-accent p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Want Results Like These?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how we can help transform your digital presence and generate more qualified leads for your remodeling business.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link href="/contact">
                Start Your Success Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}