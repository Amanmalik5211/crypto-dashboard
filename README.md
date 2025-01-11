# Crypto Dashboard

A responsive cryptocurrency dashboard built using React.js, showcasing Bitcoin price data, trending coins, and additional related features using APIs from Coingecko and TradingView.

---

## Features

- **Bitcoin Price Display**: Real-time Bitcoin price in USD and INR, along with 24-hour percentage changes fetched via Coingecko's `/simple/price` API.
- **Trending Coins Section**: Display of top 3 trending coins using Coingecko's `/search/trending` API, including name, logo, symbol, and a price chart.
- **"You May Also Like" Section**: Horizontally scrollable carousel of trending coins, displaying logos, prices, percentage changes, and sparkline graphs from the API response.
- **Responsive Design**: Fully responsive layout following a modern Figma design for seamless display across devices.
- **Embedded Advanced Chart**: Integration of TradingView's Advanced Chart Widget for Bitcoin price charts to visualize Bitcoin trends interactively.

---

## Tech Stack

- **Frontend Framework**: React.js (with Vite for setup for better performance and faster development)
- **API Integration**: Axios for fetching data from Coingecko APIs
- **Carousel**: Swiper.js for horizontal scrolling of trending coins
- **Deployment**: Hosted using Vercel for fast and reliable performance

---

## Setup Instructions

Follow these steps to set up and run the project:

### Clone the repository:
```bash
git clone https://github.com/Amanmalik5211/crypto-dashboard.git
cd crypto-dashboard

Install dependencies:
npm install

Start the development server:
npm run dev

