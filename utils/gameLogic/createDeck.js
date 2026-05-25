import { shuffleDeck } from './shuffleDeck'
import getRandomEmojis from '../getRandomEmojis.js'

export function createDeck(emojiList, pairCount) {
    const selected = getRandomEmojis(emojiList, pairCount)
    const pairs = [...selected, ...selected]
    return shuffleDeck(pairs)
}
