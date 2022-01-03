import React from 'react'
import Cards from '../Cards'
import Icon1 from "../../assets/images/icon1.png"
import Icon2 from "../../assets/images/icon2.png"
import Icon3 from "../../assets/images/icon3.png"
import Icon4 from "../../assets/images/icon4.png"
import Icon5 from "../../assets/images/icon5.png"
import { CardsWrapper } from './ServicesCards.styles'
import { CardsHolder } from './ServicesCards.styles'
const ServicesCardsSection = () => {
    return (
        <CardsWrapper>
            <CardsHolder>
    <Cards url={Icon1} Title="Career Counselling" details="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta" link="Learn More"/>
    <Cards url={Icon2} Title="University Admissions"details="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta" link="Learn More"/>
    <Cards url={Icon3} Title="Visa Consultancy"details="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta" link="Learn More"/>
    </CardsHolder>
  <CardsHolder>

    <Cards url={Icon4} Title="Accommodation"details="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta" link="Learn More"/>
    <Cards url={Icon5} Title="Pre-Departure"details="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta" link="Learn More"/>
  </CardsHolder>
    </CardsWrapper>
    )
}

export default ServicesCardsSection
