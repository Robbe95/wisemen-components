import * as allIcons from './icons'

export const iconNames = Object.keys(allIcons)
  .map((key) => key.charAt(0).toLowerCase() + key.slice(1))
  .map((key) => key.replace('Icon', '')) as Icon[]

export const iconComponents = Object.keys(allIcons).reduce((acc, key) => {
  const iconName = key.charAt(0).toLowerCase() + key.slice(1)
  const iconComponent = allIcons[key as keyof typeof allIcons]
  return {
    ...acc,
    [iconName]: iconComponent,
  }
}, {} as Record<Icon, typeof allIcons[keyof typeof allIcons]>)

export type WithoutIconSuffix<TFullIconName extends string> = TFullIconName extends `${infer IconName}Icon` ? IconName : never;
export type Icon = WithoutIconSuffix<Uncapitalize<keyof typeof allIcons>>

export const icons = iconComponents
