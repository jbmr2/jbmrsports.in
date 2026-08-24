import React from 'react';
import { cn } from '../utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-white/10 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent",
        className
      )}
      {...props}
    />
  );
};

export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="p-6 rounded-3xl bg-brand-navy/60 border border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-12 w-12 rounded-2xl bg-white/15" />
            <Skeleton className="h-6 w-16 rounded-full bg-white/10" />
          </div>
          <Skeleton className="h-7 w-3/4 rounded-lg bg-white/15" />
          <Skeleton className="h-4 w-full rounded-md bg-white/10" />
          <Skeleton className="h-4 w-5/6 rounded-md bg-white/10" />
          <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
            <Skeleton className="h-4 w-24 rounded-md bg-white/10" />
            <Skeleton className="h-8 w-8 rounded-full bg-white/15" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const PageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between max-w-7xl mx-auto pt-20 sm:pt-24 animate-fade-in">
      {/* Top Navigation Bar Skeleton */}
      <div className="flex items-center justify-between mb-10 sm:mb-16">
        <div className="flex items-center gap-3">
          <Skeleton className="h-9 sm:h-11 w-32 sm:w-40 rounded-xl bg-brand-primary/20" />
        </div>
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Skeleton className="h-4 w-20 rounded-md bg-white/10" />
          <Skeleton className="h-4 w-20 rounded-md bg-white/10" />
          <Skeleton className="h-4 w-24 rounded-md bg-white/10" />
          <Skeleton className="h-4 w-20 rounded-md bg-white/10" />
          <Skeleton className="h-4 w-16 rounded-md bg-white/10" />
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <Skeleton className="h-10 w-28 rounded-full bg-brand-primary/30" />
          <Skeleton className="h-10 w-32 rounded-full bg-brand-primary/40" />
        </div>
        <div className="sm:hidden">
          <Skeleton className="h-10 w-10 rounded-xl bg-white/10" />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full my-6 sm:my-10">
        {/* Live Active Viewers Badge Skeleton */}
        <Skeleton className="h-8 w-64 sm:w-72 rounded-full mb-6 bg-brand-primary/20 border border-brand-primary/30" />

        {/* Dynamic Titles Skeleton */}
        <Skeleton className="h-10 sm:h-14 md:h-16 w-11/12 max-w-3xl rounded-2xl mb-3 sm:mb-4 bg-white/15" />
        <Skeleton className="h-10 sm:h-14 md:h-16 w-3/4 max-w-2xl rounded-2xl mb-6 sm:mb-8 bg-brand-primary/30" />

        {/* Subtitle Lines */}
        <Skeleton className="h-4 sm:h-5 w-full max-w-2xl rounded-md mb-2.5 bg-white/10" />
        <Skeleton className="h-4 sm:h-5 w-4/5 max-w-xl rounded-md mb-8 sm:mb-10 bg-white/10" />

        {/* CTA Buttons Skeleton */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full mb-10 sm:mb-16">
          <Skeleton className="h-12 sm:h-14 w-40 sm:w-48 rounded-full bg-brand-primary/40" />
          <Skeleton className="h-12 sm:h-14 w-40 sm:w-48 rounded-full bg-white/15" />
          <Skeleton className="h-12 sm:h-14 w-40 sm:w-48 rounded-full bg-emerald-500/20" />
        </div>
      </div>

      {/* Main Showreel Video Placeholder Skeleton */}
      <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 p-2 sm:p-3 bg-brand-navy/60 mb-12 sm:mb-16">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center">
          <Skeleton className="w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-primary/40 border-2 border-white/30" />
          </div>
        </div>
      </div>

      {/* Cards Grid Skeleton */}
      <div className="w-full max-w-7xl mx-auto mb-12">
        <div className="flex flex-col items-center mb-8">
          <Skeleton className="h-5 w-32 rounded-full mb-3 bg-brand-primary/20" />
          <Skeleton className="h-8 w-64 rounded-xl bg-white/15" />
        </div>
        <CardSkeleton count={3} />
      </div>
    </div>
  );
};
