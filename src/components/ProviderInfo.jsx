import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function ProviderInfo({ provider }) {
  if (!provider) return (
    <div className="border-b bg-white px-4 py-3">
      <p className="text-sm text-gray-600">Select a provider to view details and start a conversation.</p>
    </div>
  );

  return (
    <div className="border-b bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">
          <div className="flex h-full w-full items-center justify-center text-sm font-semibold">
            {provider.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </div>
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-gray-900">{provider.name}</h3>
          <p className="truncate text-xs text-gray-500">{provider.role} • {provider.specialties.join(", ")}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-600">
        <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> New patients</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Responds in ~1h</span>
        <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Virtual & In-person</span>
      </div>
    </div>
  );
}
