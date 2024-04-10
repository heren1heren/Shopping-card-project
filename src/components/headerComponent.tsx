import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Section = styled.div`
  background-color: #3f7689;
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
  height: 100%;
  width: 40px;
  vertical-align: middle;
`;
const DisplayAffectionDiv = styled.div``;

type HeaderComponentProps = {};
export const HeaderComponent: FC<HeaderComponentProps> = ({}) => {
  return (
    <Section>
      {' '}
      <Title>
        <CatImg src="src/img/icons8-cat-64(1).png" alt="cat-image" /> CatKingDom
      </Title>
      <DisplayAffectionDiv> Affection : ∞</DisplayAffectionDiv>
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
