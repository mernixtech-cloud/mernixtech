import Link from "next/link";
import { ArrowRight, Users, Target, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision we make is focused on driving measurable results for your business.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work alongside you as partners, not just vendors. Your success is our success.",
  },
  {
    icon: Zap,
    title: "Efficient",
    description: "We respect your time. Fast turnarounds without sacrificing quality.",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "We genuinely care about helping remodelers succeed in the digital space.",
  },
];

const team = [
  {
    name: "Alex Mitchell",
    role: "Founder & Creative Director",
    initial: "A",
  },
  {
    name: "Jordan Park",
    role: "Head of Strategy",
    initial: "J",
  },
  {
    name: "Taylor Chen",
    role: "Lead Developer",
    initial: "T",
  },
  {
    name: "Morgan Blake",
    role: "SEO Specialist",
    initial: "M",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container-wide relative py-30 md:py-30">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              We Help Remodelers <span className="text-primary">Win Online</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              MernixTech is a digital agency dedicated to helping kitchen and bathroom remodeling businesses build powerful online presences that generate consistent, qualified leads.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started MernixTech after seeing too many talented remodeling contractors struggle to compete online. They were masters of their craft, creating beautiful kitchens and bathrooms, but their websites didn't reflect the quality of their work.
                </p>
                <p>
                  We realized that the remodeling industry needed a different approach—one that understood the visual nature of the business and the specific challenges contractors face when trying to grow their client base.
                </p>
                <p>
                  Today, we work exclusively with kitchen and bathroom remodelers. This focus allows us to deeply understand your business, your clients, and what it takes to stand out in a competitive market.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl font-display font-bold text-primary mb-2">5+</p>
                    <p className="text-foreground font-medium">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide every project we take on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground">
              A dedicated group of designers, developers, and strategists passionate about your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.initial}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-background mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto mb-8">
            Ready to take your remodeling business to the next level? We'd love to hear from you.
          </p>
          <Button asChild size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Start the Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}