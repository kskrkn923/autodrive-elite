'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, TruckIcon } from '@heroicons/react/24/outline';
import Button from './ui/Button';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/services', label: 'Lösungen' },
        { href: '/quote', label: 'Preise' },
        { href: '/faq', label: 'FAQ' },
        { href: '/about', label: 'Über Uns' },
        { href: '/contact', label: 'Kontakt' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-primary py-4'
                }`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent/20 rounded-lg blur-lg group-hover:blur-xl transition-all"></div>
                        <div className="relative bg-gradient-to-br from-accent to-primary p-2.5 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                            <TruckIcon className="w-7 h-7 text-white" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-bold tracking-tight transition-smooth ${isScrolled ? 'text-primary' : 'text-white'
                            }`}>
                            Auto<span className="text-accent">Drive</span> Elite
                        </span>
                        <span className={`text-[10px] font-medium tracking-wide uppercase transition-smooth ${isScrolled ? 'text-neutral-600' : 'text-white/70'
                            }`}>
                            B2B Fahrzeuglogistik
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`font-medium transition-smooth hover:text-accent ${isScrolled ? 'text-neutral-900' : 'text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button (Desktop) */}
                <div className="hidden md:block">
                    <Link href="/quote">
                        <Button>Flottenangebot anfordern</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <XMarkIcon className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
                    ) : (
                        <Bars3Icon className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg animate-slideUp">
                    <ul className="px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="block text-neutral-900 font-medium hover:text-accent transition-smooth"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Link href="/quote">
                                <Button fullWidth>Flottenangebot anfordern</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
