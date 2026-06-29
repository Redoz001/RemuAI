import { useEffect, useState } from "react";

const SUPABASE_URL = "https://qdhlieifzibzhzdtqlrz.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkaGxpZWlmemliemh6ZHRxbHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2Njc0NDgsImV4cCI6MjA5NjI0MzQ0OH0.PmBUGijOhn5xKyfqUnOQn0SQmBTM9MApq49Op9RXTzM";

export default function ReuAgents() {
  const [agents, setAgents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  // Load agents (ONLY this product’s agents)
  useEffect(() => {
    fetch(`${SUPABASE_URL}/rest/v1/agents?select=*`, {
      headers: {
        apikey: ANON_KEY,
        Authorization: `Bearer ${ANON_KEY}`,
      },
    })
      .then((res) => res.json())
      .then(setAgents);
  }, []);

  // Run agent (core product engine)
  async function runAgent() {
    if (!selected) return alert("Select an agent");

    setLoading(true);
    setOutput("");

    const res = await fetch(
      `${SUPABASE_URL}/functions/v1/run-agent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: ANON_KEY,
          Authorization: `Bearer ${ANON_KEY}`,
        },
        body: JSON.stringify({
          agentId: selected,
          input,
        }),
      }
    );

    const data = await res.json();

    setOutput(data.output);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">ReuAgents</h1>
        <p className="text-gray-400 mt-2">
          AI Employees that work for your business 24/7
        </p>
      </div>

      {/* AGENTS LIST */}
      <div className="flex gap-3 flex-wrap mb-6">
        {agents.map((agent) => (
          <button
            key={agent.id}
            onClick={() => setSelected(agent.id)}
            className={`px-4 py-2 rounded-xl border ${
              selected === agent.id
                ? "bg-violet-600 border-violet-400"
                : "bg-white/5 border-white/10"
            }`}
          >
            {agent.name}
          </button>
        ))}
      </div>

      {/* INPUT */}
      <textarea
        className="w-full p-4 rounded-xl text-black mb-4"
        rows={5}
        placeholder="Give task to your AI employee..."
        onChange={(e) => setInput(e.target.value)}
      />

      {/* RUN BUTTON */}
      <button
        onClick={runAgent}
        className="px-6 py-3 bg-violet-600 rounded-xl"
      >
        {loading ? "Running..." : "Run Agent"}
      </button>

      {/* OUTPUT */}
      {output && (
        <div className="mt-8 p-5 bg-white/5 rounded-xl border border-white/10">
          <h2 className="font-semibold mb-2">Agent Output</h2>
          <pre className="whitespace-pre-wrap text-gray-300">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}