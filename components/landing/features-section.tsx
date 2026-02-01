"use client";

import { motion } from "framer-motion";
import { Bell, Calendar, BookOpen, Library } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        icon: Bell,
        title: "Notices",
        description: "Stay updated with instant important announcements.",
    },
    {
        icon: Calendar,
        title: "Events",
        description: "Never miss campus activities and deadlines.",
    },
    {
        icon: BookOpen,
        title: "Assignments",
        description: "Track homework and submission dates easily.",
    },
    {
        icon: Library,
        title: "Study Resources",
        description: "Access notes and PDFs anytime, anywhere.",
    },
];

export function FeaturesSection() {
    return (
        <section className="py-20 px-4 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">What You Can Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
