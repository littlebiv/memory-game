export default function getRandomEmojis(emojiList, pairCount) {
    const uniqueIndices = new Set()

    while (uniqueIndices.size < pairCount) {
        const randomIndex = Math.floor(Math.random() * emojiList.length)
        uniqueIndices.add(randomIndex)
    }

    return Array.from(uniqueIndices).map(index => emojiList[index])
}
