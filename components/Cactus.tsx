
import React from 'react';

interface CactusProps {
  weekNumber: number;
  positionClass: string; // Tailwind class for horizontal positioning, e.g., 'left-[20%]'
}

const Cactus: React.FC<CactusProps> = ({ weekNumber, positionClass }) => {
  return (
    <div
      className={`absolute ${positionClass} flex flex-col items-center z-0`}
      role="img"
      aria-label={`Cactus for Week ${weekNumber}`}
    >
      {/* Week title displayed above the cactus */}
      <div className="text-sm md:text-base font-semibold text-gray-700 mb-2 whitespace-nowrap select-none">
        Week {weekNumber}
      </div>
      {/* Simple cactus shape using nested divs */}
      <div className="w-6 h-12 bg-green-700 rounded-t-lg relative shadow-md">
        {/* Left arm of the cactus */}
        <div className="absolute -left-4 top-4 w-4 h-8 bg-green-700 rounded-r-lg"></div>
        {/* Right arm of the cactus */}
        <div className="absolute -right-4 top-6 w-4 h-8 bg-green-700 rounded-l-lg"></div>
      </div>
    </div>
  );
};

export default Cactus;