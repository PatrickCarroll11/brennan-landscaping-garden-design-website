import { Leaf, Shovel, Scissors, Flower2, TreePine, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Garden Design",
    description: "Creating bespoke garden designs tailored to your needs.",
  },
  {
    icon: Shovel,
    title: "Landscaping Services",
    description: "Complete landscaping solutions for any outdoor space.",
  },
  {
    icon: Scissors,
    title: "Lawn Care",
    description: "Professional lawn maintenance and care services.",
  },
  {
    icon: Flower2,
    title: "Planting Services",
    description: "Expert planting services to enhance your garden.",
  },
  {
    icon: TreePine,
    title: "Garden Maintenance",
    description: "Regular maintenance to keep your garden looking its best.",
  },
  {
    icon: LayoutGrid,
    title: "Patio and Decking",
    description: "Design and installation of patios and decking for outdoor living.",
  },
];

const ServicesGrid = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Services</h2>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
          From garden design to full landscaping installations — tailored solutions for every outdoor space in Limerick and beyond.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group p-8 rounded-lg border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-brand-green-light flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;