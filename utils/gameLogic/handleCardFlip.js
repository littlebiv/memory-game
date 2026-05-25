export function handleCardFlip(emojiName, cardIndex, matched, flipped, setFlipped, checkForMatch) {
    if (matched.includes(emojiName)) return
    if (flipped.length > 0 && flipped[1] === cardIndex) return
    if (flipped.length >= 4) return  // Block clicks while comparing two cards

    if (flipped.length === 0) {
        setFlipped([emojiName, cardIndex])
    } else {
        // Show both cards before checking match
        setFlipped([flipped[0], flipped[1], emojiName, cardIndex])
        checkForMatch(emojiName)
    }
}
