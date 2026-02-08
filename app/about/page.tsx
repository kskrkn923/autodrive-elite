import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Über Uns | AutoDrive Elite',
    description: 'Erfahren Sie mehr über AutoDrive Elite - Ihr vertrauenswürdiger Partner für professionelle Autoüberführungen in Deutschland und Europa.',
};

export default function AboutPage() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-32 mb-24 mt-48">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8">Über Uns</h1>
                    <p className="text-xl">Ihr vertrauenswürdiger Partner für professionelle Autoüberführungen</p>
                </div>
            </section>

            {/* Company History */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-primary mb-16">Unsere Geschichte</h2>
                            <p className="text-neutral-dark leading-relaxed mb-8">
                                AutoDrive Elite ist ein aufstrebendes Unternehmen im Bereich der professionellen Fahrzeugüberführung.
                                Mit modernster Technologie und einem engagierten Team haben wir uns zum Ziel gesetzt, den Standard
                                für Autoüberführungen in Deutschland neu zu definieren.
                            </p>
                            <p className="text-neutral-dark leading-relaxed mb-8">
                                Was uns auszeichnet, ist unser digitaler Ansatz: Transparente Prozesse, schnelle Kommunikation
                                und höchste Qualitätsstandards. Wir verbinden traditionelle Zuverlässigkeit mit moderner Technologie.
                            </p>
                            <p className="text-neutral-dark leading-relaxed mb-8">
                                Unser Team besteht aus erfahrenen Fahrern und Logistikexperten, die jeden Tag daran arbeiten,
                                Ihre Fahrzeuge sicher und pünktlich ans Ziel zu bringen.
                            </p>
                        </div>
                        <div className="bg-neutral-light rounded-2xl p-16 text-center">
                            <div className="text-8xl mb-6">🚗</div>
                            <h3 className="text-2xl font-bold text-primary mb-8">Unsere Mission</h3>
                            <p className="text-neutral-dark">
                                Professionelle, zuverlässige und kundenorientierte Fahrzeugüberführungen mit höchsten Qualitätsstandards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-32 bg-neutral-light">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-4xl font-bold text-primary text-center mb-20">Unsere Werte</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white rounded-xl p-10 text-center shadow-md">
                            <div className="text-5xl mb-4">✓</div>
                            <h3 className="text-2xl font-bold text-primary mb-6">Zuverlässigkeit</h3>
                            <p className="text-neutral-dark">
                                Pünktliche Abholung und Zustellung sind für uns selbstverständlich.
                                Wir halten unsere Versprechen.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-8 text-center shadow-md">
                            <div className="text-5xl mb-4">💎</div>
                            <h3 className="text-2xl font-bold text-primary mb-6">Professionalität</h3>
                            <p className="text-neutral-dark">
                                Geschulte Fahrer, moderne Fahrzeugflotte und höchste Standards bei
                                jedem Auftrag.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-8 text-center shadow-md">
                            <div className="text-5xl mb-4">❤️</div>
                            <h3 className="text-2xl font-bold text-primary mb-6">Kundenzufriedenheit</h3>
                            <p className="text-neutral-dark">
                                Ihre Zufriedenheit ist unser Erfolg. Wir gehen die Extra-Meile
                                für unsere Kunden.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insurance & Certificates */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-4xl font-bold text-primary text-center mb-20">Versicherung & Zertifikate</h2>
                    <div className="bg-neutral-light rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                                    <span className="text-3xl">🛡️</span>
                                    Vollkasko-Versicherung
                                </h3>
                                <p className="text-neutral-dark leading-relaxed mb-4">
                                    Alle Fahrzeuge sind während der Überführung vollkaskoversichert bis zu einem
                                    Betrag von 500.000€. Dies deckt alle Schäden ab, die während des Transports
                                    entstehen können.
                                </p>
                                <ul className="space-y-2 text-neutral-dark">
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent-orange">✓</span>
                                        Deckung bis 500.000€
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent-orange">✓</span>
                                        Keine Selbstbeteiligung
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent-orange">✓</span>
                                        24/7 Schadensmeldung
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                                    <span className="text-3xl">📜</span>
                                    Zertifizierungen
                                </h3>
                                <p className="text-neutral-dark leading-relaxed mb-4">
                                    Unser Unternehmen und alle Fahrer erfüllen höchste Qualitäts- und
                                    Sicherheitsstandards:
                                </p>
                                <ul className="space-y-2 text-neutral-dark">
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent-orange">✓</span>
                                        Gewerbliche Zulassung
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent-orange">✓</span>
                                        Erfahrene Fahrer mit einwandfreiem Führungszeugnis
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent-orange">✓</span>
                                        DSGVO-konforme Datenverarbeitung
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet */}
            <section className="py-24 bg-neutral-light">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h2 className="text-4xl font-bold text-primary mb-10">Unsere Fahrzeugflotte</h2>
                    <p className="text-xl text-neutral-dark mb-12">
                        Moderne und gepflegte Fahrzeuge für höchste Sicherheit
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8">
                            <div className="text-6xl mb-4">🚗</div>
                            <h3 className="text-xl font-bold text-primary mb-2">Eigene Fahrer</h3>
                            <p className="text-neutral-dark">
                                Alle Fahrer sind fest angestellt und speziell geschult
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-8">
                            <div className="text-6xl mb-4">🔧</div>
                            <h3 className="text-xl font-bold text-primary mb-2">Moderne Ausstattung</h3>
                            <p className="text-neutral-dark">
                                Regelmäßige Wartung und modernste Fahrzeugtechnik
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-8">
                            <div className="text-6xl mb-4">📱</div>
                            <h3 className="text-xl font-bold text-primary mb-2">Digital vernetzt</h3>
                            <p className="text-neutral-dark">
                                GPS-Tracking und ständige Erreichbarkeit
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
