import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import { BookingFormModal } from "@/components/booking-form-modal"

export function HeroSection() {
  return (
    <section className="min-h-[100dvh] min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8 sm:mb-10">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>東京都 あきる野市・日の出町 限定</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.2] mb-5 sm:mb-6">
          <span className="block">ちょっとの時間を、</span>
          <span className="block">あなたの時間に。</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2">
          買い物、美容院、少しの休息。
          <br className="hidden sm:block" />
          4児の母だからこそわかる、お母さんの「ちょっと預けたい」に寄り添います。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <BookingFormModal
            trigger={
              <Button size="lg" className="text-base px-8 py-6 rounded-full min-h-[52px] w-full sm:w-auto touch-manipulation shadow-lg hover:shadow-xl transition-all">
                初回面談を予約する
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            }
          />
          <Button variant="ghost" size="lg" className="text-base text-muted-foreground min-h-[52px] w-full sm:w-auto touch-manipulation" asChild>
            <Link href="#about">サービスについて</Link>
          </Button>
        </div>

        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-border">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-lg mx-auto">
            <div className="text-center px-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">4児</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">の母</p>
            </div>
            <div className="text-center px-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">1時間</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">から利用OK</p>
            </div>
            <div className="text-center px-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">地域</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">密着型</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
