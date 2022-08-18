export type Event = {
  id: number;
  artist_id: number;
  url: string;
  on_sale_datetime: Date;
  datetime: Date;
  description: string;
  title: string;
  venue: {
    name: string;
    latitude: number;
    longitude: number;
    city: string;
    region: string;
    country: string;
  };
  offers: [
    {
      type: string;
      url: string;
      status: string;
    }
  ];
  lineup: string[];
};
