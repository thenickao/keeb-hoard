import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <FooterWrapper>
      <div>
        <LinkStyled to="https://github.com/thenickao">Nick Kao</LinkStyled>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
