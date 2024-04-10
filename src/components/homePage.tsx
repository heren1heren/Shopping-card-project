import { FC } from 'react';
import styled from 'styled-components';
type homePageProps = {};
const HomePageSection = styled.div`
  background-color: wheat;
  flex: 1;
`;
const ImgPlaceholder = styled.div`
  height: 200px;
`;
const Slogan = styled.p``;
const IncreaseButton = styled.button``;
const DisplayAffectionDiv = styled.div``;
export const homePageComponent: FC<homePageProps> = ({}) => {
  {
    /** what can we have here:
  an div that display cat img.
  an div that display cat affection point.
  a reason for the website( cool and short and related to cat): Welcome to catKingdom where cures cat's addiction.
  everyTime the user click the button -> switch cat image inside the div that display cat img
  a button to increase currency of the shop. (infiminty)
 */
  }
  return <HomePageSection> I am a homepage</HomePageSection>;
};

export default homePageComponent;
