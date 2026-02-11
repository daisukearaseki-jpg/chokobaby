"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "対応エリアはどこですか？",
    answer: "東京都あきる野市、日の出町が対象エリアです。それ以外の地域の方は、まずはお問い合わせください。",
  },
  {
    question: "何歳から預けられますか？",
    answer: "生後3ヶ月から小学生までお預かりできます。お子さまの年齢や状況に合わせて対応いたします。",
  },
  {
    question: "1時間だけでも大丈夫ですか？",
    answer: "はい、1時間からご利用いただけます。「ちょっとだけ」のご利用を大切にしています。",
  },
  {
    question: "急な予約はできますか？",
    answer: "空きがあれば前日でもお受けできます。まずはLINEでお問い合わせください。",
  },
  {
    question: "初回面談は無料ですか？",
    answer: "はい、初回面談は無料です。お互いを知る大切な時間として、約30分〜1時間ほどお話しさせていただきます。",
  },
  {
    question: "兄弟姉妹の同時預かりは可能ですか？",
    answer: "はい、可能です。お子さまの年齢や人数によって料金が変わりますので、面談時にご相談ください。",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            よくある質問
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-4 sm:px-6 data-[state=open]:bg-secondary/30 data-[state=open]:shadow-sm transition-all duration-200"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium hover:no-underline py-5 min-h-[56px] touch-manipulation">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
