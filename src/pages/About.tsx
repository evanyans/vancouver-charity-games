import React from 'react'
import styled from 'styled-components'
import sombra from '../images/sombra.png';

const About = () => {
  return (
    <Wrapper>
      <Body>
        <Text>
          <Topic>About Us</Topic>
          <Title>Who we are</Title>
          <SubText>Lorem ipsum dolor sit amet. Non voluptatem aperiam qui placeat quaerat non fugit beatae aut consequatur aperiam et fuga alias. Est velit labore 33 rerum rerum ut molestiae deleniti. Sed expedita earum non nulla velit ex eaque libero id debitis omnis. Ea placeat sequi eos facilis distinctio aut illo aliquam 33 veniam fugiat est sint dolorem ut nulla consequatur. Aut animi ipsam et nulla officiis At voluptates officiis est dolorem voluptatem et consequatur ipsum id autem natus et ducimus reprehenderit. 
            At aliquid quos quo odit iure cum nisi delectus et distinctio ipsum et debitis saepe rem tenetur tenetur eum fuga voluptatibus.</SubText>

        </Text>
        <img className="sombra" src={sombra} alt="sombra" />
      </Body>
      <Team>
        <TitleText>Our Team</TitleText>
        <Cards>
          <Card>
            <img className="sombra" src={sombra} alt="sombra" />
          </Card>
        </Cards>
      </Team>
    </Wrapper>


  )
}

export default About

export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
`

export const Team = styled.div`
  background: #FBF0FF;
  display:flex;
  flex-direction:column;
  align-items:center;

`

export const Cards = styled.div`
display:flex;
`

export const Card = styled.span`
    position:relative;
    width:311px;
    height:404px;
    background-color:#F6E2FF;
    border-radius:25px;
    border: solid 1px #0D0C0C;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display:flex;
`

export const TitleText = styled.div`
  font-weight:700;
  font-size:64px;
  padding-top:40px;
  padding-bottom:40px;
`

export const Body = styled.div`
background:#0D0C0C;
display:flex;
flex-direction:row;
.sombra{
  display:block;
  max-height:300px;
  height:auto;
  width:auto;
  align-self:flex-end;
  padding-right:300px;
  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  display:none;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  display:none;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  display:none;
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  display:block;
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
}

`

export const Text = styled.div`
  margin: auto;
    width: 100%;
    max-width: 1024px;
    padding-top:150px;
    padding-bottom:150px;
    padding-left:50px;
    padding-right:50px;

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
`