import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <Text>
                <ul>
                    <li className="left">© 2022 Vancouver Charity Games.</li>
                    <li className="center">Built & Designed by Evan Yan</li>
                    <li className="right">what</li>
                </ul>
            </Text>
        </Wrapper>
    )
}

export default Footer;

export const Wrapper = styled.div`
    display:flex;
    background:black;
    height:50px;
    z-index:999;
    justify-content:center;

`

export const Text = styled.div`
    *{
        font-family: 'IBM Plex Mono', monospace;
    }
    
    color:white;
    font-size:14px;
    font-weight:400;

    ul {
        list-style:none;
    }

    .left{
        flex:1;
        align-items:center;
        justify-content:flex-start;
        
    }
    .center{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    
`