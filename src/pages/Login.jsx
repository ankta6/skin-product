import { styled } from "styled-components";
import { mobile } from "../pages/responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://previews.123rf.com/images/stanislavuvarov/stanislavuvarov1902/stanislavuvarov190200122/117187011-top-view-of-white-and-green-cosmetic-set-and-leaves-for-facial-skin-care-and-spa-treatment-with.jpg")
      center;
      background-size:cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction:column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin:  10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 10px;
  border: 1px solid teal;
  color: white;
  background-color: teal;
  cursive: pointer;

  &:hover {
    background-color: #eec0c8;
    color: white;
    font-family: bold;
    border: none;
  }
`;
const Link = styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
margin-bottom:10px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
     
    
};

export default Login;
