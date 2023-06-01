import VideoGallery from "./components/VideoGallery/VideoGallery";

async function getData() {
  const res = await fetch("http://localhost:3000/api/vimeo");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async () => {
  const videoData = await getData();
  const { data } = await Promise.resolve(videoData);

  return <VideoGallery videos={data} />;
};

export default Page;
