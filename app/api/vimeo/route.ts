import { NextResponse } from "next/server";
import { Vimeo } from "vimeo";

const client = new Vimeo(
  `${process.env.VIMEO_CLIENT_ID}`,
  `${process.env.VIMEO_CLIENT_SECRET}`,
  `${process.env.VIMEO_ACCESS_TOKEN}`
);

const params = {
  fields: "name,player_embed_url,width,height,uri",
  direction: "desc",
  sort: "alphabetical",
  filter_tag: "portfolio",
  per_page: 100,
};

export async function GET(request: Request) {
  try {
    const videos = await new Promise((resolve, reject) => {
      client.request(
        {
          method: "GET",
          path: "/me/videos",
          query: params,
        },
        function (error, body, status_code, headers) {
          if (error) {
            reject(error);
          } else {
            resolve(body);
          }
        }
      );
    });
    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json(error);
  }
}
