import { SnakeGame } from '../SnakeGame/SnakeGame'
import { HeroIntro } from './HeroIntro'

export function Home() {
  return (
    <div className="home-content" id="hello">
      <HeroIntro />
      <SnakeGame />
    </div>
  )
}
