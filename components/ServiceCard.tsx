import { TruckIcon, BuildingOffice2Icon, GlobeAltIcon, BoltIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
    iconType: 'truck' | 'building' | 'globe' | 'bolt' | 'shield' | 'users';
    title: string;
    description: string;
    className?: string;
}

const iconMap = {
    truck: TruckIcon,
    building: BuildingOffice2Icon,
    globe: GlobeAltIcon,
    bolt: BoltIcon,
    shield: TruckIcon, // placeholder
    users: BuildingOffice2Icon, // placeholder
};

export default function ServiceCard({ iconType, title, description, className = '' }: ServiceCardProps) {
    const Icon = iconMap[iconType];

    return (
        <div className={`bg-white border border-neutral-200 rounded-xl p-10 shadow-sm hover:shadow-lg hover:border-accent transition-smooth hover:-translate-y-1 ${className}`}>
            <div className="mb-6">
                <Icon className="w-14 h-14 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">{title}</h3>
            <p className="text-neutral-600 leading-relaxed">{description}</p>
        </div>
    );
}
