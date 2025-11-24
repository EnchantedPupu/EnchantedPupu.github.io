"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    index: number;
    isLast: boolean;
}

const TimelineItem = ({ year, title, description, index, isLast }: TimelineItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-8 group last:pb-0"
        >
            {/* Timeline line - only show if not last item */}
            {!isLast && (
                <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-primary/50 to-primary/10" />
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-3 h-3 -ml-[6px] rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform duration-300" />

            {/* Content */}
            <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                    <span className="text-lg font-bold text-primary">{year}</span>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

interface TimelineProps {
    items: Array<{
        year: string;
        title: string;
        description: string;
    }>;
}

export const Timeline = ({ items }: TimelineProps) => {
    return (
        <div className="relative">
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    index={index}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    );
};
