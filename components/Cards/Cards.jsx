import React from 'react'
import { Card } from './Cards.styles'
import Image from 'next/image'
import { Icon } from './Cards.styles'
import Arrows from "../../assets/images/arrow.svg"
import { LearnMore } from './Cards.styles'

const Cards = (data) => {
    return (
        <Card>
            <Icon><Image src={data.url}alt='Icon'/></Icon>
            <h2>{data.Title}</h2>
            <p>{data.details}</p>
            <LearnMore>
            <span>{data.link}</span> <Image src={Arrows}alt=''/>
            </LearnMore>
        </Card>
    )
}

export default Cards
