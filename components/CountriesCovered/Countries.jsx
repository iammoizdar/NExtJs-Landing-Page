import React from 'react'
import Cards from '../Cards'
import CountryPic1 from "../../assets/images/Country1.png"
import CountryPic2 from "../../assets/images/Country2.png"
import CountryPic3 from "../../assets/images/Country3.png"
import { CountriesWrapper } from './Countries.styles'
const Countries = () => {
    return (
        <CountriesWrapper>
          <Cards url={CountryPic1} Title="Study in Australia" details="Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."/>  
          <Cards url={CountryPic2} Title="Study in Canada" details="Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."/>  
          <Cards url={CountryPic3} Title="Study in Uk" details="Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."/>  
        </CountriesWrapper>
    )
}

export default Countries
