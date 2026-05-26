const GAME_OPTIONS = {
    category: [
        { name: "Animals and nature", value: "animals-and-nature" },
        { name: "Food and drink", value: "food-and-drink" },
        { name: "Travel and places", value: "travel-and-places" },
        { name: "Objects", value: "objects" },
        { name: "Symbols", value: "symbols" },
    ],
    number: [
        { value: "10" },
        { value: "20" },
        { value: "30" },
        { value: "40" },
        { value: "50" },
    ],
}

const INITIAL_FORM_DATA = {
    category: GAME_OPTIONS.category[0].value,
    number: GAME_OPTIONS.number[0].value,
}

export { GAME_OPTIONS, INITIAL_FORM_DATA }
