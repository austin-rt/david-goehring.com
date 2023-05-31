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

const fetchVideos = () => {
  return new Promise((resolve, reject) => {
    client.request(
      {
        method: 'GET',
        path: '/me/videos',
        query: params
      },
      // type these you mfer
      function (error: any, body: any, status_code: any, headers: any) {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      }
    );
  });
};

const Page = async () => {
  const videoData: Promise<any> = fetchVideos();

  // type this response from vimeo
  const { data }: any = await Promise.resolve(videoData);

  return (
    <>
      <VideoGallery videos={data} />
    </>
  );
};

export default Page;
