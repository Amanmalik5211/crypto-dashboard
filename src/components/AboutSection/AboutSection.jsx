import "./AboutSection.css";
import images from "../../assets/images.jpeg";
import download from "../../assets/download.jpeg";
const AboutSection = () => {
  return (
    <div className="bitcoin-container">
      <section className="about-section">
        <h2>About Bitcoin</h2>

        <div className="section">
          <h3>What is Bitcoin?</h3>
          <p>
            Bitcoin price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 B BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="section">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p>
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Mauris faucibus diam
            mi nunc praesent massa turpis a. Integer dignissim augue viverra
            nulla ut eget lobortis phasellus.
          </p>
          <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis dui ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui.
          </p>
        </div>
      </section>

      <section className="holding-section">
        <h2>Already Holding Bitcoin?</h2>
        <div className="card-container">
          <div className="card card-profits">
            <img src={images} alt="Card Image 1" className="card-image" />
            <div className="">
              <h3>Calculate your Profits</h3>
              <button>Check Now →</button>
            </div>
          </div>
          <div className="card card-tax">
            <img src={download} alt="Card Image" className="card-image" />
            <div className="">
              <h3>Calculate your tax liability</h3>
              <button>Check Now →</button>
            </div>
          </div>
        </div>
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </section>
    </div>
  );
};

export default AboutSection;
