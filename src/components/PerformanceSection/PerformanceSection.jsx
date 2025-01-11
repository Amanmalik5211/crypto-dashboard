import "./PerformanceSection.css";
import { BsExclamationCircleFill } from "react-icons/bs";
const PerformanceSection = () => {
  return (
    <div className="performance-container">
      <h2 className="performance-title">Performance</h2>
      <div className="performance-chart">
        <div className="chart-row">
          <div className="low-side">
            <div className="metric-label">Todays Low</div>
            <span className="low-marker">46,930.22</span>
          </div>

          <div className="chart-line">
            <span className="mid-marker">48,637.83</span>

            <div className="high-side">
              <div className="metric-label">Todays High</div>
              <span className="high-marker">49,343.83</span>
            </div>
          </div>
        </div>
        <div className="chart-row">
          <div className="low-side">
            <div className="metric-label">52W Low</div>
            <span className="low-marker">16,930.22</span>
          </div>

          <div className="chart-line">
            <span className="mid-marker">48,637.83</span>
          </div>

          <div className="high-side1">
            <div className="metric-label">52W High</div>
            <span className="high-marker">49,743.83</span>
          </div>
        </div>
      </div>

      <div className="fundamentals-section">
        <h3 className="fundamentals-title">
          Fundamentals <BsExclamationCircleFill />
        </h3>

        <div className="fundamentals-grid">
          <div className="grid1">
            <div className="fundamental-item">
              <span className="fundamental-label">Bitcoin Price</span>
              <span className="fundamental-value">$16,815.46</span>
            </div>
            <div className="fundamental-item">
              <span className="fundamental-label">Market Cap</span>
              <span className="fundamental-value">$323,507,290,047</span>
            </div>
            <div className="fundamental-item">
              <span className="fundamental-label">24h Low / 24h High</span>
              <span className="fundamental-value">$16,382.07 / $16,874.12</span>
            </div>
            <div className="fundamental-item">
              <span className="fundamental-label">Market Cap Dominance</span>
              <span className="fundamental-value">38.343%</span>
            </div>
            <div className="fundamental-item">
              <span className="fundamental-label">7d Low / 7d High</span>
              <span className="fundamental-value">$16,382.07 / $16,874.12</span>
            </div>
          </div>

          <div className="grid2">
            <div className="fundamental-item">
              <span className="fundamental-label">Volume / Market Cap</span>
              <span className="fundamental-value">0.0718</span>
            </div>
            <div className="fundamental-item">
              <span className="fundamental-label">Trading Volume</span>
              <span className="fundamental-value">$23,249,202,782</span>
            </div>
            <div className="fundamental-item">
              <span className="fundamental-label">All-Time High</span>
              <span className="fundamental-valuehigh">$69,044.77</span>
              <span className="negative">-75.6%</span>
            </div>
            <div className="fundamental-item">
              <span className="fundamental-label">Market Cap Rank</span>
              <span className="fundamental-value">#1</span>
            </div>
            <div className="fundamental-item">
              <span className="fundamental-label">All-Time Low</span>
              <span className="fundamental-valuelow">$67.81</span>
              <span className="positive">+24,729.1%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
