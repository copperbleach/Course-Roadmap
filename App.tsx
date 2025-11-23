
import React from 'react';
import Player from './components/Player';
import Cactus from './components/Cactus';
import Coin from './components/Coin';
import { WeekData } from './types';

// Define the static data for the roadmap, including week numbers, cactus positions, and associated coins.
const roadmapData: WeekData[] = [
  {
    weekNumber: 1,
    cactusPosition: 'left-[15%]',
    coins: [
      { id: '1.1', isCollected: false, position: 'left-[19%]' },
      { id: '1.2', isCollected: false, position: 'left-[22%]' },
      { id: '1.3', isCollected: false, position: 'left-[25%]' },
    ],
  },
  {
    weekNumber: 2,
    cactusPosition: 'left-[30%]',
    coins: [
      { id: '2.1', isCollected: false, position: 'left-[34%]' },
      { id: '2.2', isCollected: false, position: 'left-[37%]' },
      { id: '2.3', isCollected: false, position: 'left-[40%]' },
    ],
  },
  {
    weekNumber: 3,
    cactusPosition: 'left-[45%]',
    coins: [
      { id: '3.1', isCollected: false, position: 'left-[49%]' },
      { id: '3.2', isCollected: false, position: 'left-[52%]' },
      { id: '3.3', isCollected: false, position: 'left-[55%]' },
    ],
  },
  {
    weekNumber: 4,
    cactusPosition: 'left-[60%]',
    coins: [
      { id: '4.1', isCollected: false, position: 'left-[64%]' },
      { id: '4.2', isCollected: false, position: 'left-[67%]' },
      { id: '4.3', isCollected: false, position: 'left-[70%]' },
    ],
  },
  {
    weekNumber: 5,
    cactusPosition: 'left-[75%]',
    coins: [
      { id: '5.1', isCollected: false, position: 'left-[79%]' },
      { id: '5.2', isCollected: false, position: 'left-[82%]' },
      { id: '5.3', isCollected: false, position: 'left-[85%]' },
    ],
  },
  {
    weekNumber: 6,
    cactusPosition: 'left-[90%]',
    coins: [
      { id: '6.1', isCollected: false, position: 'left-[94%]' },
      { id: '6.2', isCollected: false, position: 'left-[97%]' },
      { id: '6.3', isCollected: false, position: 'left-[99.5%]' }, // Slightly adjusted for visual spacing
    ],
  },
];

const App: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {/* Application Title - Positioned for horizontal layout */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 absolute top-4 left-4 z-20" aria-label="Course Journey Title">
        Course Journey
      </h1>

      {/* Main Roadmap Container - Allows horizontal scrolling */}
      <div 
        className="w-full max-w-7xl relative overflow-x-auto rounded-lg shadow-xl bg-gradient-to-r from-gray-50 to-gray-100 p-6 my-16"
        role="region"
        aria-label="Interactive Course Roadmap"
      >
        {/* Inner track for roadmap elements to ensure sufficient horizontal space */}
        <div className="min-w-[1600px] h-64 relative">
          {/* The horizontal road line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-600 rounded-full" aria-hidden="true"></div>
          
          {/* Player character */}
          <Player />

          {/* Render cacti and coins for each week defined in roadmapData */}
          {roadmapData.map((weekData) => (
            <React.Fragment key={`week-${weekData.weekNumber}`}>
              <Cactus
                weekNumber={weekData.weekNumber}
                positionClass={weekData.cactusPosition}
              />
              {weekData.coins.map((coin) => (
                <Coin
                  key={coin.id}
                  id={coin.id}
                  initialCollected={coin.isCollected}
                  positionClass={`${coin.position} top-[calc(50%-4rem)]`} // Position coins above the road
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Instructions for interaction */}
      <div className="absolute bottom-4 text-gray-600 text-sm md:text-base text-center select-none" aria-live="polite">
        Double-click coins to mark tasks as completed!
      </div>
    </div>
  );
};

export default App;