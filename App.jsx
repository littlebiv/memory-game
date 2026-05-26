import Form from "./components/Form"
import GameOver from "./components/GameOver"
import MemoryCard from "./components/MemoryCard"
import { useMemoryGame } from "./hooks/useMemoryGame"

export default function App() {
    const {
        formData,
        isGameOn,
        emojisData,
        flippedIndices,
        matchedCards,
        isGameOver,
        error,
        handleFormChange,
        startGame,
        turnCard,
        resetGame,
    } = useMemoryGame()

    return (
        <main>
            <h1>Memory Game</h1>
            {!isGameOn && (
                <Form
                    formData={formData}
                    handleSubmit={startGame}
                    handleFormChange={handleFormChange}
                    error={error}
                />
            )}
            {isGameOn && (
                <MemoryCard
                    handleClick={turnCard}
                    data={emojisData}
                    flippedIndices={flippedIndices}
                    matchedCards={matchedCards}
                />
            )}
            {isGameOver && <GameOver handleClick={resetGame} />}
        </main>
    )
}
