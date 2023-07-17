import React from 'react'
import styled from "styled-components";
import { mobile } from "../pages/responsive";


const Container = styled.div`
flex:1;
margin:4px;
height:70vh;
position:relative;
`
const Image = styled.img`
  widht: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "70vh",width:"20wh" })}
`;

const Info = styled.div`
position:absolute;
top:0;
left:0;
${'' /* background-color: */}
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
height:100%
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-family: cursive;
  
`;



const Button = styled.button`
  border: none;
  font-family: cursive;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`;

const CategoriesItem = ({ item }) => {
  return (
    <Container>
          <Image src={ item.img} />
          <Info>
              <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
          </Info>
          
    </Container>
  )
}

export default CategoriesItem
