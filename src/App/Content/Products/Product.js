import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & > span {
    flex: 1;
    padding: 2px 5px;
  }
`;

const Product = ({ name, type, product }) => (
  <Container>
    <span>{type}</span>
    <span>{name}</span>
    <span>{product}</span>
  </Container>
);

Product.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["vaccum", "scooter"]).isRequired,
  name: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
};

export default Product;
