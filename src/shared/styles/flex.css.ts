import type { Properties } from 'csstype';

const defineStyle = <T extends Properties>(style: T) => style;

export const flex = {
  FLEX: defineStyle({
    display: 'flex',
  }),
  CENTER: defineStyle({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  VERTICAL: defineStyle({
    display: 'flex',
    alignItems: 'center',
  }),
  HORIZONTAL: defineStyle({
    display: 'flex',
    justifyContent: 'center',
  }),
  START: defineStyle({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }),
  BETWEEN: defineStyle({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  END: defineStyle({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }),
  COLUMN_FLEX: defineStyle({
    display: 'flex',
    flexDirection: 'column',
  }),
  COLUMN_CENTER: defineStyle({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  COLUMN_VERTICAL: defineStyle({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  COLUMN_HORIZONTAL: defineStyle({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
  COLUMN_START: defineStyle({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }),
  COLUMN_BETWEEN: defineStyle({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  COLUMN_END: defineStyle({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }),
};