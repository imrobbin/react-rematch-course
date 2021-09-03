export type User = {
  id: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
  location: {
    street: {
      name: string;
      number: number;
    };
    state: string;
    city: string;
    postcode: number;
  };
  isFollowing: boolean;
};

export type Toast = {
  id: number;
  message: string;
};
