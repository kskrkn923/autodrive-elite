import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = {
        'Für Unternehmen': [
            { href: '/services', label: 'B2B-Lösungen' },
            { href: '/quote', label: 'Flottenangebot' },
            { href: '/about', label: 'Über Uns' },
        ],
        'Services': [
            { href: '/services#haendler', label: 'Händler-Überführung' },
            { href: '/services#flotten', label: 'Flotten-Management' },
            { href: '/services#import', label: 'Import/Export' },
            { href: '/services#auktion', label: 'Auktions-Service' },
        ],
        'Support': [
            { href: '/faq', label: 'FAQ' },
            { href: '/contact', label: 'Kontakt' },
            { href: '/contact#account-manager', label: 'Account Manager' },
        ],
        'Rechtliches': [
            { href: '/impressum', label: 'Impressum' },
            { href: '/datenschutz', label: 'Datenschutz' },
        ],
    };

    return (
        <footer className="bg-primary text-white pt-20 pb-8">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="text-4xl">🚗</div>
                            <div>
                                <h3 className="text-xl font-bold">AutoDrive Elite</h3>
                                <p className="text-sm text-white/80">Professionelle Überführung</p>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Ihr vertrauenswürdiger Partner für professionelle Autoüberführungen deutschlandweit.
                        </p>
                    </div>

                    {/* Footer Links */}
                    {Object.entries(footerSections).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-bold mb-4 text-white">{title}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-white/70 hover:text-white transition-smooth text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="border-t border-white/20 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                        <div>
                            <p className="text-sm text-white/60 mb-1">Telefon</p>
                            <a href="tel:+4952112345678" className="text-white font-semibold hover:text-accent transition-smooth">
                                +49 (0) 521 / 123 456 78
                            </a>
                        </div>
                        <div>
                            <p className="text-sm text-white/60 mb-1">E-Mail</p>
                            <a href="mailto:info@autodrive-elite.de" className="text-white font-semibold hover:text-accent transition-smooth">
                                info@autodrive-elite.de
                            </a>
                        </div>
                        <div>
                            <p className="text-sm text-white/60 mb-1">Adresse</p>
                            <p className="text-white font-semibold">Musterstraße 123, 33602 Bielefeld</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="text-center text-white/60 text-sm">
                    <p>© {currentYear} AutoDrive Elite. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    );
}
