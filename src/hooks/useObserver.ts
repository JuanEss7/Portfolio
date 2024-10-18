import { useEffect, useRef, useState } from "react";
export function useObserver(options = {}) {
    let [entries, setEntries] = useState<IntersectionObserverEntry[] | null>(null);
    let [elements, setElements] = useState<NodeListOf<HTMLElement> | HTMLElement[] | null>(null);
    let observer = useRef<IntersectionObserver | null>();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            observer.current = new IntersectionObserver((entries) => {
                setEntries(entries)
            }, options)
        } else {
            observer.current = null
        }
    }, [])
    useEffect(() => {
        if (!observer) return
        if (!elements) return
        let currentData = observer.current!;
        if (elements.length > 1) {
            for (let element of elements) {
                currentData.observe(element);
            }
        } else {
            currentData.observe(elements[0]);
        }
        return () => {
            currentData && currentData.disconnect();
        }
    }, [elements])

    return { entries, observer: observer.current, setElements }
}