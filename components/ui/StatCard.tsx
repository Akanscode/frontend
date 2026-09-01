interface StatCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
}

export default function StatCard({ label, value, sublabel }: StatCardProps) {
  return (
    <div className="bg-gradient-to-br from-green-700 to-green-900  rounded-lg shadow-lg p-6 flex-1 hover:shadow-xl transition-shadow duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <p className="text-xs uppercase tracking-widest text-muted font-semibold">
          {label}
        </p>
        <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="space-y-2">
        <p className="font-serif text-4xl font-bold text-navy leading-tight">
          {value}
        </p>
        {sublabel && (
          <p className="text-sm text-muted font-medium leading-relaxed">
            {sublabel}
          </p>
        )}
      </div>

      {/* Accent bottom border */}
      <div className="mt-4 pt-4" />
    </div>
  );
}
