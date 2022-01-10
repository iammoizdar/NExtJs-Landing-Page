import React from 'react'
import { TestimonialsWrapper } from './Testimonials.styles'
import { TestCard } from './Testimonials.styles'
import Image from 'next/image'
import { Toptitle } from './Testimonials.styles'
import { UserIcon } from './Testimonials.styles'
import { TopHeading } from '../NewsSection/News'
import UserIcon1 from "../../assets/images/Usericon1.png"
import UserIcon2 from "../../assets/images/Usericon2.png"
import UserIcon3 from "../../assets/images/Usericon3.png"
import Carousel from 'react-elastic-carousel'
import { Item } from '../Carousel/CarouselSlider.styles'

const TestimonialbreakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 900, itemsToShow: 3 }
];
export function TestimonialsCard(testInfo) {
return (
<TestCard>
    <Toptitle>
        <UserIcon>
            <Image src={testInfo.url} alt="UserIcon" />
        </UserIcon>
        <div className="info">
            <h4>{testInfo.name}</h4>
            <span>{testInfo.job}</span>
        </div>
    </Toptitle>
    <p>{testInfo.description}</p>
</TestCard>
)
}


const Testimonials = () => {
return (
<div className="container">


    <TestimonialsWrapper>
        <TopHeading textTitle="Testimonial"
            description="Torquem detraxit hosti et quidem faciunt, ut et negent satis esse appetendum, alterum. Si sine causa? quae fuerit causa, mox videro; interea hoc epicurus in liberos." />
        <div className="TestCardHolder">
            <Carousel itemsToShow={3} showArrows={false} breakPoints={TestimonialbreakPoints}>
                <Item>
                    <TestimonialsCard url={UserIcon1} name="Harrison Phillips" job="Reporter"
                        description="Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui officia aperiam " />

                </Item>
                <Item>
                    <TestimonialsCard url={UserIcon2} name="Ainara Vergara" job="Landscape Architect"
                        description="Aut consectetur voluptas. Voluptatem minus quo voluptas in nulla iste. Fugiat alias sit sed dolorem quo. Qui praesentium et doloribus minima neque. Facere debitis sed est suscipit velit reprehenderit. Dolores aliquid dolore consequuntur ex." />

                </Item>
                <Item>
                    <TestimonialsCard url={UserIcon3} name="Niek Bove" job="Senior Developer"
                        description="Rem quia possimus eum adipisci autem aut sunt laboriosam autem. Qui soluta ut aut excepturi dolorem laborum ut. Qui alias aut provident quas illo. Eveniet debitis totam quaerat. Enim voluptatem fuga qui. Numquam iusto vero ipsa eveniet iusto." />

                </Item>
                <Item>
                    <TestimonialsCard url={UserIcon1} name="Harrison Phillips" job="Reporter"
                        description="Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui officia aperiam " />

                </Item>
                <Item>
                    <TestimonialsCard url={UserIcon2} name="Ainara Vergara" job="Landscape Architect"
                        description="Aut consectetur voluptas. Voluptatem minus quo voluptas in nulla iste. Fugiat alias sit sed dolorem quo. Qui praesentium et doloribus minima neque. Facere debitis sed est suscipit velit reprehenderit. Dolores aliquid dolore consequuntur ex." />

                </Item>
                <Item>
                    <TestimonialsCard url={UserIcon3} name="Niek Bove" job="Senior Developer"
                        description="Rem quia possimus eum adipisci autem aut sunt laboriosam autem. Qui soluta ut aut excepturi dolorem laborum ut. Qui alias aut provident quas illo. Eveniet debitis totam quaerat. Enim voluptatem fuga qui. Numquam iusto vero ipsa eveniet iusto." />

                </Item>

            </Carousel>
        </div>

    </TestimonialsWrapper>
</div>
)
}

export default Testimonials