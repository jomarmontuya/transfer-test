import { useEffect, useState } from "react";

interface PriceProps {
  price: string;
}
export default function Price({ price }: PriceProps) {
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRed((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`transition ease-linear animate-color ${
        isRed ? "text-red-400" : "text-black"
      }`}
    >
      {price}
    </span>
  );
}
