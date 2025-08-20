import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/molecule-ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion className="w-full" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          It works by analyzing your requirements, leveraging advanced AI
          algorithms to understand context, and executing tasks based on your
          instructions. It can integrate with your workflow, learn from
          feedback, and continuously improve its performance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How secure is my data?</AccordionTrigger>
        <AccordionContent>
          We implement enterprise-grade security measures including end-to-end
          encryption, secure data centers, and regular security audits. Your
          data is protected according to industry best practices and compliance
          standards.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer a 14-day free trial that gives you full access to all
          features. No credit card is required to start your trial, and you can
          upgrade or cancel at any time.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
