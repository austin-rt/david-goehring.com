import { NextResponse } from 'next/server';
import { Vimeo } from 'vimeo';

const client = new Vimeo(
  `${process.env.VIMEO_CLIENT_ID}`,
  `${process.env.VIMEO_CLIENT_SECRET}`,
  `${process.env.VIMEO_ACCESS_TOKEN}`,
);

// for now calling vimeo API in app/page.tsx component
// due to call happening in server side component before build completed - ??
// if it remains unused, delete this file

export async function GET(request: Request) {
  try {
    const videos = await new Promise<VideoResponse>((resolve, reject) => {
      client.request(
        {
          method: 'GET',
          path: '/me/videos',
          query: {
            fields: 'name,player_embed_url,width,height,uri,pictures',
            direction: 'desc',
            sort: 'alphabetical',
            filter_tag: 'portfolio',
            per_page: 100,
          },
        },
        function (err, body) {
          if (err) {
            reject(err);
          } else {
            resolve(body);
          }
        },
      );
    });
    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json(error);
  }
}
