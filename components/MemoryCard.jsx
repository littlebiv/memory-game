import { decodeEntity } from "html-entities"
import EmojiButton from "./EmojiButton"

export default function MemoryCard({ handleClick, data, flipped, matched}) {

    const cardEl = data.map((emoji, index) =>{
        const isFirstCardFlipped = flipped.length > 0 && flipped[1] === index
        const isSecondCardFlipped = flipped.length > 3 && flipped[3] === index
        const isFlipped = isFirstCardFlipped || isSecondCardFlipped
        const isMatched = matched.includes(emoji.name)
        const cardStyle =
            isMatched ? "card-item--matched" :
            isFlipped ? "card-item--selected" :
            ""

        return(
            <li key={index} className={`card-item ${cardStyle}`}>
                <EmojiButton
                    content={decodeEntity(emoji.htmlCode[0])}
                    handleClick={() => handleClick(emoji.name, index)}
                    flipped={isFlipped}
                    matched={isMatched}
                />
            </li>
        )
    })
    return <ul className="card-container">{cardEl}</ul>
}