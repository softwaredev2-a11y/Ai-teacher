"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  MoreVertical,
  Pause,
  PictureInPicture2,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

const DEMO_VIDEO_SRC =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

const PAW_PRINTS = [
  { left: "68%", top: "14%", size: 28, opacity: 0.5 },
  { left: "75%", top: "26%", size: 24, opacity: 0.4 },
  { left: "82%", top: "39%", size: 30, opacity: 0.5 },
  { left: "88%", top: "52%", size: 26, opacity: 0.4 },
  { left: "93%", top: "64%", size: 28, opacity: 0.5 },
] as const;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function DemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onLoaded = () => setDuration(video.duration);
    const onPlay = () => {
      setIsPlaying(true);
      setShowOverlay(false);
    };
    const onPause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    video.currentTime = ratio * duration;
  };

  const handlePiP = async () => {
    const video = videoRef.current;
    if (!video || !document.pictureInPictureEnabled) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.requestPictureInPicture();
    }
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section className="flex w-full flex-col items-center gap-6 bg-white px-6 py-12 sm:px-12 lg:gap-6 lg:px-[120px] lg:py-[72px] lg:pb-20">
      <p className="text-center text-[14px] font-medium text-[#0A0A0A]">
        Watch a Demo
      </p>

      <h2 className="max-w-[760px] text-center text-[28px] font-normal leading-[1.15] tracking-[-1px] text-[#0A0A0A] sm:text-[36px] lg:text-[44px]">
        How your notes become
        <br />
        a complete study system
      </h2>

      <div className="relative w-full max-w-[1200px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#3B82F6] to-[#7C3AED] shadow-sm aspect-[1200/620]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={DEMO_VIDEO_SRC}
          playsInline
          preload="metadata"
        />

        {PAW_PRINTS.map((paw, i) => (
          <div
            key={i}
            className="pointer-events-none absolute rounded-full bg-[#A78BFA]"
            style={{
              left: paw.left,
              top: paw.top,
              width: paw.size,
              height: paw.size,
              opacity: paw.opacity,
            }}
          />
        ))}

        {showOverlay ? (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-center pt-[10%] sm:pt-[18%]">
            <div className="mx-4 w-full max-w-[460px] rounded-2xl bg-white p-5 shadow-lg sm:mx-0 sm:p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex flex-1 flex-col gap-1.5">
                    <span className="w-fit rounded-full bg-[#22C55E] px-2.5 py-1 text-[10px] font-semibold text-white">
                      Completed
                    </span>
                    <div className="rounded-lg bg-[#F5F5F5] px-3 py-2.5 text-[12px] font-medium text-[#1A1A1A]">
                      Upload Material
                    </div>
                  </div>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22C55E]">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5E5E5]">
                    <Play className="h-2.5 w-2.5 text-[#666666]" fill="#666666" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 rounded-lg bg-[#F5F5F5] px-3 py-2.5">
                    <p className="text-[12px] font-semibold text-[#1A1A1A]">
                      Add Exam Date
                    </p>
                    <span className="w-fit rounded-md bg-[#004ff8] px-2.5 py-1.5 text-[9px] font-bold text-white">
                      ADD EXAM DATE
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex flex-1 rounded-lg bg-[#F5F5F5] px-3 py-2.5 text-[12px] font-medium text-[#1A1A1A]">
                    Economics: Money and...
                  </div>
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5E5E5]">
                    <Play className="h-2.5 w-2.5 text-[#666666]" fill="#666666" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <p className="pointer-events-none absolute bottom-[72px] left-1/2 z-10 hidden -translate-x-1/2 text-center text-[18px] font-semibold text-white sm:block">
          Master the content at your pace
        </p>

        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="absolute inset-0 z-[5] cursor-pointer"
        />

        <div
          className="absolute inset-x-0 bottom-10 z-20 h-1 cursor-pointer bg-white/25"
          onClick={(e) => {
            e.stopPropagation();
            handleProgressClick(e);
          }}
          role="slider"
          aria-label="Video progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            className="h-full bg-white transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-30 flex h-10 items-center justify-between bg-black px-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                void togglePlay();
              }}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="text-white"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" fill="white" />
              ) : (
                <Play className="h-4 w-4" fill="white" />
              )}
            </button>
            <span className="text-[12px] font-medium text-white">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              aria-label={isMuted ? "Unmute" : "Mute"}
              className="text-white"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                void handlePiP();
              }}
              aria-label="Picture in picture"
              className="hidden text-white sm:block"
            >
              <PictureInPicture2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={(e) => e.stopPropagation()}
              aria-label="More options"
              className="text-white"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
