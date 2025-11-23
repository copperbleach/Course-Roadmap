
import React from 'react';

const Player: React.FC = () => {
  return (
    <div
      className="absolute left-[5%] top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center
                 shadow-lg z-10 animate-bounce"
      aria-label="Course Player"
    >
      <span className="text-white text-xl font-bold select-none">P</span>
    </div>
  );
};

export default Player;