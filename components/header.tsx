"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingFormModal } from "@/components/booking-form-modal"

const navItems = [
  { href: "#about", label: "わたしについて" },
  { href: "#services", label: "サービス" },
  { href: "#flow", label: "ご利用の流れ" },
  { href: "#faq", label: "よくある質問" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/80 supports-[padding:env(safe-area-inset-top)]:pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Link href="/" className="flex items-center -m-2 p-2">
            <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-foreground">
              ちょこbaby
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-sm min-h-[44px]">
              ログイン
            </Button>
            <BookingFormModal
              trigger={
                <Button size="sm" className="text-sm rounded-full px-5 min-h-[44px] shadow-sm hover:shadow-md transition-shadow">
                  初回面談を予約
                </Button>
              }
            />
          </div>

          <button
            type="button"
            className="md:hidden p-3 -mr-3 -m-2 text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border pb-[env(safe-area-inset-bottom)]">
          <nav className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-4 px-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors min-h-[48px] flex items-center touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 py-4 pt-0 border-t border-border space-y-3">
            <Button variant="outline" className="w-full min-h-[48px] text-base touch-manipulation bg-transparent">
              ログイン
            </Button>
            <BookingFormModal
              trigger={
                <Button className="w-full rounded-full min-h-[48px] text-base touch-manipulation">
                  初回面談を予約
                </Button>
              }
            />
          </div>
        </div>
      )}
    </header>
  )
}
