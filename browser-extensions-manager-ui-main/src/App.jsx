// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Filters from './components/Filters/Filters';
import Card from './components/Card/Card';
import useLocalStorage from 'use-local-storage';

export default function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const [filter, setFilter] = useState("all");
  
  return (
    <div className='App' data-theme={isDark ? "dark": "light"}>
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <Filters filter={filter} setFilter={setFilter} />
      <Card filter={filter} />
    </div>
  );
}