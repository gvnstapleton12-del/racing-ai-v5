"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [course, setCourse] = useState("Bath");
  const [data, setData] = useState<any>(null);

  async function load() {
    const res = await fetch(`/api/racecard?course=${course}`);
    const json = await res.json();
    setData(json);
  }

  // LIVE REFRESH (V5 CORE FEATURE)
  useEffect(() => {
    load();

    const interval = setInterval(() => {
      load();
    }, 10000);

    return () => clearInterval(interval);
  }, [course]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🚀 V5 Racing AI Live Dashboard</h1>

      <input
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Enter course"
      />

      <button onClick={load}>Refresh Now</button>

      <h2>📊 Signals</h2>

      {data?.horses?.map((h: any, i: number) => (
        <div key={i} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{h.name}</h3>
          <p><b>Decision:</b> {h.decision}</p>
          <p><b>Confidence:</b> {h.confidence}%</p>
          <p><b>Verdict:</b> {h.verdict}</p>
        </div>
      ))}
    </div>
  );
}
