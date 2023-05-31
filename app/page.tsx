import VideoGallery from './components/VideoGallery/VideoGallery';
import { Vimeo, CompleteCallback } from 'vimeo';

const client = new Vimeo(
  `${process.env.VIMEO_CLIENT_ID}`,
  `${process.env.VIMEO_CLIENT_SECRET}`,
  `${process.env.VIMEO_ACCESS_TOKEN}`
);

const params = {
  fields: 'name,player_embed_url,width,height,',
  direction: 'desc',
  sort: 'alphabetical',
  filter_tag: 'portfolio',
  per_page: 100
};

const fetchVideos = (): Promise<VideoResponse> => {
  return new Promise((resolve, reject) => {
    client.request(
      {
        method: 'GET',
        path: '/me/videos',
        query: params
      },
      function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const Page = async () => {
  const videoData = fetchVideos();
  const { data } = await Promise.resolve(videoData);

  return <VideoGallery videos={data} />;
};

export default Page;
