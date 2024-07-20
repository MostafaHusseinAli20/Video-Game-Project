import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import Home from "./Pages/Home";
import Details from './Pages/Details';
import { useState } from "react";
import {ThemeContext} from './context/ThemeContext';

function App() {
  const [theme , setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{theme , setTheme}}>
    <div className={`${theme} ${theme==='dark' ? 'bg-[#121212]' : null}
    `}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detailGame/:id" element={<Details/>}/>
      </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;