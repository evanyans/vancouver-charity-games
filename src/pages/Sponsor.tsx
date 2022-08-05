import React from 'react'
import styled from 'styled-components'
import reaper from '../images/reaper.svg'
const Sponsor = () => {
  return (
    <Wrapper>
      <Text>
        <Title>Sponsor Us</Title>
        <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet justo donec enim diam vulputate ut pharetra sit. Dictum fusce ut placerat orci nulla. Egestas congue quisque egestas diam in arcu cursus euismod. </Body>
        <a href = "http://palmer.wellesley.edu/~aschultz/w06/math19/homeworks_etc/Homework3_solns.pdf" target ="_blank"><SponsorP>Sponsorship Package</SponsorP></a>
      </Text>
      <PastSponsors>
        <Past>Past Sponsors</Past>
      </PastSponsors>

    </Wrapper>
  )
}

export default Sponsor

export const Wrapper = styled.div`
  text-align:center;
`
export const Text = styled.div`
  padding-top:100px;
  display:flex;
  flex-direction:column;
  gap:1rem;
`
export const Title = styled.div`
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
  
`

export const Past = styled.div`
  
`