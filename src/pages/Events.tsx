import React from 'react'
import styled from 'styled-components';

const Events = () => {
  return (
    <Wrapper>
        <Body>
          <Topic>Events</Topic>
          <Title>Current Events</Title>
        </Body>
    </Wrapper>
  )
}

export default Events;

export const Wrapper = styled.div`
  
`

export const Body = styled.div`
  background-color:#0D0C0C;
`

export const Topic = styled.div`
  color:#C549FF;
  font-size:40px;
  font-weight:600;
`

export const Title = styled.div`
  color:white;
  font-size:96px;
  font-weight:700;
`