"use client";

import { Check } from "lucide-react";

const benefits = [
    "All updates in one place – No more scattering across emails and groups.",
    "No clutter, no confusion – Designed solely for student needs.",
    "Designed for students, not admins – Intuitive and fast.",
];

export function BenefitsSection() {
    return (
        <section className="py-20 px-4 bg-background">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Why Students Need This</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <Check className="w-6 h-6" />
                            </div>
                            <p className="font-medium text-lg leading-relaxed">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
