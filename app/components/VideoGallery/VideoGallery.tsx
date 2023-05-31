'use client';

import { Container, Grid } from '@mui/material';

// type this you mfer
type Props = {
  videos: any;
};

const VideoGallery = ({ videos }: Props) => {
  return (
    <Container
      maxWidth='md'
      // sx={{ border: '2px solid green' }}
    >
      <Grid
        container
        spacing={2}
        justifyContent='space-evenly'
        // sx={{ border: '1px solid red' }}
      >
        {videos.map((video: any) => (
          <Grid
            item
            key={video.name}
            p={2}
            // sx={{ border: '1px solid blue' }}
          >
            <h2>{video.name}</h2>
            <p>{video.link}</p>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default VideoGallery;
