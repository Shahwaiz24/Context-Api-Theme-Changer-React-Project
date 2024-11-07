import React, { useContext, useEffect, useState } from "react"
import {Provider } from "./context/Theme-Context"
import ThemeBtn from "./components/Theme-btn"
import CardComponent from "./components/Card-component"
function App() {
  const [themeMode, setDark] = useState(
    JSON.parse(localStorage.getItem("dark")) || "light"
  );
  const setDarktheme = () => {
    setDark("dark")
    console.log("ThemeMode : ", themeMode);
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)

  },[themeMode]);
  return (
    <Provider value={{themeMode,setDark}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <CardComponent />

          </div>
        </div>
      </div>
    </Provider>

    
  )
}

export default App
