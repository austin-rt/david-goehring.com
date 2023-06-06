'use client';

import { useEffect, useState } from 'react';
import { Card, Container, Grid, Modal, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import VimeoPlayer from 'react-player/vimeo';

type Props = {
  videos: VideoWithThumbnail[];
};

export default function VideoGallery({ videos }: Props) {
  const theme = useTheme();

  const [isModalOpen, toggleIsModalOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | undefined>(undefined);

  // hydration errors since we're at the mercy of vimeo's slow api
  const [hasMounted, setHasMounted] = useState(false);

  const handleClick = (_evt: React.MouseEvent<HTMLDivElement>, video: Video) => {
    setSelectedVideo(video);
    toggleIsModalOpen(true);
  };

  const handleCloseModal = () => {
    toggleIsModalOpen(false);
    setSelectedVideo(undefined);
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Container maxWidth='lg'>
      {selectedVideo && (
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Stack
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              dispaly: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              outline: 'none',
            }}
            color={theme.palette.primary.main}
            textAlign='center'
          >
            <VimeoPlayer
              url={selectedVideo.player_embed_url}
              playing
              muted={false}
              volume={1}
              controls
            />
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='h2'
            >
              {selectedVideo.name}
            </Typography>
            <Typography
              id='modal-modal-description'
              variant='body2'
            >
              {selectedVideo?.description}
            </Typography>
          </Stack>
        </Modal>
      )}

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
            onClick={(evt: React.MouseEvent<HTMLDivElement>) => handleClick(evt, video)}
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
                data-video={video}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
