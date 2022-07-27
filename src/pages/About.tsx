import React from 'react'
import styled from 'styled-components'
import sombra from '../images/sombra.png';

const About = () => {
  return (
    <Body>
      <Text>
        <Topic>About Us</Topic>
        <Title>Who we are</Title>
        <SubText>Lorem ipsum dolor sit amet. Non voluptatem aperiam qui placeat quaerat non fugit beatae aut consequatur aperiam et fuga alias. Est velit labore 33 rerum rerum ut molestiae deleniti. Sed expedita earum non nulla velit ex eaque libero id debitis omnis. Ea placeat sequi eos facilis distinctio aut illo aliquam 33 veniam fugiat est sint dolorem ut nulla consequatur. Aut animi ipsam et nulla officiis At voluptates officiis est dolorem voluptatem et consequatur ipsum id autem natus et ducimus reprehenderit. At aliquid quos quo odit iure cum nisi delectus et distinctio ipsum et debitis saepe rem tenetur tenetur eum fuga voluptatibus. Qui reiciendis eveniet sed quasi saepe et commodi sequi nam enim laudantium.</SubText>
        <img className="sombra" src={sombra} alt="sombra" />
      </Text>
      
    </Body>

  )
}

export default About

export const Body = styled.div`
background:#0D0C0C;

`

export const Text = styled.div`
  margin: auto;
    width: 100%;
    max-width: 1024px;
    padding-top:150px;
    padding-bottom:150px;
    .sombra{
      width:800px;
      height:auto;
      position:absolute;
      top:-600px;
      left:300px;
    }

`

export const Topic = styled.div`
      font-size:40px;
    font-weight:600;
    color:#C549FF;
`

export const Title = styled.div`
  color:white;
  font-size:96px;
  font-weight:800;
`

export const SubText = styled.div`
  color:white;
  font-size:20px;
  font-weight:300;
  padding-right:300px;
`