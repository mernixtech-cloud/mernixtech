import { ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />

      <div className="container-wide relative py-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="animate-slide-up ">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted by 45+ Remodeling Businesses
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Websites That Close More{" "}
              <span className="text-primary">Remodeling Jobs</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Stop losing leads to competitors with better websites. We build
              stunning digital experiences for kitchen and bathroom remodelers
              that turn browsers into buyers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* CTA 1 */}
              <Button asChild variant="hero" size="lg">
                <Link href="/contact">
                  <span className="flex items-center gap-2">
                    Get Your Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </Button>

              {/* CTA 2 */}
              {/* <Button asChild variant="hero-outline" size="lg">
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button> */}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative animate-fade-in "
            // style={{ animationDelay: "1s" }}
          >
            <div className="relative rounded-2xl overflow-hidden ">
              <img
                src={"/assets/c612de5080d8cbecb9933ce8e9b1ee1f.png"}
                alt="Modern website design on laptop showcasing kitchen remodeling"
                className="w-full h-auto"
                // priority
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute bottom-10 -left-6 bg-card rounded-xl p-4 shadow-xl border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+150%</p>
                  <p className="text-sm text-muted-foreground">More Leads</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
