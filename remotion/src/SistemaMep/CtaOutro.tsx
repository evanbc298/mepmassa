import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { MepIcon } from './MepIcon';
import { FONT_BODY, FONT_CONDENSED, NAVY, ORANGE } from './fonts';

export const CtaOutro: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15, durationInFrames - 12, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const up = interpolate(frame, [0, 20], [20, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: NAVY, alignItems: 'center', justifyContent: 'center', opacity }}>
      <div style={{ transform: `translateY(${up}px)`, textAlign: 'center', padding: '0 90px' }}>
        <MepIcon size={64} />
        <div
          style={{
            fontFamily: FONT_CONDENSED,
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#fff',
            marginTop: 36,
            marginBottom: 44,
          }}
        >
          Peça uma proposta
          <br />
          pra sua obra.
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            background: '#25D366',
            color: '#fff',
            fontFamily: FONT_BODY,
            fontWeight: 700,
            fontSize: 32,
            padding: '20px 44px',
            borderRadius: 100,
          }}
        >
          (47) 98851-5506
        </div>
        <div
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 500,
            fontSize: 28,
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.5)',
            marginTop: 40,
          }}
        >
          mep.ind.br
        </div>
      </div>
    </AbsoluteFill>
  );
};
