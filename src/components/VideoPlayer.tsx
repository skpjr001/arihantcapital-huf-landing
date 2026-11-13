"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { Play } from "./icons";

// Loaded only after the user clicks play, so the player JS stays out of the initial bundle.
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type Props = {
  src: string;
  title: string;
  thumbnail: { src: string; width: number; height: number };
  className?: string;
};

/**
 * Thumbnail with a play button; clicking it swaps in react-player (autoplaying,
 * with native controls) in the same box.
 */
export default function VideoPlayer({ src, title, thumbnail, className = "" }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-black ${className}`}>
      {active ? (
        <ReactPlayer
          src={src}
          playing
          controls
          width="100%"
          height="100%"
          title={title}
          className="absolute inset-0"
          config={{ youtube: { rel: 0 } }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 block size-full cursor-pointer"
        >
          <Image
            src={thumbnail.src}
            width={thumbnail.width}
            height={thumbnail.height}
            sizes="(min-width: 1024px) 560px, 100vw"
            alt=""
            className="absolute inset-0 size-full object-cover object-[50%_30%]"
          />
          <span className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/35" aria-hidden="true" />
          <span className="absolute left-1/2 top-1/2 grid size-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-white shadow-lg transition-transform group-hover:scale-105 lg:size-20">
            <Play className="ml-1 size-6 lg:size-9" />
          </span>
          <span className="sr-only">Play video: {title}</span>
        </button>
      )}
    </div>
  );
}
