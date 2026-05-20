"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
    return (
        <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`bg-card text-card-foreground rounded-2xl border border-border/80 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-border ${className}`}
        >
            {children}
        </motion.div>
    );
};
