"use client"

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="section-padding bg-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-background mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto mb-8">
            Book a free 30-minute strategy call. We'll analyze your current online presence and show you exactly how to get more qualified leads.
          </p>
          <Button asChild size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Schedule Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
  )
}

export default CTASection