// fetch data and export

const imageData = [];

async function fetching(imageData) {
  const result = await (
    await fetch(
      'https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_Sqy2WNs6swgxN1TR8BRVaTyPEayotuDkcvriOh1ar1L0fKS0T59uV0ksx6nlUMW1'
    )
  ).json();
  console.log(result);
}
fetching(imageData);
export default imageData;
