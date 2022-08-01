import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <Text>
                <div className="left">© 2022 Vancouver Charity Games.</div>
                <div className="center">Built & Designed by Evan Yan</div>
                <div className="right">what</div>
            </Text>
        </Wrapper>
    )
}

export default Footer;

export const Wrapper = styled.div`
    background:black;
    height:50px;
    z-index:999;

    padding-top:16px;
    padding-left:14px;
    padding-right:14px;

    position:sticky;
    top:100%;
`

export const Text = styled.div`
    *{
        font-family: 'IBM Plex Mono', monospace;
    }
    
    color:white;
    font-size:14px;
    font-weight:400;

    .left{
        float: left;
        width:33.33333%;
        text-align:left;
    }
    .center{
        float: left;
        width:33.33333%;
        text-align:center;
    }
    .right{
        float: left;
        width:33.33333%;
        text-align:right;
    }
    @media only screen and (max-width: 600px) {
    font-size:10px;
}


    
`