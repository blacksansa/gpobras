"use client";

import { useEffect, useMemo, useState } from "react";

export default function TypewriterText({
  text,
  speed = 26,
  startDelay = 180,
  className = "",
}) {
  const [visibleLength, setVisibleLength] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleLength(text.length);
      return undefined;
    }

    setVisibleLength(0);
    let intervalId;

    const timeoutId = window.setTimeout(() => {
      let index = 0;

      intervalId = window.setInterval(() => {
        index += 1;
        setVisibleLength(index);

        if (index >= text.length) {
          window.clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [reduceMotion, speed, startDelay, text]);

  const typedText = useMemo(() => text.slice(0, visibleLength), [text, visibleLength]);

  return (
    <span className={`typewriter ${className}`.trim()} aria-label={text}>
      <span aria-hidden="true">{typedText}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  );
}
