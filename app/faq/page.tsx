'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const faqs = [
    {
        question: 'Wie funktioniert eine Autoüberführung?',
        answer: 'Eine Autoüberführung ist ganz einfach: Sie kontaktieren uns, wir erstellen ein Angebot, und nach Ihrer Zustimmung holen wir Ihr Fahrzeug am vereinbarten Ort ab und bringen es zum Zielort. Der Fahrer übernimmt das Fahrzeug persönlich und überführt es sicher auf der Straße.',
    },
    {
        question: 'Wie schnell kann mein Auto überführt werden?',
        answer: 'In der Regel können wir Überführungen innerhalb von 2-5 Werktagen durchführen. Mit unserem Express-Service ist auch eine Überführung innerhalb von 24-48 Stunden möglich (gegen Aufpreis).',
    },
    {
        question: 'Ist mein Fahrzeug versichert?',
        answer: 'Ja, alle Fahrzeuge sind während der Überführung vollkaskoversichert bis zu einem Betrag von 500.000€. Bei Luxus- und Oldtimerfahrzeugen kann die Versicherungssumme auf Wunsch erhöht werden.',
    },
    {
        question: 'Was kostet eine Überführung?',
        answer: 'Die Kosten hängen von der Entfernung, dem Fahrzeugtyp und dem gewünschten Service ab. Als Richtwert: PKW-Überführungen kosten ca. 0,80€ - 1,50€ pro Kilometer. Fordern Sie ein kostenloses Angebot an für einen genauen Preis.',
    },
    {
        question: 'Welche Zahlungsmethoden akzeptieren Sie?',
        answer: 'Wir akzeptieren Überweisung, PayPal und Barzahlung. Firmenkunden können auch auf Rechnung zahlen. Die Zahlung erfolgt in der Regel nach erfolgreicher Überführung.',
    },
    {
        question: 'Kann ich den Fahrer tracken?',
        answer: 'Ja, Sie erhalten eine Kontaktnummer des Fahrers und können jederzeit den Status der Überführung erfragen. Bei Bedarf teilen wir Ihnen auch die voraussichtliche Ankunftszeit mit.',
    },
    {
        question: 'Was passiert bei einem Schaden?',
        answer: 'Sollte während der Überführung ein Schaden entstehen, greift unsere Vollkaskoversicherung. Der Schaden wird dokumentiert und über die Versicherung reguliert. In unserer langjährigen Geschichte hatten wir jedoch nur sehr selten Schadensfälle.',
    },
    {
        question: 'Führt ihr auch europaweit über?',
        answer: 'Ja, wir bieten Überführungen in alle EU-Länder sowie in die Schweiz und Norwegen an. Bei internationalen Überführungen unterstützen wir Sie auch bei Zollformalitäten.',
    },
    {
        question: 'Gibt es einen Express-Service?',
        answer: 'Ja, unser Express-Service garantiert eine Überführung innerhalb von 24-48 Stunden. Der Aufpreis beträgt 30% auf den Standardpreis. Perfekt für dringende Fälle.',
    },
    {
        question: 'Wie kann ich stornieren?',
        answer: 'Eine Stornierung ist bis 48 Stunden vor dem vereinbarten Abholtermin kostenlos möglich. Bei kurzfristigeren Stornierungen berechnen wir eine Aufwandspauschale von 50€.',
    },
    {
        question: 'Werden auch Motorräder überführt?',
        answer: 'Ja, wir überführen auch Motorräder und andere Zweiräder. Diese werden mit speziellen Anhängern wettergeschützt transportiert und professionell gesichert.',
    },
    {
        question: 'Was ist mit Oldtimern oder Luxusfahrzeugen?',
        answer: 'Oldtimer und Luxusfahrzeuge erhalten bei uns eine besondere Behandlung. Speziell geschulte Fahrer, erhöhter Versicherungsschutz, Fotodokumentation und auf Wunsch auch geschlossener Transport sind möglich.',
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-24 mb-20 mt-48">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8">Häufig gestellte Fragen</h1>
                    <p className="text-xl">Antworten auf die wichtigsten Fragen rund um unsere Autoüberführung</p>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-32 bg-neutral-light">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-light transition-smooth"
                                >
                                    <span className="font-bold text-lg text-primary pr-4">{faq.question}</span>
                                    <span className={`text-2xl text-accent-orange transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                        ↓
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-5 text-neutral-dark leading-relaxed animate-slideUp">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Still have questions? */}
                    <div className="mt-20 text-center bg-white rounded-xl shadow-md p-10">
                        <h3 className="text-2xl font-bold text-primary mb-6">Noch Fragen?</h3>
                        <p className="text-neutral-dark mb-6">
                            Wir helfen Ihnen gerne weiter. Kontaktieren Sie uns telefonisch oder per E-Mail.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+4952112345678" className="text-accent-orange font-bold text-xl">
                                +49 (0) 521 / 123 456 78
                            </a>
                            <span className="hidden sm:block text-neutral-dark">|</span>
                            <a href="mailto:info@autodrive-elite.de" className="text-accent-orange font-bold text-xl">
                                info@autodrive-elite.de
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
