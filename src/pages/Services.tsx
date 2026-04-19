import { Leaf, Layers, Scissors, Flower2, Wrench, Grid3X3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const serviceDetails = [
  {
    title: "Garden Design",
    seo: "Garden Design Limerick",
    description:
      "Our bespoke garden design services are tailored to your personal style and needs, ensuring a beautiful and functional outdoor space. From contemporary to classic designs, we bring your vision to life.",
    features: [
      "Custom Plans",
      "3D Visualizations",
      "Plant Selection",
      "Sustainable Design",
      "Personal Consultations",
    ],
    icon: Leaf,
  },
  {
    title: "Landscaping Services",
    seo: "Landscaping Services Limerick",
    description:
      "We offer complete landscaping solutions, from initial consultation to final installation. Our team handles everything to transform your garden into a stunning outdoor area.",
    features: [
      "Full Project Management",
      "Hardscaping",
      "Softscaping",
      "Water Features",
      "Lighting Solutions",
    ],
    icon: Layers,
  },
  {
    title: "Lawn Care",
    seo: "Lawn Care Limerick",
    description:
      "Our professional lawn care services ensure that your lawn remains healthy and vibrant all year round. We offer mowing, fertilizing, and more.",
    features: [
      "Mowing",
      "Fertilizing",
      "Aeration",
      "Weed Control",
      "Seasonal Treatments",
    ],
    icon: Scissors,
  },
  {
    title: "Planting Services",
    seo: "Planting Services Limerick",
    description:
      "Enhance your garden with our expert planting services. We select and plant suitable plants to thrive in your garden's environment.",
    features: [
      "Plant Selection",
      "Soil Preparation",
      "Seasonal Planting",
      "Native Species",
      "Expert Advice",
    ],
    icon: Flower2,
  },
  {
    title: "Garden Maintenance",
    seo: "Garden Maintenance Limerick",
    description:
      "Our garden maintenance services ensure your garden remains in top condition. We offer regular and one-off maintenance solutions.",
    features: [
      "Pruning",
      "Weeding",
      "Mulching",
      "Pest Control",
      "Custom Maintenance Plans",
    ],
    icon: Wrench,
  },
  {
    title: "Patio and Decking",
    seo: "Patio and Decking Limerick",
    description:
      "Enhance your outdoor living space with our patio and decking services. We design and install beautiful and durable outdoor areas.",
    features: [
      "Custom Designs",
      "Quality Materials",
      "Expert Installation",
      "Maintenance Services",
      "Variety of Styles",
    ],
    icon: Grid3X3,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive landscaping and garden design services across Limerick
            and surrounding counties.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            const isAlt = index % 2 !== 0;
            return (
              <Card
                key={service.title}
                className={`overflow-hidden border border-muted shadow-sm ${
                  isAlt ? "section-alt" : "bg-card"
                }`}
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left Column */}
                    <div className="p-8 flex flex-col justify-start gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary rounded-full p-3 flex-shrink-0">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary">
                          {service.title}
                        </h2>
                      </div>

                      <div>
                        <Badge
                          variant="outline"
                          className="border-primary text-primary text-xs font-medium"
                        >
                          {service.seo}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Right Column */}
                    <div className="bg-primary/5 p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-muted">
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                        What's Included:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-foreground"
                          >
                            <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                            <span className="text-sm font-medium">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}