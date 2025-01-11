import "./KoinXSection.css";
import KoinXImage from "../../assets/koinx-image.png";

const KoinXSection = () => {
  return (
    <div className="section-container">
      <div className="koinx-card">
        <h1>Get Started with KoinX for FREE</h1>
        <p>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img
          src={KoinXImage}
          alt="KoinX Illustration"
          className="koinx-image"
        />
        <button className="cta-button">Get Started for FREE →</button>
      </div>
      <div className="trending-coins">
        <h3>Trending Coins (24h)</h3>
        <div className="coin">
          <img
            src="https://s3-alpha-sig.figma.com/img/4a9e/6a46/259a151d8f4b57ef69a986f5ab3b5692?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVYpucYm8P~rFlPoDsXH-XxbhzcKj5LVY2t-~sZIgo2m1X8T2DPMjqaF66a6-0MWU3Xtk4uGku46gCK~Q063lGMXhW8IOO5WKmtUHTdP~g0LLWq-JaMldqw-b6dzsXAiPfTUTBrDRAR0l0u51RgDsYE6Sb2bmYjWwjCyLONaRBfLz8Jhp83FaTJ6fJVPP5nvGRcqtwU2eCwrZPIRTuSYm-1PZ5ELZOZDGoGY69M4MBMHF1ZA~MczVe5ZuSi52euySPY1qX1i19z4HIdWgR~pYBU4ElyvsqJwhOwWLDKswoMnTihavFerJDyfHew7Zk6HUmhqWOgfqiNA0vGlhX69WQ__"
            className="image"
          />
          <span className="name2">Ethereum (ETH)</span>
          <span className="positive">▲ 8.21%</span>
        </div>
        <div className="coin">
          <img
            src="https://s3-alpha-sig.figma.com/img/cf97/751d/efc707b3d15db28e8fc47c0cec22ea3e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MYvwfpj~eGC3nAZO5c8fEwyPjo2zVhEvqaqm359-aRSsLZfrtW4Fufth3N4N56czrj9I4wjdx04CrvHtVbjXPUYJXzSvEeZMw9rv-GfuqdlZws2birZ48k6kEuWN22k9hclNxymV1MPebY9sOMYq3RVQq0kOpfU4zoUnUK7c65ZlY5JB60r4cwPoN-rAGXG1HkrlyFVDgrZ1Upjt2m2WOyfT0~kkHF8c0s-hZa6N0El9Jln3CpzBNGVwr6xyG2amVrfyWXqv0kTBNkj8YxrpO4y58jJagk2tgWB49go9i4-QtO7dlqfvcfZoNH75ZYmCCtDJbB0dgshcSdnufqB8gw__"
            alt="img"
            className="image"
          />
          <span className="name1">Bitcoin (BTC)</span>
          <span className="positive">▲ 5.26%</span>
        </div>
        <div className="coin">
          <img
            src="https://s3-alpha-sig.figma.com/img/d67c/064b/b3b50c8a13e8db10c3f4c13a7308ac89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3IK~8~hB-y7VZtCjNO4MayCGgIuqDssG0TMllketqJDFjYT~bIcZohObY~EmskcOuVWyhySGyBG2v39U1RmK9zKG53nH-B39Hu72TPHs8QxCOysrc1IKbIuFi20SakCDAq79ffu6-ths3GO5w8dMbIxfje30MRY8h2ok18IQDFqRezQW1VMEzo2hWLCnsYGjooe7iqwhDFErAJb4WTiwz0G1NlxyEMLBkLjIVSkiUL9eu4DOYAWFQuwZCfz22UzS2TXkIBnmXK9fm3qJpMNgqDBP6-zD2mQK0JU7whjxc1Etmxxx2dTPml924N5KYQWGObUN~EZjLeaunRJDfOkzg__"
            className="image"
          />
          <span className="name2">Polygon (MATIC)</span>
          <span className="positive">▲ 4.32%</span>
        </div>
      </div>
    </div>
  );
};

export default KoinXSection;
