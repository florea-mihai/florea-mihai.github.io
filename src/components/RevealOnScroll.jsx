import { useEffect, useRef } from "react";

/**
 * RevealOnScroll
 * Smoothly reveals children with animation when they enter the viewport.
 * - Uses IntersectionObserver for performance.
 * - Handles aria-hidden for accessibility.
 * - Accepts threshold and rootMargin for fine-tuning.
 * - Supports custom element type and className.
 */
export const RevealOnScroll = ({
  children,
  threshold = 0.18,
  rootMargin = "0px 0px -60px 0px",
  as: Component = "div",
  className = "",
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let revealed = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          element.classList.add("visible");
          element.setAttribute("aria-hidden", "false");
          revealed = true;
          observer.unobserve(element); // Only animate once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <Component
      ref={ref}
      className={`reveal ${className}`}
      aria-hidden="true"
      {...props}
    >
      {children}
    </Component>
  );
};