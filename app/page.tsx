import VideoGallery from './components/VideoGallery/VideoGallery';

import { fetchVideos } from '@/lib/api/vimeo';

// async function getData() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/vimeo`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

export default async function Page() {
  const videoData = fetchVideos();
  const { data }: VideoResponse = await Promise.resolve(videoData);

  const videosWithThumbnails: VideoWithThumbnail[] = data.map((video: Video) => ({
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
