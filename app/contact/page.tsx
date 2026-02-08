'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (submitted) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center bg-neutral-light">
                <div className="container mx-auto px-6 max-w-2xl text-center">
                    <div className="bg-white rounded-2xl p-12 shadow-lg">
                        <div className="text-6xl mb-6">✓</div>
                        <h1 className="text-4xl font-bold text-primary mb-4">Nachricht gesendet!</h1>
                        <p className="text-xl text-neutral-dark mb-8">
                            Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.
                        </p>
                        <Button onClick={() => setSubmitted(false)}>Weitere Nachricht senden</Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-24 mb-20 mt-48">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-8">Kontakt</h1>
                    <p className="text-xl">Wir sind für Sie da - nehmen Sie Kontakt mit uns auf</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-32 bg-neutral-light">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-12">Kontaktinformationen</h2>

                            {/* Phone */}
                            <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="text-4xl">📞</div>
                                    <div>
                                        <h3 className="font-bold text-primary">Telefon</h3>
                                        <a href="tel:+4952112345678" className="text-accent-orange text-xl font-semibold hover:text-accent-gold transition-smooth">
                                            +49 (0) 521 / 123 456 78
                                        </a>
                                    </div>
                                </div>
                                <p className="text-neutral-dark text-sm">
                                    Mo-Fr: 8:00 - 20:00 Uhr<br />
                                    Sa: 9:00 - 16:00 Uhr<br />
                                    Notfall-Hotline: 24/7
                                </p>
                            </div>

                            {/* Email */}
                            <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="text-4xl">✉️</div>
                                    <div>
                                        <h3 className="font-bold text-primary">E-Mail</h3>
                                        <a href="mailto:info@autodrive-elite.de" className="text-accent-orange text-xl font-semibold hover:text-accent-gold transition-smooth">
                                            info@autodrive-elite.de
                                        </a>
                                    </div>
                                </div>
                                <p className="text-neutral-dark text-sm">
                                    Wir antworten innerhalb von 24 Stunden
                                </p>
                            </div>

                            {/* Address */}
                            <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="text-4xl">📍</div>
                                    <div>
                                        <h3 className="font-bold text-primary">Adresse</h3>
                                        <p className="text-neutral-dark">
                                            Musterstraße 123<br />
                                            33602 Bielefeld<br />
                                            Deutschland
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-6 shadow-md">
                                <h3 className="font-bold text-xl mb-4">Geschäftszeiten</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Montag - Freitag:</span>
                                        <span className="font-semibold">08:00 - 20:00 Uhr</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Samstag:</span>
                                        <span className="font-semibold">09:00 - 16:00 Uhr</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sonntag:</span>
                                        <span className="font-semibold">Geschlossen</span>
                                    </div>
                                    <div className="border-t border-white/20 pt-2 mt-2">
                                        <div className="flex justify-between">
                                            <span>Notfall-Hotline:</span>
                                            <span className="font-semibold text-accent-gold">24/7</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-12">Nachricht senden</h2>
                            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        E-Mail-Adresse *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Telefonnummer
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Ihre Nachricht *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    ></textarea>
                                </div>

                                <Button type="submit" size="large" fullWidth>
                                    Nachricht senden
                                </Button>

                                <p className="text-sm text-neutral-dark mt-4 text-center">
                                    * Pflichtfelder
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
