import React from 'react'
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { mobile } from '../pages/responsive';
import { Link } from "react-router-dom";



const Container = styled.div`
  height: 60px;
  background-color: #e6e6fa;

  ${mobile({ height:"50px" })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  ${mobile({padding:"10px 0px"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
border:none;
display:flex;
align-items:center;
margin-left: 25px;
padding:5px;
`
const Input = styled.input`
  border: none;

  ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
  font-weight: bold;
  font-family: cursive;

  ${mobile({fontSize : "24px" })}

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex:2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft:"10px" })}
`;

const Navbar = () => {

  

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder ="search"/> <FaSearch style={{ color: "blue", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SKINCARE</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <BsCart4 style={{ fontSize: 20 }} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar
