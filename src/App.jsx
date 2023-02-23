import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import allCountries from './countries.json'
import CountryDetails from './components/CountryDetails'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'


function App() {

  const [countries, setCountries] = useState([])
  
  useEffect(()=>{
    const fetchData = async() =>{
      const responseData = await axios.get('https://ih-countries-api.herokuapp.com/countries')
      console.log("responseData", responseData.data)
      setCountries(responseData.data)
      console.log("countries", countries)
    }
    fetchData()
    
  }, [])


  console.log("countries", countries)

  return <div className='App'>

{countries ? 
<>
<Navbar />
<Routes>
  <Route path='/:id' element={<CountryDetails countries={countries}/>} />
</Routes>
<CountriesList countries={countries}/>
</>
:
"Loading"

}




  </div>
}
export default App
