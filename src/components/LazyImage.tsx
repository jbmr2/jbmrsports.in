import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  placeholderClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  placeholderClassName,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Use IntersectionObserver to lazy load images when approaching viewport
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '120px 0px', // preload slightly before entering viewport
          threshold: 0.01,
        }
      );

      observer.observe(node);

      return () => {
        observer.disconnect();
      };
    } else {
      // Fallback for older browsers
      setIsInView(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden bg-white/5", containerClassName)}
    >
      {/* Subtle Shimmer Skeleton Overlay */}
      {!isLoaded && (
        <div
          className={cn(
            "absolute inset-0 z-10 animate-pulse bg-white/10 before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent",
            placeholderClassName
          )}
        />
      )}

      {/* Image element with intersection-observer lazy loading and smooth fade-in */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          decoding="async"
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            isLoaded
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-95 blur-md",
            className
          )}
          referrerPolicy="no-referrer"
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};
