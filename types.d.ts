type Navigation = {
  [key: string]: string;
};

type VideoPicturesSize = {
  width: number;
  height: number;
  link: string;
  link_with_play_button: string;
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

type Video = {
  name: string;
  player_embed_url: string;
  width: number;
  height: number;
  uri: string;
  pictures: VideoPictures;
};

type VideoResponsePaging = {
  next?: string;
  previous?: string;
  first: string;
  last: string;
};

type VideoResponse = {
  total: number;
  page: number;
  per_page: number;
  paging: VideoResponsePaging;
  data: Video[];
};

type Thumbnail = {
  src: string;
  height: number;
  width: number;
};

type VideoWithThumbnail = {
  thumbnail: Thumbnail;
} & Video;

enum VimeoQueryParams {
  fields = 'name,player_embed_url,width,height,uri,pictures',
  direction = 'desc',
  sort = 'alphabetical',
  filter_tag = 'portfolio',
  per_page = 100,
}
