"use client"

import { Button } from "@/components/ui/Button";
import Link from 'next/link'


const testimonials = [
  {
    quote: "MernixTech transformed our online presence. We went from struggling to get leads to having a waitlist of clients.",
    author: "Michael Rodriguez",
    role: "Owner, Elite Kitchen Design",
    avatar: "M",
  },
  {
    quote: "The website they built pays for itself every month. Our close rate went up 40% because clients can actually see our work.",
    author: "Sarah Chen",
    role: "Founder, Modern Bath Co.",
    avatar: "S",
  },
  {
    quote: "Finally, a team that understands the remodeling business. They know what homeowners want to see.",
    author: "David Thompson",
    role: "Principal, Thompson Renovations",
    avatar: "D",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what remodeling professionals say about working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/testimonials">Read More Success Stories </Link>
            </Button>
          </div>
        </div>
      </section>

  )
}

export default Testimonials