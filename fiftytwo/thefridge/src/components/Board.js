import React, {useState, useEffect} from 'react';
import WordMagnet from "./WordMagnet";
import EmojiMagnet from "./EmojiMagnet";
import nouns from "../dictionaries/nouns.js"

export default function Board() {  
    const [words, setWords] = useState([]);
    const [emojis, setEmojis] = useState([]);


    const makeWordList = () => {
        let newWords = [];
        for(let i = 0; i <= 5; i++){
            // let randomNoun = nouns[Math.floor(Math.random * nouns.length)];
            // console.log(randomNoun);
            let randomNoun = nouns[i];
            console.log(randomNoun);
            newWords.push(randomNoun);
        }
        setWords(newWords);
    }

    // useEffect(() => {
    //     makeWordList();
    // }, [words]);

    return (
        <div className="Board">
            <p> The play board will appear here </p>
            <WordMagnet word="apple" />
            <EmojiMagnet emoji="angry" />
            {words.map(word => (
                <WordMagnet word={word} />))
            }
        </div>
    )
}
