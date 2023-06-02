import { BASE_URL } from '../lib/constants';
import VideoGallery from './components/VideoGallery/VideoGallery';

console.log(BASE_URL);
async function getData() {
  console.log(BASE_URL);
  const res = await fetch(`${BASE_URL}/api/vimeo`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  console.log(BASE_URL);
  const videoData = await getData();
  const { data }: VideoResponse = await Promise.resolve(videoData);

  const videosWithThumbnails: VideoWithThumbnail[] = data.map((video: any) => ({
    ...video,
    name: video.name.replace(/^\d+\s/, ''),
    thumbnail: {
      src: video.pictures.sizes[video.pictures.sizes.length - 1].link,
      height: video.pictures.sizes[3].height,
      width: video.pictures.sizes[3].width,
    },
  }));

  return <VideoGallery videos={videosWithThumbnails} />;
}
