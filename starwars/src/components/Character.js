// Write your Character component here
import React, {useEffect, useState} from "react";
import axios from 'axios';

const Character = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
            .then(response => {
                console.log(response)
                setCharacters(response.data)
            })
            .catch(error => console.log(error))
    })
    





    return (
        <div className="characters">
            {characters.map(character => <div>{character.name}</div>)}
        </div>
    )
}

export default Character;