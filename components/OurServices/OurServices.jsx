import React from 'react'
import { ServicesWrapper } from './OurServices.styles'
import ServicesCardsSection from '../ServicesCardsSection'
import { ServicesHeading } from './OurServices.styles'
import { TopHeading } from '../NewsSection/News'
const OurServices = () => {
    return (
        <ServicesWrapper>
            <div className="container">
                <ServicesHeading>    
                    <TopHeading textTitle="Our Services" description="Executive Trade International is an University Application Centre, guiding Pakistani students to Australian, British, Canadian and Irish universities!"/>      
        
</ServicesHeading> 
</div>
            <ServicesCardsSection/>
        </ServicesWrapper>
    )
}

export default OurServices
