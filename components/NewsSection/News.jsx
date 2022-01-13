import React from 'react'
import NewCards from './NewCards'
import Thumbnail1 from "../../assets/images/thumbnail1.png"
import Thumbnail2 from "../../assets/images/thumbnail2.png"
import Thumbnail3 from "../../assets/images/thumbnail3.png"
import { NewsCardWrapper, NewsCardHolder, NewsCardHeading } from './News.styles'
import { Button } from '../Atoms/Button/Button.styles'
import Arrows from "../../assets/images/arrow.svg"
import Image from 'next/image'

export const TopHeading =(prop)=>{
    return(
        <NewsCardHeading>
            <h3>{prop.textTitle}</h3>
            <p>{prop.description}</p>
            </NewsCardHeading>

    )

}

const News = () => {
    return (
        <NewsCardWrapper>
            <div className="container">
                <TopHeading textTitle="News" description="Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult."/>
                <NewsCardHolder>
                    <NewCards img={Thumbnail1} date="17 Apr 2020" text="Come On In. The Water’s Fine (Mostly)."/>
                    <NewCards img={Thumbnail2} date="17 Apr 2020" text="Trump Lays Plans to Reverse Obama’s Climate Change Legacy"/>
                    <NewCards img={Thumbnail3} date="17 Apr 2020" text="How a Little Bit of Hydra Regrows a Whole Animal"/>
                </NewsCardHolder>
                <Button large>Join Here <Image src={Arrows}alt='Arrow'/></Button>
            </div>
        </NewsCardWrapper>
    )
}

export default News
