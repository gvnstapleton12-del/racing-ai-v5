import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  async function load() {
    const res = await fetch("/api/racecard");
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>V5 Racing AI (Stable Mode)</h1>

      {data?.horses?.map((h, i) => (
        <div key={i} style={{ margin: 10 }}>
          <h3>{h.name}</h3>
          <p>{h.decision}</p>
        </div>
      ))}
    </div>
  );
}
