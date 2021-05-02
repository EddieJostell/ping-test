export interface IPingData {
  url: string;
  provider: string;
  regionname: string;
  city: string;
  country: string;
  tags: string;
}

export const pingData: IPingData[] = [
  {
    url: "https://upcloud-fi-hel1.apps.bret.dk/test2?ip='",
    provider: 'UpCloud',
    regionname: 'FI-HEL1',
    city: 'Helsinki',
    country: 'Finland',
    tags: 'UpCloud, Helsinki, Finland, Nordic',
  },
  {
    url: 'https://upcloud-us-nyc1.apps.bret.dk/test2?ip=',
    provider: 'Upcloud',
    regionname: 'US-NYC1',
    city: 'New York',
    country: 'USA',
    tags: 'UpCloud, USA, NewYork, EastCoastUS',
  },
  {
    url: 'https://upcloud-es-mad1.apps.bret.dk/test2?ip=',
    provider: 'UpCloud',
    regionname: 'ES-MAD1',
    city: 'Madrid',
    country: 'Spain',
    tags: 'UpCloud, Madrid, Spain, Iberia',
  },
];
