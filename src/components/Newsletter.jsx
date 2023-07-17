import {VscSend } from "react-icons/vsc";
import { styled } from "styled-components";
import { mobile } from "../pages/responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fdf6f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;

const Title = styled.h1`
font-size:80px;
font-family:cursive;
margin:20px;

`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
border:none;
flex:8;
padding-left:20px;`


const Button = styled.button`
border:none;
flex:0.5;
background-color:teal;
color:white

`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
          <VscSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
