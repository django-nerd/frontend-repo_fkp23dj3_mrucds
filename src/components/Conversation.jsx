import { useEffect, useRef } from "react";
import { Send } from "lucide-react";

export default function Conversation({ messages, onSend }) {
  const inputRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSubmit(e) {
    e.preventDefault();
    const text = inputRef.current?.value?.trim();
    if (!text) return;
    onSend(text);
    inputRef.current.value = "";
  }

  return (
    <div className="flex h-full flex-col">
      <div ref={scrollerRef} className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="grid h-full place-items-center text-center text-sm text-gray-500">
            <p>Start a conversation with your provider. Your messages are private and secure.</p>
          </div>
        ) : (
          messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm shadow ${m.from === "me" ? "bg-indigo-600 text-white" : "bg-white text-gray-900 border border-gray-200"}`}>
                {m.text}
                <div className="mt-1 text-[10px] opacity-70">{new Date(m.at).toLocaleTimeString()}</div>
              </div>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSubmit} className="border-t bg-white p-3">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Write a message..."
            className="flex-1 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-indigo-500 placeholder:text-gray-400 focus:ring-2"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 active:translate-y-px"
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
