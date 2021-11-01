import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
const Container = styled.div`flex:1;
display:flex;
${mobile({ flexDirection:"column"})}`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;
const Center = styled.div`flex:1;
padding:20px;
${mobile({display:"none"})}`;

const Right = styled.div`flex:1;
padding:20px;
${mobile({ backgroundColor:"#fff8f8"})}`;

const Logo = styled.h1``;

const Desc = styled.p`margin:20px 0px`;

const SocialContainer = styled.div`display:flex;
`;

const Title = styled.h3`
margin-bottom:30px;
`;

const List = styled.ul`
margin:0;
padding:0;
list-style=none;
display:flex;
flex-wrap:wrap;
`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`;


const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props => props.color};
display:flex;
align-items:center;
margin-right:20px;
`;

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;`;

const Payment = styled.image`
width:50%
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Clothing Evolution</Logo>

                <Desc>
                    The Clothing House where you can find a various clothes for both men and woman
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook></Facebook>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram ></Instagram>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter></Twitter>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest></Pinterest>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>
                        Home
                    </ListItem>
                    <ListItem>
                        Cart
                    </ListItem>
                    <ListItem>
                        Man Fashion
                    </ListItem>
                    <ListItem>
                        Woman Fashion
                    </ListItem>
                    <ListItem>
                        Accessories
                    </ListItem>
                    <ListItem>
                        My Account
                    </ListItem>
                    <ListItem>
                        Order Tracking
                    </ListItem>
                    <ListItem>
                        WhishList
                    </ListItem>
                    <ListItem>
                        Terms
                    </ListItem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}} />
                    Street nr.8 , Timisoara , RO
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}} />
                   + 4 0723 512 341
                   <Phone/>  + 4 0723 312 341
                </ContactItem>
                <ContactItem>
                 <Mail style={{marginRight:"10px"}} /> clothing.evolution@yahoo.com
                </ContactItem>
                <Payment>
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png"></img>
                    </Payment>
            </Right>
        </Container>
    )
}

export default Footer