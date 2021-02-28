import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import formatDate from "./formatDate";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & > span {
    padding: 2px 5px;
  }
`;

const ellipsis = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Name = styled.span`
  flex: 2;
  ${ellipsis}
`;

const Email = styled.span`
  flex: 3;
  ${ellipsis}
`;

const Date = styled.span`
  flex-basis: 100px;
  text-align: center;
`;

const Client = ({ firstName, lastName, email, registerDate }) => (
  <Container>
    <Name title={`${firstName} ${lastName}`}>
      {firstName} {lastName}
    </Name>
    <Email title={email}>{email}</Email>
    <Date>{formatDate(registerDate)}</Date>
  </Container>
);

Client.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  registerDate: PropTypes.string,
  address: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ),
  paymentMethods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      iban: PropTypes.string.isRequired,
    })
  ),
};

export default Client;
