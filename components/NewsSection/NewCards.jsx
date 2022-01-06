import React from 'react'
import { NewsCard } from './News.styles'
import { Thumbnail } from './News.styles'
import { Details } from './News.styles'
import Image from 'next/image'
import { motion } from 'framer-motion'
const NewCards = (Prop) => {
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
        <NewsCard>
            <Thumbnail>
                <Image src={Prop.img}alt='thumbnail'/>
            </Thumbnail>
            <Details>
            <span>{Prop.date}</span>
            <h4>{Prop.text}</h4>
            </Details>
        </NewsCard>

  </motion.button>
    )
}

export default NewCards
