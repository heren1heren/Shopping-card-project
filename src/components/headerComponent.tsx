import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
// how to pass background-color valuable inside styled-component
const Section = styled.div<{ $backgroundColor?: string }>`
  background-color: ${(props: any) => props.$backgroundColor || 'white'};
  flex-basis: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const LinkWrapper = styled.div`
  text-decoration: none;
  display: flex;
  gap: 30px;
  margin-right: 20px;
`;
const Title = styled.div`
  vertical-align: middle;
`;
const Img = styled.img`
  height: 100%;
  width: 24px;
  vertical-align: middle;
`;
const CatImg = styled.img`
  min-height: 100%;
  width: 40px;
  vertical-align: middle;
`;

const DisplayAffectionDiv = styled.div<{ $color?: string }>`
  color: ${(props) => props.color || 'black'};
`;

type HeaderComponentProps = {
  affection: number;
  affectionColor: string;
  headerBackgroundColor: string;
  itemCount: number;
};
export const HeaderComponent: FC<HeaderComponentProps> = ({
  affection,
  affectionColor,
  headerBackgroundColor,
  itemCount,
}) => {
  return (
    <Section
      $backgroundColor={headerBackgroundColor}
      style={{ backgroundColor: headerBackgroundColor }}
    >
      {' '}
      <Title>
        <CatImg
          src="https://img.icons8.com/?size=160&id=121371&format=png"
          alt="cat-image"
        />{' '}
        CatKingDom
      </Title>
      {/**
       *
       */}
      <DisplayAffectionDiv
        $color={affectionColor}
        style={{ color: affectionColor }}
      >
        {' '}
        Affection : {`${affection}`}
      </DisplayAffectionDiv>
      <LinkWrapper>
        <StyledLink to="/homePage">Home Page</StyledLink>
        <StyledLink to="/shop">Shop</StyledLink>
        <StyledLink to="/cart">
          Cart:
          {itemCount}
        </StyledLink>
      </LinkWrapper>
    </Section>
  );
};

export default HeaderComponent;
