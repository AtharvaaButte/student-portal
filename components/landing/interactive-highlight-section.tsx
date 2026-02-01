"use client";

import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function InteractiveHighlightSection() {
    const [isDone, setIsDone] = useState(false);

    return (
        <section className="py-20 px-4 bg-secondary/30">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Stay on Top of Assignments</h2>
                    <p className="text-lg text-muted-foreground">
                        Easily track your progress. Mark assignments as done with a single click and feel the satisfaction.
                    </p>
                </div>

                <div className="flex-1 w-full max-w-md">
                    <Card className="p-6">
                        <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wide">
                            Assignment Tracker
                        </h3>

                        <div
                            onClick={() => setIsDone(!isDone)}
                            className={cn(
                                "flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-300",
                                isDone
                                    ? "bg-green-500/10 border-green-500/50"
                                    : "bg-card border-border hover:border-primary/50"
                            )}
                        >
                            <div className="flex flex-col">
                                <span className={cn("font-semibold text-lg transition-all", isDone && "line-through text-muted-foreground")}>
                                    Calculus Problem Set 4
                                </span>
                                <span className="text-xs text-muted-foreground">Due Tomorrow</span>
                            </div>

                            <motion.div
                                whileTap={{ scale: 0.8 }}
                                animate={{ scale: isDone ? [1, 1.2, 1] : 1 }}
                                className={cn(
                                    "rounded-full p-1",
                                    isDone ? "text-green-600" : "text-muted-foreground"
                                )}
                            >
                                {isDone ? (
                                    <CheckCircle2 className="w-8 h-8 fill-green-500/20" />
                                ) : (
                                    <Circle className="w-8 h-8" />
                                )}
                            </motion.div>
                        </div>

                        <p className="text-center text-xs text-muted-foreground mt-4">
                            Tap the card to toggle status
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
