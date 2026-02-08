'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function QuotePage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        vehicleType: '',
        brand: '',
        year: '',
        pickupLocation: '',
        deliveryLocation: '',
        preferredDate: '',
        expressService: false,
        extraInsurance: false,
        afterHours: false,
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, send to backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    if (submitted) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center bg-neutral-light">
                <div className="container mx-auto px-6 max-w-2xl text-center">
                    <div className="bg-white rounded-2xl p-12 shadow-lg">
                        <div className="text-6xl mb-6">✓</div>
                        <h1 className="text-4xl font-bold text-primary mb-4">Vielen Dank!</h1>
                        <p className="text-xl text-neutral-dark mb-6">
                            Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
                        </p>
                        <p className="text-neutral-dark mb-8">
                            Bei dringenden Anfragen erreichen Sie uns unter:<br />
                            <a href="tel:+4952112345678" className="text-accent-orange font-bold text-2xl">
                                +49 (0) 521 / 123 456 78
                            </a>
                        </p>
                        <Button onClick={() => setSubmitted(false)}>Weitere Anfrage stellen</Button>
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-8">Angebot anfordern</h1>
                    <p className="text-xl">Kostenloses und unverbindliches Angebot innerhalb 24 Stunden</p>
                </div>
            </section>

            {/* Form */}
            <section className="py-32 bg-neutral-light">
                <div className="container mx-auto px-6 max-w-4xl">
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        {/* Personal Data */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-primary mb-6">Persönliche Daten</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Vorname *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Nachname *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>
                                <div>
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
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Telefonnummer *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Vehicle Data */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-primary mb-6">Fahrzeugdaten</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label htmlFor="vehicleType" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Fahrzeugtyp *
                                    </label>
                                    <select
                                        id="vehicleType"
                                        name="vehicleType"
                                        required
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    >
                                        <option value="">Bitte wählen...</option>
                                        <option value="pkw">PKW</option>
                                        <option value="transporter">Transporter</option>
                                        <option value="luxus">Luxus/Oldtimer</option>
                                        <option value="motorrad">Motorrad</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="brand" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Marke und Modell
                                    </label>
                                    <input
                                        type="text"
                                        id="brand"
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleChange}
                                        placeholder="z.B. BMW 3er"
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="year" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Baujahr
                                    </label>
                                    <input
                                        type="text"
                                        id="year"
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        placeholder="z.B. 2020"
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Transfer Details */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-primary mb-6">Überführungsdetails</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="pickupLocation" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Abholort (PLZ/Ort) *
                                    </label>
                                    <input
                                        type="text"
                                        id="pickupLocation"
                                        name="pickupLocation"
                                        required
                                        value={formData.pickupLocation}
                                        onChange={handleChange}
                                        placeholder="z.B. 33602 Bielefeld"
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="deliveryLocation" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Zielort (PLZ/Ort) *
                                    </label>
                                    <input
                                        type="text"
                                        id="deliveryLocation"
                                        name="deliveryLocation"
                                        required
                                        value={formData.deliveryLocation}
                                        onChange={handleChange}
                                        placeholder="z.B. 80331 München"
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-neutral-dark mb-2">
                                        Gewünschter Termin
                                    </label>
                                    <input
                                        type="date"
                                        id="preferredDate"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional Options */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-primary mb-6">Zusatzoptionen</h2>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="expressService"
                                        checked={formData.expressService}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-accent-orange focus:ring-accent-orange rounded"
                                    />
                                    <span className="text-neutral-dark">Express-Service (24-48h)</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="extraInsurance"
                                        checked={formData.extraInsurance}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-accent-orange focus:ring-accent-orange rounded"
                                    />
                                    <span className="text-neutral-dark">Zusatzversicherung</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="afterHours"
                                        checked={formData.afterHours}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-accent-orange focus:ring-accent-orange rounded"
                                    />
                                    <span className="text-neutral-dark">Abholung außerhalb der Geschäftszeiten</span>
                                </label>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-primary mb-6">Nachricht</h2>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Weitere Anmerkungen oder besondere Wünsche..."
                                className="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <Button type="submit" size="large">Angebot anfordern</Button>
                            <p className="text-sm text-neutral-dark mt-4">
                                * Pflichtfelder | Wir antworten innerhalb von 24 Stunden
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
