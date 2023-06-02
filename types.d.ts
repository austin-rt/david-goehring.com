interface Navigation {
  [key: string]: string;
}

type VideoPicturesSizes = {
  width: number;
  height: number;
  link: string;
  link_with_play_button: string;
};

type VideoPictures = {
  uri: string;
  active: boolean;
  type: string;
  link: string;
  sizes: VideoPicturesSizes[];
};

type Video = {
  name: string;
  player_embed_url: string;
  width: number;
  height: number;
  pictures: VideoPictures;
  uri?: string;
};

type VideoResponse = {
  total: number;
  page: number;
  per_page: number;
  paging: {
    next?: string;
    previous?: string;
    first: string;
    last: string;
  };
  data: Video[];
};

type Thumbnail = {
  src: string;
  height: number;
  width: number;
};

type VideoWithThumbnail = {
  thumbnail: VideoThumbnail;
} & Video;
