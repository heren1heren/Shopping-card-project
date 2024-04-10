import { FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';

const HomePageSection = styled.div`
  background-color: wheat;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ImgPlaceholder = styled.img`
  height: 50%;
  border-radius: 0.2em;
`;
const Slogan = styled.p``;
const IncreaseButton = styled.button`
  background-color: #e06763;
  border-radius: 0.5em;
  font-size: 40px;
  padding: 20px;
  cursor: crosshair;
`;
const DisplayAffectionDiv = styled.div``;
type homePageProps = {};
export const HomePageComponent: FC<homePageProps> = ({}) => {
  {
    /** what can we have here
     */
  }
  const [affection, setAffection] = useOutletContext();
  const handleClick = () => {
    setAffection((state: number) => state + 1);
    // changing image
  };
  return (
    <HomePageSection>
      <ImgPlaceholder
        src="https://cdn2.thecatapi.com/images/3gp.jpg"
        alt="cat-image"
      />
      <div className="wrapper">
        <Slogan>
          {' '}
          Cool things like cats are never free because free things are never
          cool. Earn your own cat by hard-working:
          {/** make it like a quote latter quoter: cat's addict  */}
        </Slogan>
        <IncreaseButton onClick={handleClick}>Meoww~</IncreaseButton>
      </div>
    </HomePageSection>
  );
};

export default HomePageComponent;
