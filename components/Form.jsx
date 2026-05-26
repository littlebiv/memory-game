import { GAME_OPTIONS } from "../data/data"
import RegularButton from "./RegularButton"

export default function Form({ formData, handleSubmit, handleFormChange, error }) {
    return (
        <div className="form container">
            <form className="wrapper" onSubmit={handleSubmit}>
                {error && <p className="form__error">{error}</p>}
                <div className="form__inner-container">
                    <label htmlFor="category">Choose a category:</label>
                    <div className="form__inner-container">
                        <select
                            name="category"
                            id="category"
                            value={formData.category}
                            onChange={handleFormChange}
                        >
                            {GAME_OPTIONS.category.map(({ name, value }) => (
                                <option key={value} value={value}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form__inner-container">
                    <label htmlFor="number">Choose the number of cards:</label>
                    <div className="form__inner-container">
                        <select
                            name="number"
                            id="number"
                            value={formData.number}
                            onChange={handleFormChange}
                        >
                            {GAME_OPTIONS.number.map(({ value }) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
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
