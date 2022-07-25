import React from 'react'
import gamers from '../images/gamers.jpg';
import styled from 'styled-components';

const Home = () => {
    return (
        <>
            <Head>
                <img className="gamer" src={gamers} alt="Logo" />
                <Title>Vancouver <br></br><div className="gradient">Charity</div> Games</Title>
            </Head>

        </>
    )
}

export default Home;

export const Head = styled.div`
    .gamer{
        position:absolute;
        height:887px;
        width:100%;
        object-fit:cover;
        z-index:-10;
        
    }
    
`

export const Title = styled.div`
    font-weight:800;
    color:white;
    font-size: 96px;
    position:auto;
    text-align:center;
    padding-top:150px;
`





