import { loadFont as loadBarlow } from '@remotion/google-fonts/Barlow';
import { loadFont as loadBarlowCondensed } from '@remotion/google-fonts/BarlowCondensed';

const { fontFamily: barlow } = loadBarlow('normal', { weights: ['400', '500', '600', '700'] });
const { fontFamily: barlowCondensed } = loadBarlowCondensed('normal', { weights: ['700'] });

export const FONT_BODY = barlow;
export const FONT_CONDENSED = barlowCondensed;

export const NAVY = '#0f1932';
export const ORANGE = '#F28C28';
