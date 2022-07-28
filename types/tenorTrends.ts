export interface TrendingGifs {
  locale: string;
  results: Result[];
  next: string;
}

export interface Result {
  id: string;
  title: Title;
  content_description: string;
  content_rating: string;
  h1Title: string;
  media: { [key: string]: Media }[];
  bgColor: BgColor;
  created: number;
  itemurl: string;
  url: string;
  tags: any[];
  flags: any[];
  shares: number;
  hasaudio: boolean;
  hascaption: boolean;
  sourceID: string;
  composite: null;
}

export enum BgColor {
  A9A8Aa = "#a9a8aa",
  Empty = "",
}

export interface Media {
  dims: number[];
  preview: string;
  size: number;
  url: string;
  duration?: number;
}

export enum Title {
  BallDribbleSkills = "ball dribble skills",
  Empty = "",
}
