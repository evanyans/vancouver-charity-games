import React from 'react'
import styled from 'styled-components'
import reaper from '../images/reaper.svg'
import mysteries from '../images/mysteries.png'
const Sponsor = () => {
  return (
    <Wrapper>
      <Text data-aos="fade-up">
        <Title>Sponsor Us</Title>
        <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet justo donec enim diam vulputate ut pharetra sit. Dictum fusce ut placerat orci nulla. Egestas congue quisque egestas diam in arcu cursus euismod. </Body>
        <a href = "http://palmer.wellesley.edu/~aschultz/w06/math19/homeworks_etc/Homework3_solns.pdf" target ="_blank"><SponsorP>Sponsorship Package</SponsorP></a>
      </Text>
      <PastSponsors data-aos="fade-up"> 
        <Past>Past Sponsors</Past>
        <Cards>
          <Card>
            <img className="mystery" src={mysteries} alt="gamers" />
            <CardText>
            <a href = "https://vancouvermysteries.com/" target ="_blank"><SponsorName>Vancouver Mysteries</SponsorName></a>
              <SponsorText>Your mystery unfolds on the streets of downtown Vancouver in Vancouver Mysteries’ outdoor games. Our outdoor mystery games are 100% unique outdoor adventure experiences, built in Vancouver for Vancouver. Other companies license an app and bring it to Vancouver or sweep into town with an outdoor crime-solving game or city hunt for one day and then move on to the next town. Those are fun too! But not the same thing. Vancouver Mysteries are real-life adventures set specifically in Vancouver – you don’t download an app or look at screens while you play and the city plays such a big role in all of our games that the only place you can play them is right here.</SponsorText>
            </CardText>
          </Card>
        </Cards>
      </PastSponsors>

    </Wrapper>
  )
}

export default Sponsor

export const Wrapper = styled.div`
`
export const Text = styled.div`
  padding-top:80px;
  display:flex;
  flex-direction:column;
  text-align:center;
  gap:1rem;
`
export const Title = styled.div`
  align-self:center;
  font-weight:700;
  font-size:66px;
`

export const Body = styled.div`
align-self:center;
  max-width:910px;
  font-size:20px;
`

export const SponsorP = styled.button`
    background:#AD00FF;
    border-radius:8px;
    padding: 15px 50px;
    margin-bottom:20px;
    margin-top:10px;
    font-size:19px;
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

export const PastSponsors = styled.div`
  background:white;
  max-width:1200px;
  margin-top:50px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom:200px;
  border-radius:8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  
  display:flex;
  flex-direction:column;
  text-align:center;
  

`

export const Past = styled.div`
padding-top:40px;
  font-weight:700;
  font-size:66px;
`

export const Cards = styled.div`
  padding-top:100px;
  display:flex;
  flex-direction:column;
  padding-left:150px;
  padding-right:120px;
`

export const Card = styled.div`
display:flex;
  align-self:flex-start;
  .mystery{
    width:200px;
  }
`

export const CardText = styled.div`
  display:flex;
  flex-direction:column;
  padding-left:50px;
  text-align:left;
  a{
    text-decoration: underline;
    color:#C549FF;
  }
`

export const SponsorName = styled.div`
  font-weight:700;
  font-size:36px;
  transition: all 0.2s ease-in-out;
  &:hover{
    transition: all 0.2s ease-in-out;
    color:#ff2a8e;
    text-decoration: underline #ff2a8e;
  }

`

export const SponsorText =styled.div`
  padding-top:10px;
  font-size:18px;
  line-height:1.5rem;
`