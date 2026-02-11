"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { ArrowRight, Loader2 } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { bookingSchema, type BookingFormData } from "@/lib/validations/booking"

interface BookingFormModalProps {
  trigger?: React.ReactNode
  variant?: "default" | "secondary" | "outline" | "ghost"
  className?: string
}

export function BookingFormModal({
  trigger,
  variant = "default",
  className = "",
}: BookingFormModalProps) {
  const [open, setOpen] = useState(false)

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const onSubmit = async (data: BookingFormData) => {
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        throw new Error(json.error || "送信に失敗しました")
      }

      toast.success("送信完了しました", {
        description: "お問い合わせありがとうございます。担当者よりご連絡いたします。",
        duration: 5000,
      })
      form.reset()
      setOpen(false)
    } catch (err) {
      toast.error("送信に失敗しました", {
        description: err instanceof Error ? err.message : "しばらくして再度お試しください。",
      })
    }
  }

  const isSubmitting = form.formState.isSubmitting

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            size="lg"
            variant={variant}
            className={`text-base px-8 py-6 rounded-full min-h-[52px] touch-manipulation shadow-lg hover:shadow-xl transition-all ${className}`}
          >
            初回面談を予約する
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>初回面談の予約</DialogTitle>
          <DialogDescription>
            以下の項目をご入力のうえ、送信してください。担当者よりご連絡いたします。
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>お名前（必須）</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="山田 花子"
                      {...field}
                      disabled={isSubmitting}
                      className="min-h-[44px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>メールアドレス（必須）</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      {...field}
                      disabled={isSubmitting}
                      className="min-h-[44px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>電話番号（必須）</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="090-1234-5678"
                      {...field}
                      disabled={isSubmitting}
                      className="min-h-[44px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="gap-2 sm:gap-0 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
              >
                キャンセル
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    送信中...
                  </>
                ) : (
                  <>
                    送信する
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
