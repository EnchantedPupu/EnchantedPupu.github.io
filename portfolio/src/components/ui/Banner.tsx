"use client";

import { motion } from "framer-motion";

export function Banner() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="fixed top-16 left-0 right-0 z-40 flex justify-center items-center py-2 px-4 bg-yellow-500/10 backdrop-blur-md border-b border-yellow-500/20 text-yellow-700 dark:text-yellow-200 text-sm font-medium text-center"
        >
            <span>
                Web under development, will be fully ready when I finally need to find a job.
            </span>
        </motion.div>
    );
}
