import { useEffect, useState } from 'react';
const Vimeo = require('vimeo').Vimeo;

const client = new Vimeo(
  `${process.env.VIMEO_CLIENT_ID}`,
  `${process.env.VIMEO_CLIENT_SECRET}`,
  `${process.env.VIMEO_ACCESS_TOKEN}`,
);

const useFetchVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const params = {
        fields: 'name',
        direction: 'asc',
        sort: 'alphabetical',
        filter_tag: 'portfolio',
        per_page: 100,
      };

      try {
        const res = await client.request({
          method: 'GET',
          path: '/me/videos',
          query: params,
        });
        setVideos(res.data);
      } catch (err: any) {
        throw new Error(err.message);
      }
    };

    fetchVideos();
  }, []);
  return { videos };
};

export default useFetchVideos;
