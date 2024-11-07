import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
    themeMode: "Light",
    setDark:()=>{}
});

export default ThemeContext.Provider;


export const ThemeProvider = ({ children }) => {
    const [themeMode, setDark] = useState(
        JSON.parse(localStorage.getItem("isDark")) || false
    );

    return (
        <ThemeContext.Provider value={{ themeMode, setDark }}>
            {children}
        </ThemeContext.Provider>
    );
    
   
};
