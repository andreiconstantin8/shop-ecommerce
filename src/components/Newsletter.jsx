import { Send } from '@material-ui/icons'
import styled from 'styled-components';
import React from 'react'
import { mobile } from '../responsive';
const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-contents:center;
flex-direction:column;
`;

const Title = styled.h1`
font-size:70px;
margin-botom:20px;
`;
const Description = styled.div`
font-size:24px;
font-weight:300px;
margin-bottom:20px;
${mobile({textAlign:"center"})}
`;
const InputContainer = styled.div`
width:50%;
height:40px;
backgound-color:white;
display:flex;
justify-content:space-between;
border: 1px solid lightgray;
${mobile({width:"80%"})}
`;
const Input = styled.input`
border:none;
flex:8;
padding-left:20px;
`;
const Button = styled.button`flex:1;
border:none;
background-color:teal;
color:white;
`;


const Newsletter = () => {
    return (
        <Container>
            <Title>
                Newsletter
            </Title>
            <Description> Get timely updates from your favorite products.
            </Description>
            <InputContainer>
            <Input placeholder="Your email.."></Input>
                <Button>
                    <Send></Send>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
