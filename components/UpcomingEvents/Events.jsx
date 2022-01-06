import React from 'react'
import { EventsWrapper } from './Events.styles'
import { EventsHeading } from './Events.styles'
import CalendarImg from "../../assets/images/Calendaricon1.png"
import CalendarImg2 from "../../assets/images/Calendaricon2.png"
import EventsCard from './EventsCard'
import { EventCardHolder } from './Events.styles'
import Carousel from 'react-elastic-carousel'
import { Item } from '../Carousel/CarouselSlider.styles'
import { TopHeading } from '../NewsSection/News'

const Events = () => {
    return (
        <EventsWrapper>
            <div className="container">
       <TopHeading textTitle="Upcoming University Events" description="Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult."/> 
<EventCardHolder>
        <Carousel itemsToShow={2} showArrows={false} enableAutoPlay={true}>
        <Item>
            <EventsCard url={CalendarImg} CardTitle="Macquarie University, Sydney, Australia" desc="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        link="Learn More" date="10:00 AM - 2:00 PM"/>
        </Item>
        <Item>
           <EventsCard url={CalendarImg2} CardTitle="Federation University, Australia" desc="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        link="Learn More" date="10:00 AM - 2:00 PM"/>
        </Item>
        <Item>
            <EventsCard url={CalendarImg} CardTitle="Macquarie University, Sydney, Australia" desc="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        link="Learn More" date="10:00 AM - 2:00 PM"/>
        </Item>
        <Item>
           <EventsCard url={CalendarImg2} CardTitle="Federation University, Australia" desc="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        link="Learn More" date="10:00 AM - 2:00 PM"/>
        </Item>
        <Item>
            <EventsCard url={CalendarImg} CardTitle="Macquarie University, Sydney, Australia" desc="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        link="Learn More" date="10:00 AM - 2:00 PM"/>
        </Item>
        <Item>
           <EventsCard url={CalendarImg2} CardTitle="Federation University, Australia" desc="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        link="Learn More" date="10:00 AM - 2:00 PM"/>
        </Item>
        <Item>
            <EventsCard url={CalendarImg} CardTitle="Macquarie University, Sydney, Australia" desc="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        link="Learn More" date="10:00 AM - 2:00 PM"/>
        </Item>
        <Item>
           <EventsCard url={CalendarImg2} CardTitle="Federation University, Australia" desc="Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        link="Learn More" date="10:00 AM - 2:00 PM"/>
        </Item>
        
        </Carousel>
       
        
        </EventCardHolder>
        </div>
        </EventsWrapper>
    )
}

export default Events
