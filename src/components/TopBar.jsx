import { Search, MessageSquare } from "lucide-react";

export default function TopBar({ title = "CareConnect", onSearch }) {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-white shadow">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-gray-900">
              {title}
            </h1>
          </div>
          <div className="hidden w-full max-w-md items-center gap-2 sm:flex">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors, therapists, specialties..."
                onChange={(e) => onSearch?.(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 outline-none ring-indigo-500 placeholder:text-gray-400 focus:ring-2"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
