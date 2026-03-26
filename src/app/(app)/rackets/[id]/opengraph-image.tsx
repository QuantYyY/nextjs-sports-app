import { getRacketById } from "@/service/get-racket-by-id";
import { IRacket } from "@/types/racket";
import { ImageResponse } from "next/og";
import { FC } from "react";

export const alt = "OG IMAGE";
export const size = {
  width: 1200,
  geight: 630,
};
export const contentType = "image/png";

const Image = ({ racket }: { racket: IRacket }) => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={racket.imageUrl}
        alt=""
        style={{ width: "400px", height: "400px" }}
      />
      <div>{racket.name}</div>
    </div>
  );
};

const OGImage: FC<PageProps<"/rackets/[id]">> = async ({ params }) => {
  const { id } = await params;
  const { data } = await getRacketById(id);

  if (!data) return null;

  return new ImageResponse(<Image racket={data} />, size);
};

export default OGImage;
