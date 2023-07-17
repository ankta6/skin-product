import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../pages/responsive";

import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
;


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px",flexDirection:"column" })}
`;

const ImageContainer = styled.div`
flex:1;`;

const Image = styled.img`
width:100%;
height:40vh;
object-fit:cover;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding:"10px" })}
`;

const Title = styled.h1`font-weight:200;`;

const Disc = styled.p`
margin:20px 0px;`;

const Price = styled.span`
font-weight:100;
font-size:30px;`

const AmountContainer = styled.div`display:flex;
align-items:center;
font-weight:700;
`
const Amount = styled.span`width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:3px 5px;
`

const Button = styled.button`
padding:8px;
border:1px solid teal;
background-color:white;
cursive:pointer;

&:hover{
    background-color:#f8f4f4;
    
}
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <ImageContainer>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwucO9WFdnPpTxzqNEtr5fVdTcFqJV7vFBRHMJYiNg9aE3lXGd2VBNFGhOndDO2QE0Es&usqp=CAU" />
        </ImageContainer>
        <InfoContainer>
          <Title>SCRUB</Title>
          <Disc>This is a body scrub</Disc>
          <Price>Rs320</Price>
          <AmountContainer>
            <AiOutlineLine />
            <Amount>1</Amount>
            <AiOutlinePlus />
          </AmountContainer>
          <Button>Add To Cart</Button>
        </InfoContainer>
        <ImageContainer>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwucO9WFdnPpTxzqNEtr5fVdTcFqJV7vFBRHMJYiNg9aE3lXGd2VBNFGhOndDO2QE0Es&usqp=CAU" />
        </ImageContainer>
        <InfoContainer>
          <Title>SCRUB</Title>
          <Disc>This is a face Scrub</Disc>
          <Price>Rs320</Price>
          <AmountContainer>
            <AiOutlineLine />
            <Amount>1</Amount>
            <AiOutlinePlus />
          </AmountContainer>
          <Button>Add To Cart</Button>
        </InfoContainer>

        <ImageContainer>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwucO9WFdnPpTxzqNEtr5fVdTcFqJV7vFBRHMJYiNg9aE3lXGd2VBNFGhOndDO2QE0Es&usqp=CAU" />
        </ImageContainer>
        <InfoContainer>
          <Title>SCRUB</Title>
          <Disc>This is a smooth scrub</Disc>
          <Price>Rs320</Price>
          <AmountContainer>
            <AiOutlineLine />
            <Amount>1</Amount>
            <AiOutlinePlus />
          </AmountContainer>
          <Button>Add To Cart</Button>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
