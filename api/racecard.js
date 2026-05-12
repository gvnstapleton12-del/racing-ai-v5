const racecards = {
  Lingfield: [
    {
      name: "Rapid Thunder",
      time: "17:15",
      odds: 4.2,
      movement: "STEAM 🔥",
      decision: "WIN"
    }
  ],

  Bath: [
    {
      name: "Fast Spirit",
      time: "14:20",
      odds: 5.1,
      movement: "STEAM 🔥",
      decision: "WIN"
    }
  ],

  Beverley: [
    {
      name: "Northern Star",
      time: "14:30",
      odds: 3.9,
      movement: "STEAM 🔥",
      decision: "WIN"
    }
  ],

  Hereford: [
    {
      name: "Jump Master",
      time: "16:10",
      odds: 6.5,
      movement: "DRIFT 📉",
      decision: "EW"
    }
  ]
};

export default function handler(req, res) {
  const { course = "Bath" } = req.query;

  res.status(200).json({
    horses: racecards[course] || []
  });
}
