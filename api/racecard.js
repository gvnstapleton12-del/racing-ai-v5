let lastOdds = {
  "Horse A": 5.0,
  "Horse B": 3.2,
  "Horse C": 8.0
};

function moveOdds(odds) {
  const change = (Math.random() - 0.5) * 0.6;
  return Math.max(1.1, +(odds + change).toFixed(2));
}

export default function handler(req, res) {
  const horses = Object.keys(lastOdds).map((name) => {
    const oldOdds = lastOdds[name];
    const newOdds = moveOdds(oldOdds);

    lastOdds[name] = newOdds;

    const movement =
      newOdds < oldOdds
        ? "STEAM 🔥"
        : newOdds > oldOdds
        ? "DRIFT 📉"
        : "STABLE ⚖️";

    let decision = "NO BET";

    if (movement === "STEAM 🔥" && newOdds < 5)
      decision = "WIN";

    if (movement === "DRIFT 📉" && newOdds > 6)
      decision = "EW";

    return {
      name,
      odds: newOdds,
      movement,
      decision
    };
  });

  res.status(200).json({ horses });
}
