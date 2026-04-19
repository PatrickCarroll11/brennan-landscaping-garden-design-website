import { CheckCircle2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const badges = [
  "Certified Landscaper",
  "Fully Insured",
  "Member of Garden Design Association",
];

export default function TAMSSection() {
  return (
    <section className="bg-primary/[0.04] border-y border-primary/10 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Icon circle */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md">
            <Leaf className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
          Certified Landscaping Professionals
        </h2>

        {/* Body text */}
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Our team is fully certified and insured, ensuring peace of mind for
          all our clients. We adhere to the highest standards in safety and
          quality.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-10">
          When you choose Brennan Landscaping &amp; Garden Design, you are
          choosing a team that takes pride in every project — from initial
          consultation through to final completion — delivering results you can
          trust.
        </p>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="mb-12 px-8 py-6 h-auto font-semibold shadow-lg bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link to="/contact">Ask About Our Services</Link>
        </Button>

        {/* Badge columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center gap-3 bg-card border border-primary/10 rounded-xl px-6 py-6 shadow-sm"
            >
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-foreground font-semibold text-sm text-center leading-snug">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}