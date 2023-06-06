type Navigation = {
  [key: string]: string;
};

type VideoResponse = {
  total: number;
  page: number;
  per_page: number;
  paging: VideoResponsePaging;
  data: Video[];
};

type VideoResponsePaging = {
  next?: string;
  previous?: string;
  first: string;
  last: string;
};

type Video = {
  name: string;
  player_embed_url: string;
  width: number;
  height: number;
  uri: string;
  pictures: VideoPictures;
  description: string;
};

type VideoPictures = {
  uri: string;
  active: boolean;
  type: string;
  base_link: string;
  sizes: VideoPicturesSize[];
  resource_key: string;
  default_picture: boolean;
};

type VideoPicturesSize = {
  width: number;
  height: number;
  link: string;
  link_with_play_button: string;
};

type VideoWithThumbnail = {
  thumbnail: Thumbnail;
} & Video;

type Thumbnail = {
  src: string;
  height: number;
  width: number;
};
