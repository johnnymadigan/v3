import { useCallback, useEffect, useRef, useState } from "react";

export const useStartTextAnimation = (
  text: string,
  speed: number = 0.3,
  isPlayOnRender: boolean = false
) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const frameRef = useRef<number | null>(null);
  const [currentWord, setCurrentWord] = useState(text);

  const startAnimation = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      setCurrentWord(text);
    }

    let iteration = 0;

    const animate = () => {
      const newWord = text
        .split("")
        .map((letter, index) => {
          // return the original letters as we iterate
          if (index < iteration) return text[index];

          // always return space when there is a space
          if (letter.trim() === "") return " ";

          // the randomized letter
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      setCurrentWord(newWord);

      if (iteration < text.length) {
        iteration += speed;
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [speed, text]);

  useEffect(() => {
    if (isPlayOnRender) startAnimation();

    // Clean up
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isPlayOnRender, startAnimation]);

  return { currentWord, startAnimation };
};
