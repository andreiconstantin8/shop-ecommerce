import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
 url(https://wallpapercave.com/wp/wp4021536.jpg) center;
 display:flex;
 align-items:center;
 justify-content:center;
 background-size:cover;
`;

const Wrapper = styled.div`padding:20px;
width:25%;
background-color:white;
${mobile({ width:"75%"})}`;

const Form = styled.form`display:flex;
flex-direction:column;
`;

const Title = styled.h1`font-size:24px;
font-weight:300`;

const Input = styled.input`flex:1;
min-width:40%
margin:10px 0px;
padding:10px;`;

const Button = styled.button`width:40%;
border:none;
margin:10px 0px;
padding:15px 20px;
background-color:teal;
font-color:white;
cursor:pointer;`;

const Link = styled.a`margin:10px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;`;


const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"></Input>
                <Input placeholder="password"></Input>
                <Button>LOGIN</Button>
                <Link>Don't remember the password?</Link>
                <Link>Create a new Account</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
