import React from 'react';

const PixelatedBackground = () => {
    const pixelSize = 20;
    const numPixels = 20;

    const generatePixels = () => {
        const pixels = [];
        for (let i = 0; i < numPixels; i++) {
            const leftPosition = Math.random() * 20;
            const topPosition = Math.random() * 100;
            const animationDuration = 15 + Math.random() * 10;
            const animationDelay = Math.random() * -25;

            pixels.push(
                <div
                    key={`left-${i}`}
                    className="absolute bg-blue-300 dark:bg-blue-700 animate-float"
                    style={{
                        left: `${leftPosition}%`,
                        top: `${topPosition}%`,
                        width: `${pixelSize}px`,
                        height: `${pixelSize}px`,
                        opacity: 0.1 + Math.random() * 0.2,
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`,
                    }}
                />
            );
            pixels.push(
                <div
                    key={`right-${i}`}
                    className="absolute bg-emerald-300 dark:bg-emerald-700 animate-float"
                    style={{
                        right: `${leftPosition}%`,
                        top: `${topPosition}%`,
                        width: `${pixelSize}px`,
                        height: `${pixelSize}px`,
                        opacity: 0.1 + Math.random() * 0.2,
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`,
                    }}
                />
            );
        }
        return pixels;
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <style jsx>{`
                @keyframes float {
                    0% {
                        transform: translate(0, 0);
                    }
                    25% {
                        transform: translate(10px, 10px);
                    }
                    50% {
                        transform: translate(0, 0);
                    }
                    75% {
                        transform: translate(-10px, -10px);
                    }
                    100% {
                        transform: translate(0, 0);
                    }
                }
                .animate-float {
                    animation-name: float;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease-in-out;
                }
            `}</style>
            {generatePixels()}
        </div>
    );
};

export default PixelatedBackground;