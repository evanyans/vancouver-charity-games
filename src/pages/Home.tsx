import React from 'react'
import gamers from '../images/gamers.png';
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
                <Rectangle>
                    <Topic>Topic</Topic>
                    <TitleText></TitleText>
                    <BodyText></BodyText></Rectangle>

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
        &:hover {
        transition: all 0.2s ease-in-out;
        background:#F5DFFF;
        color:#0D0C0C;
        border:solid 2px #F5DFFF;
    }
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
`

export const Body = styled.div`
    margin: auto;
    margin-top:301px;
    width: 100%;
    max-width: 1124px;

`

export const Rectangle = styled.div`
    display:flex;   
    border-radius: 30px 30px 0px 0px;
    width: 70%;
    height:1057px;
    background: rgba(237, 223, 255,0.37);
    z-index:-10;
`

export const Topic = styled.div`
    margin-left:110px;
    margin-top:80px;
    font-size:24px;
    font-weight:600;
    color:#C549FF;

`

export const TitleText = styled.div`
    
`

export const BodyText = styled.div`
    
`