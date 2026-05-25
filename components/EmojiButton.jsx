import { decodeEntity } from "html-entities"

export default function EmojiButton({ content, handleClick, flipped, matched }) {
    const isMatched = matched
    const isSelected = flipped && !matched
    const isFlipped = isSelected || isMatched
    const btnContent = isFlipped ? content : "?"
    const btnStyle =
        isMatched ? "btn--emoji btn--emoji--back--matched" :
        isSelected ? "btn--emoji btn--emoji--back--selected" :
        "btn--emoji"
    return (
        <button
            className={`btn ${btnStyle}`}
            onClick={!isFlipped ? handleClick : undefined}
            disabled={isFlipped}
        >
            {btnContent}
        </button>
    )
}