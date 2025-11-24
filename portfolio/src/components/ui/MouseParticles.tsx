'use client';

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    life: number;
    color: string;
}

const MouseParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const mouse = useRef({ x: 0, y: 0 });
    const isActive = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            isActive.current = true;

            // Create particles on move
            for (let i = 0; i < 2; i++) {
                createParticle();
            }
        };

        const createParticle = () => {
            const size = Math.random() * 3 + 1;
            const x = mouse.current.x;
            const y = mouse.current.y;
            const speedX = Math.random() * 2 - 1;
            const speedY = Math.random() * 2 - 1;
            const life = 100;
            // Soft pastel colors
            const colors = ['rgba(255, 182, 193, ', 'rgba(173, 216, 230, ', 'rgba(255, 253, 208, '];
            const color = colors[Math.floor(Math.random() * colors.length)];

            particles.current.push({ x, y, size, speedX, speedY, life, color });
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.current.length; i++) {
                const p = particles.current[i];
                p.x += p.speedX;
                p.y += p.speedY;
                p.life--;
                p.size -= 0.05;

                if (p.life > 0 && p.size > 0) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color + (p.life / 100) + ')';
                    ctx.fill();
                } else {
                    particles.current.splice(i, 1);
                    i--;
                }
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed top-0 left-0 z-50 h-full w-full"
        />
    );
};

export default MouseParticles;
