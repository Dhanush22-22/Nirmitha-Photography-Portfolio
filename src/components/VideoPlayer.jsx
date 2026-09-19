import { useCallback, useEffect, useRef, useState } from "react";
import PlayIcon from "./icons/PlayIcon";
import PauseIcon from "./icons/PauseIcon";
import SpeakerOnIcon from "./icons/SpeakerOnIcon";
import SpeakerOffIcon from "./icons/SpeakerOffIcon";
import "./VideoPlayer.css";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/**
 * Shared player for the site's two videos (Slides 17 & 22). Autoplays muted
 * only while sufficiently in view (IntersectionObserver — no rAF polling),
 * pauses automatically when scrolled away, and never fights a manual pause.
 * Native controls are disabled entirely; only play/pause, mute/unmute and a
 * thin seek bar are exposed.
 */
export default function VideoPlayer({ src, poster, alt, className = "" }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const userPausedRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const posterSrc = `/images/${poster.name}-${poster.width}.jpg`;

  // Autoplay only while the video is meaningfully visible; pause otherwise.
  // Respects a manual pause — it will not restart playback on its own.
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPausedRef.current) {
            const playPromise = video.play();
            if (playPromise?.catch) playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      setPlaying(true);
      setStarted(true);
    };
    const onPause = () => setPlaying(false);
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onLoadedMetadata = () => setDuration(video.duration);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onPause);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onPause);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      const p = video.play();
      if (p?.catch) p.catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }, []);

  const onSeek = useCallback((e) => {
    const video = videoRef.current;
    if (!video) return;
    const value = Number(e.target.value);
    video.currentTime = value;
    setCurrentTime(value);
  }, []);

  return (
    <div ref={containerRef} className={`video-player ${className}`}>
      <video
        ref={videoRef}
        className="video-player-el"
        src={src}
        poster={posterSrc}
        muted={muted}
        playsInline
        preload="metadata"
        aria-label={alt}
      />

      {!started && (
        <button type="button" className="video-player-cover" onClick={togglePlay} aria-label="Play video">
          <PlayIcon className="video-player-cover-icon" />
        </button>
      )}

      <div className="video-player-controls">
        <button
          type="button"
          className="video-player-btn"
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? <PauseIcon className="video-player-icon" /> : <PlayIcon className="video-player-icon" />}
        </button>

        <input
          type="range"
          className="video-player-progress"
          min={0}
          max={duration || 0}
          step="0.01"
          value={currentTime}
          onChange={onSeek}
          aria-label="Seek video"
          style={{ "--progress": duration ? `${(currentTime / duration) * 100}%` : "0%" }}
        />

        <span className="video-player-time" aria-hidden="true">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <button
          type="button"
          className="video-player-btn"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <SpeakerOffIcon className="video-player-icon" /> : <SpeakerOnIcon className="video-player-icon" />}
        </button>
      </div>
    </div>
  );
}
