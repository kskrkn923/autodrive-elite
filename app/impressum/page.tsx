import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Impressum | AutoDrive Elite',
    description: 'Impressum und rechtliche Informationen von AutoDrive Elite',
};

export default function ImpressumPage() {
    return (
        <div className="pt-80 min-h-screen bg-neutral-light">
            <div className="container mx-auto px-6 py-24 max-w-4xl">
                <h1 className="text-5xl font-bold text-primary mb-16 text-center">Impressum</h1>

                <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 space-y-8">
                    {/* Company Info */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Angaben gemäß § 5 TMG</h2>
                        <p className="text-neutral-dark leading-relaxed">
                            <strong>AutoDrive Elite</strong><br />
                            Musterstraße 123<br />
                            33602 Bielefeld<br />
                            Deutschland
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Kontakt</h2>
                        <p className="text-neutral-dark leading-relaxed">
                            <strong>Telefon:</strong> +49 (0) 521 / 123 456 78<br />
                            <strong>E-Mail:</strong> info@autodrive-elite.de
                        </p>
                    </section>

                    {/* Legal Representative */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Vertreten durch</h2>
                        <p className="text-neutral-dark leading-relaxed">
                            [Geschäftsführer/Inhaber Name]<br />
                            <span className="text-sm italic text-neutral-dark">(Platzhalter - vor Live-Gang mit echten Daten ersetzen)</span>
                        </p>
                    </section>

                    {/* Register */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Registereintrag</h2>
                        <p className="text-neutral-dark leading-relaxed">
                            <strong>Handelsregister:</strong> [Registergericht]<br />
                            <strong>Registernummer:</strong> [HRB XXXXX]<br />
                            <span className="text-sm italic text-neutral-dark">(Platzhalter - vor Live-Gang mit echten Daten ersetzen)</span>
                        </p>
                    </section>

                    {/* VAT */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Umsatzsteuer-ID</h2>
                        <p className="text-neutral-dark leading-relaxed">
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            <strong>DE [XXX XXX XXX]</strong><br />
                            <span className="text-sm italic text-neutral-dark">(Platzhalter - vor Live-Gang mit echten Daten ersetzen)</span>
                        </p>
                    </section>

                    {/* Responsible for content */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <p className="text-neutral-dark leading-relaxed">
                            [Name des Verantwortlichen]<br />
                            Musterstraße 123<br />
                            33602 Bielefeld<br />
                            <span className="text-sm italic text-neutral-dark">(Platzhalter - vor Live-Gang mit echten Daten ersetzen)</span>
                        </p>
                    </section>

                    {/* Disclaimer */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">Haftungsausschluss</h2>

                        <h3 className="text-xl font-bold text-primary mt-6 mb-3">Haftung für Inhalte</h3>
                        <p className="text-neutral-dark leading-relaxed">
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                            und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
                            § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-6 mb-3">Haftung für Links</h3>
                        <p className="text-neutral-dark leading-relaxed">
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-6 mb-3">Urheberrecht</h3>
                        <p className="text-neutral-dark leading-relaxed">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
