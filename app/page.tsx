
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<any>(null);

  async function load() {
    const res = await fetch("/api/racecard?course=Bath");
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>V5 Racing AI</h1>

      {data?.horses?.map((h: any, i: number) => (
        <div key={i}>
          <h3>{h.name}</h3>
          <p>{h.decision}</p>
        </div>
      ))}
    </div>
  );
}
