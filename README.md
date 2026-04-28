# YUAN v3 加密貨幣分析系統

## 使用方式
1. 直接用瀏覽器開啟 `index.html`
2. 或部署到 GitHub Pages 後用手機/電腦訪問

## 功能
- 30個幣種 × 5個週期（5m/15m/1h/4h/1d）全自動掃描
- PA主要分析 + SMC次要分析 + 賽克斯策略
- WaveTrend + OBV + Squeeze + MFI 多指標信心堆疊
- 模擬交易完整記錄（開倉/平倉/損益/歷史）
- ML自動學習（平倉後自動更新模型）
- Service Worker 背景持續掃描
- 電腦+手機響應式設計
- 所有數據存在本機 localStorage，刷新不丟失

## 部署到 GitHub Pages
1. 上傳 `index.html` 和 `sw.js` 到 repository
2. Settings → Pages → main branch
3. 訪問 `https://你的帳號.github.io/倉庫名稱/`
