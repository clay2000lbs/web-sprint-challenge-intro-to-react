// Write your Character component here
import React, {useEffect, useState} from "react";
import axios from 'axios';

const Character = () => {
    const [charactersName, setCharactersName] = useState([])
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
            .then(response => {
                console.log(response)
                setCharactersName(response.data)
            })
            .catch(error => console.log(error))
    }, [])
    





    return (
        <div>
            {charactersName.map(character => <div>{character.name}</div>)}
        </div>
    )
}

export default Character;