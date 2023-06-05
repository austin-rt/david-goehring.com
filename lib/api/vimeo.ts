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
          fields: VimeoQueryParams.fields,
          direction: VimeoQueryParams.direction,
          sort: VimeoQueryParams.sort,
          filter_tag: VimeoQueryParams.filter_tag,
          per_page: VimeoQueryParams.per_page,
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
