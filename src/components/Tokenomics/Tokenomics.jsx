import "./Tokenomics.css";

const Tokenomics = () => {
  return (
    <div className="tokenomics-container">
      <h2>Tokenomics</h2>
      <div className="distribution-section">
        <h3>Initial Distribution</h3>
        <div className="chart-container">
          <div className="chart">
            <svg viewBox="0 0 36 36" className="donut-chart">
              <circle
                className="donut-segment"
                cx="18"
                cy="18"
                r="15.915"
                fill="transparent"
                stroke="#007bff"
                strokeWidth="3.2"
                strokeDasharray="80 20"
                strokeDashoffset="0"
              />
              <circle
                className="donut-segment"
                cx="18"
                cy="18"
                r="15.915"
                fill="transparent"
                stroke="#ffa500"
                strokeWidth="3.2"
                strokeDasharray="20 80"
                strokeDashoffset="-80"
              />
            </svg>
          </div>
          <ul className="legend">
            <li>
              <span className="dot blue"></span> Crowdsale investors: 80%
            </li>
            <li>
              <span className="dot orange"></span> Foundation: 20%
            </li>
          </ul>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
