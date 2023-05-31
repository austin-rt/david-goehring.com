import VideoGallery from './components/VideoGallery/VideoGallery';

const Vimeo = require('vimeo').Vimeo;

const client = new Vimeo(
  `${process.env.VIMEO_CLIENT_ID}`,
  `${process.env.VIMEO_CLIENT_SECRET}`,
  `${process.env.VIMEO_ACCESS_TOKEN}`
);

const params = {
  fields: 'name,link',
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
      // type these
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
  const videoData = fetchVideos();

  // type this you mfer
  const videos: any = await Promise.resolve(videoData);

  return (
    <>
      <VideoGallery videos={videos.data} />
    </>
  );
};

export default Page;
