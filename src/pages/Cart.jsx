import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

import { mobile } from '../responsive';


const Container = styled.div``;

const Wrapper = styled.div`padding:20px;
${mobile({ padding: "10px" })}`;

const Title = styled.h1`font-weight:300;
text-align:center`;

const Top = styled.div`display:flex;
align-items:center;
justify-content:space-between;
padding:20px;`;

const TopButton = styled.button`padding:10px;
font-weight:600;
cursor:pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "field" ? "black" : "transparent"};
color: ${props => props.type === "field" && "white"}`;

const Bottom = styled.div`display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}`;

const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0 10px;`;

const Info = styled.div`flex:3;`;

const Summary = styled.div`flex:1;border: 0.5px solid lightgray; border-radius:10px; padding:20px;height:50vh;`;

const Details = styled.div`padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;`;

const Product = styled.div`display:flex;justify-content:space-between;
${mobile({ flexDirection: "column" })}`;

const ProductDetail = styled.div`flex:2;
display:flex;`;
const Image = styled.img`width:200px;`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`width:20px;
height:20px;
border-radius:50%;
background-color: ${props => props.color}`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`display:flex;
flex:1;
justify-content:center;
align-items:center;
flex-direction:column;`;

const ProductAmountContainer = styled.div`display:flex;
margin-bottom:20px;
align-items:center`;

const ProductAmount = styled.div`font-size:24px;
margin:5px;
${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`font-size:30px;
font-weight:200;
${mobile({ marginBottom:"20px" })}
`;

const Hr = styled.hr`background-color:#eee;border:none;height:1px;`;

const SummaryTitle = styled.h1`font-weight:200`;

const SummaryItem = styled.div`margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"}`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;`;

const Cart = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Announcement>
            </Announcement>
            <Wrapper>
                <Title>
                    YOUR BAG
                </Title>
                <Top><TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="field">Checkout now</TopButton></Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="http://cdn.shopify.com/s/files/1/0107/9820/2938/products/gmmobile1_grande.png?v=1634756645">
                                </Image>
                                <Details>
                                    <ProductName>
                                        <b>Product</b>:<b>Jessie THUNDER SHOES</b>
                                    </ProductName>
                                    <ProductId>
                                        <b>Id:</b> 93213218321832
                                    </ProductId>
                                    <ProductColor color="black">

                                    </ProductColor>
                                    <ProductSize><b>Size:</b><b>37.5</b></ProductSize>
                                </Details></ProductDetail>
                            <PriceDetail><ProductAmountContainer>
                                <Add>  </Add>
                                <ProductAmount>2</ProductAmount>
                                <Remove></Remove></ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice></PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="http://cdn.shopify.com/s/files/1/0107/9820/2938/products/gmmobile1_grande.png?v=1634756645">
                                </Image>
                                <Details>
                                    <ProductName>
                                        <b>Product</b>:<b>Jessie THUNDER SHOES</b>
                                    </ProductName>
                                    <ProductId>
                                        <b>Id:</b> 93213218321832
                                    </ProductId>
                                    <ProductColor color="black">

                                    </ProductColor>
                                    <ProductSize><b>Size:</b><b>37.5</b></ProductSize>
                                </Details></ProductDetail>
                            <PriceDetail><ProductAmountContainer>
                                <Add>  </Add>
                                <ProductAmount>2</ProductAmount>
                                <Remove></Remove></ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice></PriceDetail>
                        </Product>
                    </Info>
                    <Summary><SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal:</SummaryItemText>
                            <SummaryItemPrice>$ 30</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping:</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText> Shipping Discount:</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>

                </Bottom>
                <Footer></Footer>
            </Wrapper >
        </Container>

    )
}

export default Cart
