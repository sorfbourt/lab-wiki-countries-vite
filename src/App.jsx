import { useState } from 'react'


// src/App.jsx
import './App.css'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import allCountries from './countries.json'
import CountryDetails from './components/CountryDetails'
import { Routes, Route } from 'react-router-dom'


function App() {

  const [countries, setCountries] = useState(allCountries)
  return <div className='App'>

<Navbar />

<Routes>
  <Route path='/:id' element={<CountryDetails countries={countries}/>} />
</Routes>
<CountriesList countries={countries}/>



  </div>
}
export default App
