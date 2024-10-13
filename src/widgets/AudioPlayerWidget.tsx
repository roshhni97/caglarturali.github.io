import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPauseCircle,
  faPlayCircle,
} from '@fortawesome/free-regular-svg-icons';
import useAudioPlayer from 'src/hooks/useAudioPlayer';

export type AudioPlayerWidgetProps = {
  src: string | HTMLAudioElement;
};

export default function AudioPlayerWidget({ src }: AudioPlayerWidgetProps) {
  const { playing, togglePlay } = useAudioPlayer(src);
  const icon = playing ? faPauseCircle : faPlayCircle;

  return (
    <button
      onClick={togglePlay}
      className="px-3 opacity-60 hover:opacity-80 print:hidden"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
