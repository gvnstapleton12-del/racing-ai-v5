import { useEffect, useState } from "react";

export default function Home() {
  const [horses, setHorses] = useState([]);

  async function loadData() {
    try {
      const res = await fetch(`/api/racecard?course=${course}`);
      const data = await res.json();

      setHorses(data.horses || []);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();

    const interval = setInterval(() => {
      loadData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🏇 V5 Racing AI Live</h1>

      {horses.map((h, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: 12,
            marginBottom: 12,
            borderRadius: 10
          }}
        >
          <h2>{h.name}</h2>

          <p><b>Odds:</b> {h.odds}</p>

          <p><b>Movement:</b> {h.movement}</p>

          <p><b>Decision:</b> {h.decision}</p>
        </div>
      ))}
    </div>
  );
}
