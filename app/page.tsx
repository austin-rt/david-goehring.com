import VideoGallery from './components/VideoGallery/VideoGallery';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/api/vimeo`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Page = async () => {
  const videoData = await getData();
  const { data } = await Promise.resolve(videoData);

  return <VideoGallery videos={data} />;
};

export default Page;
