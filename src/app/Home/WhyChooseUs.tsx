import React from 'react'
import { ArrowRight, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from 'next/link'

const benefits = [
  "Websites built specifically for kitchen & bath remodelers",
  "Portfolio showcase that closes deals",
  "Lead capture systems that work 24/7",
  "Local SEO to dominate your service area",
  "Responsive design for mobile homeowners",
  "Fast-loading pages that don't lose visitors",
];


const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Built for Remodelers, By Marketing Experts
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the unique challenges of the remodeling industry. From showcasing before-and-afters to managing client expectations, we know what works.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link href="/about">
                  Learn About Our Approach
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-5xl font-display font-bold text-foreground mb-2">98%</p>
                  <p className="text-muted-foreground">of our clients report increased lead quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUs