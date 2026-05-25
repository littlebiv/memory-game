import RegularButton from './RegularButton'
import { data } from '../data/data'

export default function Form({ handleSubmit , handleFormChange}) {
    return (
        <div className="form container">
            <form className="wrapper">
                <div className="form__inner-container">
                    <label htmlFor="category">Choose a category:</label>
                    <div className="form__inner-container">
                    <select name="category" id="category" onChange={handleFormChange} defaultValue="animals-and-nature">
                        {data.category.map(({ name, value }) => (
                            <option key={value} value={value}>{name}</option>
                        ))}
                    </select>
                    </div>
                </div>
                <div className="form__inner-container">
                    <label htmlFor="number">Choose the number of cards:</label>
                    <div className="form__inner-container">
                    <select name="number" id="number" onChange={handleFormChange} defaultValue="10">
                        {data.number.map(({ name, value }) => (
                            <option key={value} value={value}>{name}</option>
                        ))}
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