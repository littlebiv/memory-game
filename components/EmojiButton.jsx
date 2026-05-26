export default function EmojiButton({ content, handleClick, selectedCardEntry, matchedCardEntry }) {
    const isFlipped = selectedCardEntry || matchedCardEntry
    const btnContent = isFlipped ? content : "?"
    const btnStyle =
        matchedCardEntry ? "btn--emoji btn--emoji--back--matched" :
        selectedCardEntry ? "btn--emoji btn--emoji--back--selected" :
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
