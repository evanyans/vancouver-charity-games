import React from 'react'
import styled from 'styled-components'
import { FaDiscord } from 'react-icons/fa'
import { BsInstagram, BsTwitch } from 'react-icons/bs'

const Footer = () => {
    return (
        <Wrapper>
            <Text>
                <div className="left">© 2022 Vancouver Charity Games.</div>
                <div className="center">Built & Designed by Evan Yan</div>
                <div className="right">
                    <a href="https://www.instagram.com/vancharitygames/" target="_blank"><BsInstagram size={18}/></a>
                    <a href="https://discord.gg/K8Ax5vQKEZ" target="_blank"><Discord size={20} /></a>
                    <a href="https://www.twitch.tv/vancouvercharitygames?tt_content=twitch_logo&tt_medium=embed" target="_blank"><BsTwitch size={18}/></a>
                </div>
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
    margin-top:auto;
    
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
        a{
            text-decoration:none;
            color:white;

        }


    }
    @media only screen and (max-width: 600px) {
    font-size:10px;
}


    
`

export const Discord = styled(FaDiscord)`
    margin-right:3%;
    margin-left:3%;
`
