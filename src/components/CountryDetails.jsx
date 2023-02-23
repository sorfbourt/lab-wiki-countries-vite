import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'

function CountryDetails({countries}) {
let {id} = useParams();
console.log(id)
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
                    {borderCountry}</Link>
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