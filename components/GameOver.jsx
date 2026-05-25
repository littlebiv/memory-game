import RegularButton from './RegularButton'


export default function GameOver({handleClick}) {

    return (
        <div className="wrapper erapper--accent">
            <p classNamee="p--large">You've matched all the memory cards!</p>
            <RegularButton handleClick={handleClick}>
            Play again
            </RegularButton>
        </div>
    )
}