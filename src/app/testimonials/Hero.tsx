import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

const testimonials = [
  {
    quote: "MernixTech transformed our online presence. We went from struggling to get leads to having a waitlist of clients. The ROI has been incredible.",
    author: "Michael Rodriguez",
    role: "Owner, Elite Kitchen Design",
    location: "Los Angeles, CA",
    initial: "M",
    result: "+200% leads in 6 months",
  },
  {
    quote: "The website they built pays for itself every month. Our close rate went up 40% because clients can actually see our work before they call.",
    author: "Sarah Chen",
    role: "Founder, Modern Bath Co.",
    location: "San Francisco, CA",
    initial: "S",
    result: "40% higher close rate",
  },
  {
    quote: "Finally, a team that understands the remodeling business. They know what homeowners want to see and how to present our work effectively.",
    author: "David Thompson",
    role: "Principal, Thompson Renovations",
    location: "Chicago, IL",
    initial: "D",
    result: "6-month project waitlist",
  },
  {
    quote: "We were invisible online before MernixTech. Now we're on the first page of Google for all our key search terms. Game changer.",
    author: "Jennifer Martinez",
    role: "Marketing Director, Coastal Kitchen & Bath",
    location: "Miami, FL",
    initial: "J",
    result: "#1 ranking for local keywords",
  },
  {
    quote: "Their social media campaigns are incredibly effective. We're getting inquiries from exactly the type of clients we want to work with.",
    author: "Robert Kim",
    role: "Owner, Precision Remodeling",
    location: "Seattle, WA",
    initial: "R",
    result: "3.5x ROI on ad spend",
  },
  {
    quote: "The branding work they did completely repositioned our company. We now attract premium clients who value quality over price.",
    author: "Amanda Foster",
    role: "CEO, Heritage Home Designs",
    location: "Austin, TX",
    initial: "A",
    result: "Premium market positioning",
  },
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "92%", label: "Renewal Rate" },
  { value: "100+", label: "5-Star Reviews" },
];

export default function Testimonials() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container-wide relative py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Don't just take our word for it. Here's what remodeling professionals across the country say about working with MernixTech.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border card-hover relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Hear From Our Clients
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch real testimonials from remodeling professionals who've transformed their businesses with our help.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="aspect-video rounded-2xl bg-foreground/5 border border-border flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1" />
                  </div>
                  <p className="text-muted-foreground">Video testimonial coming soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-background mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto mb-8">
            Let's talk about how we can help grow your remodeling business with a powerful digital presence.
          </p>
          <Button asChild size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}