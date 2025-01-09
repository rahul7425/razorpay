import React, { useEffect, useState, useRef } from 'react';

// Custom Hook for Counter Animation
const useCounter = (targetValue: number, delay: number, duration: number, start: boolean): number => {
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    if (!start || targetValue === 0) return; // Start animation only when triggered

    const divisions = duration / delay;
    const increment = targetValue / divisions;

    let currentIteration = 0;
    const intervalId = setInterval(() => {
      currentIteration++;
      const nextValue = Math.min(currentValue + increment * currentIteration, targetValue);
      setCurrentValue(nextValue);

      if (nextValue >= targetValue) clearInterval(intervalId);
    }, delay);

    return () => clearInterval(intervalId);
  }, [targetValue, delay, duration, start]);

  return currentValue;
};

// Counter Component
interface CounterProps {
  value: number | string; // Accepts number or string
}

const Counter: React.FC<CounterProps> = ({ value }) => {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const duration = 1000; // 1 second
  const delay = 10; // 10ms
  const numericValue = typeof value === 'string' ? parseFloat(value) : value; // Convert string to number if necessary

  const animatedValue = useCounter(numericValue, delay, duration, start);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // Ensure the animation runs only once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <span>{Math.round(animatedValue)}</span>
    </div>
  );
};

export default Counter;
