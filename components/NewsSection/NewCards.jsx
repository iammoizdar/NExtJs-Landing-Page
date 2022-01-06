import React from 'react'
import { NewsCard } from './News.styles'
import { Thumbnail } from './News.styles'
import { Details } from './News.styles'
import Image from 'next/image'
const NewCards = (Prop) => {
    return (
        <NewsCard>
            <Thumbnail>
                <Image src={Prop.img}alt='thumbnail'/>
            </Thumbnail>
            <Details>
            <span>{Prop.date}</span>
            <h4>{Prop.text}</h4>
            </Details>
        </NewsCard>
    )
}

export default NewCards
