interface Navigation {
  [key: string]: string;
}

type Video = {
  name: string;
  player_embed_url: string;
  width: number;
  height: number;
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
