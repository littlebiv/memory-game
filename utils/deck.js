export function pickRandomEmojis(emojiList, pairCount) {
    const uniqueIndices = new Set()

    while (uniqueIndices.size < pairCount) {
        uniqueIndices.add(Math.floor(Math.random() * emojiList.length))
    }

    return Array.from(uniqueIndices).map((index) => emojiList[index])
}

export function shuffle(array) {
    const shuffled = [...array]

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled
}

export function buildShuffledDeck(emojiList, pairCount) {
    const pairs = pickRandomEmojis(emojiList, pairCount)
    return shuffle([...pairs, ...pairs])
}
