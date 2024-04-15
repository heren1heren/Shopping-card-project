import { useRef } from 'react';
import React from 'react';
import { useFetch, useOutletContextWithType } from './hooks';
import { filterData } from './typeDeclaration';
import { render } from '@testing-library/react';

// how to test custom hook in react
function MockComponent() {
  const isFetchRef = useRef(false);
  const { isLoading, error, data } = useFetch(
    'https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=30&api_key=live_Sqy2WNs6swgxN1TR8BRVaTyPEayotuDkcvriOh1ar1L0fKS0T59uV0ksx6nlUMW1'
  );
  if (isLoading) return <div>..isloading</div>;

  return <div> I am a page</div>;
}
describe('testing useFetch hook only work with specific url', async () => {
  // how to test if useFetch only fetch one time only.
  render(MockComponent());
  if (isLoading) {
    const mockcomponent = screen.getByRole('div', {
      textContent: '...isLoading',
    });
  }
});
