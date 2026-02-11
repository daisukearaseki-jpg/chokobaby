import Link from "next/link"
import { MapPin } from "lucide-react"

const navLinks = [
  { href: "#about", label: "わたしについて" },
  { href: "#services", label: "サービス" },
  { href: "#flow", label: "ご利用の流れ" },
  { href: "#faq", label: "よくある質問" },
]

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border pb-[calc(1rem+env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-4 -m-2 p-2">
              <span className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                ちょこbaby
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              あきる野市・日の出町の
              <br />
              出張型ベビーシッターサービス
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>〒190-0164</p>
                  <p>東京都あきる野市五日市976-15</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                TEL: 080-6190-6346
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 sm:gap-3">
            <p className="text-sm font-medium text-foreground mb-1">メニュー</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 touch-manipulation"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground mb-1">お問い合わせ</p>
            <p className="text-sm text-muted-foreground">
              LINE: @komorebi
            </p>
            <p className="text-sm text-muted-foreground">
              Email: hello@komorebi.jp
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ちょこbaby. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
