import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { MdOutlineArrowLeft } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import { SliderItems } from "../data";
import { mobile } from "../pages/responsive";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({  })}
`;

const Arrow = styled.div`
  width: 70px;
  height: 70px;
  background-color: #ffc0cb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 1100;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index:2;
`;

const Wrapper = styled.div`
height:100%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
height:100%;
flex:1;
`

const Image = styled.img`
height:80%;

`
const InfoContainer = styled.div`
padding:50px;
`
const Title = styled.h1`
  font-size: 70px;
  font-family:italic;
  background-color: #f4e3ce;
`;
const Desc = styled.p`margin:50px 0px;
font-weight:500;
font-size:20px;
letter-spacing:3px;
font-family:italic;

`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #ffe4e1;
  border:none;
  cursor:pointer;
  font-family:bold;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex >0 ? slideIndex-1 : 2)
    } else {
      setSlideIndex(slideIndex <2 ? slideIndex + 1 : 0 )
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <MdOutlineArrowLeft />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {SliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>
              {item.desc}
              </Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <MdOutlineArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
