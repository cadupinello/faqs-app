"use client"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import ChevronDownIcon from "@/icons/ChevronDownIcon"
import FilterIcon from "@/icons/filterIcon"
import ListOrderedIcon from "@/icons/listOrdenedIcon"
import SearchIcon from "@/icons/searchIcon"
import { useMemo, useState } from "react"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  
  const faqs = useMemo(() => [
    {
      question: "What is the refund policy?",
      answer:
        "Our refund policy is simple - if you're not satisfied with your purchase, you can return it within 30 days for a full refund. No questions asked.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by logging into your account on our website and checking the status of your order. Alternatively, you can contact our customer support team and they'll be happy to assist you.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards, as well as PayPal and Apple Pay. Your payment information is securely encrypted and stored.",
    },
    {
      question: "Do you offer free shipping?",
      answer:
        "Yes, we offer free standard shipping on all orders over $50. For orders under $50, a small shipping fee may apply.",
    },
    {
      question: "How long does it take to receive my order?",
      answer:
        "Delivery times vary depending on your location and the shipping method you choose. Standard shipping typically takes 5-7 business days, while expedited shipping is available for faster delivery.",
    },
  ], [])

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => faq.question.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [searchTerm, faqs])

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 bg-glassmorphism-bg 
      rounded-glassmorphism 
      shadow-glassmorphism 
      backdrop-blur-glassmorphism 
    ">
      <h1 className="text-3xl font-bold mb-8 text-zinc-50">FAQs</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-6 rounded border-zinc-200 p-6 text-zinc-50 placeholder:text-zinc-400"
          />
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <Collapsible key={index} open={expandedFaq === index} onOpenChange={() => toggleFaq(index)}>
                <CollapsibleTrigger className="flex justify-between items-center w-full bg-zinc-300 px-4 py-3 rounded cursor-pointer">
                  <h3 className="text-lg font-medium ">{faq.question}</h3>
                  <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 py-3">
                  <p className="text-zinc-50">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
        <div className="bg-zinc-300 rounded p-6 w-full md:w-[300px]">
          <h2 className="text-xl font-bold mb-4">Commands</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <SearchIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">/search</span>
            </div>
            <div className="flex items-center gap-2">
              <FilterIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">/filter</span>
            </div>
            <div className="flex items-center gap-2">
              <ListOrderedIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">/sort</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
