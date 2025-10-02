import React, {useEffect, useRef} from 'react';

export const useIntersectionObserver = (
    elements: React.RefObject<HTMLElement | null>[],
    options?: IntersectionObserverInit
) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    entry.target.classList.remove('is-hidden');
                } else {
                    entry.target.classList.remove('is-visible');
                    entry.target.classList.add('is-hidden');
                }
            });
        }, options);

        const currentObserver = observer.current;

        elements.forEach(element => {
            if (element.current) {
                currentObserver.observe(element.current);
            }
        });

        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        };
    }, [elements, options]);
};
