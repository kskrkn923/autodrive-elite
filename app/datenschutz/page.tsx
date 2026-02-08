import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung | AutoDrive Elite',
    description: 'Datenschutzerklärung von AutoDrive Elite - Informationen zum Umgang mit Ihren Daten',
};

export default function DatenschutzPage() {
    return (
        <div className="pt-80 min-h-screen bg-neutral-light">
            <div className="container mx-auto px-6 py-24 max-w-4xl">
                <h1 className="text-5xl font-bold text-primary mb-16 text-center">Datenschutzerklärung</h1>

                <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 space-y-8">
                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-xl font-bold text-primary mt-4 mb-3">Allgemeine Hinweise</h3>
                        <p className="text-neutral-dark leading-relaxed">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                            persönlich identifiziert werden können.
                        </p>
                    </section>

                    {/* Data Collection */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">2. Datenerfassung auf dieser Website</h2>
                        <h3 className="text-xl font-bold text-primary mt-4 mb-3">Wer ist verantwortlich für die Datenerfassung?</h3>
                        <p className="text-neutral-dark leading-relaxed mb-4">
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                            können Sie dem Impressum dieser Website entnehmen.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-6 mb-3">Wie erfassen wir Ihre Daten?</h3>
                        <p className="text-neutral-dark leading-relaxed mb-4">
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
                            um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p className="text-neutral-dark leading-relaxed">
                            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
                            allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-6 mb-3">Wofür nutzen wir Ihre Daten?</h3>
                        <p className="text-neutral-dark leading-relaxed">
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                            Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden oder um Ihnen Angebote zu erstellen.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-6 mb-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                        <p className="text-neutral-dark leading-relaxed">
                            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                            Löschung dieser Daten zu verlangen.
                        </p>
                    </section>

                    {/* Server Logs */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">3. Server-Log-Dateien</h2>
                        <p className="text-neutral-dark leading-relaxed mb-4">
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
                            die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>
                        <ul className="list-disc list-inside text-neutral-dark space-y-2 mb-4">
                            <li>Browsertyp und Browserversion</li>
                            <li>verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                            <li>IP-Adresse</li>
                        </ul>
                        <p className="text-neutral-dark leading-relaxed">
                            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
                            Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                        </p>
                    </section>

                    {/* Contact Forms */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">4. Kontaktformular</h2>
                        <p className="text-neutral-dark leading-relaxed mb-4">
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                            von Anschlussfragen bei uns gespeichert.
                        </p>
                        <p className="text-neutral-dark leading-relaxed">
                            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
                            Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                            zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                        </p>
                    </section>

                    {/* Data Storage */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">5. Speicherdauer</h2>
                        <p className="text-neutral-dark leading-relaxed">
                            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                            Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                            berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                            werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                            Ihrer personenbezogenen Daten haben.
                        </p>
                    </section>

                    {/* User Rights */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">6. Ihre Rechte</h2>
                        <p className="text-neutral-dark leading-relaxed mb-4">
                            Sie haben folgende Rechte:
                        </p>
                        <ul className="list-disc list-inside text-neutral-dark space-y-2">
                            <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
                            <li>Recht auf Berichtigung unrichtiger Daten</li>
                            <li>Recht auf Löschung Ihrer Daten</li>
                            <li>Recht auf Einschränkung der Datenverarbeitung</li>
                            <li>Recht auf Datenübertragbarkeit</li>
                            <li>Recht auf Widerspruch gegen die Datenverarbeitung</li>
                            <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
                        </ul>
                    </section>

                    {/* SSL Encryption */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
                        <p className="text-neutral-dark leading-relaxed">
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                            Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
                            von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                        </p>
                    </section>

                    {/* Contact */}
                    <section className="bg-neutral-light rounded-xl p-6">
                        <h2 className="text-2xl font-bold text-primary mb-4">Fragen zum Datenschutz?</h2>
                        <p className="text-neutral-dark leading-relaxed mb-4">
                            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an uns:
                        </p>
                        <p className="text-neutral-dark">
                            <strong>E-Mail:</strong> info@autodrive-elite.de<br />
                            <strong>Telefon:</strong> +49 (0) 521 / 123 456 78
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
