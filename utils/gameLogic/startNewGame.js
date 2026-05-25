const EMOJI_API = 'https://emojihub.yurace.pro/api/all/category'

export async function startNewGame(e, formData, setFlipped, setMatched, setEmojis, setGameState, createDeck) {
    e.preventDefault()
    setFlipped([])
    setMatched([])

    try {
        const url = `${EMOJI_API}/${formData.category}`
        const response = await fetch(url)

        if (!response.ok) throw new Error('Failed to load emojis')

        const allEmojis = await response.json()
        const shuffledDeck = createDeck(allEmojis, formData.number/2)

        setEmojis(shuffledDeck)
        setGameState('playing')
    } catch (error) {
        alert('Could not load game. Please try again.')
        console.error(error)
    }
}
