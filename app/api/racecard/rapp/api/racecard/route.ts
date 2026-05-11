export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const course = searchParams.get("course");

  // MOCK DATA (replace later with real odds API)
  const horses = [
    {
      name: "Horse A",
      confidence: 85,
      decision: "WIN",
      verdict: "Strong edge + value alignment"
    },
    {
      name: "Horse B",
      confidence: 72,
      decision: "EW",
      verdict: "Place profile + partial value"
    },
    {
      name: "Horse C",
      confidence: 55,
      decision: "NO BET",
      verdict: "No edge detected"
    }
  ];

  return Response.json({
    course,
    timestamp: Date.now(),
    horses
  });
}
