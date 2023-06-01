"use client";

import { Container, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

type Props = {
  videos: Video[];
};

const VideoGallery = ({ videos }: Props) => {
  // this is to help with those crummy hydration errors.... since we're at the mercy of the api returning slowly from vimeo
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Container maxWidth="xl">
      <Stack
        spacing={4}
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {videos.map((video: Video) => (
          <motion.div
            key={video.uri}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <ReactPlayer
              url={video.player_embed_url}
              controls={true}
              pip={true}
              stopOnUnmount={false}
              width="100%"
            />
            <Typography variant="h5" component={"h3"} textAlign={"center"}>
              {video.name.replace(/^\d+/, "")}
            </Typography>
            <Divider />
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
};
export default VideoGallery;
