import RegularButton from './RegularButton'

export default function Form({ handleSubmit , handleFormChange}) {
    return (
        <div className="form container">
            <form className="wrapper">
                <div className="form__inner-container">
                    <label htmlFor="category">Choose a category:</label>
                    <div className="form__inner-container">
                    <select name="category" id="category" onChange={handleFormChange}>
                        <option value="animals-and-nature">Animals and Nature</option>
                        <option value="food-and-drink">Food and Drink</option>
                        <option value="travel-and-places">Travel and Places</option>
                        <option value="objects">Objects</option>
                        <option value="symbols">Symbols</option>
                    </select>
                    </div>
                </div>
                <div className="form__inner-container">
                    <label htmlFor="number">Choose the number of cards:</label>
                    <div className="form__inner-container">
                    <select type="number" name="number" id="number" onChange={handleFormChange} >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                    </div>
                </div>
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}