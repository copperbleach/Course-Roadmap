
/**
 * Interface for a single coin data, including its ID, collection status, and positioning.
 */
export interface CoinData {
  id: string;
  isCollected: boolean;
  position: string; // Tailwind class for 'left-[...%]' to control horizontal position
}

/**
 * Interface for a week's data, including its number, cactus position, and associated coins.
 */
export interface WeekData {
  weekNumber: number;
  cactusPosition: string; // Tailwind class for 'left-[...%]' to control horizontal position of the cactus
  coins: CoinData[];
}
