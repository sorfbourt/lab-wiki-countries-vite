import React from 'react'

import { Link } from "react-router-dom";

function CountriesList({countries}) {
  return (
    <div>
        {
            countries.map(country =>{
               return <p><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} width="30"></img><br/><Link to={country.alpha3Code} key={country.alpha3Code}> {country.name.common}</Link></p>
            })
        }


    </div>
  )
}

export default CountriesList