import { Star, Phone, Video, Shield } from "lucide-react";

export default function ProviderCard({ provider, selected, onClick }) {
  const { name, role, specialties, rating, verified } = provider;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-all ${
        selected
          ? "border-indigo-500 bg-indigo-50/60"
          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">
        <div className="flex h-full w-full items-center justify-center text-sm font-semibold">
          {initials}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1">
          <p className="truncate text-sm font-medium text-gray-900">{name}</p>
          {verified && <Shield className="h-3.5 w-3.5 text-indigo-500" />}
        </div>
        <p className="truncate text-xs text-gray-500">{role} • {specialties.join(", ")}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="flex items-center gap-1 text-xs text-amber-600">
            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            {rating.toFixed(1)}
          </span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="text-xs text-gray-500">Available today</span>
        </div>
      </div>
      <div className="hidden items-center gap-2 sm:flex">
        <span className="rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-700 group-hover:border-gray-300">
          <Phone className="mr-1 inline h-3.5 w-3.5" /> Call
        </span>
        <span className="rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-700 group-hover:border-gray-300">
          <Video className="mr-1 inline h-3.5 w-3.5" /> Video
        </span>
      </div>
    </button>
  );
}
