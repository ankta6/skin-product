import { styled } from "styled-components"
import { FaInstagram } from "react-icons/fa";
import { mobile } from "../pages/responsive";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;

`


const Logo = styled.h1``

const Desc = styled.p`
margin:20px 0px;

`

const SocialContainer = styled.div`
display:flex;

`

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
margin-bottom:30px;
`

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;`

const ListItem = styled.li`
width:50%;
margin-bottom:10px;`

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;

`

const Payment = styled.img`
background-color:white;
width:60%`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "lightgray" })}
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SKINCARE.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available,but the
          majority have suffered alteration in some form, by injected humour, or
          radomised words which don't look even slightly believable.
        </Desc>

        <SocialContainer>
          <SocialIcon color="E4405F">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <FaPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Accessories</ListItem>

          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          {" "}
          <FaMapMarkerAlt style={{marginRight:"10px"}} /> Chandigarh,India
        </ContactItem>
        <ContactItem>
          {" "}
                  <FaPhoneAlt style={{ marginRight: "10px" }} /> +91 8558880599
        </ContactItem>
        <ContactItem>
                  <MdEmail style={{ marginRight: "10px" }} /> order@SKINCARE.in
        </ContactItem>
        <Payment src="https://i0.wp.com/365webresources.com/wp-content/uploads/2023/04/Tiny-Payment-Method-Icons.webp?ssl=1" />
      </Right>
    </Container>
  );
}

export default Footer
