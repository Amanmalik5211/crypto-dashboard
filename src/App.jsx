import Header from "./components/Header/Header";
import ChartSection from "./components/ChartSection/ChartSection";
import PerformanceSection from "./components/PerformanceSection/PerformanceSection";
import SentimentSection from "./components/SentimentSection/SentimentSection";
import AboutSection from "./components/AboutSection/AboutSection";
import YouMayAlsoLike from "./components/YouMayAlsoLike/YouMayAlsoLike";
import CryptoBreadcrumb from "./components/CryptoBreadcrumb/CryptoBreadcrumb";
import Bar from "./components/Bar/Bar";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import TeamSection from "./components/TeamSection/TeamSection";
import KoinXSection from "./components/KoinXSection/KoinXSection";
const App = () => {
  return (
    <>
      <Header />
      <CryptoBreadcrumb />
      <ChartSection />
      <Bar />
      <PerformanceSection />
      <SentimentSection />
      <AboutSection />
      <Tokenomics />
      <TeamSection />
      <YouMayAlsoLike />
      <KoinXSection />
    </>
  );
};

export default App;
