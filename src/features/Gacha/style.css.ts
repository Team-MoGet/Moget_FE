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

export const InfoBtnGroup = style({
  ...flex.BETWEEN,
  width: '100%',
})

export const InfoBtn = style({
  ...flex.CENTER,
  padding: '4px 8px',
  gap: '2px',
  borderRadius: '99px',
  backgroundColor: theme.white,
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.06)'
})

export const InfoTextBtn = style({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  padding: '4px 6px',
  color: theme.grey600,
  fontSize: '15px',
  fontWeight: '400',
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

export const BonusFloat = style({
  position: 'absolute',
  top: '-8px',
  left: '6px',
  width: '120px',
  height: 'auto',
  zIndex: 2,
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

export const GuideOverlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.35)',
  zIndex: 10,
  ...flex.COLUMN_END,
})

export const GuideSheet = style({
  width: '100%',
  maxWidth: '520px',
  backgroundColor: theme.white,
  borderTopLeftRadius: '24px',
  borderTopRightRadius: '24px',
  padding: '12px 20px 20px',
  boxShadow: '0 -8px 24px rgba(0, 0, 0, 0.12)',
  maxHeight: '72vh',
  overflow: 'hidden',
})

export const GuideHandle = style({
  width: '56px',
  height: '6px',
  borderRadius: '999px',
  backgroundColor: theme.grey200,
  margin: '4px auto 12px',
})

export const GuideContent = style({
  overflowY: 'auto',
  paddingRight: '4px',
  maxHeight: '56vh',
})

export const GuideTitle = style({
  fontSize: '18px',
  fontWeight: '700',
  letterSpacing: '-0.2px',
  color: theme.grey700,
  marginBottom: '10px',
})

export const GuideSectionTitle = style({
  fontSize: '16px',
  fontWeight: '700',
  color: theme.grey700,
  marginTop: '16px',
  marginBottom: '8px',
})

export const GuideList = style({
  paddingLeft: '18px',
  display: 'grid',
  gap: '8px',
  color: theme.grey600,
  fontSize: '14px',
  lineHeight: '1.6',
  listStyle: 'disc',
})

export const GuideItem = style({
  listStylePosition: 'outside',
})

export const GuideButtonArea = style({
  marginTop: '16px',
})

export const HistorySheet = style({
  width: '100%',
  maxWidth: '520px',
  backgroundColor: theme.white,
  borderTopLeftRadius: '24px',
  borderTopRightRadius: '24px',
  padding: '8px 20px 24px',
  boxShadow: '0 -8px 24px rgba(0, 0, 0, 0.12)',
  maxHeight: '78vh',
  overflow: 'hidden',
})

export const HistoryHeader = style({
  ...flex.BETWEEN,
  padding: '6px 0 12px',
})

export const BackButton = style({
  width: '36px',
  height: '36px',
  borderRadius: '12px',
  backgroundColor: theme.grey50,
  ...flex.CENTER,
})

export const BackIcon = style({
  width: '10px',
  height: '10px',
  borderLeft: `2px solid ${theme.grey700}`,
  borderBottom: `2px solid ${theme.grey700}`,
  transform: 'rotate(45deg)',
  marginLeft: '4px',
})

export const HistoryTitle = style({
  fontSize: '18px',
  fontWeight: '700',
  color: theme.grey700,
})

export const HistoryHeaderSpacer = style({
  width: '36px',
  height: '36px',
})

export const HistoryList = style({
  display: 'grid',
  gap: '12px',
  paddingRight: '4px',
  overflowY: 'auto',
  maxHeight: '64vh',
})

export const HistoryItem = style({
  ...flex.VERTICAL,
  gap: '12px',
  padding: '12px',
  borderRadius: '16px',
  backgroundColor: theme.grey50,
})

export const HistoryImage = style({
  width: '64px',
  height: '64px',
  borderRadius: '12px',
  objectFit: 'cover',
})

export const HistoryText = style({
  ...flex.COLUMN_FLEX,
  gap: '4px',
})

export const HistoryName = style({
  fontSize: '16px',
  fontWeight: '700',
  color: theme.grey700,
})

export const HistoryBrand = style({
  fontSize: '13px',
  color: theme.grey500,
})
