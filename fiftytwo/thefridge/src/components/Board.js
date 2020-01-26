import React, {useState} from 'react';
import WordMagnet from "./WordMagnet";
import EmojiMagnet from "./EmojiMagnet";
// import nouns from "../dictionaries/nouns.js"

export default function Board() {  
    const [words, setWords] = useState(["kitten", "party", "run"]);
    const [emojis, setEmojis] = useState(["angry", "poo"]);


    // const makeWordList = () => {
    //     let newWords = [];
    //     for(let i = 0; i <= 5; i++){
    //         let randomNoun = nouns[Math.floor(Math.random * nouns.length)];
    //         console.log(randomNoun);
    //         let randomNoun = nouns[i];
    //         console.log(randomNoun);
    //         newWords.push(randomNoun);
    //     }
    //     setWords(newWords);
    // }
    return (
        <div className="Board">
            {words.map(word => (
                <WordMagnet word={word} key={word}/>))
            }
            {emojis.map(emoji => (
                <EmojiMagnet emoji={emoji} key={emoji}/>))
            }
        </div>
    )
}
