import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { MepIcon } from './MepIcon';
import { FONT_BODY, FONT_CONDENSED, NAVY, ORANGE } from './fonts';

export const IntroLogo: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 25 });
  const opacity = interpolate(frame, [0, 15, durationInFrames - 15, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const subOpacity = interpolate(frame, [20, 35], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: NAVY, alignItems: 'center', justifyContent: 'center', opacity }}>
      <div style={{ transform: `scale(${scale})`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MepIcon size={130} />
        <div
          style={{
            fontFamily: FONT_CONDENSED,
            fontWeight: 700,
            fontSize: 90,
            letterSpacing: '0.08em',
            color: '#fff',
            marginTop: 24,
          }}
        >
          MEP
        </div>
        <div
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: '0.04em',
            color: 'rgba(255,255,255,0.55)',
            marginTop: 8,
            opacity: subOpacity,
          }}
        >
          Método de Edificação Profissional
        </div>
        <div
          style={{
            width: 60,
            height: 4,
            background: ORANGE,
            marginTop: 28,
            opacity: subOpacity,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
