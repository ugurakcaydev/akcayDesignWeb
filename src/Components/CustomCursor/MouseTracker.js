"use client"
import React, { useState, useEffect } from 'react';
import './MouseTracker.css';

const MouseTracker = ({ children }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="mouseContainer">
            <div className="mouse" style={{ left: position.x, top: position.y }}></div>
            {children}
        </div>
    );
};

export default MouseTracker;
