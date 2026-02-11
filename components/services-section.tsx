import { ShoppingBag, Scissors, Stethoscope, Coffee } from "lucide-react"

const services = [
  {
    icon: ShoppingBag,
    title: "お買い物の間",
    description: "スーパーやショッピング、ゆっくりお買い物をしたい時に。",
    duration: "1〜2時間",
  },
  {
    icon: Scissors,
    title: "美容院・ネイル",
    description: "髪を切りたい、ネイルをしたい。自分磨きの時間をサポート。",
    duration: "2〜3時間",
  },
  {
    icon: Stethoscope,
    title: "通院・健診",
    description: "歯医者、病院、健康診断。お子さん連れでは難しい用事に。",
    duration: "1〜3時間",
  },
  {
    icon: Coffee,
    title: "リフレッシュ",
    description: "カフェでひと息、友人とランチ。たまには自分だけの時間を。",
    duration: "1〜3時間",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4 sm:mb-6">
            こんな時にご利用ください
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            「ちょっとだけ」のお預かりを中心に、お母さんの日常をサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-5 sm:p-6 rounded-2xl border border-border hover:bg-secondary/50 hover:shadow-md hover:border-primary/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-sm font-medium text-foreground">
                目安：{service.duration}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-secondary/30 rounded-2xl text-center">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            料金やサービス詳細は、初回面談でご説明いたします。
            <br className="hidden sm:block" />
            お子さまの年齢やご利用内容に応じて、最適なプランをご提案します。
          </p>
        </div>
      </div>
    </section>
  )
}
