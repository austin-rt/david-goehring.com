'use client';

import { Container, Divider, Grid, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player/lazy';

type Props = {
  videos: Video[];
};

const VideoGallery = ({ videos }: Props) => {
  return (
    <Container maxWidth='xl'>
      <Stack
        spacing={4}
        sx={{
          marginTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {videos.map((video: Video) => (
          <>
            <ReactPlayer
              url={video.player_embed_url}
              controls={true}
              pip={true}
              stopOnUnmount={false}
              width='100%'
            />
            <Typography
              variant='h5'
              component={'h3'}
              textAlign={'center'}
            >
              {video.name.replace(/^\d+/, '')}
            </Typography>
            <Divider />
          </>
        ))}
      </Stack>
    </Container>
  );
};
export default VideoGallery;
