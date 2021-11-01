import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";

const Container = styled.div`
height:60px;
${mobile({ height:"80px"})}
background-color:black;
`;
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
color:white;
${mobile({ padding:"10px 0px"})}
`;
const Left = styled.div`flex:1;
display:flex;
align-items:center;`;
const Center = styled.div`flex:1;
`;
const Right = styled.div`flex:1;
align-items:center;
display:flex;
justify-content:flex-end;
${mobile({ flex:2 ,justifyContent:"center"})}
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display:"none"})}
`;
const Logo = styled.h1`
font-weight:bold;
text-align:center;
${mobile({ fontSize:"24px"})}`;
const SearchContainer = styled.div`
border: 1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
${mobile({ width:"50px"})}
`;
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({ fontSize:"12px", marginLeft:"10px"})}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        Search here...
                        <Search style={{ color: "gray", fontSize: 16 }}>
                            <Input placeholder="Search"/>
                        </Search>
                    </SearchContainer>
                </Left>
                <Center><Logo>Clothing Evolution</Logo></Center>
                <Right>
                    <MenuItem>
                        Register</MenuItem>
                    <MenuItem>
                        Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined></ShoppingCartOutlined>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
