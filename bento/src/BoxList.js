import React from 'react';

export default function BoxList(props) {
    return (
        <div>
            <h1>BoxList</h1>
            {props.boxes.map(box => (
                <li key={box.id}>
                    {box.fruit}, {box.veg}, {box.side}, {box.main}
                </li>
            ))}
        </div>
    )
}
