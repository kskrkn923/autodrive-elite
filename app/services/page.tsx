import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { TruckIcon, BuildingOffice2Icon, GlobeAltIcon, BoltIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: 'B2B-Lösungen | AutoDrive Elite',
    description: 'Professionelle Fahrzeugüberführung für Autohändler, Fuhrparks und Importeure. Skalierbare Lösungen, API-Integration und Volumenrabatte.',
};

export default function ServicesPage() {
    const services = [
        {
            id: 'haendler',
            icon: BuildingOffice2Icon,
            title: 'Händler-Überführung',
            description: 'Standortwechsel, Messefahrzeuge und Probefahrten für Autohäuser',
            details: [
                'Deutschlandweite Standortverlagerung',
                'Transport von Messefahrzeugen',
                'Probefahrten-Fahrzeuge abholen',
                'Flexible Terminplanung',
                'Tracking in Echtzeit',
            ],
        },
        {
            id: 'flotten',
            icon: TruckIcon,
            title: 'Flotten-Management',
            description: 'Große Volumina, wiederkehrende Routen und feste Kontingente',
            details: [
                'Volumenrabatte ab 20 Fahrzeugen/Monat',
                'Fest definierte Routen',
                'Rahmenverträge mit garantierten Kapazitäten',
                'Dedizierter Account Manager',
                'Monatliche Reports und Analytics',
            ],
        },
        {
            id: 'import',
            icon: GlobeAltIcon,
            title: 'Import/Export-Logistik',
            description: 'Grenzüberschreitende Logistik mit Zollabwicklung',
            details: [
                'Europäische Überführungen',
                'Zollabwicklung inklusive',
                'Dokumenten-Management',
                'COC-Papiere und Zulassung',
                'Hafenabholung und Terminal-Service',
            ],
        },
        {
            id: 'auktion',
            icon: BoltIcon,
            title: 'Auktions-Service',
            description: 'Direkt-Abholung bei BCA, ATU und mobile.de',
            details: [
                'Abholung bei allen großen Auktionshäusern',
                'Express-Verfügbarkeit innerhalb 24h',
                'Automatische Benachrichtigung bei Zuschlag',
                'API-Integration für Auktionsplattformen',
                'Inspektion vor Ort (optional)',
            ],
        },
    ];

    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-r from-primary to-primary-light text-white py-32 mb-20 mt-48">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8">B2B-Lösungen</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                        Professionelle Fahrzeuglogistik für Autohändler, Fuhrparks und Importeure.
                        Skalierbar, zuverlässig, kosteneffizient.
                    </p>
                </div>
            </section>

            {/* Services Overview Grid */}
            <section className="py-32 bg-neutral-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <a
                                    key={service.id}
                                    href={`#${service.id}`}
                                    className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md hover:border-accent transition-smooth"
                                >
                                    <Icon className="w-12 h-12 text-accent mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                                    <p className="text-neutral-600 text-sm">{service.description}</p>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Detailed Services */}
            {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                return (
                    <section
                        key={service.id}
                        id={service.id}
                        className={`py-40 ${isEven ? 'bg-white' : 'bg-neutral-50'}`}
                    >
                        <div className="container mx-auto px-6">
                            <div className="max-w-5xl mx-auto">
                                <div className="flex items-center gap-4 mb-8">
                                    <Icon className="w-20 h-20 text-accent" />
                                    <div>
                                        <h2 className="text-4xl font-bold text-neutral-900">{service.title}</h2>
                                        <p className="text-lg text-neutral-600 mt-1">{service.description}</p>
                                    </div>
                                </div>

                                <div className="divider"></div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Features List */}
                                    <div>
                                        <h3 className="text-xl font-bold text-neutral-900 mb-4">Leistungen im Detail</h3>
                                        <ul className="space-y-3">
                                            {service.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                                                    <span className="text-neutral-600">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Box */}
                                    <div className="border-2 border-accent rounded-xl p-10 bg-accent/5 shadow-lg">
                                        <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                                            Interessiert?
                                        </h3>
                                        <p className="text-neutral-600 mb-6">
                                            Fordern Sie jetzt ein individuelles Angebot an oder vereinbaren Sie eine Beratung mit unserem B2B-Team.
                                        </p>
                                        <div className="space-y-3">
                                            <Link href="/quote">
                                                <Button size="large" fullWidth>
                                                    Angebot anfordern
                                                </Button>
                                            </Link>
                                            <Link href="/contact">
                                                <Button variant="outline" size="large" fullWidth>
                                                    Beratung vereinbaren
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-neutral-200">
                                            <p className="text-sm text-neutral-600 mb-2">Oder rufen Sie uns direkt an:</p>
                                            <a
                                                href="tel:+4952112345678"
                                                className="text-xl font-bold text-accent hover:text-accent-hover transition-smooth"
                                            >
                                                +49 (0) 521 / 123 456 78
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Additional Services Section */}
            <section className="py-40 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Weitere Services auf Anfrage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Leasing-Rückläufer</h3>
                            <p className="text-white/80">
                                Professionelle Abwicklung von Leasing-Rückläufern mit Schadensdokumentation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Garantiefälle</h3>
                            <p className="text-white/80">
                                Transport von Garantie- und Kulanzfahrzeugen zu Werkstätten oder Händlern.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">API-Integration</h3>
                            <p className="text-white/80">
                                Automatisierte Buchungen über REST API - nahtlose Integration in Ihre DMS-Systeme.
                            </p>
                        </div>
                    </div>
                    <Link href="/contact">
                        <Button variant="outline" size="large" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                            Individuelle Lösung anfragen
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
