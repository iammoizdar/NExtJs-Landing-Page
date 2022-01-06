import styled from "styled-components"

export const NewsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 344px;
    min-height: 406px;
    grid-gap: 14px;
    box-shadow: 10px 6px 42px 0px rgb(0 0 0 / 10%);
`
export const Thumbnail = styled.div`
    display: flex;

`
export const Details = styled.div`
    padding: 11px 8px 0 8px;
    grid-gap: 12px;
    display: flex;
    flex-direction: column;
    max-width: 280px;

    span{
        color: #565656;
        font-size: 14px;
        font-weight: 600;
    }
    h4{
        font-size: 20px;
        color: #252525;
    }
`
export const NewsCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    grid-gap: 40px;
 background: #FAFAFA;
 padding: 73px 0;
    .container{
       grid-gap: 100px;
    flex-direction: column;
    display: flex;
    align-items: center;

  
}
  
`

export const NewsCardHolder =styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 65px;
`
export const NewsCardHeading =styled.div`
   width:100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   text-align: center;


   h3{
        color: var(--secondary-text-color);
        font-size: 37px;
   }
   p{
       text-align:center;
        font-size:20px;
        color: var(--primary-text-color);
        line-height: 35px;
   }
   
`