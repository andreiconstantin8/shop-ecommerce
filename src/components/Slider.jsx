import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { mobile } from '../responsive';
import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { sliderItems } from '../data';
const Container = styled.div`
width:100%;
height:100vh;
display:flex;
overflow:hidden;
background-color:white;
${mobile({ display:"none"})}
`;

const Arrow = styled.div`
height:50px;
width:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
bottom:0;
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;`;
;

const Wrapper = styled.div`
display:flex;
height:100%;
transition: all 1.5s ease;
transform:translateX(${props => props.slideIndex * -100}vw)`;

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props => props.bg};
`;

const ImgContainer = styled.div`
flex:1;
height:100%;
`;
const Image = styled.img`
height:80%;
`;

const InfoContainer = styled.div`
flex:1;
`;
const Title = styled.h1`font-size:70px;`;

const Desc = styled.h1`margin:50px 0px;
font-size:20;
font-weight:500;
letter-spacing:3px;`;

const Button = styled.h1`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer`;


export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {

        if (direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 :2)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")} >
                <ArrowLeftOutlined></ArrowLeftOutlined>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img}></Image>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>
                               {item.title}
                            </Title>
                            <Desc>
                               {item.desc}
                            </Desc>
                            <Button>
                                SHOP NOW
                            </Button>
                        </InfoContainer>
                    </Slide>
                ))}


            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")} >
                <ArrowRightOutlined></ArrowRightOutlined>
            </Arrow>
        </Container>
    )
}
