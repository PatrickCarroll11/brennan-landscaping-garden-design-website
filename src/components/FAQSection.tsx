import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does landscaping cost in Limerick?",
    a: "Costs vary depending on the scope and complexity of your project. A basic lawn care visit might start from €50–€80, while a full garden design and landscaping project can range from €2,000 to €20,000+. We offer free, no-obligation quotes tailored to your specific needs, so you'll always know exactly what to expect before any work begins.",
  },
  {
    q: "How quickly can Brennan Landscaping respond to an enquiry?",
    a: "We aim to respond to all enquiries within 24 hours, Monday to Friday. For urgent requests, you're welcome to call us directly on 061 456 7890 and we'll do our best to arrange a convenient time to visit and assess your garden as soon as possible.",
  },
  {
    q: "What areas do you cover for landscaping services?",
    a: "We are based in Limerick and cover a wide area including counties Clare, Kerry, Tipperary, Cork, Waterford, Galway, Offaly, Laois, Kilkenny, Carlow, and Wexford. If you're unsure whether we cover your location, just give us a call or send us an email and we'll be happy to confirm.",
  },
  {
    q: "Do you offer garden design consultations before starting a project?",
    a: "Yes, absolutely. We offer personalised consultations where one of our experienced designers will visit your property, discuss your vision, and assess the space. We can provide 3D visualisations and custom planting plans so you can see exactly how your new garden will look before any work begins.",
  },
  {
    q: "Are you fully insured and certified to carry out landscaping work?",
    a: "Yes, Brennan Landscaping & Garden Design is fully insured and our team holds professional certifications in landscaping and garden design. We are also a member of the Garden Design Association, so you can have complete peace of mind that all work is carried out safely, professionally, and to the highest standards.",
  },
  {
    q: "Do you provide ongoing garden maintenance after a project is completed?",
    a: "We do. We offer flexible garden maintenance packages — both regular scheduled visits and one-off maintenance sessions — to keep your garden looking its best throughout the year. Whether it's pruning, weeding, lawn care, or seasonal treatments, we have a plan to suit every garden and budget.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions from homeowners and businesses across Limerick and
            beyond.
          </p>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-primary transition-colors"
              >
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;