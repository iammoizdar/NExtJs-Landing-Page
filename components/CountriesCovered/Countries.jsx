import React from 'react'
import CountryPic1 from "../../assets/images/Country1.png"
import CountryPic2 from "../../assets/images/Country2.png"
import CountryPic3 from "../../assets/images/Country3.png"
import { CountriesWrapper,CountryDetails,CountryCard } from './Countries.styles'
import { Thumbnail } from '../NewsSection/News.styles'
import { TopHeading } from '../NewsSection/News'
import { motion } from "framer-motion"
import Image from 'next/image'


export const CountryCards =(Info)=>{
  const styles = {
  type: "styles",
  backgroundColor: "#fff",
  border: "none",
  textAlign: "left"
}
  return(

     <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    style={styles}
  >
    <CountryCard >
            <Thumbnail>
                <Image src={Info.url}alt='thumbnail'/>
            </Thumbnail>
            <CountryDetails>
            <h3>{Info.Title}</h3>
            <p>{Info.details}</p>
            </CountryDetails>
        </CountryCard>
  
  </motion.div>
  )
  }

const Countries = () => {
    return (
      <div className="container">
      <TopHeading textTitle="Countries We Covered" description="Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult."/>
        <CountriesWrapper>
          <CountryCards url={CountryPic1} Title="Study in Australia" details="Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."/>  
          <CountryCards url={CountryPic2} Title="Study in Canada" details="Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."/>  
          <CountryCards url={CountryPic3} Title="Study in Uk" details="Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."/>  
        </CountriesWrapper>
      </div>
     
    )
}

export default Countries
