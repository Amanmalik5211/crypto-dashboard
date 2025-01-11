import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getBitcoinData = async () => {
  const { data } = await axios.get(`${BASE_URL}/simple/price`, {
    params: {
      ids: "bitcoin",
      vs_currencies: "usd,inr",
      include_24hr_change: true,
    },
  });
  return data;
};

export const getTrendingCoins = async () => {
  const { data } = await axios.get(`${BASE_URL}/search/trending`);
  return data.coins;
};

export const getCoinDetails = async (coinId) => {
  const { data } = await axios.get(`${BASE_URL}/coins/${coinId}`);
  return data;
};
