import { colors } from './colors';

export const theme = {
  colors,
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 20,
    xl: 28,
  },
  radius: {
    sm: 10,
    md: 14,
    lg: 20,
    pill: 999,
  },
  typography: {
    title: 28,
    h1: 24,
    h2: 20,
    body: 16,
    caption: 13,
    tiny: 11,
  },
} as const;
