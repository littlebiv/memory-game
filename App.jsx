import { useEffect, useState } from 'react'
import Form from './components/Form'
import MemoryCard from './components/MemoryCard'
import GameOver from './components/GameOver'
import {
    createDeck,
    checkForMatch,
    handleCardFlip,
    startNewGame,
    handleCategoryChange,
    playAgain
} from './utils/gameLogic'

const FLIP_DELAY_MS = 700

export default function App() {
    const [formData, setFormData] = useState({ category: 'animals-and-nature', number: 10 })
    const [gameState, setGameState] = useState('form')
    const [emojis, setEmojis] = useState([])
    const [flipped, setFlipped] = useState([])
    const [matched, setMatched] = useState([])
    const [flipTimeout, setFlipTimeout] = useState(null)

    const isGameWon = matched.length > 0 && matched.length === emojis.length / 2

    useEffect(() => {
        if (isGameWon) {
            setGameState('over')
        }
    }, [matched, emojis])

    const handleCategoryChangeWrapper = (e) => {
        handleCategoryChange(e, setFormData)
    }

    const startNewGameWrapper = (e) => {
        startNewGame(e, formData, setFlipped, setMatched, setEmojis, setGameState, createDeck)
    }

    const checkForMatchWrapper = (secondEmoji) => {
        checkForMatch(flipped, matched, secondEmoji, setMatched, setFlipped, setFlipTimeout, FLIP_DELAY_MS)
    }

    const handleCardFlipWrapper = (emojiName, cardIndex) => {
        handleCardFlip(emojiName, cardIndex, matched, flipped, setFlipped, checkForMatchWrapper)
    }

    const playAgainWrapper = () => {
        playAgain(setGameState, flipTimeout)
    }

    return (
        <main>
            <h1>Memory Game</h1>
            {gameState === 'form' && (
                <Form handleSubmit={startNewGameWrapper} handleFormChange={handleCategoryChangeWrapper} />
            )}
            {gameState === 'playing' && (
                <MemoryCard
                    handleClick={handleCardFlipWrapper}
                    data={emojis}
                    flipped={flipped}
                    matched={matched}
                />
            )}
            {gameState === 'over' && (
                <GameOver handleClick={playAgainWrapper} />
            )}
        </main>
    )
}
