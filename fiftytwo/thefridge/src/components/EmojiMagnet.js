import React from 'react'

export default function EmojiMagnet(props) {
    return (
        <div className="EmojiMagnet" aria-label={props.emoji}>
            <svg className="EmojiMagnet__icon">
                <use xlinkHref={`./images/symbol-defs.svg#icon-${props.emoji}`}></use>
            </svg>
        </div>
    )
}