import React from 'react'
import styled from 'styled-components'
import sombra from '../images/sombra.png';
import vectorB from '../images/vectorB.svg'
import wonyoung from '../images/wonyoung.png';
import { AiFillLinkedin } from 'react-icons/ai';
import vector from '../images/vector.png';
import lines from '../images/lines.svg';

const About = () => {

  return (
    <Wrapper>

      <Body>
      <img className="vectorB" src={vectorB} alt="sombra" />
        <img className="vector" src={vector} alt="sombra" />
        <Text data-aos="fade-up">
          <Topic >About Us</Topic>
          <Title >Who we are</Title>
          <SubText>Lorem ipsum dolor sit amet. Non voluptatem aperiam qui placeat quaerat non fugit beatae aut consequatur aperiam et fuga alias. Est velit labore 33 rerum rerum ut molestiae deleniti. Sed expedita earum non nulla velit ex eaque libero id debitis omnis. Ea placeat sequi eos facilis distinctio aut illo aliquam 33 veniam fugiat est sint dolorem ut nulla consequatur. Aut animi ipsam et nulla officiis At voluptates officiis est dolorem voluptatem et consequatur ipsum id autem natus et ducimus reprehenderit.
            At aliquid quos quo odit iure cum nisi delectus et distinctio ipsum et debitis saepe rem tenetur tenetur eum fuga voluptatibus.</SubText>

        </Text>
        <img className="sombra" src={sombra} alt="sombra" />
      </Body>
      <Team>
        <TitleText data-aos="fade-down">Our Team</TitleText>
        <Cards>
          <Card data-aos="fade-down">
            <img className="wonyoung" src={wonyoung} alt="sombra" />
            <Name>James Shi</Name>
            <Position>position</Position>
            <a href="https://www.linkedin.com/company/spacex/" target="_blank"><AiFillLinkedin size={32} /></a>
          </Card>
          <Card data-aos="fade-down">
            <img className="wonyoung" src={wonyoung} alt="sombra" />
            <Name>Edmund Jiang</Name>
            <Position>position</Position>
            <a href="https://www.linkedin.com/company/spacex/" target="_blank"><AiFillLinkedin size={32} /></a>
          </Card>
          <Card data-aos="fade-down">
            <img className="wonyoung" src={wonyoung} alt="sombra" />
            <Name>Greg __</Name>
            <Position>position</Position>
            <a href="https://www.linkedin.com/company/spacex/" target="_blank"><AiFillLinkedin size={32} /></a>
          </Card>
          <Card data-aos="fade-down">
            <img className="wonyoung" src={wonyoung} alt="sombra" />
            <Name>Josh __</Name>
            <Position>position</Position>
            <a href="https://www.linkedin.com/company/spacex/" target="_blank"><AiFillLinkedin size={32} /></a>
          </Card>
          <Card data-aos="fade-down">
            <img className="wonyoung" src={wonyoung} alt="sombra" />
            <Name>Ryan B__</Name>
            <Position>position</Position>
            <a href="https://www.linkedin.com/company/spacex/" target="_blank"><AiFillLinkedin size={32} /></a>
          </Card>
          <Card data-aos="fade-down">
            <img className="wonyoung" src={wonyoung} alt="sombra" />
            <Name>Ryan C__</Name>
            <Position>position</Position>
            <a href="https://www.linkedin.com/company/spacex/" target="_blank"><AiFillLinkedin size={32} /></a>
          </Card>
          <Card data-aos="fade-down">
            <img className="wonyoung" src={wonyoung} alt="sombra" />
            <Name>Olivia __</Name>
            <Position>position</Position>
            <a href="https://www.linkedin.com/company/spacex/" target="_blank"><AiFillLinkedin size={32} /></a>
          </Card>
        </Cards>
        <img className="lines" src={lines} alt="sombra" />
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
  z-index:9;
  .lines{
    position:absolute;
    width:800px;
    z-index:-1;
    left:-160px;
    top:73rem;
  }

`

export const Cards = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:32px;
justify-content:center;
padding-bottom:100px;
padding-left:150px;
padding-right:150px;
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
    flex-direction:column;
    padding-top:20px;
    

    img{
      align-self:center;
      width:234px;
      height:234px;
      border-radius:50%;
      border: solid 1px #0D0C0C;
    }
    a{
      color:#0D0C0C;
      text-decoration:none;
      padding-left:40px;
      padding-top:20px;
      width:21px;
      height:21px;
      &:hover{
        color:#C549FF;
      }
      }
`

export const Name = styled.div`
  padding-top:20px;
  padding-left:40px;
  font-weight:700;
  font-size:24px;
`

export const Position = styled.div`
  padding-left:40px;
  font-size:16px;
  font-style:italic;
`

export const TitleText = styled.div`
  font-weight:700;
  font-size:64px;
  padding-top:20px;
  padding-bottom:40px;
  @media only screen and (max-width: 600px) {
  font-size:40px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  font-size:64px;
}
`

export const Body = styled.div`
background:#0D0C0C;
display:flex;
flex-direction:row;
.vectorB{
  position:absolute;
  right:20rem;
  width:500px;
  top:-160px;
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
  display:block;
}

}
.vector{
  position:absolute;
  width:500px;
  top:38rem;
  left:0rem;
  @media only screen and (max-width: 600px) {
  display:none;

}

@media only screen and (min-width: 600px) {
  display:none;
  width:300px;
  top:55rem;
}

@media only screen and (min-width: 768px) {
  display:none;
  width:300px;
  top:40rem;
}

@media only screen and (min-width: 992px) {
  display:none;
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  width:500px;
  top:47rem;
  display:block;
}
}
.sombra{
  display:inline-block;
  max-height:400px;
  height:auto;
  width:auto;
  align-self:flex-end;
  position:relative;
  right:150px;
  
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
  display:none;
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  display:inline-block;
}
}`

export const Text = styled.div`
  margin: auto;
    width: 100%;
    max-width: 1024px;
    padding-top:150px;
    padding-bottom:150px;
    padding-left:150px;
    padding-right:50px;
  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  padding-top:30px;
  padding-bottom:60px;
  padding-left:5%;
  padding-right:5%;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  padding-left:50px;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  padding-left:50px;
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  padding-left:50px;
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  padding-top:150px;
  padding-left:150px;
}
`

export const Topic = styled.div`
      font-size:40px;
    font-weight:600;
    color:#C549FF;
    @media only screen and (max-width: 600px) {
  font-size:30px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  font-size:40px;
}
`

export const Title = styled.div`
  color:white;
  font-size:86px;
  font-weight:700;
  @media only screen and (max-width: 600px) {
  font-size:46px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  font-size:66px;
}
`

export const SubText = styled.div`
  color:white;
  font-size:20px;
  font-weight:300;
  line-height:2.5rem;
  @media only screen and (max-width: 600px) {
  font-size:14px;
  padding-top:5px;
  line-height:1.6rem;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  font-size:18px;
  padding-top:0px;
}
`