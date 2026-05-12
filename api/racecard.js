export default async function handler(req, res) {
  const API_KEY = process.env.ODDS_API_KEY;

  try {
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/horse_racing/odds/?apiKey=${API_KEY}&regions=uk&markets=win_place`
    );

    const data = await response.json();

    const horses = (data[0]?.bookmakers?.[0]?.markets?.[0]?.outcomes || []).map(
      (h) => ({
        name: h.name,
        odds: h.price,
        decision:
          h.price < 3 ? "WIN" :
          h.price < 6 ? "EW" : "NO BET"
      })
    );

    res.status(200).json({ horses });

  } catch (err) {
    res.status(500).json({ error: "Odds fetch failed", horses: [] });
  }
}
