import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                            Portfolio
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                About
                            </Link>
                            <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Projects
                            </Link>
                            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
