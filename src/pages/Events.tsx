import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import jet from '../images/jet.svg';

import UNICEF from '../eventimages/UNICEF.png'
import redcross from '../eventimages/redcross.png'
import hospital from '../eventimages/hospital.png'
import gcfb from '../eventimages/gcfb.png'
import valoA from '../eventimages/2021summer.png'
import purple from '../eventimages/purple.png'
import leagueA from '../eventimages/2021league.png'
import leagueB from '../eventimages/2021leagueb.png'
import leagueC from '../eventimages/2022league.png'
const Events = () => {
/*<Arrow as="a" href="https://docs.google.com/forms/d/e/1FAIpQLSeo7b6DGC0ja79YbVNGNs9FcJwWaDHs5dLSO0xpP8_FL_duoQ/viewform" target="_blank">&#10230;</Arrow>*/

  return (
    <Wrapper>
      <Body >
        <Topic data-aos="fade-up">Events</Topic>
        <Title data-aos="fade-up">Current Events</Title>

      </Body>
      <img className="jet" src={jet} alt="jet" />
      <Current>

      </Current>
      <PastTitle data-aos="fade-up">
        <Text >Past Events</Text>
        <Line></Line>
      </PastTitle>
      <Past>
      <Card data-aos="fade-up">
          <Image className="leagueC"></Image>
          <Fields>
            <FirstLine>
              <Date>15-17 Aug 2022</Date>
              <Charity><img className="unicef" src={UNICEF} alt="jet" /></Charity>
            </FirstLine>
            <TagLeague>League of Legends</TagLeague>
            <Tourny>2022 Summer Tournament</Tourny>
            <Bottom>
              <BottomText>UNICEF</BottomText>
              <ArrowLink to="/2022-summer-league">&#10230;</ArrowLink>
            </Bottom>
          </Fields>
        </Card>
        <Card  data-aos="fade-up">
          <Image className="leagueB"></Image>
          <Fields>
            <FirstLine>
              <Date>27-29 Dec 2021</Date>
              <Charity><img className="unicef" src={gcfb} alt="jet" /></Charity>
            </FirstLine>
            <TagLeague>League of Legends</TagLeague>
            <Tourny>2021 Winter Tournament</Tourny>
            <Bottom>
              <BottomText>Greater Vancouver Food Bank</BottomText>
              <ArrowLink to="/2021-winter-league">&#10230;</ArrowLink>
            </Bottom>
          </Fields>
        </Card>
        <Card  data-aos="fade-up">
          <Image className="leagueA"></Image>
          <Fields>
            <FirstLine>
              <Date>4-5 Sep 2021</Date>
              <Charity><img className="redcross" src={redcross} alt="jet" /></Charity>
            </FirstLine>
            <TagLeague>League of Legends</TagLeague>
            <Tourny>2021 Summer Tournament</Tourny>
            <Bottom>
              <BottomText>Canadian Red Cross</BottomText>
              <ArrowLink to="/2021-fall-league">&#10230;</ArrowLink>
            </Bottom>
          </Fields>
        </Card>
        <Card  data-aos="fade-up">
          <Image className="valoA"></Image>
          <Fields>
            <FirstLine>
              <Date>30 Jul-1 Aug 2021</Date>
              <Charity><img className="hospital" src={hospital} alt="jet" /></Charity>
            </FirstLine>
            <TagVal>Valorant</TagVal>
            <Tourny>2021 Summer Tournament</Tourny>
            <Bottom>
              <BottomText>BC Children's Hospital</BottomText>
              <ArrowLink to="/2021-summer-val">&#10230;</ArrowLink>
            </Bottom>
          </Fields>
        </Card>
      </Past>
    </Wrapper>
  )
}

export default Events;

export const Card = styled.div`
  background-color:#FCF7FF;
  border: solid 1px #BFBFBF;
  border-radius: 10px;
  width:430px;
  height:403px;

  display:flex;
  flex-direction:column;
  .valoA{
    background-image: url(${valoA});
  }
  .leagueA{
    background-image: url(${leagueA});
  }
  .leagueB{
    background-image: url(${leagueB});
  }
  .leagueC{
    background-image: url(${leagueC});
  }
  
  
`

export const Image = styled.div`
  background-position:bottom;
  width:100%;
  height:102px;
  background-repeat: no-repeat;
  background-size:cover;
  border-top-left-radius:9px;
  border-top-right-radius:9px;
`
export const Fields = styled.div`
  padding:20px 25px;
`

export const FirstLine = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`

export const Date = styled.div`
  font-size:16px;
  font-weight:500;
  color:#959595;

  margin-top:5px;
`

export const Charity = styled.div`  
  .unicef{
    color:white;
    width:100px;
    height:auto;
  }
  .redcross{
    width:100px;
    height:auto;
  }
  .hospital{
    width:100px;
    height:auto;
  }
`

export const TagVal = styled.button`
  font-weight:500;
  font-size:16px;
  color:white;
  border:none;
  background:#dc3d4b;

  text-align:left;
  padding:5px 7px;

  margin-top:30px;

  .league{
    background-color:#003366;
  }
  .valorant{
    background-color:#dc3d4b;
  }
`
export const TagLeague = styled.button`
  font-weight:500;
  font-size:16px;
  color:white;
  border:none;
  background:#445fa5;

  text-align:left;
  padding:5px 7px;

  margin-top:30px;

  .league{
    background-color:#003366;
  }
  .valorant{
    background-color:#dc3d4b;
  }
`

export const Tourny = styled.div`
  font-weight:600;
  font-size:24px;

  margin-top:15px;
  max-width:200px;
`

export const Bottom = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:60px;
`

export const BottomText = styled.div`
  margin-top:10px;
  font-weight:500;
  font-size:16px;
`

export const Arrow = styled.button`
  font-size:32px;
  font-weight:600;
  border:none;
  background:none;
  text-decoration:none;
  color:#0D0C0C;

  transition: all ease-in-out 0.2s;
  &:hover{
    transition: all ease-in-out 0.2s;
    cursor:pointer;
    color:#C549FF;
    -webkit-transform: translateX(4px);
    -moz-transform: translateX(4px);
    -ms-transform: translateX(4px);
    -o-transform: translateX(4px);
    transform: translateX(4px);
  }
`
export const ArrowLink = styled(Link)`
  font-size:32px;
  font-weight:600;
  border:none;
  background:none;
  text-decoration:none;
  color:#0D0C0C;

  transition: all ease-in-out 0.2s;
  &:hover{
    transition: all ease-in-out 0.2s;
    cursor:pointer;
    color:#C549FF;
    -webkit-transform: translateX(4px);
    -moz-transform: translateX(4px);
    -ms-transform: translateX(4px);
    -o-transform: translateX(4px);
    transform: translateX(4px);
  }
`



export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
  background-color:#FBF0FF;
  .jet{
    position:absolute;
    right:300px;
    top:25px;
    width:250px;
    @media only screen and (max-width: 600px) {
      display:none;
}

@media only screen and (min-width: 600px) {
  display:none;

}

@media only screen and (min-width: 768px) {
  display:none;
}

@media only screen and (min-width: 992px) {
  display:none;
  
}

@media only screen and (min-width: 1200px) {
  display:flex;
}
  }
`

export const Body = styled.div`
  display:flex;
  flex-direction:column;
  background-color:#0D0C0C;
  padding-top:80px;
  padding-right:100px;
  padding-bottom:60px;



  @media only screen and (max-width: 600px) {
    
    padding-left:5%;
    padding-right:5%;
    padding-top:50px;
    padding-bottom:50px;
}

  @media only screen and (min-width: 600px) {
    padding-left:15%;

  }


`

export const Topic = styled.div`
  color:#C549FF;
  font-size:40px;
  font-weight:600;
  @media only screen and (max-width: 600px) {
    font-size:18px;
  }


  @media only screen and (min-width: 600px) {
    font-size:36px;
  }

`

export const Title = styled.div`
  color:white;
  font-size:76px;
  font-weight:700;
  @media only screen and (max-width: 600px) {
    font-size:30px;
  }

  @media only screen and (min-width: 600px) {
    font-size:66px;
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

  @media only screen and (min-width: 600px) {
    padding-left:15%;
    padding-right:100px;
  }

`

export const PastTitle = styled.div`
  padding-left:100px;
  padding-right:100px;
  @media only screen and (max-width: 600px) {
    
    padding-left:5%;
    padding-right:5%;
  }

  @media only screen and (min-width: 600px) {
    padding-left:15%;
    padding-right:100px;
  }


`

export const Text = styled.div`
    color:#0D0C0C;
  font-size:76px;
  font-weight:700;
  @media only screen and (max-width: 600px) {
    font-size:26px;
  }

  @media only screen and (min-width: 600px) {
    font-size:66px;
  }

`

export const Line = styled.div`
    position:relative;
    width:91.7%;
    height:1px;
    background-color:#C549FF;
    margin-top:10px;
`

export const Past = styled.div`
    display:flex;
  flex-direction:row;
  padding-top: 20px;
  padding-bottom: 200px;
  gap:1.5rem;
  flex-wrap:wrap;
  justify-content: flex-start;
  @media only screen and (max-width: 600px) {
    justify-content:center;
    padding-left:5%;
    padding-right:5%;
}


  @media only screen and (min-width: 600px) {
    padding-left:15%;
    padding-right:100px;
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