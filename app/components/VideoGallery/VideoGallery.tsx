'use client';

import { useEffect, useState } from 'react';
import {
  Card,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import VimeoPlayer from 'react-player/vimeo';

type Props = {
  videos: VideoWithThumbnail[];
};

export default function VideoGallery({ videos }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
              width={isMobile ? '98vw' : undefined}
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

      <ImageList
        cols={isMobile ? 1 : 3}
        gap={8}
        sx={{
          width: '80vw',
          margin: '2rem auto',
          border: '2px solid red',
        }}
      >
        {videos.map(video => (
          <ImageListItem
            key={video.uri}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Image
              src={video.thumbnail.src}
              alt={video.name}
              height={video.thumbnail.height}
              width={video.thumbnail.width}
              onClick={(evt: React.MouseEvent<HTMLDivElement>) => handleClick(evt, video)}
              loading='lazy'
            />
            <ImageListItemBar
              // make title show only on hover
              title={
                <Typography
                  variant='h6'
                  component='h2'
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  {video.name}
                </Typography>
              }
              sx={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
