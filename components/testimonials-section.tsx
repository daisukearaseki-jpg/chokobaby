"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "A.S さん",
    area: "あきる野市",
    child: "3歳女の子のママ",
    content: "美容院に行きたくても諦めていましたが、ちょこbabyさんのおかげで久しぶりに自分の時間が持てました。娘も「また来てね」と言っていて、安心してお願いできます。",
  },
  {
    name: "M.T さん",
    area: "日の出町",
    child: "1歳・4歳のママ",
    content: "2人を連れての買い物が大変で困っていました。短時間でもお願いできるのが本当に助かります。子どもたちの様子も丁寧に報告してくださり、信頼しています。",
  },
  {
    name: "K.Y さん",
    area: "あきる野市",
    child: "2歳男の子のママ",
    content: "初回面談で息子がすぐに懐いたのを見て、お願いすることを決めました。同じ子育て中のママだからこそわかってもらえる安心感があります。",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 mb-4 text-balance">
            ご利用者様の声
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            実際にご利用いただいたお客様からの声をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border border-border shadow-sm hover:shadow-lg hover:border-primary/10 transition-all duration-300"
            >
              <CardContent className="p-5 sm:p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4 flex-shrink-0" />
                <p className="text-foreground/90 text-sm sm:text-base leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.area} / {testimonial.child}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
