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

import message_fr from './components/Langues/fr.json'
import message_en from './components/Langues/en.json'
import { IntlProvider } from 'react-intl';

const messages = {
  fr: message_fr,
  en: message_en,
}

export const ThemeContext = createContext(null)

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"))
    document.body.classList.toggle('theme-light', theme === 'dark');

  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <IntlProvider locale='fr' messages={messages['fr']} >

        <div className='App' id={theme}>
          <Cursor />

          <Navbar />

          <AnimatePresence  >
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} className='page' />
              <Route path="/about" element={<About />} className='page' />
              <Route path="/home" element={<Home />} className='page' />
              <Route path="/contact" element={<Contact />} className='page' />
            </Routes>
          </AnimatePresence>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />

        </div>
      </IntlProvider>

    </ThemeContext.Provider>

  );
}

export default App;
