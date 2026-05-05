export type Point = {
  x: number
  y: number
}

export type DirectionName = 'up' | 'down' | 'left' | 'right'

export type GameStatus = 'idle' | 'running' | 'won' | 'lost' | 'skipped'

export type SnakeGameState = {
  snake: Point[]
  food: Point
  direction: DirectionName
  status: GameStatus
  score: number
}
