import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import vcg from '../images/vcg.svg';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {

  const [verified, setVerified] = useState(false)

  function onChange(value:any) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const form: any = useRef();
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm('service_9iu1tgu', 'template_sm0v77s', form.current, 'FjbSoNl0p-eInw_Hd')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <Wrapper>
      <Body>
        <Title data-aos="fade-up">Contact</Title>
        <Form ref={form} data-aos="fade-up" onSubmit={sendEmail} >
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea rows={6} id="message" placeholder="Message" name="message" required></textarea>
          <ReCAPTCHA
            sitekey="6LedFmIhAAAAAKQJAu7UU4sKasS_rgZ_o1t_ArgI"
            onChange={onChange}
          />,
          <input type="submit" value="Submit" disabled={!verified} />
        </Form>
      </Body>
      <Image> <img className="vcg" src={vcg} alt="vcg" data-aos="fade-left" /></Image>

    </Wrapper>
  )
}

export default Contact

export const Wrapper = styled.div`
.vcg{
  width:29%;
  position:absolute;
  right:0;
  top:15%;
  z-index:-10;
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
    display:block;
  }


}
`

export const Body = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:20%;
  margin-top:5%;
`

export const Title = styled.div`
  font-weight:700;
  font-size:66px;
  padding-bottom:15px;
  @media only screen and (max-width: 600px) {
    font-size:36px;
}

@media only screen and (min-width: 600px) {
}
`

export const Form = styled.form`
  display:flex;
  flex-direction:column;
  gap:.75rem;
  width:85%;
  max-width:504px;
  
  input[type=text]{
    height:53px;
    font-size:18px;
    font-weight:300;
    background-color:#F6E2FF;
    background-color:#FEFEFE;
    border-radius:4px;
    border: solid 1px #0D0C0C;
    padding-left:2%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    @media only screen and (max-width: 600px) {
    font-size:14px;
    height:40px;
}

  }
  input[type=email]{
    height:53px;
    font-size:18px;
    font-weight:300;
    background-color:#F6E2FF;
    background-color:#FEFEFE;
    border-radius:4px;
    border: solid 1px #0D0C0C;
    padding-left:2%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    @media only screen and (max-width: 600px) {
    font-size:14px;
    height:40px;
}
  }
  textarea{
    padding-top:14px;
    height:281px;
    font-size:18px;
    font-weight:300;
    background-color:#F6E2FF;
    background-color:#FEFEFE;
    border-radius:4px;
    border: solid 1px #0D0C0C;
    padding-left:2%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    @media only screen and (max-width: 600px) {
    font-size:14px;
    height:240px;
    padding-top:10px;
}
  }
  input[type=submit] {
    background:#AD00FF;
    margin-top:-30px;
    border-radius:8px;
    padding: 15px 70px;
    font-size:20px;
    border:none;
    color:white;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background:#f5e0ff;
        border:none;
        color:#4a4949;
        cursor:pointer;
        box-shadow:none;
    
    }
  }
`
export const Image = styled.div`
  padding-bottom:200px;
`