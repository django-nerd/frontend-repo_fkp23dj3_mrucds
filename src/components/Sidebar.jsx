import ProviderCard from "./ProviderCard";

const sampleProviders = [
  {
    id: 1,
    name: "Dr. Maya Chen",
    role: "Psychiatrist",
    specialties: ["ADHD", "Anxiety"],
    rating: 4.9,
    verified: true,
  },
  {
    id: 2,
    name: "Alex Patel, LMFT",
    role: "Therapist",
    specialties: ["Couples", "CBT"],
    rating: 4.8,
    verified: true,
  },
  {
    id: 3,
    name: "Dr. Omar Williams",
    role: "Pediatrician",
    specialties: ["Adolescent", "Wellness"],
    rating: 4.7,
    verified: false,
  },
  {
    id: 4,
    name: "Sofia Garcia, LCSW",
    role: "Therapist",
    specialties: ["Trauma", "EMDR"],
    rating: 4.9,
    verified: true,
  },
];

export default function Sidebar({ query, selectedId, onSelect }) {
  const filtered = sampleProviders.filter((p) =>
    `${p.name} ${p.role} ${p.specialties.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <aside className="h-full w-full max-w-md border-r bg-white">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="text-sm font-semibold text-gray-900">Providers</h2>
        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
          {filtered.length}
        </span>
      </div>
      <div className="space-y-2 overflow-y-auto p-3">
        {filtered.map((p) => (
          <ProviderCard
            key={p.id}
            provider={p}
            selected={selectedId === p.id}
            onClick={() => onSelect(p)}
          />
        ))}
        {filtered.length === 0 && (
          <div className="grid h-40 place-items-center rounded-lg border border-dashed border-gray-200 text-sm text-gray-500">
            No providers found
          </div>
        )}
      </div>
    </aside>
  );
}
