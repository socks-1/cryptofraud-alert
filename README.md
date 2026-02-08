# 🚨 CryptoFraud Alert

**Weekly Intelligence Brief on Cryptocurrency Exchange Security & Market Manipulation**

**🌐 Live at: https://socks-1.github.io/cryptofraud-alert/**

Built with [DN Institute Product Kit Template](https://github.com/1712n/product-kit-template) for the [$500 AI Product Challenge](https://github.com/1712n/dn-institute/issues/489).

## 🎯 What It Does

CryptoFraud Alert is a **weekly intelligence dashboard** that monitors and reports on:

- 🔐 **Exchange Security Breaches** - Hacks, data leaks, vulnerabilities
- 💰 **Market Manipulation** - Wash trading, pump-and-dumps, fake volume
- 🚫 **Exit Scams** - Fraudulent exchanges disappearing with user funds
- ⚖️ **Regulatory Actions** - Warnings and enforcement against unlicensed exchanges
- ⚡ **Flash Loan Attacks** - DeFi protocol exploits

## 🌟 Features

- **Real-time Severity Tracking** - Visual stats showing critical/high-risk alerts
- **Color-Coded Alerts** - Critical (red), High (orange), Medium (yellow)
- **Entity Tags** - Quick identification of affected exchanges/protocols
- **Source Links** - Direct access to original reports and evidence
- **Weekly Auto-Updates** - Fresh data every Sunday via GitHub Actions
- **Mobile-Responsive** - Clean dark theme optimized for all devices

## 🛠️ Technical Architecture

### Data Pipeline
```
CPW API (RapidAPI)
    ↓
scripts/api-call.js (fetch & filter)
    ↓
data/events.json (structured storage)
    ↓
index.html + app.js (visualization)
    ↓
GitHub Pages (public dashboard)
```

### Stack
- **Backend**: Node.js + CPW API for threat intelligence
- **Frontend**: Vanilla HTML/CSS/JS (no frameworks - fast load times)
- **Automation**: GitHub Actions (weekly cron + manual trigger)
- **Hosting**: GitHub Pages (free, reliable, CDN)

## 🚀 Setup & Deployment

### Prerequisites
- GitHub account
- RapidAPI account with [CPW API subscription](https://rapidapi.com/CPWatch/api/cpw-tracker) (Free tier: 100 requests/month)

### Installation

1. **Fork this repository** or use as template

2. **Add API Key**
   - Go to repository Settings → Secrets and variables → Actions
   - Add secret: `RAPIDAPI_KEY` = your CPW API key

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`

4. **Trigger first update**
   - Go to Actions → Deploy Product → Run workflow
   - This will fetch initial data and deploy the site

### Customization

Edit monitoring parameters in `scripts/api-call.js`:

```javascript
// Currently tracking:
entities: "cryptocurrency exchanges"
topic: "security breach, hack, fraud, exit scam, manipulation"
startTime: last 7 days
```

Modify `style.css` for theme customization:
```css
--accent-red: #ff3860;    /* Critical alerts */
--accent-orange: #ff9800; /* High-risk alerts */
--accent-yellow: #ffc107; /* Medium alerts */
```

## 📊 Why This Matters

**For Traders & Investors:**
- Avoid exchanges with security issues
- Detect manipulation before depositing funds
- Stay informed on emerging threats

**For Researchers:**
- Historical data on exchange incidents
- Pattern recognition across fraud types
- Evidence-backed market analysis

**For the Industry:**
- Transparency drives better security practices
- Public accountability for exchanges
- Data-driven regulatory discussions

## 🔄 Update Schedule

- **Automated**: Every Sunday at 12:00 UTC
- **Manual**: Trigger via Actions tab anytime
- **Data Retention**: All historical alerts preserved in git history

## 🏆 Challenge Submission

This product was built for the [DN Institute Challenge Program](https://github.com/1712n/dn-institute/issues/489) demonstrating:

1. ✅ **Unique Use Case** - Combines cybersecurity + market manipulation (not just security OR finance)
2. ✅ **Beyond Template** - Custom UI, multi-severity system, entity tagging, professional design
3. ✅ **Real Utility** - Actionable intelligence for traders, researchers, regulators
4. ✅ **Production Ready** - Automated updates, error handling, responsive design
5. ✅ **Domain Expertise** - Built by author of [wash trading analysis](https://github.com/1712n/dn-institute/pull/495) featured in DN Institute

## 📝 License

MIT License - See LICENSE file

## 🙏 Credits

- [DN Institute](https://github.com/1712n/dn-institute) - Challenge program & product kit
- [CPW API](https://rapidapi.com/CPWatch/api/cpw-tracker) - Threat intelligence data
- Inspired by [CyberWatch](https://1712n.github.io/cyberwatch/) but with crypto-specific focus

---

**⚠️ Disclaimer**: This tool is for informational purposes only. Always conduct your own research before trading or investing in cryptocurrencies.