import { use, useEffect, useState } from 'react'
import Form from '/components/Form'
import MemoryCard from '/components/MemoryCard'
import GameOver from './components/GameOver'

export default function App() {
    const initialFormData = {
        category: "animals-and-nature",
        number: 10
    }
    const [formData, setFormData] = useState(initialFormData)

    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setEmojisData] = useState([])
    const [flippedCards, setFlippedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const [isGameOver, setIsGameOver] = useState(false)

    useEffect(() => {
        if (matchedCards.length === emojisData.length / 2 && emojisData.length > 0) {
            setIsGameOver(true)
        }
    }, [matchedCards])


    function handleFormChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
        


    function getRandom5FromList(emojiList) { //create random 5 emojis from the list of emojis
        const uniqueIndices = new Set();
        
        // Keep generating numbers until we have exactly 5 unique ones
        while (uniqueIndices.size < formData.number/2) {
            const randomIndex = Math.floor(Math.random() * emojiList.length);
            uniqueIndices.add(randomIndex); 
        }
        
        // Map the indices back to the actual emojis from your list
        const random5 = Array.from(uniqueIndices).map(index => emojiList[index]);
        
        return random5;
    }

    async function startGame(e) { //start the game, still need to create the question mark card
        e.preventDefault()
        setFlippedCards([])
        setMatchedCards([])
        try {
            const response = await fetch(`https://emojihub.yurace.pro/api/all/category/${formData.category}`)
            
            if (!response.ok) {
                throw new Error("Could not fetch data from API")
            }
            
            const data = await response.json()
            const dataSample = getRandom5FromList(data)
            dataSample.push(...dataSample) // duplicate the emojis data
            dataSample.sort(() => Math.random() - 0.5) // shuffle the emojis data
            setEmojisData(dataSample)

            setIsGameOn(true)
        } catch(err) {
            console.error(err)
        }   
    }
    
    function turnCard(name, index) {
        console.log("clicked")
        // if (matchedCards.includes(name)) return
        if (flippedCards.length === 0) {
            setFlippedCards([name, index])
        } else if (flippedCards.length === 2) {
            if (flippedCards[1] === index) return

            setFlippedCards([flippedCards[0], flippedCards[1], name, index])

            setTimeout(() => {
                if (flippedCards[0] === name) {
                    setMatchedCards(prev => [...prev, name])
                    setFlippedCards([])
                } else {
                    setFlippedCards([])
                }
            }, 700)
        }
    }

    function resetGame() { // reset the game to the initial state, and start a new game
        setIsGameOver(false)
        // // setIsGameOn(false)
        // setFlippedCards([])
        // setMatchedCards([])
        startGame(new Event("submit"))

    }
    
    return (
        <main>
            <h1>Memory Game</h1>
            {!isGameOn && <Form handleSubmit={startGame} handleFormChange={handleFormChange} />}
            {isGameOn && 
                <MemoryCard 
                    handleClick={turnCard} 
                    data={emojisData} 
                    selectedCards={flippedCards} 
                    matchedCards={matchedCards} 
                    />
                }
            {isGameOver && <GameOver handleClick={resetGame} />
            }
        </main>
        )
    }