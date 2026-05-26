import { decodeEntity } from "html-entities"
import EmojiButton from "./EmojiButton"

export default function MemoryCard({ handleClick, data, flippedIndices, matchedCards }) {
    const cardEl = data.map((emoji, index) => {
        const isSelected = flippedIndices.includes(index)
        const isMatched = matchedCards.includes(emoji.name)
        const cardStyle =
            isMatched ? "card-item--matched" :
            isSelected ? "card-item--selected" :
            ""

        return (
            <li key={index} className={`card-item ${cardStyle}`}>
                <EmojiButton
                    content={decodeEntity(emoji.htmlCode[0])}
                    handleClick={() => handleClick(emoji.name, index)}
                    selectedCardEntry={isSelected}
                    matchedCardEntry={isMatched}
                />
            </li>
        )
    })

    return <ul className="card-container">{cardEl}</ul>
}
