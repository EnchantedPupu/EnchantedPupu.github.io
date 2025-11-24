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
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`bg-card text-card-foreground rounded-2xl border border-border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`}
        >
            {children}
        </motion.div>
    );
};
