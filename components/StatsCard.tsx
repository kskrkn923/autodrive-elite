interface StatsCardProps {
    number: string;
    label: string;
    sublabel?: string;
}

export default function StatsCard({ number, label, sublabel }: StatsCardProps) {
    return (
        <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-3">{number}</div>
            <div className="text-lg font-semibold text-neutral-900">{label}</div>
            {sublabel && <div className="text-sm text-neutral-600 mt-1">{sublabel}</div>}
        </div>
    );
}
