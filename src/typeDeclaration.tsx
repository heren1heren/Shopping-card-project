export default item;
interface item {
  breeds: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}
export type filterData = {
  url: string;
  count: number;
  price: number;
  name: string;
};
[];

interface Breed {
  weight: Weight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  cat_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}

interface Weight {
  imperial: string;
  metric: string;
}
export type contextType = {
  purchaseData: filterData[];
  setPurchaseData: React.Dispatch<React.SetStateAction<filterData[]>>;
  catsData: filterData[];
  setCatsData: React.Dispatch<React.SetStateAction<filterData[]>>;

  affection: number;
  setAffection: React.Dispatch<React.SetStateAction<number>>;

  setAffectionColor: React.Dispatch<React.SetStateAction<string>>;
};
