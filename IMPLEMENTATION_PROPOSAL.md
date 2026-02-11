# 予約フォーム機能 実装提案

## 現状の構成

```
0001/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # APIルートなし
├── components/
│   ├── ui/               # form, dialog, input, button, sonner など既存
│   ├── hero-section.tsx  # 予約ボタンあり
│   ├── cta-section.tsx   # 予約ボタンあり
│   ├── flow-section.tsx  # 予約ボタンあり
│   └── header.tsx        # 予約ボタンあり
├── lib/
│   └── utils.ts
└── hooks/
```

## 1. 新規作成ファイル一覧

| パス | 役割 |
|------|------|
| `app/api/booking/route.ts` | 予約データ受信・Resend送信・Googleスプレッドシート保存のAPI Route |
| `lib/validations/booking.ts` | Zodスキーマ（お名前・メール・電話番号） |
| `components/booking-form-modal.tsx` | 予約モーダル＋フォーム本体（react-hook-form使用） |

## 2. 修正するファイル

| パス | 変更内容 |
|------|----------|
| `app/layout.tsx` | Toaster（sonner）を追加 |
| `components/hero-section.tsx` | 予約ボタン→モーダル開閉に変更 |
| `components/cta-section.tsx` | 同上 |
| `components/flow-section.tsx` | 同上 |
| `components/header.tsx` | 同上 |

## 3. 必要なライブラリ

**追加インストール:**
```bash
pnpm add resend googleapis
```

- `resend`: メール送信
- `googleapis`: Google Sheets API（スプレッドシート保存）

**既存で利用可能:**
- react-hook-form ✓
- @hookform/resolvers ✓
- zod ✓
- sonner ✓
- Dialog, Form, Input ✓

## 4. 環境変数（.env.local）

```
# Resend（https://resend.com でAPIキー取得）
RESEND_API_KEY=re_xxxxx
ADMIN_EMAIL=管理者のメールアドレス

# Google Sheets（サービスアカウントJSONの内容をBase64などで設定、または別方式）
GOOGLE_SHEETS_CREDENTIALS=...
GOOGLE_SHEET_ID=スプレッドシートID
```

## 5. データフロー

```
[ユーザー] → フォーム入力 → POST /api/booking
                              ↓
                    ┌─────────┴─────────┐
                    │ API Route         │
                    │ 1. Zodバリデーション
                    │ 2. Resendで管理者へメール
                    │ 3. Google Sheetsに追記
                    └─────────┬─────────┘
                              ↓
                    [ユーザー] ← 200 + トースト表示
```

## 6. 実装の進め方

1. バリデーションスキーマ（`lib/validations/booking.ts`）作成
2. 予約モーダルコンポーネント（`components/booking-form-modal.tsx`）作成
3. API Route（`app/api/booking/route.ts`）作成
4. 各予約ボタンにモーダル連携を追加
5. layout に Toaster 追加

この構成で進めてよければ、実装に進みます。
