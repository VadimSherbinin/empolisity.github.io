import { useEffect, useState } from 'react';

export const useResizing = () => {
    const [widthWindow, setWidthWindow] = useState(0);
    const [heightWIndow, setHeightWindow] = useState(0);

    useEffect(() => {
        const isBrowser = () => typeof window !== 'undefined';
        const updateWindowSizesOnResize = () => {
            setWidthWindow(window.innerWidth);
            setHeightWindow(window.innerHeight);
        };

        if (isBrowser()) {
            setWidthWindow(window.innerWidth);
            setHeightWindow(window.innerHeight);
            window.addEventListener('resize', updateWindowSizesOnResize);
        }
    }, []);

    return { widthWindow, heightWIndow };
};