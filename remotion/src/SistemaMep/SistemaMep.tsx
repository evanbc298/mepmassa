import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { IntroLogo } from './IntroLogo';
import { HeroApplication } from './HeroApplication';
import { ProductCards } from './ProductCards';
import { StatsBar } from './StatsBar';
import { CtaOutro } from './CtaOutro';
import { NAVY } from './fonts';

const INTRO = 90;
const HERO = 150;
const PRODUCTS = 180;
const STATS = 60;
const OUTRO = 90;

export const SistemaMep: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: NAVY }}>
      <Sequence from={0} durationInFrames={INTRO}>
        <IntroLogo durationInFrames={INTRO} />
      </Sequence>
      <Sequence from={INTRO} durationInFrames={HERO}>
        <HeroApplication durationInFrames={HERO} />
      </Sequence>
      <Sequence from={INTRO + HERO} durationInFrames={PRODUCTS}>
        <ProductCards />
      </Sequence>
      <Sequence from={INTRO + HERO + PRODUCTS} durationInFrames={STATS}>
        <StatsBar durationInFrames={STATS} />
      </Sequence>
      <Sequence from={INTRO + HERO + PRODUCTS + STATS} durationInFrames={OUTRO}>
        <CtaOutro durationInFrames={OUTRO} />
      </Sequence>
    </AbsoluteFill>
  );
};

export const TOTAL_DURATION = INTRO + HERO + PRODUCTS + STATS + OUTRO;
