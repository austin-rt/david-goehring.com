'use client';

import { useEffect, useState } from 'react';
import { Card, Container, Grid } from '@mui/material';
import Image from 'next/image';

type Props = {
  videos: VideoWithThumbnail[];
};

export default function VideoGallery({ videos }: Props) {
  // hydration errors since we're at the mercy of vimeo's slow api
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

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
            key={video.uri}
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
              <Image
                src={video.thumbnail.src}
                alt={video.name}
                height={video.thumbnail.height}
                width={video.thumbnail.width}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
