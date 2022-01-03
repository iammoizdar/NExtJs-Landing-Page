import React from 'react'
import { ServicesWrapper } from './OurServices.styles'
import ServicesCardsSection from '../ServicesCardsSection'
const OurServices = () => {
    return (
        <ServicesWrapper>
            <h3>Our Services</h3>
            <p className='servicespargraph'>Executive Trade International is an University Application Centre, guiding Pakistani <br /> students to Australian, British, Canadian and Irish universities!</p>

            <ServicesCardsSection/>
        </ServicesWrapper>
    )
}

export default OurServices
