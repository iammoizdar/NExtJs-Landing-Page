import React from 'react'
import { CardElement } from './Events.styles'
import { Head } from './Events.styles'
import { IconPic } from './Events.styles'
import { Title } from './Events.styles'
import { LastInfo } from './Events.styles'
import { LearnMore } from '../Cards/Cards.styles'
import Arrows from "../../assets/images/arrow.svg"
import Image from 'next/image'
const EventsCard = (prop) => {
return (

<CardElement>
    <Head>
        <IconPic>
            <Image src={prop.url} alt="Icon" />
        </IconPic>
        <Title>{prop.CardTitle}</Title>
    </Head>
    <p>{prop.desc}</p>
    <LastInfo>
        <LearnMore>
            <span>{prop.link}</span>
            <Image src={Arrows}alt='Arrows' />
        </LearnMore>
            <span className='date'>{prop.date}</span>
    </LastInfo>
</CardElement>
)
}

export default EventsCard