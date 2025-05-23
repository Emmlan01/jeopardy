'use client';
import React, { useState } from 'react';

const categories = ['Frida', 'Gustaf', 'Paret'];
const points = [100, 200, 300, 400, 500];

export const GameBoard = ({
  onSelect,
}: {
  onSelect: (category: string, points: number) => void;
}) => {
  const [answered, setAnswered] = useState<Record<string, boolean>>({});

  const handleClick = (category: string, point: number) => {
    const key = `${category}-${point}`;
    if (answered[key]) return;
    onSelect(category, point);
    setAnswered((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="grid grid-cols-3 gap-6 w-full max-w-[1200px]">
      {categories.map((category) => (
        <div key={category} className="flex flex-col items-center w-full">
          <div className="bg-violet-500 text-white font-bold text-center w-full py-8 text-2xl rounded-lg shadow-lg">
            {category}
          </div>
          {points.map((point) => {
            const key = `${category}-${point}`;
            const isDisabled = answered[key];

            return (
              <button
                key={key}
                onClick={() => handleClick(category, point)}
                disabled={isDisabled}
                className={`text-white py-6 px-8 my-2 w-full rounded-lg text-xl font-semibold transition-all shadow-md
                  ${isDisabled
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-violet-400 hover:bg-violet-600'}
                `}
              >
                {isDisabled ? '-' : point}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};
