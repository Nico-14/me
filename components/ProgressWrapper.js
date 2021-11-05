import { useEffect, useState } from 'react';

export default function ProgressWrapper({ children, time = 10000, intervalMs = 10 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((progress) => {
        const newProgress = Math.min(1, (progress * time + intervalMs) / time);
        if (newProgress >= 1) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  console.log(progress);

  return <>{children(progress)}</>;
}
