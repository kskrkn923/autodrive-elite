interface TestimonialCardProps {
    quote: string;
    author: string;
    location: string;
}

export default function TestimonialCard({ quote, author, location }: TestimonialCardProps) {
    return (
        <div className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-accent hover:-translate-y-2 transition-all">
            {/* Quote */}
            <div className="mb-6">
                <svg className="w-8 h-8 text-accent/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>
            <p className="text-neutral-700 italic mb-6 leading-relaxed text-lg font-medium">
                "{quote}"
            </p>

            {/* Author - Company Name */}
            <div className="border-t border-neutral-200 pt-5">
                <p className="font-bold text-neutral-900 text-lg">{author}</p>
                <p className="text-sm text-neutral-600 mt-1">{location}</p>
            </div>
        </div>
    );
}
