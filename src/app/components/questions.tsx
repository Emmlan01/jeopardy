'use client';
import React from 'react';

export const Questions = ({
  category,
  points,
  question,
  onClose,
}: {
  category: string;
  points: number;
  question: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-violet-500 text-white rounded-2xl shadow-2xl max-w-2xl w-full p-10 mx-4 text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-6">
          {category} — {points} poäng
        </h2>
        <p className="text-2xl mb-8">{question}</p>
        <button
          onClick={onClose}
          className="bg-white text-purple-700 px-6 py-3 rounded-lg font-bold text-lg hover:bg-purple-100 transition"
        >
          Stäng
        </button>
      </div>
    </div>
  );
};
