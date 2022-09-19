import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          {/* <NavLink href="/sale">A&nbsp;Vendre</NavLink>
          <NavLink href="/new">Nouvelles&nbsp;Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les&nbsp;Enfants</NavLink>
          <NavLink href="/collections">Collections</NavLink> */}
        </Nav>
        <Side />
        <IconButtonWrapper>
          <IconButton>
            <Icon id="shopping-bag" color={COLORS.gray[900]} />
          </IconButton>
          <IconButton>
            <Icon id="search" color={COLORS.gray[900]} />
          </IconButton>
          <IconButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" color={COLORS.gray[900]} />
          </IconButton>
        </IconButtonWrapper>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto hidden;

  @media ${props => props.theme.queries.tabletMax} {
    padding: 20px 32px;
    height: 68px;
    align-items: center;
  }

  @media ${props => props.theme.queries.phoneMax} {
    padding: 20px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 14vw - 9rem, 3rem);
  margin: 0px 48px;

  @media ${props => props.theme.queries.tabletMax} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const IconButtonWrapper = styled.div`
  display: none;

  @media ${props => props.theme.queries.tabletMax} {
    display: flex;
    gap: 32px;
  }

  @media ${props => props.theme.queries.phoneMax} {
    gap: 16px;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
