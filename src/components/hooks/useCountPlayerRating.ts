import { useState } from "react";

export const useCountPlayerRating = () => {
  const [rating, setRating] = useState(0);

  const countRatings = () => {
    const baseOdds = 20;
    const formFactor = (Math.floor(Math.random() * 10) + 1) * 5;
    const appearanceFactor = (Math.floor(Math.random() * 5) + 1) * 10;
  
    setRating(Math.min(baseOdds + formFactor + appearanceFactor, 100));
  }



  return { rating, countRatings };
};
