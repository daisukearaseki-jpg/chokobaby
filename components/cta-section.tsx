import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-foreground text-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-5 sm:mb-6">
          まずは、お話しませんか？
        </h2>
        <p className="text-base sm:text-lg text-background/80 leading-relaxed mb-8 sm:mb-10">
          初回面談は無料です。お子さまのこと、不安なこと、何でもお聞かせください。
          <br className="hidden sm:block" />
          あなたの「ちょっと預けたい」を、お手伝いさせてください。
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-base px-8 py-6 rounded-full bg-background text-foreground hover:bg-background/90 min-h-[52px] w-full sm:w-auto touch-manipulation shadow-lg"
          asChild
        >
          <Link href="/register">
            初回面談を予約する
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
