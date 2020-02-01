import React from 'react';

export default function Options(props) {
    return (
        <div className="options">
            <div className="options__container">
                <button type="button" className="options__close" onClick={() => props.setShowOptions(false)}>X</button>
                <h1>Organizm</h1>
                <p className="options__welcome">A life-organizing application created by Kari Minger.</p>
                <p>This app is a work in progress, currently at version 1.0. At this point, only task list
                     functionality is available. As the app grows, like a living thing, you'll see lists, meal planning, budgeting, 
                     travel planning, habit/symptom tracking, and calendered summaries added. I hope you enjoy 
                     using this app as it evolves.</p>

                <p>Please send me a message on FaceBook via a post to my wall (if we know each other you know I 
                     don't use Messenger) or 
                     <a href="mailto:kariminger@gmail.com"> by email </a> 
                     if you have any notes for improvement. 
                </p>
            </div>
        </div>
    )
}
