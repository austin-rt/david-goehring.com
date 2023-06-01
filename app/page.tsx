import VideoGallery from './components/VideoGallery/VideoGallery';
import { fetchVideos } from '../lib/api';

const Page = async () => {
  const videoData = fetchVideos();
  const { data } = await Promise.resolve(videoData);

  const videosWithThumbnails: VideoWithThumbnail[] = data.map((video: any) => {
    video.name = video.name.replace(/^\d+\s/, '');
    video.thumbnail = {
      src: video.pictures.sizes[video.pictures.sizes.length - 1].link,
      height: video.pictures.sizes[3].height,
      width: video.pictures.sizes[3].width,
    };
    return video;
  });

  return <VideoGallery videos={videosWithThumbnails} />;
};

export default Page;
