# BEM Chatting Platform - Demo Script

Write-Host "=== BEM Chatting Platform Demo ===" -ForegroundColor Cyan
Write-Host ""

# Check if the development server is running
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -Method GET -TimeoutSec 5 -ErrorAction Stop
    Write-Host "✓ Development server is running on http://localhost:3000" -ForegroundColor Green
} catch {
    Write-Host "✗ Development server is not running. Please run 'pnpm dev' first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== Testing Database Connection ===" -ForegroundColor Yellow

try {
    $testResult = Invoke-RestMethod -Uri "http://localhost:3000/api/test" -Method GET -ErrorAction Stop
    Write-Host "✓ MongoDB connection: $($testResult.status)" -ForegroundColor Green
    Write-Host "✓ Current user count: $($testResult.userCount)" -ForegroundColor Green
} catch {
    Write-Host "✗ Database connection failed" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Write-Host ""
Write-Host "=== Demo Users ===" -ForegroundColor Yellow
Write-Host "You can use these accounts to test the application:" -ForegroundColor White
Write-Host ""
Write-Host "1. Email: test@example.com" -ForegroundColor Cyan
Write-Host "   Password: password123" -ForegroundColor Cyan
Write-Host "   Name: Test User" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Email: bem@example.com" -ForegroundColor Cyan
Write-Host "   Password: password123" -ForegroundColor Cyan
Write-Host "   Name: BEM Koordinator" -ForegroundColor Cyan
Write-Host ""

Write-Host "=== Application Features ===" -ForegroundColor Yellow
Write-Host "✓ Homepage with attractive design" -ForegroundColor Green
Write-Host "✓ User registration and authentication" -ForegroundColor Green
Write-Host "✓ Real-time messaging interface" -ForegroundColor Green
Write-Host "✓ MongoDB integration with user and message models" -ForegroundColor Green
Write-Host "✓ JWT-based authentication" -ForegroundColor Green
Write-Host "✓ Responsive design with Tailwind CSS" -ForegroundColor Green
Write-Host "✓ LocalStorage for persistent login" -ForegroundColor Green
Write-Host ""

Write-Host "=== Access the Application ===" -ForegroundColor Yellow
Write-Host "🌐 Homepage: http://localhost:3000" -ForegroundColor Cyan
Write-Host "🔐 Login: http://localhost:3000/login" -ForegroundColor Cyan
Write-Host "📝 Register: http://localhost:3000/register" -ForegroundColor Cyan
Write-Host "💬 Messages: http://localhost:3000/messages" -ForegroundColor Cyan
Write-Host ""

Write-Host "=== Level Completion Status ===" -ForegroundColor Yellow
Write-Host "✅ Level 1: Eye-catching Homepage ✓" -ForegroundColor Green
Write-Host "✅ Level 2: Messaging with React Hooks ✓" -ForegroundColor Green
Write-Host "✅ Level 3: Backend with MongoDB & Authentication ✓" -ForegroundColor Green
Write-Host "✅ Level 4: Frontend-Backend Integration ✓" -ForegroundColor Green
Write-Host ""

Write-Host "Happy chatting! 🎉" -ForegroundColor Magenta
