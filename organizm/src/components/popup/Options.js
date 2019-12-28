import React from 'react';

export default function Options(props) {
    return (
        <div className="options">
            <div className="options__container">
                <button type="button" className="options__close" onClick={() => props.setShowOptions(false)}>X</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ullam at accusamus provident, exercitationem ex sapiente qui eum ut? 
                    Alias odit explicabo dignissimos accusamus nam fuga pariatur, eos tenetur fugiat doloremque!</p>
            </div>
        </div>
    )
}
