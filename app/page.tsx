import Link from 'next/link';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ServiceCard';
import StatsCard from '@/components/StatsCard';
import TestimonialCard from '@/components/TestimonialCard';
import { CheckCircleIcon, ChartBarIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div>
      {/* Hero Section - B2B Focused */}
      <section className="relative pt-72 pb-32 bg-gradient-to-br from-primary via-primary-light to-primary-lighter text-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fadeIn">
            <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border border-white/30 shadow-lg">
              🚀 B2B Fahrzeuglogistik
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg">
              Professionelle Fahrzeugüberführung<br />
              <span className="text-white/95 bg-gradient-to-r from-white/10 to-transparent px-4 py-2 rounded-lg">für Ihr Unternehmen</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Zuverlässiger Partner für Autohändler, Fuhrparks und Importeure.<br />
              <span className="font-semibold text-white">Skalierbare Lösungen von 1 bis 1000 Fahrzeugen pro Monat.</span>
            </p>

            {/* USPs in 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <CheckCircleIcon className="w-6 h-6 text-success" />
                <span className="font-medium">Deutschlandweit + Europa</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircleIcon className="w-6 h-6 text-success" />
                <span className="font-medium">24/7 Verfügbarkeit</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircleIcon className="w-6 h-6 text-success" />
                <span className="font-medium">API-Integration</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/quote">
                <button className="px-10 py-4 bg-white text-primary font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  🚀 Flottenangebot anfordern
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold text-lg rounded-lg shadow-xl hover:bg-white hover:text-primary hover:scale-105 transition-all">
                  📞 Demo vereinbaren
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-premium p-12 border border-neutral-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
              <StatsCard number="5000+" label="Überführungen" sublabel="pro Jahr" />
              <StatsCard number="300+" label="Partnerhändler" sublabel="deutschlandweit" />
              <StatsCard number="98%" label="Pünktlichkeit" sublabel="garantiert" />
              <StatsCard number="<24h" label="Angebotsstellung" sublabel="durchschnittlich" />
            </div>
          </div>
        </div>
      </section>

      {/* B2B Services Grid */}
      <section className="py-40 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">Unsere B2B-Lösungen</h2>
            <p className="text-xl text-neutral-600">Spezialisierte Services für Geschäftskunden</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              iconType="building"
              title="Händler-Überführung"
              description="Standortwechsel, Messefahrzeuge und Probefahrten-Fahrzeuge für Autohäuser."
            />
            <ServiceCard
              iconType="truck"
              title="Flotten-Management"
              description="Große Volumina, wiederkehrende Routen und feste Kontingente für Fuhrparks."
            />
            <ServiceCard
              iconType="globe"
              title="Import/Export"
              description="Grenzüberschreitende Logistik mit Zollabwicklung und Dokumenten-Management."
            />
            <ServiceCard
              iconType="bolt"
              title="Auktions-Service"
              description="Direkt-Abholung bei BCA, ATU und mobile.de mit Express-Verfügbarkeit."
            />
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Warum Unternehmen uns wählen
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">Ihre Vorteile auf einen Blick</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-smooth">
              <ChartBarIcon className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Skalierbare Lösungen</h3>
              <p className="text-neutral-600">
                Von 1 bis 1000 Fahrzeugen pro Monat - wir wachsen mit Ihrem Bedarf.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-smooth">
              <CogIcon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">API-Integration</h3>
              <p className="text-neutral-600">
                Automatisierte Buchungen über REST API - nahtlose Integration in Ihre Systeme.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-smooth">
              <ShieldCheckIcon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Volumenrabatte</h3>
              <p className="text-neutral-600">
                Bis zu 30% günstiger als Einzelbuchungen bei Rahmenverträgen.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-smooth">
              <CheckCircleIcon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Dedizierter Account Manager</h3>
              <p className="text-neutral-600">
                Persönlicher Ansprechpartner für Ihre individuellen Anforderungen.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-smooth">
              <CheckCircleIcon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Transparente Abrechnung</h3>
              <p className="text-neutral-600">
                Klare Preisstruktur, monatliche Reports und digitale Rechnungsstellung.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-smooth">
              <CheckCircleIcon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">24/7 Support</h3>
              <p className="text-neutral-600">
                Rund-um-die-Uhr Erreichbarkeit für dringende Anfragen und Notfälle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Testimonials */}
      <section className="py-40 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">Referenzen</h2>
            <p className="text-xl text-neutral-600">Vertrauen von führenden Unternehmen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="AutoDrive Elite hat unsere Logistikkosten um 30% reduziert. Hervorragende Zusammenarbeit!"
              author="Autohaus Müller GmbH"
              location="Hamburg"
            />
            <TestimonialCard
              quote="Zuverlässiger Partner für über 500 Fahrzeuge pro Jahr. Professionell und pünktlich."
              author="FleetCo Deutschland"
              location="München"
            />
            <TestimonialCard
              quote="Die API-Integration hat unseren Workflow revolutioniert. Absolut empfehlenswert!"
              author="Import Motors AG"
              location="Frankfurt"
            />
          </div>
        </div>
      </section>

      {/* How It Works - B2B Process */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">So einfach geht's</h2>
            <p className="text-xl text-neutral-600">In 3 Schritten zur Unternehmenspartnerschaft</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-accent text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Erstberatung</h3>
              <p className="text-neutral-600">
                Kostenlose Bedarfsanalyse mit unserem B2B-Team. Telefon, Video-Call oder vor Ort.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-accent text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Angebot & Rahmenvertrag</h3>
              <p className="text-neutral-600">
                Individuelles Pricing basierend auf Ihrem Volumen. Flexible Vertragslaufzeiten.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-accent text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Onboarding & Start</h3>
              <p className="text-neutral-600">
                Dedizierter Account Manager, API-Integration und laufende Optimierung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Bereit für eine Partnerschaft?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Fahrzeuglogistik optimieren. Fordern Sie jetzt ein individuelles Flottenangebot an.
          </p>
          <div className="mb-8">
            <a href="tel:+4952112345678" className="text-3xl md:text-4xl font-bold hover:text-white/90 transition-smooth">
              +49 (0) 521 / 123 456 78
            </a>
            <p className="text-sm mt-2 text-white/70">Mo-Fr 8-20 Uhr | Notfall-Hotline 24/7</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="large" className="bg-white text-primary hover:bg-neutral-100 border-white">
                Flottenangebot anfordern
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="large" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Account Manager kontaktieren
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
