export const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVES: 'actives'
}

export const FILTERS_BUTTONS = {
  [FILTERS.ALL]: {
    literal: 'All',
    href: `/?filter=${FILTERS.ALL}`
  },
  [FILTERS.COMPLETED]: {
    literal: 'Completed',
    href: `/?filter=${FILTERS.COMPLETED}`
  },
  [FILTERS.ACTIVES]: {
    literal: 'Actives',
    href: `/?filter=${FILTERS.ACTIVES}`
  }
}
