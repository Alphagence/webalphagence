
import { useState, useEffect, useRef, useCallback } from 'react';

interface ScrollExpansionOptions {
  onFullyExpanded?: () => void;
}

export const useScrollExpansion = (options?: ScrollExpansionOptions) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Reset states when component props change
  const resetStates = useCallback(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, []);

  // Handle wheel events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009; // Match the example code sensitivity
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
          options?.onFullyExpanded?.();
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        // Increase sensitivity for mobile, especially when scrolling back
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005; 
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
          options?.onFullyExpanded?.();
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    const resetSection = () => {
      setScrollProgress(0);
      setShowContent(false);
      setMediaFullyExpanded(false);
    };

    // Properly attach wheel event to the section ref element
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('wheel', handleWheel as any, { passive: false });
    } else {
      // Fallback to window if section ref isn't available
      window.addEventListener('wheel', handleWheel as any, { passive: false });
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart as any, { passive: false });
    window.addEventListener('touchmove', handleTouchMove as any, { passive: false });
    window.addEventListener('touchend', handleTouchEnd as any);
    window.addEventListener('resetSection', resetSection);

    // Cleanup function
    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('wheel', handleWheel as any);
      } else {
        window.removeEventListener('wheel', handleWheel as any);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart as any);
      window.removeEventListener('touchmove', handleTouchMove as any);
      window.removeEventListener('touchend', handleTouchEnd as any);
      window.removeEventListener('resetSection', resetSection);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY, options]);

  // Check for mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return {
    scrollProgress,
    showContent,
    mediaFullyExpanded,
    isMobileState,
    sectionRef,
    resetStates
  };
};
