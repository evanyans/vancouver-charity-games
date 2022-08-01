import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup';

const SummervalBCH = () => {
  return (
    <Wrapper>
      <Body>
        <Topic>July 30th-August 1st</Topic>
        <Title>2021 Summer Valorant Tournament</Title>
        <Stats>
          <Money>$<CountUp end={265} duration={1} /><div className="sub">Money Raised</div></Money>
          <People><CountUp end={99} duration={1} /><div className = "sub">Participants</div></People>
          <Sponsor>wtf<div className = "sub">Sponsor</div></Sponsor>
        </Stats>
        <Winners>Winners</Winners>
        <List>
          <ul>
            <li>HEAD HUNTER - Mark Sanda</li>
            <li>yaoming - Bernard Liu</li>
            <li>Scoliosis - Arteen Mohammadi</li>
            <li>Shaquille ONeal - David Im</li>
            <li>Kumiho - Brandon Choi</li>
            <li>blossim - Joshua Peng</li>
          </ul>
        </List>
        <Back>Back</Back>
      </Body>
    </Wrapper>
  )
}

export default SummervalBCH

export const Wrapper = styled.div`
  background-color: #0D0C0C;
  display:flex;
  justify-content:center;
`

export const Body = styled.div`
  color:white;
  font-size:20px;
  padding: 5% 5%;
`
export const Topic = styled.div`
    font-size:30px;
    font-weight:600;
    color:#C549FF;
`
export const Title = styled.div`
  font-weight:800;
  font-size:56px;
  padding-bottom:25px;
  
`
export const Stats = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  gap:12%;
  font-weight:700;
  font-size:36px;
  .sub{
    font-weight:600;
    font-size:25px;
    color:#AFAFAF;
  }

  padding-bottom:25px;
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
`
export const List = styled.div`
ul{
  list-style:none;
  font-weight:300;
}
padding-bottom:80px;
  
`
export const Back = styled.div`
  padding-bottom:136px;
`
