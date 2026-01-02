import { useEffect, useRef } from "react";

export function useParallax(strength = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (!ref.current) return;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        ref.current.style.transform = `translate3d(0, ${y * strength}px, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return ref;
}
