import React, { useEffect, useState } from 'react';

const ClickCounter = () => {
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('clickCount');
        if (storedCount) {
            setClickCount(Number(storedCount));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('clickCount', clickCount);
    }, [clickCount]);

    const handleProductClick = () => {
        setClickCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Has interactuado con los productos {clickCount} veces.</p>
            <button onClick={handleProductClick}>Interactuar con un producto</button>
        </div>
    );
};

export default ClickCounter;