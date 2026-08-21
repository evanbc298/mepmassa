import React from 'react';
import { AbsoluteFill, interpolate, staticFile, useCurrentFrame, Video } from 'remotion';
import { FONT_BODY, FONT_CONDENSED, ORANGE } from './fonts';

export const HeroApplication: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 15, durationInFrames - 15, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const textUp = interpolate(frame, [15, 40], [30, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const textOpacity = interpolate(frame, [15, 40], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ opacity, overflow: 'hidden', background: '#0f1932' }}>
      <Video
        src={staticFile('aplicacao-real.mp4')}
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <AbsoluteFill
        style={{
          background: 'linear-gradient(0deg, rgba(15,25,50,0.88) 0%, rgba(15,25,50,0.05) 40%, rgba(15,25,50,0.25) 100%)',
        }}
      />
      <AbsoluteFill style={{ justifyContent: 'flex-end', padding: '0 80px 140px' }}>
        <div
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 600,
            fontSize: 24,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: ORANGE,
            marginBottom: 18,
            transform: `translateY(${textUp}px)`,
            opacity: textOpacity,
          }}
        >
          Aplicação real, em obra
        </div>
        <div
          style={{
            fontFamily: FONT_CONDENSED,
            fontWeight: 700,
            fontSize: 60,
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            color: '#fff',
            transform: `translateY(${textUp}px)`,
            opacity: textOpacity,
          }}
        >
          Sem betoneira.
          <br />
          Sem mistura. Só aplicar.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
