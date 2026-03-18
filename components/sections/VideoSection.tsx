"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export function VideoSection() {
  const t = useTranslations("videoSection");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const syncTimeline = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime || 0;
    const total = Number.isFinite(videoRef.current.duration) ? videoRef.current.duration : 0;

    setCurrentTime(current);
    setDuration(total);
    setProgress(total > 0 ? (current / total) * 100 : 0);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // User interaction allows us to unmute and keep audio enabled.
        if (videoRef.current.muted) {
          videoRef.current.muted = false;
          setIsMuted(false);
        }
        void videoRef.current.play();
      }
    }
  };

  const handleTimeUpdate = () => {
    syncTimeline();
  };

  const handleLoadedMetadata = () => {
    syncTimeline();
  };

  const handleDurationChange = () => {
    if (!videoRef.current) return;

    const rawDuration = videoRef.current.duration;
    if (Number.isFinite(rawDuration) && rawDuration > 0) {
      setDuration(rawDuration);
      return;
    }

    const seekable = videoRef.current.seekable;
    if (seekable.length > 0) {
      setDuration(seekable.end(seekable.length - 1));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    if (!nextMuted && videoRef.current.volume === 0) {
      const fallbackVolume = 0.8;
      videoRef.current.volume = fallbackVolume;
      setVolume(Math.round(fallbackVolume * 100));
    }
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleVolumeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const nextVolume = Number(e.target.value);
    const normalizedVolume = Math.max(0, Math.min(1, nextVolume / 100));
    videoRef.current.volume = normalizedVolume;
    videoRef.current.muted = normalizedVolume === 0;
    setVolume(nextVolume);
    setIsMuted(normalizedVolume === 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
      syncTimeline();
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const tick = () => {
      syncTimeline();
      if (videoRef.current && !videoRef.current.paused && !videoRef.current.ended) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };

    if (isPlaying && rafRef.current === null) {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.volume = Math.max(0, Math.min(1, volume / 100));
  }, [volume]);

  useEffect(() => {
    if (!sectionRef.current || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const videoEl = videoRef.current;
        if (!entry || !videoEl) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          const playPromise = videoEl.play();
          if (playPromise) {
            void playPromise.catch(() => {
              // Ignore autoplay rejections from browser policies.
            });
          }
          return;
        }

        if (!videoEl.paused) {
          videoEl.pause();
        }
      },
      { threshold: [0, 0.55, 1] }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-100 dark:bg-slate-900/50 py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">{t("kicker")}</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{t("title")}</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-800 w-full max-w-4xl mx-auto"
        >
          <div className="relative flex items-center justify-center cursor-pointer" onClick={togglePlay}>
            <video 
              ref={videoRef}
              src="/guid_1.mp4"
              loop
              muted={isMuted}
              className="w-full max-h-[72vh] sm:max-h-[80vh] object-contain opacity-100"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onDurationChange={handleDurationChange}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onVolumeChange={() => {
                if (!videoRef.current) return;
                setIsMuted(videoRef.current.muted);
                setVolume(Math.round(videoRef.current.volume * 100));
              }}
              playsInline 
            />
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className={`absolute z-10 rounded-full flex items-center justify-center shadow-2xl border border-white/30 transition-all duration-300 backdrop-blur-sm ${
                isPlaying
                  ? "w-16 h-16 sm:w-20 sm:h-20 bg-black/55 text-white opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 focus-visible:opacity-100"
                  : "w-16 h-16 sm:w-20 sm:h-20 bg-black/55 text-white opacity-100 scale-100"
              }`}
              aria-label={isPlaying ? t("a11y.pause") : t("a11y.play")}
            >
              <span
                className={`material-symbols-outlined fill-current text-3xl sm:text-4xl ${
                  isPlaying ? "" : "translate-x-[1px]"
                }`}
              >
                {isPlaying ? "pause" : "play_arrow"}
              </span>
            </button>
            
          </div>
          
          <div
            className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <button onClick={togglePlay} className="text-white hover:text-primary transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined fill-current text-2xl">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              <button
                onClick={toggleMute}
                className="text-white hover:text-primary transition-colors flex items-center justify-center"
                aria-label={isMuted ? t("a11y.unmute") : t("a11y.mute")}
              >
                <span className="material-symbols-outlined fill-current text-2xl">
                  {isMuted ? "volume_off" : "volume_up"}
                </span>
              </button>

              <div className="hidden sm:flex items-center gap-2 min-w-[120px]">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={volume}
                  onChange={handleVolumeInput}
                  aria-label={t("a11y.volume")}
                  className="w-24 accent-primary cursor-pointer"
                />
                <span className="text-[11px] text-white/85 tabular-nums min-w-[34px] text-right">
                  {`${volume}%`}
                </span>
              </div>
              
              <div 
                ref={progressBarRef}
                className="h-2 flex-grow rounded-full bg-white/20 cursor-pointer relative group/progress"
                onClick={handleSeek}
              >
                <div 
                  className="absolute top-0 left-0 h-full bg-primary rounded-full"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 shadow-sm transition-opacity transform translate-x-1/2"></div>
                </div>
              </div>
              
              <span className="text-[11px] sm:text-xs font-mono text-white min-w-[68px] sm:min-w-[80px] text-right">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
