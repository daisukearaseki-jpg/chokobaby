import { Heart, Shield, Clock, Users } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "4児の母",
    description: "0歳から小学生まで、4人の子育てを経験。年齢に合わせた対応ができます。",
  },
  {
    icon: Heart,
    title: "お母さんの味方",
    description: "「ちょっとだけ」預けたい気持ち、よくわかります。罪悪感なく、自分の時間を。",
  },
  {
    icon: Shield,
    title: "会員制で安心",
    description: "初回面談でお互いを知ってから。信頼関係を大切にした会員制サービスです。",
  },
  {
    icon: Clock,
    title: "短時間OK",
    description: "1時間からご利用可能。買い物、美容院、通院など、短時間のご用事にも。",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4 sm:mb-6">
            わたしについて
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            はじめまして。あきる野市在住、4人の子どもを育てる母です。
            「ちょっとだけ誰かに預けられたら...」そんな声をたくさん聞いてきました。
            地域のお母さんたちの力になりたい。その想いでベビーシッターを始めました。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card p-6 sm:p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
