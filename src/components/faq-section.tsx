import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do my customers need to download an app?",
    answer: "No! That's the beauty of Loyalo. Customers simply scan your QR code with their phone's camera. Their loyalty card is saved automatically in their browser. No app download, no account creation required.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Most businesses are up and running in under 10 minutes. Create your loyalty card, customize your rewards, print your QR code, and you're ready to go. Our setup wizard guides you through every step.",
  },
  {
    question: "Can I customize the loyalty card design?",
    answer: "Absolutely! You can add your logo, choose your brand colors, set your own reward thresholds, and customize the reward message. Your loyalty card will look and feel like an extension of your brand.",
  },
  {
    question: "What happens if a customer loses their phone?",
    answer: "Customer data is tied to their email or phone number (if they choose to provide it). They can recover their stamps on any device by simply scanning your QR code again and verifying their identity.",
  },
  {
    question: "Can I use Loyalo for multiple locations?",
    answer: "Yes! Our Growth plan supports multiple locations under one account. You can track performance across all locations while maintaining separate loyalty cards if needed.",
  },
  {
    question: "Is there a contract or long-term commitment?",
    answer: "No contracts, no commitments. All plans are month-to-month and you can cancel anytime. We also offer a free plan that's free forever, so you can try Loyalo risk-free.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Loyalo.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-border/50 data-[state=open]:border-primary/20"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
