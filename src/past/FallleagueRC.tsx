import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup';
import { NavLink as Link } from 'react-router-dom';

const SummervalBCH = () => {

  return (
    <Wrapper>
      <Body data-aos="fade-up">
        <Topic>September 4th - 5th</Topic>
        <Title>2021 Summer League of Legends Tournament</Title>
        <Stats>
          <Money>$<CountUp end={185} duration={1} /><div className="sub">Money Raised</div></Money>
          <People><CountUp end={52} duration={1} /><div className = "sub">Participants</div></People>
          <Sponsor>Canadian Red Cross<div className = "sub">Donation</div></Sponsor>
        </Stats>
        <Winners>Winning Team: Ontario, California</Winners>
        <List>
          <ul>
            <li>Sir Darklan - Danny Kuei</li>
            <li>Mana Regen - Victor Vu</li>
            <li>Tickle My Nuts - Andre Nguyen</li>
            <li>Tokiko Zaizen - Ryan Shing</li>
            <li>Dave Le Ratte - David Vu</li>
          </ul>
        </List>
        <NavLink to ="/events">Back &gt; </NavLink>
      </Body>
    </Wrapper>
  )
}

export default SummervalBCH

export const Wrapper = styled.div`
  background-color: #0D0C0C;
  display:flex;
  justify-content:center;
  padding-top: 7%;
  padding-bottom:360px;
  @media only screen and (max-width: 600px) {
    padding-left:5%;
  padding-right:5%;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  padding-left:5%;
  padding-right:5%;
}
@media only screen and (min-width: 768px) {
padding-left:0;
padding-right:0;
}
`

export const Body = styled.div`
  color:white;
  font-size:20px;
  
  
`
export const Topic = styled.div`
    font-size:30px;
    font-weight:600;
    color:#C549FF;
@media only screen and (max-width: 600px) {
font-size:20px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
font-size:30px;
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
  font-weight:800;
  font-size:56px;
  padding-bottom:25px;
  @media only screen and (max-width: 600px) {
font-size:35px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
font-size:50px;
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
export const Stats = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  gap:9%;
  font-weight:700;
  font-size:36px;
  .sub{
    font-weight:600;
    font-size:25px;
    color:#AFAFAF;
  }
  padding-bottom:25px;

  @media only screen and (max-width: 600px) {
font-size:26px;
.sub{
  font-size:15px;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
font-size:36px;
.sub {
  font-size:25px;
}
}
`
export const Money = styled.div`

`
export const People = styled.div`
  
`
export const Sponsor = styled.div`
  
`
export const Winners = styled.div`
  font-weight:600;
  font-size:25px;
  padding-bottom:10px;
  @media only screen and (max-width: 600px) {
font-size:19px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
font-size:25px;
}
`
export const List = styled.div`
ul{
  list-style:none;
  font-weight:300;
  @media only screen and (max-width: 600px) {
font-size:16px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
font-size:18px;
}
}
padding-bottom:80px;
  
`
export const NavLink = styled(Link)`
  text-decoration:none;
  color:white;
  font-weight:600;
  font-size:25px;
  transition: all 0.2s ease-in-out;
  &:hover{
    color:#C549FF;
    transition: all 0.2s ease-in-out;
  }
  @media only screen and (max-width: 600px) {
font-size:19px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
font-size:25px;
}
`
