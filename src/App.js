import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import { Route, Routes, useLocation } from 'react-router-dom';
import './styles/page_transition.css'
import { AnimatePresence, motion as m } from 'framer-motion';
import Cursor from './components/Cursor';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import './global.scss'
import Chat from './components/Chat'

import message_fr from './components/Langues/fr.json'
import message_en from './components/Langues/en.json'
import { IntlProvider } from 'react-intl';
import gsap from 'gsap';

const messages = {
  fr: message_fr,
  en: message_en,
}

export const ThemeContext = createContext(null)

// gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"))
    document.body.classList.toggle('theme-dark', theme === 'light');

  }


  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <IntlProvider locale='en' messages={messages['en']} >
        <div className='App' id={theme}>
          <Cursor />
          <Navbar />

          <AnimatePresence  >
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} className='page' />
              <Route path="/about" element={<About />} className='page' />
              <Route path="/home" element={<Home />} className='page' />
              <Route path="/contact" element={<Contact />} className='page' />
              <Route path="/chat" element={<Chat />} className='page' />

            </Routes>
          </AnimatePresence>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />

        </div>
      </IntlProvider>

    </ThemeContext.Provider>

  );
}

export default App;
