import React from 'react'
import { Card } from './Cards.styles'
import Image from 'next/image'
import { Icon } from './Cards.styles'
import Arrows from "../../assets/images/arrow.svg"
import { LearnMore } from './Cards.styles'
import { motion } from 'framer-motion'
const Cards = (data) => {
    const styles = {
  type: "styles",
  backgroundColor: "#fff",
  border: "none",
  textAlign: "left"
}
    return (
        <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    style={styles}
  >
   <Card>
            <Icon><Image src={data.url}alt='Icon'/></Icon>
            <h2>{data.Title}</h2>
            <p>{data.details}</p>
            <LearnMore>
            <a>{data.link}</a> 
        <Image src={Arrows}alt=''/>
            </LearnMore>
        </Card>
  </motion.button>
     
    )
}

export default Cards
