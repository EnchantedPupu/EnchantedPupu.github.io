"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    color: string;
    size: number;
}

export function Fireworks() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const particles: Particle[] = [];
        const colors = [
            "#db2777", // Pink
            "#60a5fa", // Blue
            "#f59e0b", // Amber
            "#a78bfa", // Purple
            "#34d399", // Green
            "#f472b6", // Rose
        ];

        // Create firework explosion
        const createFirework = (x: number, y: number) => {
            const particleCount = 50 + Math.random() * 50;
            const color = colors[Math.floor(Math.random() * colors.length)];

            for (let i = 0; i < particleCount; i++) {
                const angle = (Math.PI * 2 * i) / particleCount;
                const velocity = 2 + Math.random() * 4;

                particles.push({
                    x,
                    y,
                    vx: Math.cos(angle) * velocity,
                    vy: Math.sin(angle) * velocity,
                    life: 1,
                    maxLife: 1,
                    color,
                    size: 2 + Math.random() * 3,
                });
            }
        };

        // Handle click
        const handleClick = (e: MouseEvent) => {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            createFirework(x, y);
        };

        // Handle touch
        const handleTouch = (e: TouchEvent) => {
            if (!canvas) return;
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;
            createFirework(x, y);
        };

        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("touchstart", handleTouch, { passive: false });

        // Add some initial fireworks
        setTimeout(() => {
            if (canvas) {
                createFirework(canvas.width * 0.3, canvas.height * 0.4);
            }
        }, 500);
        setTimeout(() => {
            if (canvas) {
                createFirework(canvas.width * 0.7, canvas.height * 0.5);
            }
        }, 1000);

        // Animation loop
        function animate() {
            if (!ctx || !canvas) return;

            // Fade out effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];

                // Update position
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.05; // Gravity
                p.vx *= 0.99; // Air resistance
                p.life -= 0.01;

                // Remove dead particles
                if (p.life <= 0) {
                    particles.splice(i, 1);
                    continue;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.life;
                ctx.fill();
                ctx.globalAlpha = 1;
            }

            requestAnimationFrame(animate);
        }

        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (canvas) {
                canvas.removeEventListener("click", handleClick);
                canvas.removeEventListener("touchstart", handleTouch);
            }
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-auto cursor-pointer">
            <canvas
                ref={canvasRef}
                className="w-full h-full opacity-70"
                style={{ touchAction: "none" }}
            />
        </div>
    );
}
