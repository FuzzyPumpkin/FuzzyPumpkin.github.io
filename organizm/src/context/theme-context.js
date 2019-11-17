import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [theme, setTheme] = useState("normal");
    const toggleTheme = (e) => setTheme(e.target.value);
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
};
