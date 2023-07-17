import { styled } from "styled-components";
import { mobile } from "../pages/responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/top-view-natural-cosmetics-concept_23-2148565310.jpg?w=2000")
    center;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size:24px;
font-weight:300;`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;

const Input = styled.input`flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;

const Agreement = styled.span`
font-size:12px;
margin:20px 0px`;

const Button = styled.button`
  width: 40%;
  border: none;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  padding: 15px 20px;
  border: 1px solid teal;
  color:white;
  background-color: teal;
  cursive: pointer;

  &:hover {
    background-color: #eec0c8;
    color:white;
    font-family:bold;
    border:none;
  }
`;


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I cannot to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register
