import React from "react";
import "./FallingLeaves.css";

const FallingLeaves = ({ children }) => {
    const leaves = Array.from({ length: 15 });

    return (
        <>
            <div className="falling-leaves-container">
                {leaves.map((_, i) => (
                    <div key={i} className={`leaf leaf-${i % 3}`}>🍂</div>
                ))}
            </div>

            {children}
        </>
    );
};

export default FallingLeaves;
