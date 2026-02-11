# GitHub & Vercel Deploy Script
# Usage: .\deploy.ps1
# Token: $env:GITHUB_TOKEN="ghp_xxx"; $env:VERCEL_TOKEN="xxx"; .\deploy.ps1

$ErrorActionPreference = "Stop"
$repoName = "chokobaby"

if ($env:GITHUB_TOKEN) {
    $env:GITHUB_TOKEN | gh auth login --with-token 2>$null | Out-Null
}

Write-Host "`n=== Step 1: GitHub auth check ===" -ForegroundColor Cyan
gh auth status 2>$null | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "NG: Run 'gh auth login --web' or set GITHUB_TOKEN" -ForegroundColor Red
    exit 1
}
Write-Host "OK" -ForegroundColor Green

Write-Host "`n=== Step 2: Create GitHub repo and push ===" -ForegroundColor Cyan
gh repo create $repoName --public --source=. --remote=origin --push 2>$null
if ($LASTEXITCODE -ne 0) {
    $user = gh api user -q .login 2>$null
    git remote remove origin 2>$null
    git remote add origin "https://github.com/$user/$repoName.git"
    git branch -M main
    git push -u origin main
}
Write-Host "OK" -ForegroundColor Green

Write-Host "`n=== Step 3: Deploy to Vercel ===" -ForegroundColor Cyan
if ($env:VERCEL_TOKEN) {
    npx vercel --prod --yes --token $env:VERCEL_TOKEN
} else {
    npx vercel --prod --yes
}
if ($LASTEXITCODE -ne 0) {
    Write-Host "NG: Run 'npx vercel login' or set VERCEL_TOKEN" -ForegroundColor Red
    exit 1
}
Write-Host "`nDone! Check the URL above." -ForegroundColor Green
