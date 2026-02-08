'use client';

import { useState } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: 'Hallo! Ich bin Ihr AutoDrive Elite Assistent. Wie kann ich Ihnen helfen?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');

    const quickReplies = [
        'Preise anfragen',
        'Services ansehen',
        'Kontakt aufnehmen',
        'FAQ öffnen',
    ];

    // Mock responses based on keywords
    const getResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('preis') || lowerInput.includes('kosten')) {
            return 'Für ein individuelles Flottenangebot kontaktieren Sie uns unter +49 (0) 521 / 123 456 78. Wir erstellen Ihnen innerhalb von 24h ein maßgeschneidertes Angebot.';
        }

        if (lowerInput.includes('service') || lowerInput.includes('leistung')) {
            return 'Wir bieten spezialisierte B2B-Lösungen: Händler-Überführung, Flotten-Management, Import/Export-Logistik und Auktions-Service. Welcher Bereich interessiert Sie?';
        }

        if (lowerInput.includes('kontakt') || lowerInput.includes('anruf')) {
            return 'Telefon: +49 (0) 521 / 123 456 78 (Mo-Fr 8-20 Uhr, Sa 9-16 Uhr)\nE-Mail: info@autodrive-elite.de\nNotfall-Hotline: 24/7 verfügbar';
        }

        if (lowerInput.includes('öffnungszeit') || lowerInput.includes('erreichbar')) {
            return 'Unsere Geschäftszeiten: Mo-Fr: 8:00-20:00 Uhr, Sa: 9:00-16:00 Uhr. Für Notfälle erreichen Sie unsere Hotline 24/7!';
        }

        if (lowerInput.includes('flotte') || lowerInput.includes('volumen')) {
            return 'Wir bieten Volumenrabatte ab 20 Fahrzeugen/Monat. Rahmenverträge mit festen Kapazitäten und dediziertem Account Manager sind möglich. Interesse?';
        }

        if (lowerInput.includes('api') || lowerInput.includes('integration')) {
            return 'Ja! Wir bieten eine REST API für automatisierte Buchungen. Integration in Ihre DMS-Systeme ist problemlos möglich. Möchten Sie mehr erfahren?';
        }

        // Default response
        return 'Danke für Ihre Nachricht! Für detaillierte Informationen rufen Sie uns gerne an: +49 (0) 521 / 123 456 78 oder senden Sie eine E-Mail an info@autodrive-elite.de';
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Simulate bot response delay
        setTimeout(() => {
            const botMessage: Message = {
                id: messages.length + 2,
                text: getResponse(inputValue),
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, botMessage]);
        }, 500);
    };

    const handleQuickReply = (reply: string) => {
        setInputValue(reply);
    };

    return (
        <>
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-16 h-16 bg-accent text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center z-50 animate-pulse"
                    aria-label="Chat öffnen"
                >
                    <ChatBubbleLeftRightIcon className="w-8 h-8" />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 animate-slideUp">
                    {/* Header */}
                    <div className="bg-primary text-white p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                <ChatBubbleLeftRightIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold">AutoDrive Elite</h3>
                                <p className="text-xs text-white/80">Online</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/10 p-2 rounded-lg transition-smooth"
                            aria-label="Chat schließen"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user'
                                            ? 'bg-accent text-white rounded-br-none'
                                            : 'bg-white text-neutral-900 rounded-bl-none shadow-sm'
                                        }`}
                                >
                                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Replies */}
                    {messages.length <= 2 && (
                        <div className="px-4 py-2 border-t border-neutral-200 bg-white">
                            <p className="text-xs text-neutral-600 mb-2">Schnellantworten:</p>
                            <div className="flex flex-wrap gap-2">
                                {quickReplies.map((reply, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuickReply(reply)}
                                        className="text-xs px-3 py-1.5 bg-neutral-100 hover:bg-accent hover:text-white rounded-full transition-smooth"
                                    >
                                        {reply}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input */}
                    <div className="p-4 border-t border-neutral-200 bg-white rounded-b-2xl">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ihre Nachricht..."
                                className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                                className="bg-accent text-white p-2 rounded-lg hover:bg-accent-hover transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Senden"
                            >
                                <PaperAirplaneIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
