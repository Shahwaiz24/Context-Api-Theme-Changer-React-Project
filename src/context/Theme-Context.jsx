import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    setDark: () => {
    }
});


export const Provider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext)
}
