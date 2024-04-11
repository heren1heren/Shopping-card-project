import { object } from 'prop-types';
import { useEffect, useState, FC, useRef } from 'react';
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
  {
    /** what can we have here
     */
  }
  const [isLoading, setIsLoading] = useState(true);
  const isFetchedRef = useRef(false);
  const [
    affection,
    setAffection,
    affectionColor,
    setAffectionColor,
    setHeaderBackgroundColor,
  ] = useOutletContext();

  const [data, setData] = useState([]);

  console.log(isFetchedRef); // isFetchedRef lose reference after switching between routes
  useEffect(() => {
    if (!isFetchedRef.current) {
      // everytime I comeback from another route the useEffect is triggered. I only want it to fetch once time only after open the page
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
      isFetchedRef.current = true;
      fetching();
    }
  }, []);
  const [imgUrl, setImgUrl] = useState('src/img/tenor.gif');

  const handleClick = () => {
    setAffection((state: number) => (state + 1) ^ state);
    // if affection number is Nan || infinity || -1 -> setImgUrl(stop-cat.url)
    const color = getRandomColor();
    setAffectionColor(`#${color}`);
    if (affection === -1) {
      setImgUrl('src/img/cat-stop.gif');
    } else {
      setImgUrl(data[Math.round(Math.random() * 30)]);
    }

    // setHeaderBackgroundColor(`#${invertHex(color)}`);
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
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function invertHex(hex) {
  return (Number(`0x${hex}`) ^ 0xffffff)
    .toString(16)
    .toUpperCase()
    .padStart(6, '0');
}
export default HomePageComponent;
