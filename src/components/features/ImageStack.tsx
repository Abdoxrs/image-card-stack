import { useState } from "react";
import { CardStack } from "../core/CardStack";
import type { StackableItem } from "../../lib/types";

interface ImageCard extends StackableItem {
  img: string;
}

const INITIAL_ITEMS: ImageCard[] = [
  { id: 1, img: "/1.avif" },
  { id: 2, img: "/2.jpg" },
  { id: 3, img: "/3.jpg" },
  { id: 4, img: "/4.jpg" },
];

export function ImageStack() {
  const [key, setKey] = useState(0);

  const handleReset = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <CardStack key={key} items={INITIAL_ITEMS}>
        {(card) => (
          <img
            src={card.img as string}
            alt="card"
            width={1000}
            height={1000}
            className="pointer-events-none h-full w-full rounded-lg object-cover"
          />
        )}
      </CardStack>

      <button className="btn" onClick={handleReset}>
        <span className="spn2">✨ RESET ✨</span>
      </button>


    </div>
  );
}
