import * as icons from '.'
export const iconNames = Object.keys(icons) as Icon[]
export type Icon = keyof typeof icons
