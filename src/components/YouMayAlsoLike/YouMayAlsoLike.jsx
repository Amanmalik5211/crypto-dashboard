import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import "./YouMayAlsoLike.css";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

const YouMayAlsoLike = () => {
  const youMayAlsoLike = [
    {
      id: 1,
      icon: "BNB",
      image:
        "https://s3-alpha-sig.figma.com/img/13a5/15f1/6e5af5c1bcdf1932932541411a092398?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQc-Qb2SAD9KPdbw72o8r6zeiLvYSVxfGg5oH~qTQQN90EQcCZM4pykJvNeIAhKawF8YJdg29QkUm69BQFjBsMCZVNkaPKpgnple5FGtKYIR5EjOB~BdmrmkmFJXOiPzRfBkc~PMf-SO1M1XYvPFjkiJUEnGukN2YxBSUaS9lUJFwT7~HNbAqLUvD4XDrt75KRK4b~YurkYGnFSiz3zgXkwY43dfNmmY4trzsM2a6uaVpxePECOYg05DJavmaaU~yG8dydfzm~eYVgBT6itSee4sFIgH1JxQYo~nlZZ4BM1m8Nm41v3~QrFBmZM0qNaTwy6iyUVuAzEymD141iBD4Q__", // Example image URL
      name: "BNB",
      price: "$319.34",
      change: "+0.52%",
      chartData: [10, 20, 15, 30, 25, 35, 40],
      chartColor: "#16a34a",
    },
    {
      id: 2,
      icon: "SOL",
      image:
        "https://s3-alpha-sig.figma.com/img/f310/5da4/13d2bc1a0b3262c46ce01e3951d0d4d1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FF~jvIINFkB1-E2lQndqphZqkXLbB9j0QZ8nthy8xcFMULwlUDKxs~rgrkbffvovfLuJoNwo3J1gajqNESfcfB7WNabpHH9DPedhuFYuikWmK-dZeUVn7VYORDHgX5QOcmGf7ghYyeWd1pjtOF5sDfIPR-AiaKzh3cv-mj~~FMMo1WcLGDPItij6CFGFRnlKv8G3bzajexp4l1I2LMzeQqCqeV-53ia~82W2X5ESogAWa10ei~Ix~qp-DWHvjQBJFAzU~F8Udv6BM3c7jJQSPdCI4Xondq2LQZK1cAEuT~7X-DQ~WQQKMQkF-QP6VF4hqo93TLiLGaY2ttmheYV2sQ__", // Example image URL
      name: "SOL",
      price: "$109.33",
      change: "-2.89%",
      chartData: [40, 35, 30, 25, 20, 15, 10],
      chartColor: "#dc2626",
    },
    {
      id: 3,
      icon: "XRP",
      image:
        "https://s3-alpha-sig.figma.com/img/2dd4/4090/b8f4a1cbb8e7bb42cf0dcdfa859c7bca?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BCRNVHWPqKT8ddUcPVpzbT2SLtaC~-L1nqpjO0F~ID6IVSe6sdLsKQd34J5VUzSG6Nd5dOVURGEiI0utQKgdu6CJ-AM~IyjDkQ3S29~nj-xFIVRYTsQQVD-MtjoqKi5ltCgNGh3K17u1mpSzf2Hjt079Cp~hRN~h9Cxn1DsLq0Zb7tnXAKYjq3PYcjqfRoIKoPdyy-s4WWjVx6W0eFLUZvIAGrWUqajA6EoQoSiianC~1K2WSF4eXZ6cKUSMgml0pkxM~6brmLBzVgMSElhxQTZoZG9di~mUZNcbdoTd2z8e0OqAftI3c0IuC~b5kZsOl6adYEIIV11T9aY4ooHY1g__", // Example image URL
      name: "XRP",
      price: "$0.634810",
      change: "+0.78%",
      chartData: [5, 10, 8, 15, 12, 18, 22],
      chartColor: "#16a34a",
    },
    {
      id: 4,
      icon: "ADA",
      image:
        "https://s3-alpha-sig.figma.com/img/2885/6437/0cc613d86fcb037533bea3763d0ead24?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NdoIrdK~ki29RYPY-SCNNLruIIH-RoT3IImYyrAp~66UOjGb5I20QIQ3rhPIRmb-EJlxoreMWPK5DwScFfJNO1kj56nS5SM2r4lIqV97pDBaR9k0EG3fiNy4DDb-BJHASZ-wuUwOIP4uAxy-GT-i84WB4TkZHINCjXw3-MSOi~MaPtSJhgOl-mOEubjx-h0-n~hASfUPm-dEaJzvv3tO6584rodZWsrfyFuGcpRQ4myTjDXUAPkLYQYWjFI5NtoQifIdzqENHxvgRA4z2W7dYMdDBUH7WyAhZfnYB93xfrKh9Hq65uozI66BTSZn190V22lfdKe-yfSKaNp4kjpQ6g__", // Example image URL
      name: "ADA",
      price: "$0.614869",
      change: "-1.57%",
      chartData: [30, 25, 28, 20, 22, 18, 15],
      chartColor: "#dc2626",
    },
    {
      id: 5,
      icon: "AVAX",
      image:
        "https://s3-alpha-sig.figma.com/img/6a4b/37ba/b5e526f40c7c847aaf2daf8fd7b3cb9b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ayp8sBwvbbNdzn9FS18o0FydfXx6cAfntg2ueDLABre32DqWWyTZfLFUuXM2pCiKiKjmQs~Ddh4-cqvswNTlOGYLW8UR5il8WWhEwTj0rHqFSao-a642voQbYht6o6bau3vO7Z11Dy0yexllSmMXk2VRTscbNKenAHgoLRdbVzfh8sqp6EhYjA-q~ma-5NLPa36-HKPVup2Qyaj-ZmmBswiX4Og5RTjbmrNyUwYl5SFPzG17oQZavPazZt5lJ6qwbmhq~rHLR6w3MytPuWc14C~SgIGiwg23nzSisH-aZ02xsv7YIpaLs~655TsTcoMIrnuIslt9uBQPzuw5I8wb1w__", // Example image URL
      name: "AVAX",
      price: "$41.05",
      change: "-3.78%",
      chartData: [50, 45, 40, 35, 30, 25, 20],
      chartColor: "#dc2626",
    },
  ];

  const trendingCoins = [
    {
      id: 1,
      icon: "BTC",
      image:
        "https://s3-alpha-sig.figma.com/img/6897/2782/ac48b3852bcfba7d7a6efad748cc1b96?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zyi4fviNU56vwLDbM6BtWKe0daSS3RAvkAeP~UZrfSpgVkmi~-5k~DFi~MooUbvBzhT-BEtG5zlHWqUUDQVmhTR1UeDDHvSvA7A0YQOcqA2Vc7C8m2UVZY6lpXDIxsC6~QGWd3EXcTTMlFdn1aQiu5IFdflqcP4FS~MLi0fCrTyCZKosLxhHKrzQclBdQrLXKLIPUnR0lx-N~-somLlZpBVyvxxhdodmxznUjnI9u~6pLWC~Y8Xx2icFHSOIMP~muqopbNG2i6nVLHkXlWFp1A-GWTsSZqopibjXYONM6UXtRNILPlrxwwcriMO47VL22gZuX1FkaLP9YmgZxmc3KA__", // Example image URL
      name: "BTC",
      price: "$45,332.83",
      change: "+0.10%",
      chartData: [20, 25, 30, 35, 40, 45, 50],
      chartColor: "#16a34a",
    },
    {
      id: 2,
      icon: "ETH",
      image:
        "https://s3-alpha-sig.figma.com/img/4a9e/6a46/259a151d8f4b57ef69a986f5ab3b5692?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVYpucYm8P~rFlPoDsXH-XxbhzcKj5LVY2t-~sZIgo2m1X8T2DPMjqaF66a6-0MWU3Xtk4uGku46gCK~Q063lGMXhW8IOO5WKmtUHTdP~g0LLWq-JaMldqw-b6dzsXAiPfTUTBrDRAR0l0u51RgDsYE6Sb2bmYjWwjCyLONaRBfLz8Jhp83FaTJ6fJVPP5nvGRcqtwU2eCwrZPIRTuSYm-1PZ5ELZOZDGoGY69M4MBMHF1ZA~MczVe5ZuSi52euySPY1qX1i19z4HIdWgR~pYBU4ElyvsqJwhOwWLDKswoMnTihavFerJDyfHew7Zk6HUmhqWOgfqiNA0vGlhX69WQ__", // Example image URL
      name: "ETH",
      price: "$2,375.15",
      change: "-0.21%",
      chartData: [50, 45, 40, 35, 30, 25, 20],
      chartColor: "#dc2626",
    },
    {
      id: 3,
      icon: "stETH",
      image:
        "https://s3-alpha-sig.figma.com/img/bf5e/8b69/5d8d413fcf800983d764b33eea0c480d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUHminexVfxQwzbdfOeesp-Qb1~NFbmHbc1tMB-9MDeBA-1OogWKL~62oV1RbJn29KjcKI~U8qzAQdvFVIe8LcGWJeEd50eZXl4uQVCBDSB5r~G~s0ke7mCZHL6av88K5GTjNLCGGeqruYOBT1VhN-wdiqVEhYg~yZz2EjiaqoGxjSrjm1-nf1wljEZTiZNm1Ax6Y5nWuC-k3oR6PLVarCv1NhtgS-FhUt6RHc0sI6VRqrM5Kq2jTfMsHDFt4SOwjA9erlMJnDIoWIX8qsLRtZv1CqIU6NAZUBYJKMLPCostXi-17V6pysPwwHfj~DM~p-OiSUOrzG38OyYKgRTF3w__", // Example image URL
      name: "stETH",
      price: "$2,371.72",
      change: "-0.34%",
      chartData: [30, 35, 32, 40, 38, 45, 50],
      chartColor: "#dc2626",
    },
    {
      id: 4,
      icon: "UNI",
      image:
        "https://s3-alpha-sig.figma.com/img/359e/efd9/33ee8b63a38fab0991a2cc0c28e397b6?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RiPKb8EGV9e4wLCRBvLkSTPafxaK08Tr6GYHFepM~YraiUCDFXwKd6WTFre4VciDxnyzkuRRXF7FPFoI0xgw9wdjRHI30QL5xSmn8G8YNVAPOHr5RVrtLWStKOYqV4gH~oVYUlcPd62LCqeGd0x4TZPHC1JYMi94k9zXMd5biqrybtlfoMbdakzRgxafiv9rg2ezecvrz1V1vWais-yYCQm5mRWUxrXqXeXhgkVXg4diSY2ZQRWZV89ivvvM08Sv1gQak~ynYSTrFN4v7q63Rl~f9ydhM0xc6Tz6pKcHUdQbqsKNA7AdwZqShsJFNA8gyF~apl-b1cXvwmLdpRpkvg__", // Example image URL
      name: "UNI",
      price: "$7.3192",
      change: "-4.02%",
      chartData: [15, 20, 18, 25, 22, 28, 30],
      chartColor: "#dc2626",
    },
    {
      id: 5,
      icon: "CFG",
      image:
        "https://s3-alpha-sig.figma.com/img/51cb/14d0/31cc16c7bfb0fd3e6a959fa6fce9c5d3?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kcV6H6yoiR7RU7qj~JlM9YmLvAmdyLlrSnuyJ36ncd19qlm-9laX4abwExuK8m2VYBuMytO4EWJ05FvTeSKjMLCgRKjcJmu755U~Rw1FgnXOIJ-tfjIBl6LBSoVV1oL3DDIqj-fPIXSzAmLgarAQk71ZPP5XHB-F4WiGmnCZtrTjQLKtVIFK9eUORVRyCzZE5r5g2fTV1aqMuumX7EIBhYvDiWWPQrxJpwQOWCaIXLagZnejL9~~yrIUPKXL1oR5sXf-e3TpIBMuhIPtK15z2mm7Wc3HzzLGIHCGxEeMeTNY3SbzciuiN7n5F3QfS2QN0VPR-2k3CZQVUS0fmLuUfA__", // Example image URL
      name: "CFG",
      price: "$0.773600",
      change: "-1.76%",
      chartData: [20, 25, 30, 35, 40, 45, 50],
      chartColor: "#16a34a",
    },
  ];

  const renderCard = (coin) => {
    const chartOptions = {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: { display: false },
        y: { display: false },
      },
    };

    const chartData = {
      labels: Array(coin.chartData.length).fill(""),
      datasets: [
        {
          data: coin.chartData,
          borderColor: coin.chartColor,
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    };

    return (
      <div className="crypto-card" key={coin.id}>
        <div className="crypto-icon">
          <img src={coin.image} alt={coin.name} className="img" />
          <span className="crypto-name">{coin.name}</span>
          <span
            className={`crypto-change ${
              coin.change.startsWith("+") ? "positive" : "negative"
            }`}
          >
            {coin.change}
          </span>
        </div>
        <div className="crypto-info">
          <div className="crypto-price">{coin.price}</div>
        </div>
        <div className="crypto-chart">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    );
  };

  return (
    <div className="crypto-list">
      <div className="section">
        <h3>You May Also Like</h3>
        <div className="card-container">{youMayAlsoLike.map(renderCard)}</div>
      </div>

      <div className="section">
        <h3>Trending Coins</h3>
        <div className="card-container">{trendingCoins.map(renderCard)}</div>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
