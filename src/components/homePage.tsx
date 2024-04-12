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

  const [imgUrl, setImgUrl] = useState(
    'https://media.tenor.com/5BYK-WS0__gAAAAM/cool-fun.gif'
  );

  const handleClick = () => {
    setAffection((state: number) => (state + 1) ^ state);

    const color = getRandomColor();
    setAffectionColor(color);
    if (affection === -1) {
      setImgUrl(
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgifdb.com%2Fimages%2Fhigh%2Fstop-it-now-cat-eonih5px39zhfmmi.gif&f=1&nofb=1&ipt=f02f95366aeee86835b9d3cf70e94ad1f968a81ca4797ca156bf2620a4c50ecf&ipo=images'
      );
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
