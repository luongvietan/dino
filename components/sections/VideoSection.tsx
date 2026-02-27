"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      if (total > 0) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
      setProgress(pos * 100);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="bg-slate-100 dark:bg-slate-900/50 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Educational Guide</h4>
          <h2 className="text-3xl md:text-4xl font-bold">What Is a TikTok LIVE Agency?</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-800 w-full max-w-4xl mx-auto"
        >
          <div className="relative flex items-center justify-center cursor-pointer" onClick={togglePlay}>
            <video 
              ref={videoRef}
              src="/guid_1.mp4"
              autoPlay
              loop
              muted
              className="w-full max-h-[80vh] object-contain opacity-100"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              playsInline 
            />
            
            {!isPlaying && (
              <button className="absolute z-10 w-24 h-24 rounded-full bg-primary flex items-center justify-center text-background-dark transition-transform group-hover:scale-110 shadow-2xl">
                <span className="material-symbols-outlined text-5xl fill-current">play_arrow</span>
              </button>
            )}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="flex items-center gap-4">
              <button onClick={togglePlay} className="text-white hover:text-primary transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined fill-current text-2xl">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>
              
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
              
              <span className="text-xs font-mono text-white min-w-[80px] text-right">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
