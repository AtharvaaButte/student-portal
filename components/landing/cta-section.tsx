"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 px-4 bg-primary text-primary-foreground text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore the Demo Student Portal</h2>
                <div className="flex justify-center">
                    <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg px-8 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                        asChild
                    >
                        <a href="/dashboard">
                            Enter Dashboard <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
