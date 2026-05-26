import { useEffect, useState } from "react"
import { fetchEmojisByCategory } from "../api/emojis"
import { INITIAL_FORM_DATA } from "../data/data"
import { buildShuffledDeck } from "../utils/deck"

export function useMemoryGame() {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA)
    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setEmojisData] = useState([])
    const [flippedIndices, setFlippedIndices] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const [isGameOver, setIsGameOver] = useState(false)
    const [error, setError] = useState(null)

    const pairCount = Number(formData.number) / 2

    useEffect(() => {
        if (matchedCards.length === pairCount && emojisData.length > 0) {
            setIsGameOver(true)
        }
    }, [matchedCards, pairCount, emojisData.length])

    function handleFormChange(e) {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setError(null)
    }

    async function startGame(e) {
        e?.preventDefault?.()
        setError(null)
        setFlippedIndices([])
        setMatchedCards([])
        setIsGameOver(false)

        try {
            const data = await fetchEmojisByCategory(formData.category)
            setEmojisData(buildShuffledDeck(data, pairCount))
            setIsGameOn(true)
        } catch (err) {
            setError(err.message || "Could not start the game. Please try again.")
            console.error(err)
        }
    }

    function turnCard(name, index) {
        if (matchedCards.includes(name)) return

        if (flippedIndices.length === 0) {
            setFlippedIndices([index])
            return
        }

        if (flippedIndices.length === 1) {
            const firstIndex = flippedIndices[0]
            if (firstIndex === index) return

            const firstName = emojisData[firstIndex]?.name
            setFlippedIndices([firstIndex, index])

            setTimeout(() => {
                if (firstName === name) {
                    setMatchedCards((prev) => [...prev, name])
                }
                setFlippedIndices([])
            }, 700)
        }
    }

    function resetGame() {
        setIsGameOver(false)
        setIsGameOn(false)
        setEmojisData([])
        setFlippedIndices([])
        setMatchedCards([])
    }

    return {
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
    }
}
