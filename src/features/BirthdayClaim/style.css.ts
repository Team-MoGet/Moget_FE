import { flex } from "@/shared/styles/flex.css";
import theme from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: '100vw',
  minHeight: '100vh',
  background: 'linear-gradient( #AC8BF9 0%, #FFFFFF 100%)',
  paddingTop: '47px',
  paddingBottom: '34px',
  boxSizing: 'border-box',
});

export const content = style({
  ...flex.COLUMN_CENTER,
  padding: '0 24px',
  paddingTop: '32px',
  gap: '24px',
});

export const headline = style({
  ...flex.COLUMN_CENTER,
  gap: '8px',
  textAlign: 'center',
});

export const title = style({
  fontSize: '24px',
  fontWeight: '700',
  letterSpacing: '-0.24px',
  color: theme.grey700,
});

export const subtitle = style({
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '-0.16px',
  color: theme.grey600,
});

export const giftCard = style({
  width: '100%',
  maxWidth: '320px',
  backgroundColor: theme.white,
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  ...flex.COLUMN_CENTER,
  gap: '16px',
});

export const giftImage = style({
  width: '160px',
  height: 'auto',
  objectFit: 'contain',
});

export const giftLabel = style({
  fontSize: '13px',
  fontWeight: '600',
  letterSpacing: '-0.026px',
  color: theme.purpleNormal,
});

export const giftName = style({
  fontSize: '18px',
  fontWeight: '700',
  letterSpacing: '-0.18px',
  color: theme.grey700,
  textAlign: 'center',
});

export const giftDescription = style({
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '1.5',
  color: theme.grey600,
  textAlign: 'center',
});

export const footerLayout = style({
  ...flex.COLUMN_CENTER,
  gap: '8px',
  width: '100%',
  padding: '0 24px',
  marginTop: 'auto',
  paddingTop: '24px',
});

export const claimButtonLayout = style({
  ...flex.COLUMN_HORIZONTAL,
  gap: '8px',
  width: '100%',
});
