import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-muted/30 border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Niels Evant Robort. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
