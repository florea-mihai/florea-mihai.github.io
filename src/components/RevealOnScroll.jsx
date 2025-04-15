import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, threshold = 0.2, rootMargin = "0px 0px -50px 0px" }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("visible");
                    element.setAttribute("aria-hidden", "false");
                } else {
                    element.classList.remove("visible");
                    element.setAttribute("aria-hidden", "true");
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
            observer.disconnect();
        };
    }, [threshold, rootMargin]);

    return (
        <div ref={ref} className="reveal" aria-hidden="true">
            {children}
        </div>
    );
};