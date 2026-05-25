import { decodeEntity } from "html-entities"
import EmojiButton from "./EmojiButton"

export default function MemoryCard({ handleClick, data , selectedCards, matchedCards}) {

    const cardEl = data.map((emoji, index) =>{
        const isFirstCardFlipped = selectedCards[1] === index
        const isSecondCardFlipped = selectedCards.length > 3 && selectedCards[3] === index
        const isSelected = isFirstCardFlipped || isSecondCardFlipped
        const isMatched = matchedCards.includes(emoji.name)
        const cardStyle = 
            isMatched ? "card-item--matched" : 
            isSelected ? "card-item--selected" : 
            ""

        return(
            <li key={index} className={`card-item ${cardStyle}`}>
                <EmojiButton
                    content = {decodeEntity(emoji.htmlCode[0])}
                    handleClick={() => handleClick(emoji.name, index)}
                    slectedCardEntry={isSelected}
                    matchedCardEntry={isMatched}
                />
            </li>
        )
    })
    return <ul className="card-container">{cardEl}</ul>
}