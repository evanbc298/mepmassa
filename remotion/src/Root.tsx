import { Composition } from 'remotion';
import { SistemaMep, TOTAL_DURATION } from './SistemaMep/SistemaMep';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="SistemaMep"
        component={SistemaMep}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
