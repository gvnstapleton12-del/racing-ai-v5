export default function handler(req, res) {
  res.status(200).json({
    horses: [
      { name: "Horse A", decision: "WIN" },
      { name: "Horse B", decision: "EW" },
      { name: "Horse C", decision: "NO BET" }
    ]
  });
}
