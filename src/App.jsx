import { useMemo, useState } from "react";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import ProviderInfo from "./components/ProviderInfo";
import Conversation from "./components/Conversation";

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);

  const title = useMemo(
    () => (selected ? `${selected.name}` : "CareConnect"),
    [selected]
  );

  function handleSelect(provider) {
    setSelected(provider);
    setMessages([]);
  }

  function handleSend(text) {
    const next = [
      ...messages,
      { from: "me", text, at: Date.now() },
    ];
    // simple simulated provider reply
    const reply = {
      from: "provider",
      text: "Thanks for reaching out. I will get back to you shortly.",
      at: Date.now() + 500,
    };
    setMessages(next);
    setTimeout(() => setMessages((m) => [...m, reply]), 600);
  }

  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-indigo-50 via-white to-violet-50 text-gray-900">
      <TopBar title={title} onSearch={setQuery} />

      <main className="mx-auto grid h-[calc(100vh-4rem)] w-full max-w-7xl grid-cols-1 overflow-hidden rounded-xl border bg-white shadow-lg sm:grid-cols-[380px_1fr]">
        <Sidebar query={query} selectedId={selected?.id} onSelect={handleSelect} />
        <section className="flex h-full flex-col">
          <ProviderInfo provider={selected} />
          <div className="flex-1 bg-gray-50">
            <Conversation messages={messages} onSend={handleSend} />
          </div>
        </section>
      </main>
    </div>
  );
}
