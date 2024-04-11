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
  color: ${(props: any) => props.color || 'black'};

  //! making affection text change color everytime we click button
`;

type HeaderComponentProps = {
  affection: number;
  affectionColor: string;
  headerBackgroundColor: string;
};
export const HeaderComponent: FC<HeaderComponentProps> = ({
  affection,
  affectionColor,
  headerBackgroundColor,
}) => {
  return (
    <Section
      $backgroundColor={headerBackgroundColor}
      style={{ backgroundColor: headerBackgroundColor }}
    >
      {' '}
      <Title>
        <CatImg src="src/img/icons8-cat-64(1).png" alt="cat-image" /> CatKingDom
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
        <Link to="/homePage">Home Page</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          {' '}
          <Img src="src/img/icons8-cart-50.png" alt="shoppingCartIcon" />
          Cart
        </Link>
      </LinkWrapper>
    </Section>
  );
};

export default HeaderComponent;
