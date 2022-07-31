import React from 'react'
import styled from 'styled-components';
import wonyoung from '../images/wonyoung.png';
import UNICEF from '../images/UNICEF.png';

const Events = () => {
  return (
    <Wrapper>
      <Body>
        <Topic>Events</Topic>
        <Title>Current Events</Title>
      </Body>
      <Current>
        <CardCur>
          <Image></Image>
          <Tourn>2022 SUMMER LEAGUE OF LEGENDS TOURNAMENT</Tourn>
          <Date>AUG 15TH - 17TH, 12-3PM</Date>
          <Donate>PROCEEDS GO TO UNICEF</Donate>
          <Register>Register Now</Register>
        </CardCur>
      </Current>
      <PastTitle>
        <Text>Past Events</Text>
        <Line></Line>
      </PastTitle>
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

`

export const Topic = styled.div`
  color:#C549FF;
  font-size:40px;
  font-weight:600;
`

export const Title = styled.div`
  color:white;
  font-size:76px;
  font-weight:800;
`

export const Current = styled.div`
  display:flex;
  flex-direction:row;
  padding-top: 20px;
  padding-left:100px;
  padding-right:100px;
  padding-bottom: 20px;
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
  padding: 15px 30px;
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
  padding: 15px 10px;
  border-bottom: solid 1px #0D0C0C;
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
        background:#d67eff;
        border:none;
        cursor:pointer;
    
    }

`

export const PastTitle = styled.div`
  padding-left:100px;
`

export const Text = styled.div`
    color:#0D0C0C;
  font-size:76px;
  font-weight:800;
`

export const Line = styled.div`
      position:relative;
    width:1268px;
    height:2px;
    background-color:#C549FF;
    margin-bottom:20px;
    margin-top:10px;
`