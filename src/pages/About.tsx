import React, { useState } from 'react'
import styled from 'styled-components'
import sombra from '../images/sombra.png';
import vectorB from '../images/vectorB.svg'
import wonyoung from '../images/wonyoung.png';
import { AiFillLinkedin } from 'react-icons/ai';
import vector from '../images/vector.png';
import lines from '../images/lines.svg';
import { BsDiscord } from 'react-icons/bs'
import greg from '../images/greg.png'
import edmund from '../images/edmund.png'
import josh from '../images/josh.png'
import olivia from '../images/olivia.jpg'
import evan from '../images/evan.jpg'
import cube from '../images/cube.png'
import taro from '../images/taro.jpg'
import yoda from '../images/yoda.jpg'

const About = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const [isHoveringB, setIsHoveringB] = useState(false);

  const handleMouseOverB = () => {
    setIsHoveringB(true);
  };

  const handleMouseOutB = () => {
    setIsHoveringB(false);
  };
  const [isHoveringC, setIsHoveringC] = useState(false);

  const handleMouseOverC = () => {
    setIsHoveringC(true);
  };

  const handleMouseOutC = () => {
    setIsHoveringC(false);
  };
  const [isHoveringD, setIsHoveringD] = useState(false);

  const handleMouseOverD = () => {
    setIsHoveringD(true);
  };

  const handleMouseOutD = () => {
    setIsHoveringD(false);
  };
  const [isHoveringE, setIsHoveringE] = useState(false);

  const handleMouseOverE = () => {
    setIsHoveringE(true);
  };

  const handleMouseOutE = () => {
    setIsHoveringE(false);
  };
  const [isHoveringF, setIsHoveringF] = useState(false);

  const handleMouseOverF = () => {
    setIsHoveringF(true);
  };

  const handleMouseOutF = () => {
    setIsHoveringF(false);
  };
  const [isHoveringG, setIsHoveringG] = useState(false);

  const handleMouseOverG = () => {
    setIsHoveringG(true);
  };

  const handleMouseOutG = () => {
    setIsHoveringG(false);
  };
  const [isHoveringH, setIsHoveringH] = useState(false);

  const handleMouseOverH = () => {
    setIsHoveringH(true);
  };

  const handleMouseOutH = () => {
    setIsHoveringH(false);
  };

  return (
    <Wrapper>

      <Body>
        <img className="vectorB" src={vectorB} alt="sombra" />
        <img className="vector" src={vector} alt="sombra" />
        <Text data-aos="fade-up">
          <Topic >About Us</Topic>
          <Title >Who we are</Title>
          <SubText>Vancouver Charity Games is a youth led not-for-profit organization, dedicated to providing esports opportunities to players across North America. Our video game tournaments provide fun and competitive experiences for high school and university students, while raising money for local causes. As of now we have invited over 200 participants across Canada and the United States, and raised over $750 towards charitable funds.</SubText>

        </Text>
        <img className="sombra" src={sombra} alt="sombra" />
      </Body>
      <Team>
        <TitleText data-aos="fade-down">Our Team</TitleText>
        <Cards>
        <Card data-aos="fade-down">
            <img className="edmund" src={edmund} alt="sombra" />
            <Name>Edmund Jiang</Name>
            <Position>Founder & Lead Organizer</Position>
            <Icons>

            {isHoveringB && <Tag >Souka#2099</Tag>}
              <Discord className="discord" size={28} onMouseOver={handleMouseOverB} onMouseOut={handleMouseOutB} />
            </Icons>
          </Card>
          <Card data-aos="fade-down">
            <img className="taro" src={taro} alt="sombra" />
            <Name>James Shi</Name>
            <Position>Founder & Lead Organizer</Position>
            
            <Icons>

              {isHovering && <Tag >js#8809</Tag>}
              <Discord className="discord" size={28} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
            </Icons>
          </Card>

          <Card data-aos="fade-down">
            <img className="greg" src={greg} alt="sombra" />
            <Name>Greg Eun</Name>
            <Position>Organizer</Position>
            <Icons>

              {isHoveringC && <Tag >Hyun.Eun#6600</Tag>}
              <Discord className="discord" size={28} onMouseOver={handleMouseOverC} onMouseOut={handleMouseOutC} />
            </Icons>
          </Card>
          <Card data-aos="fade-down">
            <img className="josh" src={josh} alt="sombra" />
            <Name>Josh Peng</Name>
            <Position>Organizer</Position>
            <Icons>

              {isHoveringD && <Tag >bIossom.#6619</Tag>}
              <Discord className="discord" size={28} onMouseOver={handleMouseOverD} onMouseOut={handleMouseOutD} />
            </Icons>
          </Card>
          <Card data-aos="fade-down">
            <img className="cube" src={cube} alt="sombra" />
            <Name>Ryan Busch</Name>
            <Position>Organizer</Position>
            <Icons>

              {isHoveringE && <Tag >Ze#1993</Tag>}
              <Discord className="discord" size={28} onMouseOver={handleMouseOverE} onMouseOut={handleMouseOutE} />
            </Icons>
          </Card>
          <Card data-aos="fade-down">
            <img className="yoda" src={yoda} alt="sombra" />
            <Name>Ryan Chong</Name>
            <Position>Organizer</Position>
            <Icons>

              {isHoveringF && <Tag >Canuckle#6315</Tag>}
              <Discord className="discord" size={28} onMouseOver={handleMouseOverF} onMouseOut={handleMouseOutF} />
            </Icons>
          </Card>
          <Card data-aos="fade-down">
            <img className="olivia" src={olivia} alt="sombra" />
            <Name>Olivia Wu</Name>
            <Position>Media</Position>
            <Icons>

              {isHoveringG && <Tag >yuu.#5726</Tag>}
              <Discord className="discord" size={28} onMouseOver={handleMouseOverG} onMouseOut={handleMouseOutG} />
            </Icons>
          </Card>
          <Card data-aos="fade-down">
            <img className="evan" src={evan} alt="sombra" />
            <Name>Evan Yan</Name>
            <Position>Media</Position>
            <Icons>

              {isHoveringH && <Tag >Xyeth#2720</Tag>}
              <Discord className="discord" size={28} onMouseOver={handleMouseOverH} onMouseOut={handleMouseOutH} />
            </Icons>
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
    top:60rem;
  }

`

export const Cards = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:32px;

justify-content:center;
padding-bottom:100px;
max-width:1300px;
`

export const Card = styled.span`
    position:relative;
    width:270px;
    height:365px;
    background-color:#fcf7ff;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius:10px;
    
  
    display:flex;
    flex-direction:column;
    padding-top:20px;

    img{
    
      align-self:center;
      width:200px;
      height:200px;
      border-radius:50%;
      .edmund{
        width:300px;
        height:300px;
      }
    }
    a{
      color:#1E1E1E;
      text-decoration:none;
      
      transition: all ease-in-out .2s;
      &:hover{
        transition: all ease-in-out .2s;
        color: #0A66C2;
      }
      }
`

export const Name = styled.div`
  padding-top:20px;
  padding-left:30px;
  font-weight:700;
  font-size:24px;
`

export const Position = styled.div`
  padding-left:30px;
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

@media only screen and (max-width: 600px) {
  padding-top:30px;
  padding-bottom:60px;
  padding-left:5%;
  padding-right:5%;
}


@media only screen and (min-width: 600px) {
  padding-left:50px;
}


@media only screen and (min-width: 768px) {
  padding-left:50px;
}


@media only screen and (min-width: 992px) {
  padding-left:50px;
}

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


@media only screen and (min-width: 1200px) {
  font-size:18px;
  padding-top:10px;
}
`

export const Icons = styled.div`

display:flex;
flex-direction:row;
align-items:center;
  padding-top:20px;
  padding-left:30px;
  gap:.5rem;

`

export const Discord = styled(BsDiscord)`
position:relative;
transition:all ease-in-out 0.2s;
&:hover{
  color:#7289da;
  transition:all ease-in-out 0.2s;
}
`
/*

*/

export const Tag = styled.div`
  position:absolute;
  font-size:15px;
  margin-bottom:70px;
  margin-left:0px;

  padding:5px 8px;
  background: #7289da;
  color:white;
  border-radius:10px;

  transition:all ease-in-out 0.2s;
  animation: fadeIn 0.2s;
  
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`

