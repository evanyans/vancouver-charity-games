import React from 'react'
import gamers from '../images/gamers.png';
import foodbank from '../images/foodbank.png';
import redcross from '../images/redcross.png';
import hospital from '../images/hospital.png';
import dots from '../images/dots.png';
import styled from 'styled-components';
import CountUp from 'react-countup';

const Home = () => {

    return (
        <>
            <img className="gamer" src={gamers} alt="Logo" />
            <Head>
                <Title>Vancouver <br></br><div className="gradient">Charity</div> Games</Title>
                <Subtit>Current: 2022 Summer League of Legends Tournament<div className="sub">August 5th-7th, 12-3PM PST</div></Subtit>
                <Register>Register Now</Register>
                <Stats>
                    <Charity>
                        <CountUp end={600} duration={1.2} />+
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
            </Head>
            <Body>
                <Shapes>
                    <Rectangle>
                        <Topic>What we do</Topic>
                        <TitleText>Game for a Cause</TitleText>
                        <BodyText>Vancouver Charity Games is a not-for-profit organization founded in 2021 with the purpose of supporting local charities through video game tournaments.
                            <br></br><br></br>
                            Our group of organizers know all too well the power video games have on bringing people of countless backgrounds together in the name of a shared interest: from the countless attendees at eSports competitions to its growing usage in education, video games continue to grow in popularity and application today with no evidence of stopping.
                            <br></br><br></br>
                            Following its explosive growth, our group of friends wondered how we could cultivate our shared interest for video games into something bigger than ourselves. And so, Vancouver Charity Games was born, with the goal of using our shared interest for the purpose of benefiting our community. Through our events, we hope to bring people together to play the games they love while simultaneously raising awareness and funds for the charities we support, fulfilling our mission of cultivating our love for video games into something more - a way to better our communities.
                        </BodyText>
                    </Rectangle>
                    <Boxes>
                        <Donate>
                            <ContentA><Circle><img className="foodbank" src={foodbank} alt="foodbank" /></Circle><ContentText>Greater Vancouver Food Bank<br></br><span>$230 Raised</span></ContentText></ContentA>
                        </Donate>
                        <Donate>
                            <ContentA><Circle><img className="redcross" src={redcross} alt="redcross" /></Circle><ContentText>Canadian Red Cross<br></br><span>$185 Raised</span></ContentText></ContentA>
                        </Donate>
                        <Donate><ContentA><Circle><img className="hospital" src={hospital} alt="hospital" /></Circle><ContentText>BC Children's Hospital<br></br><span>$265 Raised</span></ContentText></ContentA></Donate>
                    </Boxes>
                </Shapes>
            </Body>


        </>
    )

}

export default Home;

export const Head = styled.div`
    text-align:center;
    
`

export const Title = styled.div`
    padding-top:150px;
    font-weight:800;
    color:white;
    font-size: 90px;
    position:auto;
    text-align:center;
    @media only screen and (max-width: 600px) {
    font-size:70px;
    padding-top:80px;
}       
`

export const Subtit = styled.div`
    color:white;
    text-align:center;
    font-weight:500;
    font-size:22px;
    padding-top:22px;
    .sub{
        font-weight:200;
    }
    @media screen and (max-width: 678px) {
        font-size:19px;
    }
`

export const Register = styled.button`
    background:none;
    border-radius:4px;
    margin-top:78px;
    color:#F5DFFF;
    border:solid 2px;
    padding: 13px 50px;
    font-size:20px;

    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background:#F5DFFF;
        color:#0D0C0C;
        border:solid 2px #F5DFFF;
        cursor:pointer;
    
    }
    @media screen and (max-width: 600px) {
        margin-top:40px;
    }

`

export const Stats = styled.div`
display:flex;
justify-content:center;
gap:1rem;
margin-top: 49px;
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
    }

`
export const Arrows = styled.div`
    @media screen and (max-width: 600px) {
        padding-bottom:100px;
        position:relative;
    }
`

export const Body = styled.div`
    margin: auto;
    margin-top:301px;
    width: 100%;
    max-width: 1224px;

`
export const Rectangle = styled.div`
    display:flex;
    flex-direction:column;  
    justify-content:left;
    flex-shrink:1;
    align-items:flex-start;
    border-radius: 30px 30px 0px 0px;
    max-width:1200px;
    height:900px;
    background: rgba(237, 223, 255,0.37);
    z-index:-10;

    padding-top:4rem;
    padding-left:4rem;
    padding-right:4rem;
    
    @media screen and (max-width: 531px) {
        padding-right:4rem;
        margin-top:0px;
        padding-top:2rem;
    }
    @media screen and (min-width: 600px) {
        padding-right:4rem;
        padding-top:2rem;
    }
    @media only screen and (min-width: 1048px) {
        margin-top:0;
    padding-right:9rem;
    padding-top:4rem;
    }
    @media only screen and (min-width: 1200px) {
        margin-top:0;
    padding-right:9rem;
    padding-top:4rem;
    }

`

export const Topic = styled.div`

    font-size:24px;
    font-weight:600;
    color:#C549FF;
`

export const TitleText = styled.div`
    font-weight:600;
    font-size:48px;
`

export const BodyText = styled.div`
    margin-top:25px;
    font-size:18px;

    @media screen and (max-width: 600px) {
        margin-top:10px;
        font-size:16px;
    }
`

export const Shapes = styled.div`
    display:flex;


`
export const Boxes = styled.div`
    display:flex;
    flex-direction:column;
    gap:28px;

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
    @media only screen and (max-width: 1048px) {
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