export const palette = {
  black0: '#8B8B8B',
  black1: '#464646',
  black2: '#3C3C3C',
  black3: '#2E2E2E',
  black4: '#1F1F1F',
};

export const typography = {
  title: {
    weight: 600,
    size: 34,
  },
  subtitle: {
    weight: 'normal',
    size: 16,
  },
  tab: {
    weight: 600,
    size: 14,
  },
  body: {
    weight: 'normal',
    size: 14,
  },
};

const theme = {
  app: {
    background: null,
    color: '#fff',
    typography: typography.title,
  },
  label: {
    background: '#fff',
    color: palette.black4,
    typography: typography.tab,
  },
  tab: {
    background: null,
    color: '#fff',
    typography: typography.tab,
  },
};

export default theme;
