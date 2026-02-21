import { flex } from '@/shared/styles/flex.css';
import theme from '@/shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const buttonStyle = recipe({
  base: {
    ...flex.CENTER,
    width: '100%',
    height: '48px',
    position: 'relative',
    borderRadius: '12px',
    fontWeight: '600',
    padding: '10px 24px',
    fontSize: '16px',
  },

  variants: {
    color: {
      bold: {
        backgroundColor: theme.purpleNormal,
        color: theme.white,
        selectors: {
          '&:active:not(:disabled)': {
            backgroundColor: theme.purpleNormalHover,
          },
        }
      },
      light: {
        backgroundColor: theme.purpleLightHover,
        color: theme.purpleNormal,
        selectors: {
          '&:active:not(:disabled)': {
            backgroundColor: theme.purpleLightActive,
          },
        }
      }
    },
    disabled: {
      true: {
        backgroundColor: '#E0E0E0',
        color: '#9E9E9E',
        cursor: 'not-allowed',
        opacity: 0.7
      }
    }
  },

  defaultVariants: {
    color: 'bold',
    disabled: false
  }
});

export const bigSquare = style({
  width: '101.676px',
  height: '26.407px',
  transform: 'rotate(115.991deg)',
  position: 'absolute',
  left: '20.559px',
  top: '29.842px',
  opacity: '0.08',
  backgroundColor: theme.white,
})

export const smallSquare = style({
  width: '101.676px',
  height: '4.981px',
  transform: 'rotate(115.991deg)',
  position: 'absolute',
  left: '5.155px',
  opacity: '0.08',
  backgroundColor: theme.white,
})