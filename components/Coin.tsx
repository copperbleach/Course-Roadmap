
import React, { useState } from 'react';

interface CoinProps {
  id: string;
  initialCollected: boolean;
  positionClass: string; // Tailwind class for horizontal positioning, e.g., 'left-[25%]'
}

const Coin: React.FC<CoinProps> = ({ id, initialCollected, positionClass }) => {
  const [isCollected, setIsCollected] = useState(initialCollected);

  // Function to toggle the collected status of the coin
  const handleDoubleClick = () => {
    setIsCollected((prev) => !prev);
  };

  return (
    <div
      className={`absolute ${positionClass} w-6 h-6 rounded-full cursor-pointer flex items-center justify-center
        ${isCollected ? 'bg-yellow-400 shadow-yellow-500/50' : 'bg-gray-400 shadow-gray-500/50'}
        transition-colors duration-200 ease-in-out transform hover:scale-110 shadow-md
        group z-10`}
      onDoubleClick={handleDoubleClick}
      role="button"
      aria-pressed={isCollected}
      aria-label={`Task ${id} coin, currently ${isCollected ? 'collected' : 'uncollected'}. Double click to toggle.`}
      tabIndex={0} // Make the coin focusable
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleDoubleClick();
        }
      }}
    >
      {/* Tooltip that appears on hover */}
      <div
        className="absolute left-full ml-2 md:ml-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none"
        style={{ pointerEvents: 'none' }} // Prevents the tooltip from blocking interaction with elements beneath it
      >
        Task {id}
      </div>
    </div>
  );
};

export default Coin;