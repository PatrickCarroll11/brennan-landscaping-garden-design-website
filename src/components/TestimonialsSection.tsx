import { Star } from "lucide-react";

const testimonials = [
  {
    "text": "Our garden has never looked better! Highly recommend.",
    "author": "Customer, Co. Limerick"
  },
  {
    "text": "Professional service with outstanding results. Very pleased!",
    "author": "Customer, Co. Clare"
  },
  {
    "text": "Transformed our outdoor area into a stunning space.",
    "author": "Customer, Co. Kerry"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-lg p-6 border shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4 italic text-muted-foreground">"{t.text}"</p>
              <p className="text-sm font-semibold">– {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
