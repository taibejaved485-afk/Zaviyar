import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ value, className = "", duration = 2000 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse the value string:
    // Group 1: optional prefix (e.g., "$", "+")
    // Group 2: numeric value (e.g., "98", "50", "4.9")
    // Group 3: optional suffix (e.g., "%", "M+", "+", " / 5", "x")
    const match = value.match(/^([^0-9.]*)([0-9.]+)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const rawNumStr = match[2];
    const targetNum = parseFloat(rawNumStr);
    const suffix = match[3] || '';

    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    // Number of decimal places
    const decimals = rawNumStr.includes('.') ? (rawNumStr.split('.')[1] || '').length : 0;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Smooth deceleration easing (easeOutCubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;

      const formattedNum = decimals > 0 
        ? currentNum.toFixed(decimals) 
        : Math.floor(currentNum).toString();

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        const finalNum = decimals > 0 
          ? targetNum.toFixed(decimals) 
          : targetNum.toString();
        setDisplayValue(`${prefix}${finalNum}${suffix}`);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

export default AnimatedCounter;
