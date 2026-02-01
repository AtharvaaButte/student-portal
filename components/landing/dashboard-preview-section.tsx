"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Calendar, BookOpen, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dashboardItems = [
    {
        id: "notices",
        title: "Notices",
        icon: Bell,
        badge: "3 New",
        content: (
            <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                    <span>Exam Schedule Released</span>
                    <span className="text-muted-foreground">Today</span>
                </li>
                <li className="flex justify-between">
                    <span>Library Maintenance</span>
                    <span className="text-muted-foreground">Yesterday</span>
                </li>
                <li className="flex justify-between">
                    <span>Holiday Announcement</span>
                    <span className="text-muted-foreground">2 days ago</span>
                </li>
            </ul>
        ),
    },
    {
        id: "events",
        title: "Upcoming Events",
        icon: Calendar,
        content: (
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded text-center min-w-[3rem]">
                        <div className="text-xs font-bold text-primary">FEB</div>
                        <div className="text-lg font-bold">15</div>
                    </div>
                    <div>
                        <div className="font-semibold">Tech Symposium</div>
                        <div className="text-xs text-muted-foreground">Auditorium A</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded text-center min-w-[3rem]">
                        <div className="text-xs font-bold text-primary">FEB</div>
                        <div className="text-lg font-bold">22</div>
                    </div>
                    <div>
                        <div className="font-semibold">Career Fair</div>
                        <div className="text-xs text-muted-foreground">Main Hall</div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "assignments",
        title: "Pending Assignments",
        icon: BookOpen,
        badge: "2 Pending",
        content: (
            <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded border bg-card">
                    <span className="font-medium text-sm">Physics Lab Report</span>
                    <Badge variant="destructive">Due Tmrw</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded border bg-card">
                    <span className="font-medium text-sm">History Essay</span>
                    <Badge variant="secondary">Due Fri</Badge>
                </div>
            </div>
        ),
    },
    {
        id: "resources",
        title: "Recent Resources",
        icon: FileText,
        content: (
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center justify-center p-3 border rounded hover:bg-muted/50 cursor-pointer transition-colors">
                    <FileText className="h-6 w-6 mb-2 text-blue-500" />
                    <span className="text-xs font-medium">Math Notes.pdf</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 border rounded hover:bg-muted/50 cursor-pointer transition-colors">
                    <FileText className="h-6 w-6 mb-2 text-red-500" />
                    <span className="text-xs font-medium">Syllabus.pdf</span>
                </div>
            </div>
        ),
    },
];

export function DashboardPreviewSection() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Your Dashboard at a Glance</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Everything you need, organized in one place. Click a card to expand features.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dashboardItems.map((item) => (
                        <motion.div
                            layout
                            key={item.id}
                            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                            className="cursor-pointer"
                            transition={{ layout: { duration: 0.3, type: "spring", bounce: 0, stiffness: 300, damping: 30 } }}
                        >
                            <Card className={`overflow-hidden ${expandedId === item.id ? 'ring-2 ring-primary' : ''}`}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-lg font-medium">
                                        {item.title}
                                    </CardTitle>
                                    <div className="flex items-center gap-2">
                                        {item.badge && (
                                            <Badge variant={item.id === "notices" ? "default" : "secondary"}>
                                                {item.badge}
                                            </Badge>
                                        )}
                                        <item.icon className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-sm text-muted-foreground mt-2">
                                        Click to view details...
                                    </div>
                                    <AnimatePresence mode="sync">
                                        {expandedId === item.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 mt-4 border-t">
                                                    {item.content}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
