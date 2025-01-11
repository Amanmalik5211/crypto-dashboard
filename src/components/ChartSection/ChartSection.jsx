import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBitcoinData } from "../../utils/api";
import "./ChartSection.css";

const ChartSection = () => {
  const { coinId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBitcoinData();
      setData(result.bitcoin);
    };
    fetchData();
  }, [coinId]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="chart-section">
      <div className="name">
        <h1 className="chart-title">
          {coinId ? coinId.toUpperCase() : "Bitcoin"}
        </h1>
        <h2 className="btc">BTC</h2>
        <div className="rank">Rank #1</div>
      </div>

      <div className="price-container">
        <span className="price">${data.usd}</span>
        <div className="change-main">
          <div className="change-container">
            <span className="change">{data.usd_24h_change.toFixed(2)}%</span>
          </div>
          <span className="h24">(24H)</span>
        </div>
      </div>

      <span className="price1">₹{data.inr}</span>

      <iframe
        className="chart-iframe"
        src={`https://s.tradingview.com/embed-widget/advanced-chart/?locale=en#%7B%22symbol%22%3A%22BINANCE%3A${
          coinId ? coinId.toUpperCase() : "BTC"
        }USD%22%7D`}
        width="100%"
        height="500"
        title="TradingView Chart"
      ></iframe>
    </div>
  );
};

export default ChartSection;
