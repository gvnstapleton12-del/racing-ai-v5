let lastOdds = {
  "Horse A": 5.0,
  "Horse B": 3.0,
  "Horse C": 10.0
};

function randomMove(odds) {
  const change = (Math.random() - 0.5) * 0.4;
  return Math.max(1.1, +(odds + change).toFixed(2));
}

export default function handler(req, res) {
  const horses = ["Horse A", "Horse B", "Horse C"];

  const data = horses.map((name) => {
    const oldOdds = lastOdds[name];
    const newOdds = randomMove(oldOdds);

    lastOdds[name] = newOdds;

    const movement =
      newOdds < oldOdds ? "STEAM 🔥" :
      newOdds > oldOdds ? "DRIFT 📉" :
      "STABLE ⚖️";

    let decision = "NO BET";

    if (movement === "STEAM 🔥" && newOdds < 4) decision = "WIN";
    if (movement === "DRIFT 📉" && newOdds > 6) decision = "EW";

    return {
      name,
      odds: newOdds,
      movement,
      decision
    };
  });

  res.status(200).json({ horses: data });
}
