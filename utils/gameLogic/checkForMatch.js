export function checkForMatch(flipped, matched, secondEmoji, setMatched, setFlipped, setFlipTimeout, delayMs) {
    const [firstEmoji] = flipped
    const isMatch = firstEmoji === secondEmoji

    const timeout = setTimeout(() => {
        if (isMatch) {
            setMatched(prev => [...prev, firstEmoji])
        }
        setFlipped([])
    }, delayMs)

    setFlipTimeout(timeout)
}
