'use client';

import { Card, CardMedia, Container, Grid } from '@mui/material';

type Props = {
  videos: VideoWithThumbnail[];
};

const VideoGallery = ({ videos }: Props) => {
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: '2rem',
          marginBottom: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {videos.map(video => (
          <Grid
            item
            key={video.name}
            xs={12}
            sm={8}
            md={6}
            lg={4}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              elevation={6}
              raised={false}
              sx={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <CardMedia
                component='img'
                src={video.thumbnail.src}
                alt={video.name}
                sx={{ padding: 0 }}
                height={video.thumbnail.height}
                width={video.thumbnail.width}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default VideoGallery;
