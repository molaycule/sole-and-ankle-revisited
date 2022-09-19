/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="mobile menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <Nav>
          <NavLink active href="/sale">
            Sale
          </NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  display: none;

  @media ${props => props.theme.queries.tabletMax} {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(220, 5%, 40%, 0.8);
  }
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: ${COLORS.white};
  padding: 26px 16px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${props =>
    props.active ? `${COLORS.secondary}` : `${COLORS.gray[900]}`};
  font-size: calc(18 / 16 * 1rem);
  font-weight: 600;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-size: calc(14 / 16 * 1rem);
  font-weight: 500;
`;
