import { flex } from "@/shared/styles/flex.css";
import theme from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient( #AC8BF9 0%, #FFFFFF 100%)',
  paddingTop: '47px',

})

export const InfoBtnLayout = style({
  ...flex.END,
  width: '100%',
  padding: '10px 24px',
})

export const InfoBtn = style({
  ...flex.CENTER,
  padding: '4px 8px',
  gap: '2px',
  borderRadius: '99px',
  backgroundColor: theme.white,
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.06)'
})

export const DDayBtnLayout = style({
  ...flex.HORIZONTAL,
  paddingTop: '49px',
  width: '100%',
})

export const DDayBtn = style({
  ...flex.CENTER,
  padding: '8px 16px',
  borderRadius: '99px',
  backgroundColor: theme.purpleNormal,
  fontSize: '14px',
  fontWeight: '700',
  letterSpacing: '-0.00175rem',
  color: theme.white,
})

export const GiftLayout = style({
  ...flex.COLUMN_CENTER,
  width: '100%',
  paddingTop: '32px',
})

export const GiftBox = style({
  ...flex.COLUMN_CENTER,
  width: '304px',
  padding: '24px',
  gap: '12px',
  borderRadius: '24px',
  border: `1px solid ${theme.grey200}`,
  backgroundColor: theme.white
})

export const CurrentGift = style({
  color: theme.grey700,
  fontSize: '20px',
  fontWeight: '700',
  letterSpacing: '-0.3px'
})

export const GiftImg = style({
  width: '140px',
  height: '140px',
  borderRadius: '16px',

})

export const GiftInfoLayout = style({
  ...flex.COLUMN_CENTER,
  gap: '2px',
})

export const BrandName = style({
  color: theme.grey500,
  fontSize: '14px',
  fontWeight: '400',
  letterSpacing: '-0.5',
})

export const GiftName = style({
  color: theme.grey700,
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '-0.3px',
})

export const noticeText = style({
  color: theme.grey400,
  fontSize: '12px',
  fontWeight: '400',
  marginTop: '12px',
})

export const GachaImgLayout = style({
  position: 'relative',
  width: '100%',
})

export const GachaImgBox = style({
  position: 'absolute',
  top: '29px',
  left: '50%',
  transform: 'translate(-50%, 0)',
  zIndex: '1',
})

export const GachaShadowBox = style({
  position: 'absolute',
  top: '344px',
  left: '85px',
})

export const FooterLayout = style({
  position: 'absolute',
  bottom: '34px',
  ...flex.COLUMN_CENTER,
  gap: '8px',
  width: '100%',
})

export const ticketLayout = style({
  ...flex.CENTER,
  gap: '4px',
})

export const ticketTextLayout = style({
  ...flex.CENTER,
  gap: '3px',
})

export const ticketRemainText = style({
  color: theme.grey500,
  fontSize: '13px',
  fontWeight: '500',
  letterSpacing: '-0.026px',
})

export const ticketRemainValue = style({
  color: theme.purpleNormal,
  fontSize: '13px',
  fontWeight: '600',
  letterSpacing: '-0.026px',
})

export const gachaPresentLayout = style({
  ...flex.COLUMN_HORIZONTAL,
  gap: '8px',
  width: '100%',
  padding: '0 24px',
})