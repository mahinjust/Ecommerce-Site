import React from 'react';
import styled from 'styled-components'

const Container= styled.div`
    height: 30px;
    background-color: gray;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return <Container>
      <b>SUPER DEAL !!  FREE SHIPPING ON ORDERS OVER 1,200 TK</b>
  </Container>;
};

export default Announcement;
