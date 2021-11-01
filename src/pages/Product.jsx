import { Add, ImportantDevices, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
const Container = styled.div``;

const Wrapper = styled.div`padding:50px;display:flex;
${mobile({ padding:"10px" , flexDirection:"column"})};`;

const ImgContainer = styled.div`flex:1;`;

const Title = styled.h1`font-weight:200;`;

const Desc = styled.p`margin:20px 0px;`;

const Price = styled.span`font-weight:100;
font-size:40px;`;

const Image = styled.img`
width:100%; object-fit:cover;
height:90vh;
${mobile({ height:"40vh" })}
`;

const InfoContainer = styled.div`flex:1;padding:0 px 50px; margin-left:100px;
${mobile({ marginLeft:"10px" , padding:"10px" })}
`;

const Filter = styled.div`display:flex; margin-top:20px;`;

const FilterContainer = styled.div`display:flex;
width:50%;
margin:30px 0px;
justify-content:space-between;
${mobile({ width:"100%" })}`;

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;`;

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius: 50%;
background-color:${props => props.color};
margin:0px 5px;
cursor:pointer;`;

const FilterSize = styled.select`margin-left:10px;
padding:5px;`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
margin-top:40px;
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
${mobile({ width:"100%" })}
`;

const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700`;

const Amount= styled.span`width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin: 0px 5px;`;

const Button= styled.button`padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;
&:hover {
    background-color:
}`;

const Product = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Announcement></Announcement>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg">
                    </Image>
                </ImgContainer>
                <InfoContainer>
                    <Title> Denim JumpSuit
                    </Title>
                    <Desc>
                        Denim Jumpsuit is a nice jacket made from 90% cotton and 10% elastan
                    </Desc>
                    <Price> $20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="blue"></FilterColor>
                            <FilterColor color="grey"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove></Remove>
                            <Amount>1</Amount>
                            <Add></Add>
                            <Button>Add to Cart</Button>
                        </AmountContainer>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </Container>
    )
}

export default Product
