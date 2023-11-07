import { useVideoConfig, AbsoluteFill } from 'remotion';
import { AudioPlayer } from './AudioPlayer';


export const NewsUpdateDisplay: React.FC = () => {
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: 'black'}}>
       <AbsoluteFill>
          <AudioPlayer />
       </AbsoluteFill>
    </AbsoluteFill>
  );
};

