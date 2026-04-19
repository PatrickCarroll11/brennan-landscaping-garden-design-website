import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Brennan Landscaping & Garden Design — quality Landscaper service you can trust.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At Brennan Landscaping & Garden Design, we are passionate about creating beautiful outdoor spaces. Based in Limerick, we serve the local community and surrounding areas with quality landscaping and garden design services.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Our team is dedicated to delivering exceptional results tailored to each client's unique vision..
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Sets Us Apart</h2>
          <div className="space-y-4 mb-10">
            {[{"title":"Quality Materials","desc":"We use only the best materials for all projects."},{"title":"Competitive Pricing","desc":"Affordable rates for high-quality services."},{"title":"Professional Team","desc":"Our team is skilled and experienced."},{"title":"Wide Coverage","desc":"We serve Limerick and surrounding counties."},{"title":"Customer Satisfaction","desc":"Our clients' happiness is our top priority."}].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
