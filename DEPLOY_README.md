# GitHub → Vercel デプロイ手順

## 初回のみ：認証（約2分）

### 1. GitHub にログイン
PowerShell で実行：
```powershell
gh auth login --web --git-protocol https
```
→ ブラウザが開くので、表示されたコードを入力して完了

### 2. Vercel にログイン
PowerShell で実行：
```powershell
npx vercel login
```
→ メールアドレスを入力し、届いたリンクをクリック

---

## デプロイ実行

認証が完了したら、このフォルダで：

```powershell
.\deploy.ps1
```

または手動で：
```powershell
# GitHub にリポジトリ作成＆プッシュ
gh repo create chokobaby --public --source=. --remote=origin --push

# Vercel にデプロイ
npx vercel --prod --yes
```

---

## 2回目以降

コードを変更したら：
```powershell
git add .
git commit -m "Update"
git push
```
→ Vercel が自動で再デプロイします（GitHub連携時）
