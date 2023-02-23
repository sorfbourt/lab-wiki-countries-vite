import { useState } from 'react'


// src/App.jsx
import './App.css'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import allCountries from './countries.json'
function App() {

  const [countries, setCountries] = useState(allCountries)
  return <div className='App'>

<Navbar />
<CountriesList countries={countries}/>

  </div>
}
export default App
