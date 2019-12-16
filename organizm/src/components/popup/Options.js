import React, {useContext} from 'react';
import { ThemeContext } from '../../context/theme-context';

export default function Options(props) {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <div>
            <ul>
                <li>Theme toggle 
                    <button value="dark" onClick={toggleTheme}>Dark</button>
                    <button value="normal" onClick={toggleTheme} >Normal</button>
                </li>
                <li>Clear database</li>
            </ul>
        </div>
    )
}
