import React from 'react';

export default function Moon(props: { className?: string }) {
    return <svg 
    className={props.className}
    viewBox='0 0 24 24'
    height={24}
    width={24}
    fill='currentColor'
    >
        <path d="M21.801,12.134c-0.16-0.23-0.44-0.34-0.71-0.28c-0.68,0.15-1.38,0.13-2.07-0.04
                c-1.91-0.47-3.34-2.18-3.48-4.14c-0.06-0.74,0.05-1.45,0.33-2.11c0.1-0.26,0.04-0.56-0.15-0.76s-0.48-0.26-0.73-0.16
                c-1.81,0.71-3.13,2.34-3.47,4.24c-0.51-0.21-1.07-0.33-1.66-0.33c-1.89,0-3.56,1.26-4.11,3.04c-1.29,0.01-2.49,0.69-3.1,1.79
                c-0.76,1.36-0.77,2.85-0.04,4.1c0.7,1.19,1.99,1.92,3.36,1.92h9.34c1.8,0,3.26-1.46,3.26-3.26c0-0.28-0.03-0.55-0.1-0.81
                c1.38-0.35,2.6-1.23,3.35-2.45C21.971,12.654,21.961,12.364,21.801,12.134z M15.311,18.404h-9.34c-1.02,0-1.98-0.55-2.5-1.43
                c-0.55-0.93-0.53-2.06,0.05-3.1c0.44-0.79,1.3-1.27,2.3-1.27c0.08,0,0.15,0,0.22,0.01l0.51-0.03l0.09-0.42
                c0.32-1.51,1.67-2.61,3.22-2.61c1.55,0,2.87,1.06,3.21,2.57c0.07,0.28,0.32,0.48,0.6,0.48h0.06c0.38-0.04,1.04,0.02,1.3,0.83
                c0.07,0.25,0.29,0.43,0.55,0.46c1.13,0.14,1.99,1.1,1.99,2.25C17.571,17.394,16.551,18.404,15.311,18.404z M18.071,14.414
                c-0.47-0.76-1.24-1.31-2.16-1.48c-0.39-0.96-1.2-1.32-1.95-1.34c-0.27-0.89-0.8-1.65-1.51-2.17c0.15-1.47,1-2.78,2.25-3.53
                c-0.15,0.6-0.21,1.22-0.16,1.85c0.18,2.39,1.92,4.47,4.24,5.04c0.59,0.14,1.18,0.2,1.76,0.16
                C19.891,13.674,19.031,14.194,18.071,14.414z"/>
    </svg>
}