import React from 'react'
import CountUp from 'react-countup';
import styled from 'styled-components'
import gamers from '../images/gamers.png';
import foodbank from '../images/foodbank.png';
import redcross from '../images/redcross.png';
import hospital from '../images/hospital.png';
import { NavLink as Link } from 'react-router-dom';
const HomeV2 = () => {
    return (
        <Wrapper>
            <Title>
                <TitleText>Vancouver <div className="gradient">Charity</div> Games</TitleText>
                <SubText>Current: 2022 Summer League of Legends Tournament<br></br>August 5th-7th, 12-3PM PST</SubText>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeo7b6DGC0ja79YbVNGNs9FcJwWaDHs5dLSO0xpP8_FL_duoQ/viewform" target="_blank"><Register>Register Now</Register></a>
                <Stats>
                    <Charity>
                        $<CountUp end={600} duration={1.2} />+
                        <div className="subtext">Raised for Charity</div>
                    </Charity>
                    <Line></Line>
                    <Players>
                        <CountUp end={200} duration={1.2} />+
                        <div className="subtext">Participants</div>
                    </Players>
                </Stats>
                <Arrows>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Arrows>
            </Title>
            <Sub>
                <Text>
                    <Topic>What we do</Topic>
                    <Cause>Game for a Cause</Cause>
                    <BodyText>Vancouver Charity Games is a not-for-profit organization founded in 2021 with the purpose of supporting local charities through video game tournaments.
                        <br></br><br></br>
                        Our group of organizers know all too well the power video games have on bringing people of countless backgrounds together in the name of a shared interest: from the countless attendees at eSports competitions to its growing usage in education, video games continue to grow in popularity and application today with no evidence of stopping.
                        <br></br><br></br>
                        Following its explosive growth, our group of friends wondered how we could cultivate our shared interest for video games into something bigger than ourselves. And so, Vancouver Charity Games was born, with the goal of using our shared interest for the purpose of benefiting our community. Through our events, we hope to bring people together to play the games they love while simultaneously raising awareness and funds for the charities we support, fulfilling our mission of cultivating our love for video games into something more - a way to better our communities.
                    </BodyText>
                    <Link to="/events"><Events>View Events &gt;</Events></Link>
                    <NavLink to="/about">About Us &gt; </NavLink>
                </Text>
                <Boxes>
                    <Donate>
                        <ContentA><Circle><img className="foodbank" src={foodbank} alt="foodbank" /></Circle><ContentText>Greater Vancouver Food Bank<br></br><span>$230 Raised</span></ContentText></ContentA>
                    </Donate>
                    <Donate>
                        <ContentA><Circle><img className="redcross" src={redcross} alt="redcross" /></Circle><ContentText>Canadian Red Cross<br></br><span>$185 Raised</span></ContentText></ContentA>
                    </Donate>
                    <Donate><ContentA><Circle><img className="hospital" src={hospital} alt="hospital" /></Circle><ContentText>BC Children's Hospital<br></br><span>$265 Raised</span></ContentText></ContentA></Donate>
                </Boxes>
            </Sub>
        </Wrapper>
    )
}

export default HomeV2

export const Wrapper = styled.div`
    
`

export const Title = styled.div`
    background-image: url(${gamers});
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    background-size:cover;
    
    text-align:center;
    color:white;
    padding-top:80px;
    padding-bottom:140px;
`

export const TitleText = styled.div`
    font-weight:700;
    font-size:70px;
    max-width:600px;
    margin-left:auto;
    margin-right:auto;
@media only screen and (max-width: 600px) {
    font-size:40px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 font-size:70px;
}


`

export const SubText = styled.div`
    margin-top:10px;
    font-size:18px;
    font-weight:300;
    
@media only screen and (max-width: 600px) {
    font-size:15px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 font-size:18px;
}
`

export const Register = styled.button`
    background:none;
    border-radius:4px;
    margin-top:50px;
    color:#F5DFFF;
    border:solid 2px;
    padding: 13px 50px;
    font-size:18px;

    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background:#F5DFFF;
        color:#0D0C0C;
        border:solid 2px #F5DFFF;
        cursor:pointer;
    
    }
@media only screen and (max-width: 600px) {
    font-size:15px;
    padding: 10px 45px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 font-size:18px;
 padding: 13px 50px;
}
`

export const Stats = styled.div`
display:flex;
justify-content:center;
gap:1rem;
margin-top: 30px;
margin-right:35px;
`

export const Charity = styled.div`
    color:#FBF0FF;
    font-size:25px;
    font-weight:700;
    text-align:right;
    .subtext{
        font-weight:300;
        font-size:16px;
        color:#E0E0E0;
    @media only screen and (max-width: 600px) {
    font-size:14px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 font-size:16px;
}
    }

`

export const Line = styled.div`
    display:inline;
    border-left: 1px solid #CBCBCB;
    height: 63px;
`

export const Players = styled.div`
    color:#FBF0FF;
    font-size:25px;
    font-weight:700;
    text-align:left;
    .subtext{
        font-weight:300;
        font-size:16px;
        color:#E0E0E0;
        @media only screen and (max-width: 600px) {
    font-size:14px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
 font-size:16px;
}
    }

`

export const Sub = styled.div`
    display:flex;
    flex-direction:row;
`

export const Text = styled.div`
    background: rgba(237, 223, 255,0.37);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-top-left-radius:15px;
    border-top-right-radius:15px;
    max-width:900px;
    margin-left:auto;
    margin-right:auto;
    text-align:left;
    
    margin-top:4%;
    
    padding-top:4%;
    padding-left:4%;
    padding-right:165px;
    padding-bottom:10%;
    @media only screen and (max-width: 1607px) {
    padding-right:4%;
}


`

export const Boxes = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    
    position:relative;
    right:300px;
    margin-top:100px;

`

export const Topic = styled.div`
      font-size:30px;
    font-weight:600;
    color:#C549FF;
    @media only screen and (max-width: 600px) {
      font-size:20px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  font-size:30px;

}


`

export const Cause = styled.div`
    font-weight:700;
    font-size:46px;
    @media only screen and (max-width: 600px) {
      font-size:36px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  font-size:46px;

}

`

export const BodyText = styled.div`
    margin-top:20px;
    font-size:18px;
    line-height:1.6rem;
    @media only screen and (max-width: 600px) {
      font-size:14px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  font-size:18px;

}


`

export const Donate = styled.span`

    width:430px;
    height:130px;
    border-radius:10px;
    background-color:white;
    border: solid 1px #0D0C0C;
    
    position:relative;
    left:-80px;
    top:100px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    display:flex;
    flex-direction:row;
    @media only screen and (max-width: 1607px) {
    display:none;
}

@media only screen and (min-width: 1200px) {
    flex-direction:row;
}

`

export const ContentA = styled.div`
    display:flex;
    flex-direction:row;
.foodbank{
    width:70px;
    padding-top:18px;
}
.redcross {
    width:80px;
    padding-top:9px;
}
.hospital {
    width:110px;
    padding-top:12px;
    padding-right:3px;
}
`

export const Circle = styled.span`
    background:#F3F3F3;
    width:100px;
    height:100px;
    display:block;
    border-radius:50%;
    text-align:center;

    margin-top:15px;
    margin-left:20px;
`

export const ContentText = styled.div`
    margin-top:32px;
    margin-left:20px;
    color:#777777;
    span{
        font-weight:600;
        font-size: 30px;
        color:black;
    }


`

export const Events = styled.button`
    background:#0E0E0E;
    border-radius:4px;
    margin-top:40px;
    color:white;
    padding: 13px 50px;
    font-size:18px;
    border:none;
    text-decoration:none;
    font-weight:500;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background:#C549FF;
        color:#ffffff;
        border:none;
        cursor:pointer;
    
    }
    @media only screen and (max-width: 600px) {
      font-size:15px;
      padding: 13px 45px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  font-size:18px;
  padding: 13px 50px;
}

`

export const NavLink = styled(Link)`
  text-decoration:none;
  color:#0E0E0E;
  font-weight:600;
  font-size:19px;
  transition: all 0.2s ease-in-out;
  padding-left:30px;
  &:hover{
    color:#C549FF;
    transition: all 0.2s ease-in-out;
  }
  @media only screen and (max-width: 600px) {
font-size:15px;
padding-left:15px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
font-size:19px;
}
`

export const Arrows = styled.div`
      @media only screen and (max-width: 600px) {
        display:none;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
font-size:19px;
}
`