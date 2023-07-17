import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcment from '../components/Announcment'
import Products from '../components/Products';
import Newsletter from "../components/Newsletter";
import Footer from '../components/Footer';
import { mobile } from "../pages/responsive";


const Container = styled.div`
`

const Title = styled.h1`
margin:20px;`

const FilterContainer = styled.div`
display:flex;
justify-content: space-between;`

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display:"flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px%" })}
`;

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Select Product: </FilterText>
          <Select>
            <Option disabled selected>
              {" "}
              Select
            </Option>
            <Option>FACEWASH</Option>
            <Option>SERUM</Option>
            <Option>LOTION</Option>
            <Option>SCRUB</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product: </FilterText>
          <Select>
            <Option Select>Select</Option>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList
