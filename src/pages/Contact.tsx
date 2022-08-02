import React, { useState } from 'react'
import styled from 'styled-components'

const Contact = () => {

  return (
    <Wrapper>
      <Body>
        <Title>Contact</Title>
        <Form>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <textarea rows={6} id="message" placeholder="Message"></textarea>
        </Form>
      </Body>
    </Wrapper>
  )
}

export default Contact

export const Wrapper = styled.div`
`

export const Body = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:20%;
  margin-top:5%;
`

export const Title = styled.div`
  font-weight:800;
  color:#0D0C0C;
  font-size:66px;
  padding-bottom:15px;
`

export const Form = styled.form`
  display:flex;
  flex-direction:column;
  gap:.75rem;
  width:85%;
  max-width:504px;
  
  input[type=text]{
    height:53px;
    font-size:20px;
    font-weight:300;
    background-color:#F6E2FF;
    border-radius:4px;
    border: solid 1px #0D0C0C;
    padding-left:2%;
  }
  input[type=email]{
    height:53px;
    font-size:20px;
    font-weight:300;
    background-color:#F6E2FF;
    border-radius:4px;
    border: solid 1px #0D0C0C;
    padding-left:2%;
  }
  textarea{
    padding-top:15px;
    height:281px;
    font-size:20px;
    font-weight:300;
    background-color:#F6E2FF;
    border-radius:4px;
    border: solid 1px #0D0C0C;
    padding-left:2%;
    
  }
`