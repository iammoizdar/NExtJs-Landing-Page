import React from 'react'
import { StyledBanner } from './Banner.styles'
import Image from 'next/image'
import HerobannerImg from "../../assets/images/banner-image.png"
import { BannerImage } from './Banner.styles'
import { BannerHeading } from './Banner.styles'
import { Button } from '../Atoms/Button/Button.styles'
import { BannerWrapper } from './Banner.styles'
import { Headingwrapper } from './Banner.styles'
import facebook from "../../assets/images/facebook.png"
import Twitter from "../../assets/images/twitter.png"
import Instagram from "../../assets/images/Instagram.png"
import WhiteArrow from "../../assets/images/whitearrow.svg"
import Link from 'next/link'
const Herobanner = () => {
return (
<StyledBanner>
    <BannerWrapper>
        <BannerHeading>
            <div className="container">
                <Headingwrapper>
                    <h1>We Help To <span>Build</span><br /> Your Dream</h1>
                    <p>We are always availed to consult on taking your higher <br /> education to the next level so you
                        can
                        stay
                        competitive <br /> in the global world. We welcome the opportunity to <br /> work with you
                        &quot;today&quot; for &quot;tomorrow&apos;s&quot; better career <br /> solutions.</p>
                    <Button>Apply  <Image src={WhiteArrow}alt=''/> </Button>
                       
                     
                    <div className="icons">     
                      <Link href="/" passHref>
          <Image src={facebook}alt=''/>
                    
        </Link>
                      <Link href="/" passHref>
          <Image src={Twitter}alt=''/>
                    
        </Link>
                      <Link href="/" passHref>
          <Image src={Instagram}alt=''/>
                    
        </Link>
                   
                    
                     </div>
                </Headingwrapper>
            </div>
        </BannerHeading>
    </BannerWrapper>
    <BannerImage>
        <Image src={HerobannerImg} alt="" />
    </BannerImage>
</StyledBanner>
)
}

export default Herobanner