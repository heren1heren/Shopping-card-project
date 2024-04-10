import { object } from 'prop-types';
import { useEffect, useState, FC } from 'react';
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
  max-width: 400px;
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
  {
    /** what can we have here
     */
  }
  const [isLoading, setIsLoading] = useState(true);
  const [affection, setAffection] = useOutletContext();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      let data = [];
      try {
        data = await (
          await fetch(
            'https://api.thecatapi.com/v1/images/search?limit=30&api_key=live_Sqy2WNs6swgxN1TR8BRVaTyPEayotuDkcvriOh1ar1L0fKS0T59uV0ksx6nlUMW1'
          )
        ).json();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        const filterData = data.map((item: object) => {
          return item.url;
        });
        setData(filterData);
      }
    };
    fetching();
  }, []);
  const [imgUrl, setImgUrl] = useState('src/img/tenor.gif');

  const handleClick = () => {
    setAffection((state: number) => (state + 1) ^ state);
    setImgUrl(data[Math.round(Math.random() * 30)]);
    // changing image
    // wait me to fetch and store data first
  };

  if (isLoading)
    return (
      <div>
        {' '}
        <img src="src/img/tenor.gif" alt="" />
      </div>
    );
  return (
    <HomePageSection>
      <ImgPlaceholder src={imgUrl} alt="cat-image" />
      <div className="wrapper">
        <Slogan>
          {' '}
          Cool things like cats are never free. Earn Them yourSelf. 👇🏿👇🏿👇🏿👇🏿👇🏿
          {/** make it like a quote latter quoter: cat's addict  */}
        </Slogan>
        <IncreaseButton onClick={handleClick}> Meoww~</IncreaseButton>
      </div>
    </HomePageSection>
  );
};

export default HomePageComponent;
