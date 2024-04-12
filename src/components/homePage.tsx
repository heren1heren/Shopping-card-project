import { useState, FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { getRandomColor, returnRandomNumber } from '../utils';

const HomePageSection = styled.div`
  background-color: wheat;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ImgPlaceholder = styled.img`
  min-height: 50%;
  max-width: 400px;
  min-width: 300px;
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

type homePageProps = {};
export const HomePageComponent: FC<homePageProps> = ({}) => {
  // the context cannot recognize set function ask google later.
  const [
    purchaseData,
    setPurchaseData,
    catsData,
    setCatsData,
    isLoading,
    setIsLoading,
    affection,
    setAffection,
    affectionColor,
    setAffectionColor,
    setHeaderBackgroundColor,
  ] = useOutletContext();

  const [imgUrl, setImgUrl] = useState('src/img/tenor.gif');

  const handleClick = () => {
    setAffection((state: number) => (state + 1) ^ state);

    const color = getRandomColor();
    setAffectionColor(color);
    if (affection === -1) {
      setImgUrl('src/img/cat-stop.gif');
    } else {
      setImgUrl(catsData[returnRandomNumber(30)].url);
    }
  };

  return (
    <HomePageSection>
      <ImgPlaceholder src={imgUrl} alt="cat-image" />
      <div className="wrapper">
        <Slogan>
          Cool things like cats are never free. Earn Them yourSelf. 👇🏿👇🏿👇🏿👇🏿👇🏿
        </Slogan>
        <IncreaseButton onClick={handleClick}> Meoww~</IncreaseButton>
      </div>
    </HomePageSection>
  );
};

export default HomePageComponent;
