import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react'
import { portfolioLinks } from '../../data/portfolio'
import type { DirectionName, SnakeGameState } from './snakeGame.types'
import {
  directions,
  foodTarget,
  getPointKey,
  getRandomFood,
  gridColumns,
  gridRows,
  initialSnake,
  isSamePoint,
  oppositeDirections,
} from './snakeGame.utils'

const keyDirections: Partial<Record<string, DirectionName>> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
}

export function SnakeGame() {
  const [gameState, setGameState] = useState<SnakeGameState>(() => ({
    snake: initialSnake,
    food: getRandomFood(initialSnake),
    direction: 'right',
    status: 'idle',
    score: 0,
  }))

  const { snake, food, status, score } = gameState

  const foodRemaining = Math.max(foodTarget - score, 0)

  const statusMessage = {
    idle: 'press start-game or use arrows',
    running: `${foodRemaining} food ${foodRemaining === 1 ? 'dot' : 'dots'} left`,
    won: 'game complete — github unlocked',
    lost: 'snake crashed — restart?',
    skipped: 'shortcut unlocked',
  }[status]

  const changeDirection = useCallback((nextDirection: DirectionName) => {
    setGameState((currentGameState) => ({
      ...currentGameState,
      direction:
        oppositeDirections[currentGameState.direction] === nextDirection
          ? currentGameState.direction
          : nextDirection,
      status: currentGameState.status === 'idle' ? 'running' : currentGameState.status,
    }))
  }, [])

  const startGame = useCallback(() => {
    const nextSnake = [...initialSnake]

    setGameState({
      snake: nextSnake,
      food: getRandomFood(nextSnake),
      direction: 'right',
      status: 'running',
      score: 0,
    })
  }, [])

  const skipGame = useCallback(() => {
    setGameState((currentGameState) => ({
      ...currentGameState,
      status: 'skipped',
    }))
  }, [])

  useEffect(() => {
    if (status !== 'idle' && status !== 'running') {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const nextDirection = keyDirections[event.key]

      if (nextDirection) {
        event.preventDefault()
        changeDirection(nextDirection)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [changeDirection, status])

  useEffect(() => {
    if (status !== 'running') {
      return undefined
    }

    const gameLoop = window.setInterval(() => {
      setGameState((currentGameState) => {
        if (currentGameState.status !== 'running') {
          return currentGameState
        }

        const head = currentGameState.snake[0]
        const movement = directions[currentGameState.direction]
        const nextHead = {
          x: head.x + movement.x,
          y: head.y + movement.y,
        }

        const hitWall =
          nextHead.x < 0 || nextHead.x >= gridColumns || nextHead.y < 0 || nextHead.y >= gridRows
        const hitSnake = currentGameState.snake.some((segment) => isSamePoint(segment, nextHead))

        if (hitWall || hitSnake) {
          return {
            ...currentGameState,
            status: 'lost',
          }
        }

        const ateFood = isSamePoint(nextHead, currentGameState.food)
        const nextSnake = ateFood
          ? [nextHead, ...currentGameState.snake]
          : [nextHead, ...currentGameState.snake.slice(0, -1)]

        if (ateFood) {
          const nextScore = currentGameState.score + 1

          return {
            ...currentGameState,
            snake: nextSnake,
            food: getRandomFood(nextSnake),
            score: nextScore,
            status: nextScore >= foodTarget ? 'won' : currentGameState.status,
          }
        }

        return {
          ...currentGameState,
          snake: nextSnake,
        }
      })
    }, 140)

    return () => window.clearInterval(gameLoop)
  }, [status])

  const cells = useMemo(() => {
    const snakeCells = new Map(snake.map((segment, index) => [getPointKey(segment), index]))

    return Array.from({ length: gridColumns * gridRows }, (_, index) => {
      const point = {
        x: index % gridColumns,
        y: Math.floor(index / gridColumns),
      }
      const snakeIndex = snakeCells.get(getPointKey(point))
      const isSnake = snakeIndex !== undefined
      const isHead = snakeIndex === 0
      const isFood = isSamePoint(point, food)

      return {
        key: getPointKey(point),
        className: [
          'snake-cell',
          isSnake ? 'snake-cell-active' : '',
          isHead ? 'snake-cell-head' : '',
          isFood && status === 'running' ? 'snake-cell-food' : '',
        ]
          .filter(Boolean)
          .join(' '),
      }
    })
  }, [food, snake, status])

  return (
    <aside className="snake-showcase" aria-label="Interactive snake game">
      <div className="snake-console">
        <span className="console-screw console-screw-one" aria-hidden="true" />
        <span className="console-screw console-screw-two" aria-hidden="true" />
        <span className="console-screw console-screw-three" aria-hidden="true" />
        <span className="console-screw console-screw-four" aria-hidden="true" />

        <div className="snake-board-wrap">
          <div
            className="snake-board"
            role="img"
            aria-label={`Snake board. ${statusMessage}`}
            style={{ '--snake-columns': gridColumns } as CSSProperties}
          >
            {cells.map((cell) => (
              <span key={cell.key} className={cell.className} aria-hidden="true" />
            ))}
          </div>

          <button className="start-game" type="button" onClick={startGame}>
            {status === 'lost' || status === 'won' ? 'restart' : 'start-game'}
          </button>
        </div>

        <div className="snake-controls-panel">
          <div className="control-card">
            <p>// use keyboard</p>
            <p>// arrows to play</p>

            <div className="arrow-pad" aria-label="Snake direction controls">
              <button type="button" className="arrow-button arrow-up" onClick={() => changeDirection('up')}>
                ▲
              </button>
              <button
                type="button"
                className="arrow-button arrow-left"
                onClick={() => changeDirection('left')}
              >
                ◀
              </button>
              <button
                type="button"
                className="arrow-button arrow-down"
                onClick={() => changeDirection('down')}
              >
                ▼
              </button>
              <button
                type="button"
                className="arrow-button arrow-right"
                onClick={() => changeDirection('right')}
              >
                ▶
              </button>
            </div>
          </div>

          <div className="food-panel" aria-label={`${foodRemaining} food left`}>
            <p>// food left</p>
            <div className="food-dots">
              {Array.from({ length: foodTarget }, (_, index) => (
                <span
                  key={`food-${index + 1}`}
                  className={`food-dot ${index < foodRemaining ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          <p className="snake-status" aria-live="polite">
            {statusMessage}
          </p>

          <div className="snake-actions">
            {(status === 'won' || status === 'skipped') && (
              <a className="snake-link" href={portfolioLinks.github} target="_blank" rel="noreferrer">
                open github
              </a>
            )}
            <button className="skip-game" type="button" onClick={skipGame}>
              skip
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
