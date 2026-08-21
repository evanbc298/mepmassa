import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { FONT_BODY, FONT_CONDENSED, NAVY, ORANGE } from './fonts';

const STATS = [
  { num: '40%', label: 'Mais econômico\nno custo total' },
  { num: '4X', label: 'Mais rápido\nde aplicar' },
  { num: '-109', label: 'Dias de prazo\nem obra real' },
  { num: '-96%', label: 'Resíduo\nno canteiro' },
];

export const StatsBar: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12, durationInFrames - 12, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ background: NAVY, alignItems: 'center', justifyContent: 'center', opacity }}>
      <div
        style={{
          fontFamily: FONT_BODY,
          fontWeight: 600,
          fontSize: 24,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: ORANGE,
          marginBottom: 60,
        }}
      >
        O que isso muda no fim da obra
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
        {STATS.map((s, i) => {
          const start = i * 8;
          const local = frame - start;
          const o = interpolate(local, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          const x = interpolate(local, [0, 15], [-30, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          return (
            <div
              key={s.num}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 36,
                opacity: o,
                transform: `translateX(${x}px)`,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_CONDENSED,
                  fontWeight: 700,
                  fontSize: 84,
                  color: ORANGE,
                  width: 260,
                  textAlign: 'right',
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  width: 2,
                  height: 60,
                  background: 'rgba(255,255,255,0.15)',
                }}
              />
              <div
                style={{
                  fontFamily: FONT_BODY,
                  fontWeight: 500,
                  fontSize: 28,
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  color: 'rgba(255,255,255,0.75)',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.35,
                }}
              >
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
