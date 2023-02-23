import React, { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import axios from 'axios'


function CountryDetails({countries}) {
let {id} = useParams();
const [specificCountry, setSpecificCountry] = useState([])


  
useEffect(()=>{
    const fetchData = async() =>{
      const responseData = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      console.log("responseData", responseData.data)
      setSpecificCountry(responseData.data)
      console.log("specificCountry", specificCountry)
    }
    fetchData()
    
  }, [CountryDetails])


  return (
    <div>

        {countries.filter(country =>{
            return country.alpha3Code === id
        })
        .map(country =>{
            return (
                <div>

            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <ul>
            {
                country.borders.map((borderCountry, index) =>{
                    console.log(borderCountry)
                   return <li key={index}>
                    <Link to={`/${borderCountry}`}>
                       
                   {countries.map(country =>{
                    console.log(borderCountry, country.alpha3Code)
                    if(borderCountry === country.alpha3Code){
                        return country.name.common
                    }
                   })

                   }
                    
                    
                    </Link>
                   </li>
                })
                
            }
            </ul>

                
                    </div>


            )

    
        })
        
        }
    
    </div>
  )
}

export default CountryDetails