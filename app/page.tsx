import VideoGallery from './components/VideoGallery/VideoGallery';
import { CompleteCallback } from 'vimeo';
import { Vimeo } from 'vimeo';

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

const fetchVideos = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const callback: CompleteCallback = function (error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    };
    client.request(
      {
        method: 'GET',
        path: '/me/videos',
        query: params
      },
      callback
    );
  });
};

const Page = async () => {
  const videoData = fetchVideos();
  console.log(await Promise.resolve(videoData));
  const { data }: { data: Video[] } = await Promise.resolve(videoData);

  return <VideoGallery videos={data} />;
};

export default Page;
