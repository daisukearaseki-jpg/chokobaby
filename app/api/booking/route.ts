import { NextResponse } from "next/server"
import { Resend } from "resend"
import { google } from "googleapis"
import { bookingSchema } from "@/lib/validations/booking"

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

function getGoogleSheetsClient() {
  const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS
  if (!credentials) return null
  try {
    let creds: object
    try {
      creds = JSON.parse(credentials) as object
    } catch {
      creds = JSON.parse(
        Buffer.from(credentials, "base64").toString("utf-8")
      ) as object
    }
    const auth = new google.auth.GoogleAuth({
      credentials: creds,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })
    const sheets = google.sheets({ version: "v4", auth })
    return sheets
  } catch {
    return null
  }
}

async function saveToGoogleSheets(data: { name: string; email: string; phone: string }) {
  const sheets = getGoogleSheetsClient()
  const sheetId = process.env.GOOGLE_SHEET_ID
  if (!sheets || !sheetId) return

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "予約一覧!A:C",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[data.name, data.email, data.phone]],
    },
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = bookingSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "入力内容に誤りがあります。", details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, phone } = parsed.data

    const adminEmail = process.env.ADMIN_EMAIL
    const resend = getResend()
    if (resend && adminEmail) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
          to: adminEmail,
        subject: "【ちょこbaby】初回面談の予約がありました",
        html: `
          <h2>初回面談の予約</h2>
          <p><strong>お名前:</strong> ${name}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>電話番号:</strong> ${phone}</p>
          <hr>
          <p>※このメールは自動送信されています。</p>
        `,
        })
      } catch (e) {
        console.error("Resend error:", e)
      }
    }

    try {
      await saveToGoogleSheets({ name, email, phone })
    } catch (e) {
      console.error("Google Sheets error:", e)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Booking API error:", err)
    return NextResponse.json(
      { error: "送信に失敗しました。しばらくして再度お試しください。" },
      { status: 500 }
    )
  }
}
