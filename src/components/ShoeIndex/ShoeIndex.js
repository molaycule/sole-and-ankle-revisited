import React from "react";
import styled from "styled-components/macro";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <SelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={ev => setSortId(ev.target.value)}>
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const SelectWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${props => props.theme.queries.tabletMax} {
    flex-direction: column-reverse;
    gap: 0px;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${props => props.theme.queries.tabletMax} {
    flex-basis: 0px;
    flex-direction: column-reverse;

    ${Spacer} {
      display: none;
    }
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${props => props.theme.queries.phoneMax} {
    ${SelectWrapper} {
      display: none;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
`;

export default ShoeIndex;
