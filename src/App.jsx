import React, { useContext } from "react"
import { ThemeContext, ThemeProvider } from "./context/Theme-Context"
import ThemeBtn from "./components/Theme-btn"
import CardComponent from "./components/Card-component"
function App() {
  const ThemeContext = useContext(ThemeContext)
  console.log("Theme Context: ", ThemeContext)

  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <CardComponent/>

          </div>
        </div>
      </div>
    </ThemeProvider>
    
  )
}

export default App
