import './App.css';
import {useState} from 'react'
import React from 'react'
import WeatherApplication from './components/WeatherApp/WeatherApp'

export default function App() {
  return (
    <div className="card-container">
      <WeatherApplication />
    </div>
  );
}

