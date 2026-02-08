interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
    const baseStyles = 'bg-white border border-neutral-200 rounded-xl p-8 shadow-sm transition-smooth';
    const hoverStyles = hover ? 'hover:shadow-lg hover:border-accent hover:-translate-y-1' : '';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
}
