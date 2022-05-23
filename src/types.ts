export type TPrice = number | null;

export type TPriceRange = [TPrice, TPrice];

export type TCourse = {
  name: string;
  prices: TPriceRange;
};
