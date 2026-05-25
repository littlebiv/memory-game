export function playAgain(setGameState, flipTimeout) {
    setGameState('form')
    if (flipTimeout) clearTimeout(flipTimeout)
}
