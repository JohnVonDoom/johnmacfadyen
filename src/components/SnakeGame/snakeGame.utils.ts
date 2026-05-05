import type { DirectionName, Point } from './snakeGame.types'

export const gridColumns = 12
export const gridRows = 18
export const foodTarget = 10

export const directions: Record<DirectionName, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
}

export const oppositeDirections: Record<DirectionName, DirectionName> = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
}

export const initialSnake: Point[] = [
  { x: 5, y: 9 },
  { x: 4, y: 9 },
  { x: 3, y: 9 },
]

export const getPointKey = ({ x, y }: Point) => `${x}-${y}`

export const isSamePoint = (first: Point, second: Point) => first.x === second.x && first.y === second.y

export const getRandomFood = (blockedCells: Point[]) => {
  const blockedKeys = new Set(blockedCells.map(getPointKey))
  const openCells: Point[] = []

  for (let y = 0; y < gridRows; y += 1) {
    for (let x = 0; x < gridColumns; x += 1) {
      const cell = { x, y }

      if (!blockedKeys.has(getPointKey(cell))) {
        openCells.push(cell)
      }
    }
  }

  return openCells[Math.floor(Math.random() * openCells.length)] ?? { x: 8, y: 9 }
}
