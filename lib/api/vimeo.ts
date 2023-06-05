import { Vimeo } from 'vimeo';

export const vimeoClient = new Vimeo(
  `${process.env.VIMEO_CLIENT_ID}`,
  `${process.env.VIMEO_CLIENT_SECRET}`,
  `${process.env.VIMEO_ACCESS_TOKEN}`,
);

// type VimeoQueryParams as enums
// make query object keys keys of params types and values values of params types

export function fetchVideos(): Promise<VideoResponse> {
  return new Promise((resolve, reject) => {
    vimeoClient.request(
      {
        method: 'GET',
        path: '/me/videos',
        query: {
          fields: 'name,player_embed_url,width,height,uri,pictures', // these fields define the shape of the Video type in ~/types.d.ts
          direction: 'desc',
          sort: 'alphabetical',
          filter_tag: 'portfolio',
          per_page: 100,
        },
      },
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  });
}
