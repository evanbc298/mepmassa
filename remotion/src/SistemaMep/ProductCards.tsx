import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { FONT_BODY, FONT_CONDENSED, NAVY, ORANGE } from './fonts';

const PRODUCTS = [
  { num: '01', name: 'MEP 10', sub: 'Nivelamento', benefit: 'Corrige a base antes da primeira fiada, sobre baldrame, viga ou laje.' },
  { num: '02', name: 'MEP 20', sub: 'Assentamento', benefit: 'Assenta toda a parede com cordões contínuos, sem água e sem cimento.' },
  { num: '03', name: 'MEP 30', sub: 'Encunhamento', benefit: 'Fecha a última fiada, absorvendo a movimentação da estrutura.' },
  { num: '04', name: 'MEP 40', sub: 'Reboco Fino', benefit: 'Camada fina direto na parede, sem chapisco e sem emboço.' },
];

const SLOT = 45;

export const ProductCards: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: NAVY }}>
      {PRODUCTS.map((p, i) => {
        const start = i * SLOT;
        const localFrame = frame - start;
        const opacity = interpolate(localFrame, [0, 10, SLOT - 10, SLOT], [0, 1, 1, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        const slideUp = interpolate(localFrame, [0, 12], [24, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

        return (
          <AbsoluteFill
            key={p.name}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              opacity,
              padding: '0 100px',
            }}
          >
            <div style={{ transform: `translateY(${slideUp}px)`, textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: FONT_CONDENSED,
                  fontWeight: 700,
                  fontSize: 30,
                  color: ORANGE,
                  letterSpacing: '0.1em',
                  marginBottom: 10,
                }}
              >
                ETAPA {p.num}
              </div>
              <div
                style={{
                  fontFamily: FONT_CONDENSED,
                  fontWeight: 700,
                  fontSize: 128,
                  color: '#fff',
                  lineHeight: 1,
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  fontFamily: FONT_BODY,
                  fontWeight: 600,
                  fontSize: 34,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.55)',
                  marginTop: 6,
                  marginBottom: 32,
                }}
              >
                {p.sub}
              </div>
              <div
                style={{
                  width: 60,
                  height: 4,
                  background: ORANGE,
                  margin: '0 auto 32px',
                }}
              />
              <div
                style={{
                  fontFamily: FONT_BODY,
                  fontWeight: 400,
                  fontSize: 30,
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.75)',
                  maxWidth: 720,
                }}
              >
                {p.benefit}
              </div>
            </div>
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};
