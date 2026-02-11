import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "初回面談を予約",
    description: "Webまたはお電話で面談をご予約ください。ご都合の良い日時をお選びいただけます。",
  },
  {
    number: "02",
    title: "面談・ご登録",
    description: "ご自宅またはオンラインで面談。お子さまのこと、ご要望などをお聞かせください。お互いを知る大切な時間です。",
  },
  {
    number: "03",
    title: "ご予約",
    description: "会員登録後、ご利用日時をご予約。LINEで簡単にやり取りできます。",
  },
  {
    number: "04",
    title: "ご利用開始",
    description: "ご自宅にお伺いしてお預かり。安心してお出かけください。",
  },
]

export function FlowSection() {
  return (
    <section id="flow" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Flow
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4 sm:mb-6">
            ご利用の流れ
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            まずは初回面談で、お互いを知ることからはじめましょう。
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3 sm:space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 p-5 sm:p-6 md:p-8 bg-card rounded-2xl border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary/30">
                  {step.number}
                </span>
              </div>
              <div className="flex-1 sm:pt-1">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Button size="lg" className="rounded-full px-8 py-6 text-base min-h-[52px] w-full sm:w-auto touch-manipulation shadow-lg hover:shadow-xl transition-all" asChild>
            <Link href="/register">
              初回面談を予約する
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
