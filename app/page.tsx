import VideoGallery from './components/VideoGallery/VideoGallery';
import { fetchVideos } from '../lib/api';

const Page = async () => {
  const videoData = fetchVideos();
  const { data } = await Promise.resolve(videoData);

  return <VideoGallery videos={data} />;
};

export default Page;
