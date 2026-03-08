import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
    const [phase, setPhase] = useState('entering'); // entering -> merging -> revealed -> fade-out

    useEffect(() => {
        // Phase 1: Enter screen (0s - 1.0s)
        const mergeTimer = setTimeout(() => {
            setPhase('merging');
        }, 1000);

        // Phase 2: Show bottom text (2.0s - 4.5s)
        const revealTimer = setTimeout(() => {
            setPhase('revealed');
        }, 2000);

        // Phase 3: Fade out the whole loader (4.5s)
        const completeTimer = setTimeout(() => {
            setPhase('fade-out');
            setTimeout(() => {
                onComplete();
            }, 1000);
        }, 4500);

        return () => {
            clearTimeout(mergeTimer);
            clearTimeout(revealTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`isavari-loader-overlay ${phase === 'fade-out' ? 'fade-out' : ''}`}>
            {/* Main Content */}
            <div className="center-container">
                <div className={`text-merge-container ${phase === 'merging' || phase === 'revealed' ? 'merged' : ''}`}>
                    <h1 className="merge-text-left">
                        <span className="text-cyan">Dhana</span>
                    </h1>
                    <h1 className="merge-text-right">
                        <span className="text-gold">Durga</span>
                    </h1>
                </div>

                <h3 className={`combined-bottom-text ${phase === 'revealed' ? 'show' : ''}`}>
                    Trust, Prosperity, Service
                </h3>
            </div>
        </div>
    );
};

export default Loader;
