import { NextResponse } from "next/server"
import { google } from "googleapis"
import { bookingSchema } from "@/lib/validations/booking"

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
