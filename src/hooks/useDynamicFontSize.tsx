import { useEffect, useState } from "react";

export const useDynamicFontSize = (initialSize = 33) => {
  const [fontSize, setFontSize] = useState(initialSize);

  useEffect(() => {
    const updateFontSize = () => {
      const vh = window.innerHeight * 0.01;
      const vw = window.innerWidth * 0.01;
      setFontSize(Math.min(vh * 25, vw * 11));
    };

    updateFontSize();

    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);

  return fontSize;
};
