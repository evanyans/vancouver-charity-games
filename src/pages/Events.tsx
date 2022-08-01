import React from 'react'
import styled from 'styled-components';
import wonyoung from '../images/wonyoung.png';
import UNICEF from '../images/UNICEF.png';
import { NavLink as Link } from 'react-router-dom';

const Events = () => {
  return (
    <Wrapper>
      <Body >
        <Topic data-aos="fade-up">Events</Topic>
        <Title data-aos="fade-up">Current Events</Title>
      </Body>
      <Current data-aos="fade-up">
        <CardCur>
          <Image></Image>
          <Tourn>2022 SUMMER LEAGUE OF LEGENDS TOURNAMENT</Tourn>
          <Date>AUG 15TH - 17TH, 12-3PM</Date>
          <Donate>PROCEEDS TO UNICEF</Donate>
          <Register>Register Now</Register>
        </CardCur>
      </Current>
      <PastTitle>
        <Text data-aos="fade-up">Past Events</Text>
        <Line data-aos="fade-up"></Line>
      </PastTitle>
      <Past data-aos="fade-up">
        <CardCur >
          <Image></Image>
          <Tourn>2021 WINTER LEAGUE OF LEGENDS TOURNAMENT</Tourn>
          <Date>DEC 27TH - 29TH, 12-3PM</Date>
          <Donate>PROCEEDS TO GREATER VANCOUVER FOOD BANK</Donate>
          <NavLink to="/2021-summer-val">Learn More</NavLink>
        </CardCur>
        <CardCur>
          <Image></Image>
          <Tourn>2021 FALL LEAGUE OF LEGENDS TOURNAMENT</Tourn>
          <Date>SEP 4TH - 5TH, 2-6PM</Date>
          <Donate>PROCEEDS TO CANADIAN RED CROSS</Donate>
          <NavLink to="/">Learn More</NavLink>
        </CardCur>
        <CardCur>
          <Image></Image>
          <Tourn>2021 SUMMER VALORANT TOURNAMENT</Tourn>
          <Date>JUL 30TH - AUG 1ST, 3-6PM</Date>
          <Donate>PROCEEDS TO BC CHILDREN'S HOSPITAL</Donate>
          <NavLink to="/">Learn More</NavLink>
        </CardCur>
      </Past>
    </Wrapper>
  )
}

export default Events;

export const Wrapper = styled.div`
  background-color:#FBF0FF;
`

export const Body = styled.div`
  display:flex;
  flex-direction:column;
  background-color:#0D0C0C;
  padding-left:100px;
  padding-top:80px;
  padding-right:100px;
  padding-bottom:60px;
  @media only screen and (max-width: 600px) {
    
    padding-left:5%;
    padding-right:5%;
    padding-top:50px;
    padding-bottom:50px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  padding-left:100px;
  padding-right:100px;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}

`

export const Topic = styled.div`
  color:#C549FF;
  font-size:40px;
  font-weight:600;
  @media only screen and (max-width: 600px) {
    font-size:18px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 font-size:36px;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
`

export const Title = styled.div`
  color:white;
  font-size:76px;
  font-weight:800;
  @media only screen and (max-width: 600px) {
    font-size:30px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 font-size:66px;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
`

export const Current = styled.div`
  display:flex;
  flex-direction:row;
  padding-top: 20px;
  padding-left:100px;
  padding-right:100px;
  padding-bottom: 20px;

  @media only screen and (max-width: 600px) {
    justify-content:center;
    padding-left:5%;
    padding-right:5%;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  padding-left:100px;
  padding-right:100px;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
`

export const CardCur = styled.div`
    position:relative;
    width:407px;
    height:520px;
    background-color:white;
    border-radius:15px;
    border: solid 1px #0D0C0C;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display:flex;
    flex-direction:column;
`

export const Image = styled.div`
  border-top-left-radius:15px;
  border-top-right-radius:15px;
  background-image: url(${wonyoung});
  background-repeat: no-repeat;
  background-size:cover;
  height:230px;
  border-bottom: solid 1px #0D0C0C;
`

export const Tourn = styled.div`
  font-size:20px;
  font-weight:700;
  text-align:center;
  padding: 15px 50px;
  border-bottom: solid 1px #0D0C0C;
`

export const Date = styled.div`
    font-size:19px;
  font-style:italic;
  text-align:center;
  padding: 15px 10px;
  border-bottom: solid 1px #0D0C0C;
`

export const Donate = styled.div`
      font-size:19px;
      font-weight:400;
  text-align:center;
  padding: 15px 30px;
  border-bottom: solid 1px #0D0C0C;
  .long{
  font-size:15px;
}
  img {
    display:inline-block;
  width: 70px;
  height: auto;
}

`

export const Register = styled.button`
    background:#AD00FF;
    border-radius:8px;
    padding: 15px 70px;
    margin-top:20px;
    margin-bottom:20px;
    font-size:20px;
    border:none;
    color:white;
    transition: all 0.2s ease-in-out;
    align-self:center;
    &:hover {
        transition: all 0.2s ease-in-out;
        background:#f5e0ff;
        border:none;
        color:#4a4949;
        cursor:pointer;
    
    }


`

export const PastTitle = styled.div`
  padding-left:100px;
  padding-right:100px;
  @media only screen and (max-width: 600px) {
    
    padding-left:5%;
    padding-right:5%;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  padding-left:100px;
  padding-right:100px;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
`

export const Text = styled.div`
    color:#0D0C0C;
  font-size:76px;
  font-weight:800;
  @media only screen and (max-width: 600px) {
    font-size:26px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 font-size:66px;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
`

export const Line = styled.div`
      position:relative;
    width:100%;
    height:2px;
    background-color:#C549FF;
    margin-top:10px;
`

export const Past = styled.div`
    display:flex;
  flex-direction:row;
  padding-top: 20px;
  padding-left:100px;
  padding-right:100px;
  padding-bottom: 200px;
  gap:2rem;
  flex-wrap:wrap;

  @media only screen and (max-width: 600px) {
    justify-content:center;
    padding-left:5%;
    padding-right:5%;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  padding-left:100px;
  padding-right:100px;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
`

export const NavLink = styled(Link)`
      background:#0D0C0C;
      text-decoration: none;
    border-radius:8px;
    padding: 15px 70px;
    margin-top:20px;
    margin-bottom:20px;
    font-size:20px;
    border:none;
    color:white;
    transition: all 0.2s ease-in-out;
    align-self:center;
    &:hover {
        transition: all 0.2s ease-in-out;
        background:#d2d2d2;
        color:#4a4949;
        border:none;
        cursor:pointer;
    
    }
`