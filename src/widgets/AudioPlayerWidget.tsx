import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

export type AudioPlayerWidgetProps = {
  src: string;
};

export default function AudioPlayerWidget({ src }: AudioPlayerWidgetProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const icon = playing ? faPause : faPlay;

  useEffect(() => {
    const handleAudioEnd = () => setPlaying(false);

    audioRef.current = new Audio(src);
    audioRef.current.addEventListener('ended', handleAudioEnd);

    return () => {
      audioRef.current?.removeEventListener('ended', handleAudioEnd);
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [src]);

  function togglePlay() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  }

  return (
    <button
      onClick={togglePlay}
      className="opacity-80 hover:opacity-100 print:invisible"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
