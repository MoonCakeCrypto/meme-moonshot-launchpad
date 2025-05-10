
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is MEMECOIN?",
      answer: "MEMECOIN is a community-driven cryptocurrency that combines the fun and viral nature of memes with real utility and tokenomics designed for sustainable growth.",
    },
    {
      question: "How can I buy MEMECOIN?",
      answer: "You can buy MEMECOIN by setting up a crypto wallet like MetaMask, purchasing ETH, connecting to a decentralized exchange like Uniswap, and swapping your ETH for MEMECOIN. See our detailed guide in the How To Buy section.",
    },
    {
      question: "Is there a transaction tax?",
      answer: "Yes, there's a 5% transaction tax that is distributed as follows: 2% is redistributed to all token holders, 2% is added to the liquidity pool, and 1% is burned forever.",
    },
    {
      question: "When will MEMECOIN be listed on major exchanges?",
      answer: "We're actively working on exchange listings! Follow our social media channels for the latest updates on exchange partnerships and listing announcements.",
    },
    {
      question: "What makes MEMECOIN different from other meme coins?",
      answer: "Unlike many meme coins, MEMECOIN combines viral marketing potential with actual utility, sustainable tokenomics, and a clear roadmap for development. We're building a complete ecosystem rather than just riding the hype.",
    },
    {
      question: "Is the team doxxed (identified)?",
      answer: "Yes, our core team members are fully transparent about their identities. Visit our Team page to learn more about the people building MEMECOIN.",
    },
    {
      question: "Has the contract been audited?",
      answer: "Yes, our smart contract has been audited by CertiK and SolidProof, two leading blockchain security firms. The audit reports are available on our website.",
    },
    {
      question: "How can I participate in the community?",
      answer: "Join our Telegram group, Discord server, and follow us on Twitter for community discussions, updates, and opportunities to contribute to the project.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about MEMECOIN
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left py-4 text-lg font-medium hover:text-memeorange">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="py-4 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?
          </p>
          <a href="#community" className="text-memepurple font-medium hover:underline">
            Join our community to learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
