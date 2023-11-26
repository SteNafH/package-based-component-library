import {createContext, ReactNode, useContext, useEffect, useState} from "react";

type Viewport = 'web-mobile' | 'web-desktop';

const getViewport = () => {
    return window.innerWidth < 1200 ? 'web-mobile' : 'web-desktop';
};

const ViewportContext = createContext<Viewport>(getViewport());

type ViewportProviderProps = {
    children: ReactNode;
}

export const ViewportProvider = ({children}: ViewportProviderProps) => {
    const [viewport, setViewport] = useState<Viewport>(getViewport());

    useEffect(() => {
        const handleResize = () => {
            setViewport(getViewport());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ViewportContext.Provider value={viewport}>
            {children}
        </ViewportContext.Provider>
    );
}

export const useViewport = () => useContext(ViewportContext);
