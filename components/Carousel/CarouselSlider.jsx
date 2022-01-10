import React from 'react'
import Carousel from 'react-elastic-carousel'
import { Item } from './CarouselSlider.styles'
import Image from 'next/image'
import Image1 from "../../assets/images/slider1img.png"
import Image2 from "../../assets/images/slider2img.png"
import Image3 from "../../assets/images/slider3img.png"
import Image4 from "../../assets/images/slider4img.png"
import { CarouselWrapper } from './CarouselSlider.styles'


export const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];
const CarouselSlider = () => {
return (
<CarouselWrapper>
<h2>Featured Universities</h2>
    <Carousel itemsToShow={4} showArrows={false} enableAutoPlay={true}breakPoints={breakPoints}>
        <Item>
            <Image src={Image1} alt='' />
        </Item>
        <Item>
            <Image src={Image2} alt='' />
        </Item>
        <Item>
            <Image src={Image3} alt='' />
        </Item>
        <Item>
            <Image src={Image4} alt='' />
        </Item>
        <Item>
            <Image src={Image1} alt='' />
        </Item>
          <Item>
            <Image src={Image2} alt='' />
        </Item>
        <Item>
            <Image src={Image3} alt='' />
        </Item>
    
        <Item>
            <Image src={Image4} alt='' />
        </Item>
             <Item>
            <Image src={Image3} alt='' />
        </Item>
          <Item>
            <Image src={Image2} alt='' />
        </Item>
 <Item>
            <Image src={Image1} alt='' />
        </Item>
        <Item>
            <Image src={Image4} alt='' />
        </Item>
         <Item>
            <Image src={Image3} alt='' />
        </Item>
    </Carousel>
</CarouselWrapper>
)
}

export default CarouselSlider